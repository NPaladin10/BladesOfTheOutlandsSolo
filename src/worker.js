//D3
importScripts('../lib/d3.v5.min.js'); 
//localforage
importScripts('../lib/localforage.1.7.1.min.js');
//chance RNG 
importScripts('../lib/chance.min.js'); 
//names 
importScripts('nameGenerate.js'); 
//situations
importScripts('situations.js'); 
//Heroes
importScripts('heroes.js'); 

//Save db for Indexed DB - localforage
const DB = localforage.createInstance({ name: "BotO", storeName: "BladesOfTheOutlands" })

const TN = NameGen.nameBases.length
const PI = Math.PI

const GEN = {
}

const app = {
  DB
}
//situations
app.situations = new Situations(app)
//heroes
app.heroes = new Heroes(app)

onmessage = function(e) {
  let d = e.data
  let {f,data} = d

  if(f === "generate") {
    //now generate
    GEN[data.opts.what](d.data) 
  }
  //situation function 
  else if(f === "situationFunction"){
    app.situations.functions(d.what,data)
  }
  //load 
  else if(f === "load"){
    app[d.what].load(data).then(res => {
      //notify 
      postMessage({
        f,
        what : d.what,
        data : res
      })
    })
  }
  //save 
  else if(f === "save") {
    //update object 
    app[d.what].update(data)
  }
  //delete
  else if(f === "delete"){
    //get save objects
    let what = activeObjects[d.what]
    //find if it is there - and delete
    let i = what.findIndex(o => o.id == d.data)
    if(i > -1) what.splice(i,1);
    //now save all objects 
    let where = state.lastSave+"."+d.what    
    DB.setItem(where,what)
    //notify 
    postMessage({
      f : "saved",
      what : d.what,
      data : what
    });
  }
}

/*

const rndPointInCircle = (RNG,R) => {
  R = R || 1
  //radial location in greater area - between 0 and 1 
  let r = Math.sqrt(RNG.random()*R*RNG.random()*R)
  let theta = RNG.random()*2*PI
  let x = R * Math.cos(theta) 
  let y = R * Math.sin(theta)
  return {x,y}
}

const circleMap = (seed, n, opts) => {
  let RNG = new Chance(seed)
  
  let map = d3.range(n).map(i => {
    //area in percent
    let A = 5 + RNG.d100()/5
    //radius of area
    let r = Math.sqrt(A/100/PI)
    //radial location in greater area - between 0 and 1 
    let R = Math.sqrt(RNG.random()*RNG.random())
    let theta = RNG.random()*2*PI
    let x = R * Math.cos(theta) 
    let y = R * Math.sin(theta)

    return {r,x,y}
  })

  return map
}

*/