import {UI as aboutUI} from "./about.js"

const circlePack = (sectors)=>{
  //get data 
  let h = d3.hierarchy({
    //once for each plane 
    "children": sectors.slice()
  })
  h.sum(d=> d.type==4 ? 0.3 : 1)

  let pack = d3.pack().size([800,800])(h)
  //first is always full circle 
  return h.descendants().slice(1).filter(d => d.data.type != 4)
}

const drawCircleMap = (app)=>{
  const fC = 2 * Math.PI
  let iW = window.innerWidth
  let iH = window.innerHeight
  let D = iH < iW ? iH : iW
  //set size
  let svg = d3.select("#map svg").attr("height", iH).attr("width", iW)
  svg.html("")
  //all sectors 
  let gS = svg.append("g").attr("class", "sectors")
  //joins 
  let gJ = svg.append("g").attr("class", "joins")
  //pack everything
  let pack = circlePack(app.zones.sectors)
  //now display circle pack 
  gS.selectAll("circle").data(pack).enter().append("circle")
    .attr("id",d=> d.data.svgId )
    .attr("cx", d=>d.x).attr("cy", d=>d.y).attr("r", d=> d.data.svgR || d.r)
    .attr("class", (d,j)=> d.data.svgClass )
    .attr("fill", (d,j)=> d.data.svgFill )
    .attr("stroke", (d,j)=> d.data.svgStroke )
    .on("click",d => {
      //update UI 
      if(d.data.type == 3) {
        app.UI.main.party = {}
        app.UI.main.zid = d.data.id
        app.UI.main.show = 1
        app.UI.main.aid = -1
      }
    })

  resize()
  
  const makeJoins = ()=>{
    gJ.html("")
    let joins = app.zones.joins.map(j=>{
      let jids = j.split(".")
      let j0 = d3.select("#z-"+jids[0])
      let j1 = d3.select("#z-"+jids[1])
      return {
          x1: j0.attr("cx"),
          y1: j0.attr("cy"),
          x2: j1.attr("cx"),
          y2: j1.attr("cy"),
          ids: jids
        }
      }
      )

    gJ.selectAll("line").data(joins).enter().append("line").attr("x1", d=>d.x1).attr("x2", d=>d.x2).attr("y1", d=>d.y1).attr("y2", d=>d.y2)
  }

  makeJoins()

  /* Removed Drag functionality
  .on("drag", function(d,j) {
      //new position
      d.setPosition(d3.event.x,d3.event.y,false)
      //update drawing 
      displaySector(S)
      makeJoins()
    }).on("end", function(d,j) {
      d3.select(this).attr("stroke", [d.color,d.color,"none"][d.type-1])
      if(d.type == 3) {
        //see if it is within a region 
        let R = app.regions.find(z => {
          let dx = z.x - d.x
          let dy = z.y - d.y
          return dx * dx + dy * dy < z.r * z.r
        })
        if(R) {
          //set parent - also sets child 
          //d.parent = R.id 
        }
      }
      //update UI 
      if(d.type == 3) {
        app.UI.main.zid = d.id
        app.UI.main.show = 1
      }
    }))
  */
}

const resize = () => {
  //set svg to window 
    let iW = window.innerWidth
    let iH = window.innerHeight
    //set size
    let svg = d3.select("#map svg").attr("height", iH).attr("width", iW)
    //get bbox 
    let gS = d3.select("g.sectors").node().getBBox()
    let w = gS.width < 800 ? 800 : gS.width
    let h = gS.height < 600 ? 600 : gS.height
    let vB = [gS.x - 25, gS.y - 25, w + 25, h + 25]
    //viewBox="0 0 100 100"
    d3.select("svg").attr("viewBox", vB.join(" "))
}

//check for resize
  //window.addEventListener("resize", resize )

