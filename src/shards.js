import {data as settingData} from "./shards-core.js"
import * as shardData from "./shards-data.js"

const SHARD = {
  "id" : "",
  "parent" : ""
}

const realm = `
<div class="m-1 p-1 border" align="left">
    <h2>{{realm.name}}</h2>
    <div v-html="realm.info"></div>
    <region v-for="R in realm.children" :region="R"></region>
</div>
`

const region = `
<div class="m-1 p-1" align="left">
    <h3 class="region">{{region.name}}</h3>
    <div v-html="region.info"></div>
    <div v-if="tables.shard">
        <h5 align="center">{{region.name}} Generators</h5>
        <div v-html="tables.shard" ></div>
        <h5 align="center">Encounters (2d10)</h5>
        <div v-html="tables.enc"></div>
    </div>
    <shard v-for="S in region.children" :shard="S"></shard>
</div>
`

const shard = `
<div class="m-1 p-1" align="left">
    <h4 class="bg-light rounded">{{shard.name}}</h4>
    <div class="font-sm p-1 font-weight-bold">
        <div>{{terrain}}, {{climate}}, {{rain}}</div>
        <div>{{anchor}}</div>
    </div>
    <div v-html="shard.info"></div>
    <div v-html="shard.special" v-if="shard.special"></div>
</div>
`

const setting = `
<div class="m-1 p-1" align="left">
    <realm v-for="R in realms" :realm="R"></realm>
</div>
`

const manager = (app) => {
  let DB = app.DB
  
  class Region {
    constructor (data) {
      Object.assign(this,data)
    }
    get shards () { return app.shardManager.byParent(this.id) }
    get trouble () { return app.troubleManager.byRegion(this.id) }
    get troubleShardIds () {return this.trouble.map(t=> t.where)}
    get squads () { return app.squadManager.byRegion(this.id) }
    get squadShardIds () {return this.squads.map(s=> s.where)}
  }

  class shardManager {
    constructor () {
      this._data = []

      //load
      this.load()
    }
    get classes () {
      return {Region}
    }
    get regions () { return app.realms.map(r => r.children ).flat() }
    get regionIds () { return this.regions.map(r => r.id) }
    get shards () { return this._data }
    byId (id) { return this._data.find(s=> s.id == id) }
    byParent (pid) { return this._data.filter(s=> s.parent == pid) }
    add(pid) {
      let id = chance.hash()
      this._data.push({
        id,
        parent : pid 
      })
      return id 
    }
    load() {
      let pid = localStorage.getItem("lastPlayer")
      //get items 
      DB.getItem(pid+".shards").then(data=> {
        if(data) app.shardManager._data = data.slice()
      })
    }
    save () {
      let pid = localStorage.getItem("lastPlayer")
      DB.setItem(pid+".shards",this.shards)
    }
  }
  app.shardManager = new shardManager()

  app.realms = settingData.map(R => {
    R.children = R.children.map(r=> {
      return new Region(r)
    }) 
    return R
  })

  /*******************************************************
  * UI
  *******************************************************/

  Vue.component("realm",{
    template: realm,
    props : ["realm"]
  })
  Vue.component("region",{
    template: region,
    props : ["region"],
    computed : {
        tables () {
            let rG = regionGen[this.region.id]
            return {
                shard : rG ? rG.shardTable : null,
                enc : rG ? rG.encTable : null
            }
        }
    }
  })
  Vue.component("shard",{
    template: shard,
    props : ["shard"],
    computed : {
        rct () { return this.shard.rct.split(".") }, 
        rain () { return shardData.CLIMATE.rain[this.rct[0]-1]  },
        climate () { return shardData.CLIMATE.climate[this.rct[1]-1]  },
        terrain () { return shardData.TERRAINS[this.rct[2]-1]  },
        anchor () { 
            let a = shardData.ANCHORS[this.shard.anchor-1].split(".")
            return a.length == 2 ? a.join(", ") : [a[0],a[1]].join(" - ") +", "+ a[2]
        },
    }
  })
  Vue.component("setting",{
    template: setting,
    data: function() {
      return {
        realms : [],
      }
    },
    mounted() {
      this.realms = settingData.slice()
    },
  })

}

export {manager}