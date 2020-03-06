const TROUBLEHTML = `
<div class="d-flex justify-content-end mr-2">
  <div class="font-weight-bold mr-3">Nature: {{T.nature.join(', ')}}</div>
  <div class="font-weight-bold mr-3">Rank: {{T.r}}</div>
  <div v-for="n in filled" class="box box-md bg-danger"></div>
  <div v-for="n in empty" class="box box-md border"></div>
</div>
`
const SQUADHTML = `
<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">
      <span class="mr-2">{{squad.name}}</span>
      <div class="circle circle-md bg-success" v-for="n in squad.actions"></div>
      <div class="circle circle-md border border-success" v-for="n in 2-squad.actions"></div>
    </span>
    <button class="btn btn-info dropdown-toggle" type="button" data-toggle="dropdown" v-if="squad.actions>0">{{aid>-1 ? actions[aid] : 'Actions'}}</button>  
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#" v-for="(a,i) in actions" @click="aid=i">{{a}}</a>
    </div>
  </div>
  <select class="custom-select" v-if="actions[aid]=='Move'" v-model="to">
    <option v-for="m in moveTo" v-if="m[1]!=squad.where" :value="m">{{m[0]}} Act - {{m[1]}}</option>
  </select>
  <select class="custom-select" v-if="actions[aid]=='Gather Resources'">
    <option v-for="s in resourceSkills" :value="s">{{s[1]}} {{s[0]}}d</option>
  </select>
  <div class="input-group-append" v-if="aid>-1">
    <button class="btn btn-success" type="button" @click="act()">Act</button>  
  </div>
</div>
`

const TROUBLEMAPHTML = `
<div>
  <div class="m-1 p-1 border d-flex justify-content-around flex-wrap">
    <div align="center">
      <h4>Doom Clock</h4>
      <div class="d-flex justify-content-center">
        <div v-for="n in doom.filled" class="box box-md bg-danger"></div>
        <div v-for="n in doom.empty" class="box box-md border"></div>
      </div>
    </div>
    <div align="center">
      <h4>Warning Clock</h4>
      <div class="d-flex justify-content-center">
        <div v-for="n in doom.warning" class="box box-md bg-danger"></div>
        <div v-for="n in doom.wEmpty" class="box box-md border"></div>
      </div>
    </div>
  </div> 
  <div class="d-flex justify-content-between px-2">
    <h5 class="align-self-center m-0">Clues {{clues}}</h5>
    <button class="btn btn-success" type="button" @click="next()">Next Turn</button>
  </div>
  <div class="m-1 p-1 border" align="left">
      <h2>{{realm.name}}</h2>
      <div v-for="(r,i) in realm.children">
        <h3 class="region">{{r.name}}</h3>
        <div v-if="r.shards.length>0">
          <h5>Shards</h5>
          <div class="d-flex">
            <div v-for="s in r.shards" class="mx-2">{{s.id}}</div>
          </div>
        </div>
        <div v-if="squads[i].length>0">
          <h5>Squads</h5>
          <trouble-squad v-for="s in squads[i]" :squad="s" :r="r" :R="realm"></trouble-squad>
        </div>
        <div v-if="r.trouble.length>0">
          <h5>Trouble</h5>
          <div v-for="T in r.trouble">{{T}}</div>
        </div>
      </div>
  </div>
</div>
`