/* 
UI 
*/
const UI = (app)=>{
  aboutUI(app)

  //creates the VUE js instance
  app.UI.main = new Vue({
    el: '#ui-main',
    data: {
      show: "about",
      now: 0,
      //zones
      zid: "",
      joinId: -1,
      mid : "",
      //Situations
      situationId : ""
    },
    mounted() {
      this.now = Date.now() / 1000
      setInterval(()=>this.now = Date.now() / 1000, 500)
    },
    computed: {
      day() {
        return app.day
      },
      //Zones 
      zone() {
        return this.zid == "" ? {} : app.zones.byId(this.zid)
      },
      sectorRegions () {
        return this.zone.sector.children.filter(z => z.type == 2)
      },
    },
    methods: {
      loadSituation(id) {
        app.situations.load({id})
        //now load 
        this.situationId = "situation-"+id
        this.show = 3
      },
      drawCircleMap () { 
        //drawCircleMap(app) 
      },
      reset() {
        app.reset()
      },
      //ZONES
      addZone(parent,type) {
        parent.addChild({type})        
        //draw 
        drawCircleMap(app)
      },
      changeSize(val) {
        //save
        app.volumes[this.vid].r += 10 * val
        //update
        drawCircleMap(app)
      },
      makeJoin() {
        let Z = this.zone
        //lowest id is always first
        let jid = Z.id < this.joinId ? Z.id+"."+this.joinId : this.joinId+"."+Z.id
        if(!app.joins.includes(jid)) app.joins.push(jid)
        //update
        drawCircleMap(app)
      },
      removeJoin(jid) {
        let i = app.joins.indexOf(jid)
        app.joins.splice(i,1)
        //update
        drawCircleMap(app)
      },
    }
  })

  Vue.component("log-list",{
    props : ["all","i"],
    template: `
      <div class="input-group">
        <input class="form-control" type="text" placeholder="Log text" v-model="all[i]">
        <div class="input-group-append">
          <button class="btn btn-warning" type="button" @click="all.splice(i,1)">&#10008;</button>
        </div>
      </div>
      `
  })

  Vue.component("progress-track",{
    props : ["all","i","log"],
    template: `
      <div>
        <div class="btn-group btn-group-sm w-100" role="group">
          <div class="btn-group btn-group-sm w-100" role="group">
            <button type="button" class="btn btn-secondary dropdown-toggle w-100" data-toggle="dropdown">{{rankName[p.r]}}</button>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#" v-for="(n,j) in rankName" @click="p.r=j">{{n}}</a>
            </div>
          </div>
          <button type="button" class="btn btn-warning" @click="all.splice(i,1)">&#10008;</button>
        </div>
        <input class="form-control" type="text" placeholder="About" v-model="p.t">
        <div class="d-flex">
          <button type="button" class="btn btn-sm btn-secondary" @click="p.s--" :disabled="val==0">-</button>
          <div class="w-100">
            <div class="progress" style="height:32px;">
              <div class="progress-bar bg-danger" role="progressbar" :style="w[0]"><span v-if="val <= 30">{{val}}%</span></div>
              <div class="progress-bar bg-warning" role="progressbar" :style="w[1]"><span v-if="val > 30 && val < 70">{{val}}%</span></div>
              <div class="progress-bar bg-success" role="progressbar" :style="w[2]"><span v-if="val >= 70">{{val}}%</span></div>
            </div>
          </div>
          <button type="button" class="btn btn-sm btn-secondary" @click="p.s++" :disabled="val>=100">+</button>
          <button type="button" class="btn btn-sm btn-success" @click="complete()">Complete</button>
        </div>
      </div>
    `,
    data : function() {
      return {
        rankName : ["Troublesome", "Dangerous", "Formidable", "Extreme", "Epic"]
      }
    },
    computed : {
      p () { 
        return this.all[this.i] 
      },
      val () {
        let rv = [30,20,10,5,2.5]
        return rv[this.p.r]*this.p.s 
      },
      w () {
        let wv = [0,0,0]
        if(this.val < 30) {
          wv[0] = this.val
        } 
        else if (this.val < 70) {
          wv = [30,this.val-30,0]
        }
        else {
          wv = [30,40,this.val-70]
        }
        return wv.map(v => 'width: '+v+'%')
      }
    },
    methods : {
      complete () {
        let b = Math.floor(this.val / 10)
        let r = chance.rpg("2d10")
        let nc = r.reduce((sum,v)=> sum = v<b ? sum+1 : sum,0)
        let res = ["Miss","Weak Hit","Strong Hit"][nc]
        if(this.log){
          this.log.push(this.p.t+"; "+r+": "+res)
        }
      }
    }
  })

}

export {UI}
