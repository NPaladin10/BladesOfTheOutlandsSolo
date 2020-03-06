const REGIONS = {
  "arcadia": {
    "terrainP": "1-4,5,6,7,8-9,10",
    "terrain": "Forest,Forested Hills,Riverside,Swamp,Plains,Forest Valley",
    "anchorP": "1-4,5-7,8-9,10,11-12",
    "encounterP": "1-5,6-8,9-10",
    "factionP": "1-3,4,5-10",
    "faction": "Archons,Guardians,Jade Empire",
    "localP": "1-8,9-10",
    "troubleP": "1-5,6-8,9-10",
    "trouble": "Immortals,Myr,Shadowsteel Syndicate"
  },
  "forestsunstar": {
    "terrainP": "1-4,5,6,7,8-9,10",
    "terrain": "Forest,Forested Hills,Riverside,Swamp,Plains,Forest Valley",
    "anchorP": "1-2,3-5,6-9,10-11,12",
    "encounterP": "1-4,5-6,7-10",
    "factionP": "1-2,3-6,7-10",
    "faction": "Guardians,Fae,Wardens",
    "localP": "1-3,4-10",
    "troubleP": "1-3,4-8,9-10",
    "trouble": "Immortals,Goblyns,Shadowsteel Syndicate"
  },
  "oceanus": {
    "terrainP": "1-4,5,6-7,8,9-10,10",
    "terrain": "Lakeshore,Island,Riverside,Forest,Swamp,Forest Valley",
    "anchorP": "1-3,4-6,7-8,9-10,11-12",
    "encounterP": "1-4,5-7,8-10",
    "factionP": "1-4,5,6,7-8,9-10",
    "faction": "Guardians,Fae,Archon,Jade Empire,Wardens",
    "localP": "1-6,7-10",
    "troubleP": "1-4,5-6,7-8,9-10",
    "trouble": "Aboleth,Immortals,Myr,Shadowsteel Syndicate"
  },
  "olympus": {
    "terrainP": "1-3,4-5,6-7,8,9,10",
    "terrain": "Mountains,Forest Valley,Hills,Forested Hills,Valley,Plateau",
    "anchorP": "1-2,3-4,5-7,8-9,10-12",
    "encounterP": "1-3,4-7,8-10",
    "factionP": "1-4,5-7,8,9-10",
    "faction": "Olympian,Fae,Jade Empire,Wardens",
    "localP": "1-4,6-10",
    "troubleP": "1-4,5,6,7-8,9-10",
    "trouble": "Immortals,Blackflame,Myr,Xaoti,Yuloth"
  }
}

const ANCHORTYPES = ['Town','Terrain','Site','Lair','Ruin']
const ENCOUNTERTYPES = ['Faction','Local','Trouble']
const LOCALS = ['People','Beasts']

const regionGen = {}
let stringArray = ["terrainP","terrain","anchorP","encounterP","factionP","faction","localP","troubleP","trouble"]
for(let x in REGIONS) {
  let _r = REGIONS[x]
  let R = regionGen[x] = Object.assign({},_r)
  
  stringArray.forEach(s => R[s] = _r[s].split(","))
  R.anchor = ['Town','Terrain','Site','Lair','Ruin']
  R.encounter = ['Faction','Local','Trouble']
  R.local = ['People','Beasts']

  //create one row with sub columns
  let cols = ["terrain","anchor","faction","local","trouble"]
  let allCols = cols.map((data,i) => {
    let h = ["Shard Terrains (d10)","Anchors (d12)","Faction","Local","Trouble"]
    let header = i<=1 ? h[i] : R.encounterP[i-2]+" "+h[i]
    let col = `<div><h5 align="center">`+header+`</h5></div>`
      //start column - loop through sub rows in column 
      col += R[data].map((d,j)=> {
          //start sub row 
          let subrow = "<span>"+[R[data+"P"][j],d].join("</span><span>")+"</span>"
          //end subrow 
          return `<div class="d-flex justify-content-between p-1">`+subrow+`</div>`
        }).join("")   
        
      //end row
      return `<div class="col table-gen">`+col+`</div>`
    })
  
  R.shardTable = `<div class="container"><div class="row">`+allCols.slice(0,2).join("")+`</div></div>`
  R.encTable = `<div class="container"><div class="row">`+allCols.slice(2).join("")+`</div></div>`
}

export {regionGen}