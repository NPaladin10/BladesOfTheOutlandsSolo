const SKILLS = [
  ['Athletics',`Your character’s general level of physical fitness, whether through training, natural gifts, or genre-specific means (like magic or genetic alteration).`],
  ['Burglary',`Your character’s aptitude for stealing things and getting into places that are off-limits.`],
  ['Craft',`This covers artistic ability, working with basic machinery and physical tools.`],
  ['Deceive',`Deceive is the skill about lying to and misdirecting people.`],
  ['Empathy',`Empathy involves knowing and being able to spot changes in a person’s mood or bearing.`],
  ['Fight',`This skill covers all forms of close-quarters combat (in other words, within the same zone), both unarmed and using weapons.`],
  ['Influence',`Your character's ability to get others to agree with their point of view.`],
  ['Investigate',`This skill revolves around concentrated effort and in-depth scrutiny. Your character uses this to find things out.`],
  ['Lore',`This covers knowledge of history, people, places and things.`],
  ['Notice',`This representing a character’s overall perception, ability to pick out details at a glance, and other powers of observation.`],
  ['Physique',`This represents the character’s natural physical aptitudes, such as raw strength and endurance.`],
  ['Pilot',`This covers operating vehicles, mecha, spaceships, etc.`],
  ['Rapport',`This represents how well your character gets along with others.`],
  ['Science',`This covers knowledge of scientific study like chemistry, physics, medicine, biology, etc.`],
  ['Shoot',`The skill of using ranged weaponry, either in a conflict or on targets that don’t actively resist your attempts to shoot them.`],
  ['Stealth',`This skill allows your character to avoid detection, both when hiding in place and trying to move about unseen.`],
  ['Survival',`The knowledge and ability to stay alive in all maner of hostile environments.`],
  ['Tactics',`The ability to plan and execute a strategy - for games and battle.`],
  ['Tech',`Your characters knowledge of and ability to craft and manipulate technology. This covers coding as well as complex/high-tech systems.`],
  ['Will',`Your character’s general level of mental fortitude, the same way that Physique represents your physical fortitude.`],
]

const TAGS = {
  "nature" : ["Create", "Convince", "Delve", "Fight", "Prowl", "Research"],
  "element" : ["Air", "Earth", "Fire", "Water", "Life", "Death"],
  "magic": ["Divination", "Abjuration", "Evocation", "Illusion", "Necromancy", "Transmutation"]
}
const ALLTAGS = Object.entries(TAGS).reduce((all,tag)=>{
  all.push(...tag[1])
  return all
},[])

const SKILLRANKMAX = [2,2,3,3,4,4,5,5,6,6]

const SQUAD = {
  "_id" : "",
  "name" : "New Squad",
  "where" : "",
  "level" : 0,
  "xp" : 0,
  "skills" : [-1,-1,-1,-1],
  "specialists" : [],
  "heroes" : [],
  "gear" : [],
  "harm" : 0,
  "actions" : 2,
  "text": ""
}

const EXTRA = {
  "name" : "",
  "type" : 0,
  "benefit" : [],
  "harm" : 0
}
const EXTRATYPES = ["Hero","Gear"]

const BENEFIT = [0,"",""]
const BENEFITTYPES = ["+1d with skill","+1d vs tag","+2d with skill vs tag","+2d success vs a tag","+1 defense vs a tag"
  ,"-1d difficulty with a skill","-1d difficulty vs a tag","-2d difficulty with a skill vs a tag"] 
const BENEFITEXTRA = ["skill","tag","skilltag","tag","tag","skill","tag","skilltag"]

const SQUADHTML = `
<div class="p-1 m-1" >
  <div class="input-group mb-2">
    <select class="custom-select" v-model="id">
      <option v-for="(s,i) in squads" :value="i">{{s.name}}</option>
    </select>
  </div>
  <div v-if="squad" v-cloak>
    <div class="input-group">
      <input class="form-control" type="text" placeholder="Name" v-model="squad.name">
      <div class="input-group-append">
        <span class="input-group-text">Level {{squad.level}} / {{squad.xp}} XP</span>
      </div>
    </div>
    <textarea class="form-control" placeholder="About the squad" v-model="squad.text"></textarea>
    <div class="container my-2">
      <div class="row">
        <div class="col-1">Rank</div>
        <div class="col">Skills</div>
      </div>
      <div v-for="(t,i) in squad.skillsByTier" class="row">
        <div class="col-1">{{t[0]}}</div> 
        <div class="col">
          <div class="btn-group btn-group-sm mx-1 btn-skill" role="group" v-for="(sid,j) in t[1]">
            <button type="button" class="btn btn-light w-100">{{skills[sid][0]}}</button>
            <button type="button" class="btn btn-secondary" @click="removeSkill(sid)">&#10007;</button>
          </div>
        </div>
        <div class="col-3" v-if="t[1].length<2">
          <button type="button" class="btn btn-success" v-if="nSkill[0]!=t[0]" @click="nSkill=[t[0],-1]">Add</button>          
          <div class="input-group" v-if="nSkill[0]==t[0]">
            <select class="custom-select" v-model="nSkill[1]">
              <option v-for="sid in availableSkills" :value="sid">{{skills[sid][0]}}</option>
            </select>
            <div class="input-group-append">
              <button type="button" class="btn btn-success" @click="addSkill(t[0],nSkill[1])">Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`