const manager = (app) => {
  let DB = app.DB
  let shards = app.shardManager 
  let regions = app.realms.reduce((all,R)=>{
    all.push(...R.children)
    return all 
  },[])
  let outlands = regions.filter(r=>r.parent == "outlands") 

  const TROUBLE = {
    where: "",
    r: 1,
    clock : [6,0],
    nature : [],
    extras : []
  }

  const TROUBLECOMPLICATIONS = [
  "This trouble has 1d bonus for the next challenge",
  "Suffer +1 harm for the next roll vs this trouble",
  "Remove one progress mark from this clock",
  "Mark 1 progress on the Warning Clock"
  ]

  const NATURES = {
    "Create":[], 
    "Convince":[],
    "Delve":[],
    "Fight":[],
    "Prowl":[],
    "Research":[]
  }

  class troubleManager {
    constructor () {
      this._data = []
      this._doom = [0,0]
      this._clues = 0

      //load
      this.load()
    }
    get trouble () { return this._data }
    get shardIds () { return this._data.map(t => t.where) }
    byRegion (rid) { return this.trouble.filter(t => shards.byId(t.where).parent == rid ) }
    //CLUES 
    get clues () { return this._clues }
    //DOOM Clock
    get doomClock () { return this._doom[0] } 
    tickDoom () { this._doom[0]++ }
    get doomStep () { return Math.floor(this._doom[0]/4) }
    //Warning Clock
    get warningClock () { return this._doom[1] }
    tickWarning () { 
      let w = this._doom[1]++ 
      //tick doom 
      if(w>3){
        this._doom[1] = 0
        this.tickDoom()
      }
    }
    //run events
    runEvents () {
      let n = 1 + this.doomStep
      let R = app.roll.pool(n)
      //get what acts to perform
      let acts = ["o","t.o","t.t","t.t.w"][R.res].split(".")
      //run actions 
      acts.forEach(what => {
        if(what == "o") makeOpportunity()
        else if(what == "t") makeTrouble()
        else if(what == "w") {
          this.tickWarning()
          this.tickWarning()
        }
      })
    }   
    //Run AI 
    runAI () {
      this.trouble.forEach((T,i) => {
        //roll rank + doom 
        let n = T.r + this.doomStep
        let R = app.roll.pool(n)
        //work based on results 
        if(R.res == 1) this.addComplication(i)
        else if (R.res == 2) {
          //even 
          if(R.roll[0]%2 == 0 && T.clock[0]<12) T.clock[0]++
          else if (R.roll[0]%2 == 1 && T.rank<3) T.rank++
          else this.addComplication(i)
        }
        else if (R.res > 2) {
          if(T.r>1) this.splitTrouble(i)
          else {
            if(T.rank<3) T.rank++
            else T.clock[0]++
          }
        }
      })
    }
    addComplication(i){
      //# of complications 
      let nc = TROUBLECOMPLICATIONS.length
      let ci = chance.rpg("1d"+nc)[0]-1
      //add complication 
      this._data[i].extras.push("c."+ci)
    }
    splitTrouble (i) {
      let T = this.trouble[i]
      //new trouble 
      let nT = JSON.parse(JSON.stringify(TROUBLE))
      //reduce rank
      nT.r = --T.r 
      //new clock 
      let nc = Math.floor(T.clock[0]/2)
      nT.clock[nc,0]
      //old clock
      T.clock[0] -= nc 
    }
    //Make Items
    makeTrouble() {
      let T = JSON.parse(JSON.stringify(TROUBLE)) 
      //add nature 
      T.nature = [chance.pickone(Object.keys(NATURES))]
      //where
      let region = chance.pickone(outlands).id
      //if more than 10 shards, pick one of them 
      let rS = shards.byParent(region), sid;
      if(rS.length<10) sid = shards.add(region)
      else{
        if(chance.bool()) sid = shards.add(region)
        else sid = chance.pickone(rS).id 
      }
      //set where 
      T.where = sid
      //push 
      this._data.push(T)
    }
    makeOpportunity () {} 
    load() {
      let pid = localStorage.getItem("lastPlayer")
      //get items 
      DB.getItem(pid+".trouble").then(data=> {
        if(data) app.troubleManager._data = data.slice()
        else {
          for(let i=0;i<6;i++) this.makeTrouble()
        }
      })
    }
    save () {
      let pid = localStorage.getItem("lastPlayer")
      DB.setItem(pid+".trouble",this.trouble)
    }
  }
  app.troubleManager = new troubleManager()
  //quick access 
  let TM = app.troubleManager
  let trouble = TM.trouble

  //UI 


  //creates the VUE js instance
  Vue.component("trouble-map",{
    template: TROUBLEMAPHTML,
    data : function() {
      return {
        allSquads : [],
        realm : app.realms.find(r => r.id=="outlands")
      }
    },
    mounted() {
      app.UI.trouble = this 
      this.allSquads = app.squadManager.squads.slice()
    },
    computed : {
      clues () { return app.troubleManager.clues },
      doom () {
        let tm = app.troubleManager

        return {
          filled : tm.doomClock,
          empty : 12-tm.doomClock,
          warning : tm.warningClock,
          wEmpty : 4-tm.warningClock
        }
      },
      squads () {
        return this.realm.children.map(r => {
          let sids = r.squads.map(s => s._data._id)
          return this.allSquads.filter(s => sids.includes(s._data._id))
        })
      }
    },
    methods : {
      next () {

      }
    }
  })

  //creates the VUE js instance
  Vue.component("trouble",{
    template: TROUBLEHTML,
    props : ["T"],
    computed : {
      filled () { return this.T.clock[1] },
      empty () { return this.T.clock[0]-this.filled }
    }
  })

  //creates the VUE js instance
  Vue.component("trouble-squad",{
    template: SQUADHTML,
    props : ["squad","r","R"],
    data : function() {
      return {
        aid : -1,
        to : []
      }
    },
    computed : {
      actions () { 
        let s = this.squad, na = s.actions, actions = [];
        if(na == 0) return actions

        actions.push("Move","Gather Resources","Heal","Establish Extra")
        if(TM.clues>0) actions.push("Search for a Stronghold")
        if(app.troubleManager.shardIds.includes(s.where)) actions.push("Challenge a Trouble")
        
        return actions
      },
      moveTo () {
        if(this.squad.actions>1){
          return this.R.children.reduce((all,r)=>{
            let cost = r.id == this.r.id ? 1 : 2
            r.shards.forEach(s => all.push([cost,s.id]))
            return all 
          },[])
        }
        else return this.r.shards.map(s => [1,s.id])
      },
      resourceSkills () {
        let sT = this.squad.skillTiers
        return this.squad.skillNames.map((s,i) => [sT[i],s])
      }
    },
    methods : {
      act () {
        let what = this.actions[this.aid], s = this.squad

        if(what=="Move") {
          s.where = this.to[1]
          s.actions -= this.to[0]
        }

        if(s.actions == 0) this.aid=-1

        app.UI.trouble.allSquads = app.squadManager.squads.slice()
      }
    }
  })
}

export {manager}