const BENEFITSHORT = `
<span>
  {{types[b[0]]}} ({{extras.join(', ')}})
</span>
`

const BENEFITHTML = `
<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">Benefit</span>
  </div>
  <select class="custom-select" v-model="b[0]">
    <option v-for="(t,i) in types" :value="i" v-if="onlyTypes.includes(i)">{{t}}</option>
  </select>
  <select class="custom-select" v-model="b[1]" v-if="extras.length>0">
    <option v-for="(s,i) in extras[0]" :value="s">{{s}}</option>
  </select>
  <select class="custom-select" v-model="b[2]" v-if="extras.length>1">
    <option v-for="(s,i) in extras[1]" :value="s">{{s}}</option>
  </select>
</div>
`

const CREATEEXTRAHTML =`
<div class="container">
  <div class="input-group mb-2">
    <div class="input-group-prepend">
      <span class="input-group-text">{{typeName}}</span>
    </div>
    <select class="custom-select" v-model="id">
      <option v-for="(e,i) in all" :value="i" v-if="e.type == type">{{e.name}}</option>
    </select>
    <div class="input-group-append">
      <button type="button" class="btn btn-success" @click="add()">New</button>
    </div>
  </div>
  <div v-if="!newExtra && extra">
    <p>{{extra.name}}: <benefit-short :b="extra.benefit"></benefit-short></p>
  </div>
  <div v-if="newExtra">
    <div class="input-group">
      <input class="form-control" type="text" placeholder="Name" v-model="newExtra.name">
      <div class="input-group-append">
        <button type="button" class="btn btn-success" @click="save()" v-if="newExtra.name!=''">Save</button>
        <button type="button" class="btn btn-secondary" @click="newExtra=null">&#10007;</button>
        <button type="button" class="btn btn-success ml-2" @click="addBenefit()" v-if="nBenefit>0">+Benefit</button>
      </div>
    </div>
    <div>
      <div class="row" v-for="(b,i) in newExtra.benefit">
        <div class="col p-0">
          <benefit :b="newExtra.benefit[i]" :onlyTypes="benefitTypes"></benefit>
        </div>
        <div class="col-1" v-if="i>0">
          <button type="button" class="btn btn-secondary" @click="newExtra.benefit.splice(i,1)">&#10007;</button>
        </div>
      </div>
    </div>
  </div>
</div>
`

const EXTRASHTML = `
<div class="p-1 m-1">
  <div class="btn-group" role="group">
    <button type="button" class="btn btn-info" @click="type=0">Hero</button>
    <button type="button" class="btn btn-info" @click="type=1">Gear</button>
  </div>
  <create-extra :type="type" v-if="type>-1"></create-extra>
</div>
`

const manager = (app) => {
  let shards = app.shardManager
  let outlands = shards.regions.filter(r=>r.parent == "outlands")

  class Squad {
    constructor (data) {
      this._data = data 
    }
    //core info
    get name () { return this._data.name }
    set name (name) { this._data.name = name }
    get text () { return this._data.text }
    set text (text) { this._data.name = text }
    //XP and level 
    get xp () { return this._data.xp }
    giveXP (xp) { this._data.xp+= xp }
    get level () { return Math.floor(this._data.xp/100)+1 }
    //Location - shard 
    get where () { return this._data.where }
    set where (where) { this._data.where = where }
    //actions 
    get actions () { return this._data.actions }
    set actions (actions) { this._data.actions = actions }
    //Skills 
    get skills () { return this._data.skills } 
    set skills (skills) { this._data.skills = skills }
    get skillNames () { return this.skills.map(sid => SKILLS[sid][0]) }
    get nskills () { return SKILLRANKMAX[this.level]*2 }
    get tMax () { return SKILLRANKMAX[this.level] }
    get skillTiers () { return this.skills.map((s,i)=> this.tMax - Math.floor(i/2)) }
    get skillsByTier () {
      let R = SKILLRANKMAX[this.level], sbt = [];
      for(let i = R; i > 0; i--){
        //get skills that are not -1
        let skills = this.skills.slice((R-i)*2,(R-i)*2+2).reduce((all,s)=>{
          if(s!=-1) all.push(s)
          return all 
        },[])
        sbt.push([i,skills])
      }
      return sbt
    }
  }

  class squadManager {
    constructor () {
      this._data = []
      this._extras = []

      //load
      this.load()
    }
    get skills () { return SKILLS }
    get squads () { return this._data.map(s => new Squad(s) )}
    get extras () { return this._extras }
    get shardIds () { return this._data.map(d => d.where) }
    byRegion (rid) { 
      return this.squads.filter(s => {
        if(s.where == rid) return true
        else if (!shards.regionIds.includes(s.where)) return shards.byId(s.where).parent == rid 
      })
    }
    newSquad (sid) {
      let i = this._data.length
      let S = JSON.parse(JSON.stringify(SQUAD))
      S._id = chance.hash()
      //place them 
      if(!sid) {
        let rid = chance.pickone(outlands).id
        sid = shards.add(rid)
      }
      S.where = sid 

      this._data.push(S)
      this.save()

      return this.squads[i]
    }
    giveXP (id,xp) {

    }
    load() {
      let pid = localStorage.getItem("lastPlayer")
      let DB = app.DB
      //get items 
      DB.getItem(pid+".squads").then(data=> {
        if(data) app.squadManager._data = data.slice()
        //create first new squad 
        else {
          this.newSquad()
          this.newSquad()
        }
      })
      //get items 
      DB.getItem(pid+".extras").then(data=> {
        if(data) app.squadManager._extras = data.slice()
      })
    }
    save () {
      let pid = localStorage.getItem("lastPlayer")
      let DB = app.DB

      DB.setItem(pid+".squads",this._data)
      DB.setItem(pid+".extras",this.extras)
    }
  }
  app.squadManager = new squadManager()

  //creates the VUE js instance
  Vue.component("squads",{
    template: SQUADHTML,
    data : function() {
      return {
        squads : [],
        id : -1,
        skills : SKILLS,
        nSkill: [-1,-1]
      }
    },
    mounted() {
      this.squads = app.squadManager.squads
      app.UI.squad = this 
    },
    computed : {
      squad () { return this.id > -1 ? this.squads[this.id] : null },
      availableSkills () {
        let used = this.squad.skills
        //check which skills are used 
        return SKILLS.reduce((all,s,i)=>{
          if(!used.includes(i)) all.push(i)
          return all 
        },[])
      },
    },
    methods : {
      addSkill(ti,sid) {
        let idx = (this.squad.tMax-ti)*2, skills = this.squad.skills;
        if(skills[idx] == -1) skills[idx] = sid
        else skills[idx+1] = sid  
        //update
        this.squad.skills = skills.slice()
      },
      removeSkill(sid) {
        let skills = this.squad.skills, idx = skills.indexOf(sid); 
        //remove
        skills[idx] = -1
        this.squad.skills = skills.slice()
      }
    }
  }) 

  //creates the VUE js instance
  Vue.component("squadextras",{
    template: EXTRASHTML,
    data : function() {
      return {
        type : -1
      }
    },
    mounted() {

    },
  }) 

  //creates the VUE js instance
  Vue.component("create-extra",{
    template: CREATEEXTRAHTML,
    props : ["type"],
    data : function() {
      return {
        all : [],
        id: -1,
        newExtra : null,
      }
    },
    mounted() {
      this.all = app.squadManager.extras.slice()
    },
    computed : {
      extra () { return this.id > -1 ? this.all[this.id] : null },
      benefits () { return app.squadManager.benefits },
      nBenefit () {
        let type = this.newExtra.type
        return [6,5][type]-this.newExtra.benefit.length
      },
      typeName () { return EXTRATYPES[this.type] }, 
      benefitTypes () { return [[0,1,2,3,4],[3,4,5,6,7]][this.type] }
    },
    methods : {
      addBenefit () {
        this.newExtra.benefit.push(JSON.parse(JSON.stringify(BENEFIT))) 
      },
      save() {
        app.squadManager._specialists.push(Object.assign({},this.newExtra))
        this.newExtra = null
        this.all = app.squadManager.specialists.slice()
      },
      add () {
        let e = JSON.parse(JSON.stringify(EXTRA))
        e.type = this.type
        e.benefit.push(JSON.parse(JSON.stringify(BENEFIT)))  
        this.newExtra = e 
      }
    }
  }) 

  //creates the VUE js instance
  Vue.component("benefit-short",{
    template: BENEFITSHORT,
    props: ["b"],
    computed : {
      types () { return BENEFITTYPES },
      extras () {
        return this.b.slice(1).reduce((e,name)=>{
          if(name!="") e.push(name)
          return e
        },[])
      }
    }
  })

  //creates the VUE js instance
  Vue.component("benefit",{
    template: BENEFITHTML,
    props : ["b","onlyTypes"],
    computed : {
      types () { return BENEFITTYPES },
      extras () {
        let type = this.b[0]
        let e = BENEFITEXTRA[type]

        if(e == "skill") return [SKILLS.map(s=>s[0])]
        if(e == "tag") return [ALLTAGS]
        if(e == "skilltag") return [SKILLS.map(s=>s[0]),ALLTAGS]
        if(e == "nature") return [TAGS.nature]

        return []
      }
    }
  })
}

export {manager}