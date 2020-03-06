/*
  Descriptors
*/
const REGIONDESCRIPTORS = {
  terrain: ['Bay', 'Bluffs', 'Bog', 'Cliffs', 'Desert', 'Downs', 'Dunes', 'Expanse', 'Fells', 'Fen', 'Flats', 'Foothills', 'Forest', 'Groves', 'Heath', 'Heights', 'Hills', 'Hollows', 'Jungle', 'Lake', 'Lowland', 'March', 'Marsh', 'Meadows', 'Moor', 'Morass', 'Mounds', 'Mountains', 'Peaks', 'Plains', 'Prairie', 'Quagmire', 'Range', 'Reach', 'Sands', 'Savanna', 'Scarps', 'Sea', 'Slough', 'Sound', 'Steppe', 'Swamo', 'Sweep', 'Teethe', 'Thicket', 'Upland', 'Wall', 'Wate', 'Wastelands', 'Woods'],
  adjective: ['Ageless', 'Ashen', 'Black', 'Blessed', 'Blighted', 'Blue', 'Broken', 'Burning', 'Cold', 'Cursed', 'Dark', 'Dead', 'Deadly', 'Deep', 'Desolate', 'Diamond', 'Dim', 'Dismal', 'Dun', 'Eerie', 'Endless', 'Fallen', 'Far', 'Fell', 'Flaming', 'Forgotten', 'Forsaken', 'Frozen', 'Glittering', 'Golden', 'Green', 'Grim', 'Holy', 'Impassable', 'Jagged', 'Light', 'Long', 'Misty', 'Perilous', 'Purple', 'Red', 'Savage', 'Shadowy', 'Shattered', 'Shifting', 'Shining', 'Silver', 'White', 'Wicked', 'Yellow'],
  noun: ['Storm', 'Ash', 'Bone', 'Darkness', 'Dead', 'Death', 'Desolation', 'Despair', 'Devil', 'Doom', 'Dragon', 'Fate', 'Fear', 'Fire', 'Fury', 'Ghost', 'Giant', 'God', 'Gold', 'Heaven', 'Hell', 'Honor', 'Hope', 'Horror', 'King', 'Life', 'Light', 'Lord', 'Mist', 'Peril', 'Queen', 'Rain', 'Refuge', 'Regret', 'Savior', 'Shadow', 'Silver', 'Skull', 'Sky', 'Smoke', 'Snake', 'Sorrow', 'Storm', 'Sun', 'Thorn', 'Thunder', 'Traitor', 'Troll', 'Victory', 'Witch']
}
const PLACEDESCRIPTORS = {
  place: ['Barrier', 'Beach', 'Bowl', 'Camp', 'Cave', 'Circle', 'City', 'Cliff', 'Crater', 'Crossing', 'Crypt', 'Den', 'Ditch', 'Falls', 'Fence', 'Field', 'Fort', 'Gate', 'Grove', 'Hill', 'Hole', 'Hut', 'Keep', 'Lake', 'Marsh', 'Meadow', 'Mountain', 'Pit', 'Post', 'Ridge', 'Ring', 'Rise', 'Road', 'Rock', 'Ruin', 'Shrine', 'Spire', 'Spring', 'Stone', 'Tangle', 'Temple', 'Throne', 'Tomb', 'Tower', 'Town', 'Tree', 'Vale', 'Valley', 'Village', 'Wall'],
  adjective: ['Ancient', 'Ashen', 'Black', 'Bloody', 'Blue', 'Bright', 'Broken', 'Burning', 'Clouded', 'Copper', 'Cracked', 'Dark', 'Dead', 'Doomed', 'Endless', 'Fallen', 'Far', 'Fearsome', 'Floating', 'Forbidden', 'Frozen', 'Ghostly', 'Gloomy', 'Golden', 'Grim', 'Hidden', 'High', 'Iron', 'Jagged', 'Lonely', 'Lost', 'Low', 'Near', 'Petrified', 'Red', 'Screaming', 'Sharp', 'Shattered', 'Shifting', 'Shining', 'Shivering', 'Shrouded', 'Silver', 'Stalwart', 'Stoney', 'Sunken', 'Thorny', 'Thundering', 'White', 'Withered'],
  noun: ['Crystal', 'Arm', 'Ash', 'Blood', 'Child', 'Cinder', 'Corpse', 'Crystal', 'Dagger', 'Death', 'Demon', 'Devil', 'Doom', 'Eye', 'Fear', 'Finger', 'Fire', 'Foot', 'Ghost', 'Giant', 'Goblin', 'God', 'Gold', 'Hand', 'Head', 'Heart', 'Hero', 'Hope', 'King', 'Knave', 'Knight', 'Muck', 'Mud', 'Priest', 'Queen', 'Sailor', 'Silver', 'Skull', 'Smoke', 'Souls', 'Spear', 'Spirit', 'Stone', 'Sword', 'Thief', 'Troll', 'Warrior', 'Water', 'Witch', 'Wizard'],
}

const rarityNames = ["Common", "Uncommon", "Rare", "Very Rare", "Mythic"]
const cpxColors = ["Ruby", "Citrine", "Topaz", "Emerald", "Sapphire", "Amethyst"]
const APPROACHES = ["Careful", "Clever", "Flashy", "Forceful", "Quick", "Sneaky"]
const SKILLGROUPS = ["Arcane", "Combat", "Diplomacy", "Exploration", "Science", "Thievery"]
const RESOURCES = ["Artisans", "Barter Goods", "Crops", "Defenses", "Energy", "Engineering", "Fresh Water", "Justice", "Land", "Leadership", "Luxury", "Medicine", "Morale", "Prestige", "Scholars", "Rare Materials", "Recruits", "Safety", "Scouts", "Spies", "Trade", "Transport", "Warriors", "Wealth"]
const nR = RESOURCES.length
/* 
  Utilities 
*/
const arrayUnique = (arr)=>{
  return arr.reduce((unq,v)=>{
    if (!unq.includes(v))
      unq.push(v)
    return unq
  }
  , [])
}

const getBaseLog = (x,y)=>{
  return Math.log(y) / Math.log(x);
}

/* Hash Functions 
  Used for seeding and random generation  
*/

const hashToDecimal = (_hash,_id)=>{
  1
  //0x ofset
  let id = _id + 1
  return parseInt(_hash.slice(id * 2, (id * 2) + 2), 16)
}

/* 
  Difficulty and Rarity 
*/
//Difficulty of a challenge 1 - 10, based off of 1024
const difficulty = (n)=>{
  if (n <= 256)
    return 1;
  else if (n <= 512)
    return 2;
  else if (n <= 648)
    return 3;
  else if (n <= 768)
    return 4;
  else if (n <= 875)
    return 5;
  else if (n <= 970)
    return 6;
  else if (n <= 1010)
    return 7;
  else if (n <= 1020)
    return 8;
  else if (n <= 1022)
    return 9;
  else
    return 10;
}
//common, uncommon, rare, very rare, mythic
const rarity = (n)=>{
  if (n <= 128)
    return 1;
  else if (n <= 206)
    return 2;
  else if (n <= 251)
    return 3;
  else if (n <= 254)
    return 4;
  else
    return 5;
}
const rarityFromHash = (hash,i)=>{
  return rarity(hashToDecimal(hash, i))
}

/* 
  People - not used in production - used for setup 
*/
//Generate people for a world - not used in production
const peopleGen = (seed,r="c")=>{
  let rng = new Chance(seed)

  let gen = {
    animal(t) {
      t = t || "c"
      let types = {
        bug: ["termite", "tick", "snail", "slug", "worm", "ant", "centipede", "scorpion", "spider", "mosquito", "firefly", "locust", "dragonfly", "moth", "bee", "wasp"],
        land: ["snake", "lizard", "rat", "weasel", "boar", "dog", "fox", "wolf", "cat", "lion", "panther", "deer", "horse", "ox", "rhino", "bear", "gorilla", "ape", "mammoth"],
        air: ["chicken", "duck", "goose", "jay", "parrot", "gull", "pelican", "crane", "raven", "falcon", "eagle", "owl", "condor", "pteranodon"],
        water: ["jellyfish", "clam", "eel", "frog", "fish", "crab", "lobster", "turtle", "alligator", "shark", "squid", "octopus", "whale"]
      }
      let _t = rng.weighted(["bug", "land", "air", "water"], [20, 40, 30, 10])
      t = ["c", "u", "v", "r", "m"].includes(t) ? _t : t
      let a = rng.pickone(types[t])
      return a.charAt(0).toUpperCase() + a.slice(1)
    },
    droid() {
      let shape = rng.pickone(["Humanoid", "Quad", "Insectoid", "Block", "Cylinder", "Sphere"])
      return shape + " Droid"
    },
    plant() {
      let shape = rng.pickone(["Flower", "Grass", "Vine", "Tree", "Fern", "Conifer", "Algae", "Palm", "Moss", "Mushroom"])
      return shape + "-people"
    },
    ppl(r) {
      let what = null
      if (r == "c") {
        let types = [["Human"], ["Bugbear", "Drow", "Dwarf", "Elf", "Gnoll", "Gnome", "Goblin", "Halfling", "Hobgoblin", "Kobold", "Lizardfolk", "Minotaur", "Orc", "Sahuagin"]]
        what = rng.weighted(types, [20, 40])
      } else if (r == "u") {
        what = ["Ogre", "Aasimar", "Centaur", "Chuul", "Tiefling", "Troll"]
      }
      return rng.pickone(what)
    },
    lna() {
      let one = this.animal("land")
      let two = this.animal()
      return one + "/" + two + " L'na"
    },
    genasi(r) {
      let e = rng.pickone(["Air", "Darkness", "Earth", "Fire", "Light", "Plant", "Water", "Storm", "Winter"])
      let res = ["", e, "Genasi"]
      if (r == "u")
        res[0] = this.ppl("c");
      else
        res[0] = this.ppl("u");
      return res.join(" ")
    },
    axial(r) {
      let e = rng.pickone(["Air", "Darkness", "Earth", "Fire", "Force", "Light", "Plant", "Water", "Storm", "Winter"])
      let dm = rng.pickone(["Chaos", "Creation", "Destruction", "Healing", "Justice", "Knowledge", "Luck", "Might", "Nature", "Secrecy", "Transmutation"])
      let res = ["", dm + "/" + e, "Axial"]
      if (r == "r")
        res[0] = this.ppl("c");
      else
        res[0] = this.ppl("u");
      return res.join(" ")
    },
    fey(r) {
      let e = rng.pickone(["Moon", "Desert", "Night", "Mountain", "Sun", "Forest", "Sea", "Storm", "Winter"])
      return e + (r == "r" ? " Fey" : " Eladrin")
    },
    wilder(r) {
      let anml = rng.pickone(["ant", "centipede", "bee", "spider", "butterfly", "snake", "rat", "boar", "wolf", "lion", "bear", "panther", "ox", "rhino", "crane", "raven", "eagle", "owl", "shark", "alligator", "dolphin"])
      anml = anml.charAt(0).toUpperCase() + anml.slice(1)
      return anml + (r == "u" ? " Were" : " Wilder")
    },
    guardian(r) {
      let e = null
      if (r == "r")
        e = rng.pickone(["Shield", "Sword"])
      else if (r == "v")
        e = rng.pickone(["Staff", "Crown"])
      return e + " Guardian"
    },
    giant(r) {
      let e = null
      if (r == "r")
        e = rng.pickone(["Forest", "Stone"])
      else if (r == "v")
        e = rng.pickone(["Fire", "Ice", "Cloud", "Sand"])
      else
        e = rng.pickone(["Darkness", "Sea", "Storm"])
      return e + " Giant"
    },
    dragon(r) {
      let e = null
      if (r == "v")
        e = rng.pickone(["Forest", "Stone", "Brass", "Copper", "Bronze", "Ice", "Fire", "Black"])
      else
        e = rng.pickone(["Darkness", "Sea", "Storm", "Gold", "Silver"])
      return e + " Dragon"
    },
    c() {
      let what = rng.weighted(["ppl", "animal"], [60, 40])
      //add suffix as needed 
      return this[what]("c") + (what == "animal" ? "-people" : "")
    },
    u() {
      let what = rng.weighted(["ppl", "plant", "droid", "lna", "genasi", "wilder"], [15, 15, 15, 15, 30, 10])
      return this[what]("u")
    },
    r() {
      let what = rng.weighted(["giant", "genasi", "axial", "fey", "wilder", "guardian"], [15, 25, 25, 15, 15, 10])
      return this[what]("r")
    },
    v() {
      let what = rng.weighted(["giant", "dragon", "axial", "fey", "guardian"], [25, 25, 20, 15, 15])
      return this[what]("v")
    },
    m() {
      let what = rng.weighted(["giant", "dragon", "Aboleth"], [40, 50, 10])
      return what == "Aboleth" ? "Aboleth" : this[what]("m")
    }
  }

  return gen[r]()
}

/*
  Ruins 
*/
const ruinData = (periodId,ruinId)=>{
  //unique hash
  let hash = ethers.utils.solidityKeccak256(['string', 'string', 'uint256', 'uint256'], [seed, "ruin", periodId, ruinId])
  //size 
  let baseSize = 0, n;
  //based on 1024 probability
  let szp = (hashToDecimal(hash, 0) * 256 + hashToDecimal(hash, 1)) % 1024
  if (szp <= 512)
    n = 1;
  else if (szp <= 768)
    n = 2;
  else if (szp <= 970)
    n = 3;
  else if (szp <= 1022)
    n = 4;
  else
    n = 5;
  //now roll 1d4+1 per size 
  for (let i = 0; i < n; i++) {
    baseSize += 2 + hashToDecimal(hash, i + 2) % 4
  }
  //now determine structure - sub-ruins and depth 
  let subHash = Array.from({
    length: 3
  }, (_,i)=>ethers.utils.solidityKeccak256(['bytes32', 'string', 'uint256'], [hash, "subsize", i]))
  let range = [2, 3, 4, 5, 3, 4, 5, 6, 4, 5, 6, 7, 5, 6, 7, 8]
  let step = 0, j;
  let structure = Array.from({
    length: baseSize
  }, (_,i)=>{
    step = Math.floor(i / 32)
    j = i - (step * 32)
    return {
      depth: rarityFromHash(subHash[step], j),
      zones: range[hashToDecimal(subHash[step], j) % 16]
    }
  }
  )
  //get a depth chart - sub-ruins by depth 
  let depthChart = structure.reduce((dC,sub,i)=>{
    dC[sub.depth - 1].add(i)
    return dC
  }
  , Array.from({
    length: 5
  }, _=>new Set()))
  //determine lins
  let outside = new Set()
  let links = depthChart.reduce((l,lv,i)=>{
    let level = [...lv.values()]
    level.forEach((li,j)=>{
      //link to outside
      if (i == 0 || (i > 0 && outside.length == 0)) {
        outside.add(li)
      }
      //chain 
      if (j >= 1) {
        l.push([level[j - 1], li])
      }
      //stairs 
      if (i > 0 && !outside.has(li) && j == 0) {
        let uLevel = -1
          , tLv = -1;
        //find the closest upper level 
        while (uLevel == -1 && i + tLv > -1) {
          if (depthChart[i + tLv].size > 0)
            uLevel = i + tLv;
          else
            tLv--;
        }
        if (uLevel == -1)
          outside.add(li);
        else {
          uLevel = [...depthChart[uLevel].values()]
          l.push([li, uLevel[uLevel.length - 1]])
        }
      }
    }
    )
    return l
  }
  , [])

  return {
    period: periodId,
    id: ruinId,
    hash,
    structure,
    depthChart,
    outside,
    links
  }
}

/*
  Skill randomization 
*/
const randomSkills = (rng,r,first)=>{
  let skills = rng.shuffle([0, 1, 2, 3, 4, 5])
  //if first - set first skill 
  if (first) {
    let i = skills.indexOf(first)
    skills[i] = skills[0]
    skills[0] = first
  }
  //map names 
  let sN = skills.map(v=>SKILLGROUPS[v])
  let skillsById = [0, 0, 0, 0, 0, 0]
  //skill ranks
  let ranks = [r, r - 1, r - 2, r - 2, r - 3, r - 3]
  //for presentation
  let sr = [[r, sN[0]], [r - 1, sN[1]], [r - 2, sN[2], sN[3]], [r - 3, sN[4], sN[5]]]
  if (r >= 5) {
    ranks = [r, r - 1, r - 2, r - 3, r - 3, r - 4]
    sr = [[r, sN[0]], [r - 1, sN[1]], [r - 2, sN[2]], [r - 3, sN[3], sN[4]], [r - 4, sN[5]]]
  } else if (r >= 7) {
    ranks = [r, r - 1, r - 2, r - 3, r - 4, r - 5]
    sr = [[r, sN[0]], [r - 1, sN[1]], [r - 2, sN[2]], [r - 3, sN[3]], [r - 4, sN[4]], [r - 5, sN[5]]]
  }
  //handle cross reference for quick bonus lookup
  ranks.forEach((v,i)=>skillsById[skills[i]] = v)

  return {
    sr,
    skillsById
  }
}

/* 
  ZONE
*/

const generateZone = (data)=>{
  let {id, seed, type} = data
  seed = seed || chance.hash() // random seed 
  type = type || 3

  //set up base object 
  let Z = {
    seed,
    id: id || seed,
    // provide id or use seed 
    type,
    // 1 - Sector, 2 - Region, 3 - Volume
    parent: null,
    children: [],
  }

  let rng = new Chance(seed)

  //name 
  let name = [], style, scheme;
  if (type < 3) {
    //SECTOR or REGION 
    style = [["adjective", "terrain"], ["terrain", "of (the)", "noun"], ["The", "terrain", "adjective"], ["noun", "terrain"], ["noun", "adjective", "terrain"], ["adjective", "terrain", "of (the)", "noun"]]
    //REGIONDESCRIPTORS
    scheme = rng.weighted(style, [4, 2, 2, 2, 1, 1])
    scheme.forEach(what=>{
      if (REGIONDESCRIPTORS[what]) {
        name.push(rng.pickone(REGIONDESCRIPTORS[what]))
      } else
        name.push(what)
    }
    )
  } else {
    //PLACE 
    style = [["The", "place"], ["The", "adjective", "place"], ["The", "place", "of (the)", "noun"], ["(The)", "noun", "'s", "place"], ["place", "of the", "adjective", "noun"], ["The", "adjective", "noun"]]
    //PLACEDESCRIPTORS
    scheme = rng.weighted(style, [2, 2, 2, 2, 2, 2])
    scheme.forEach(what=>{
      if (PLACEDESCRIPTORS[what]) {
        name.push(rng.pickone(PLACEDESCRIPTORS[what]))
      } else
        name.push(what)
    }
    )

    //known
    Z.known = rng.pickone(["Well-Known", "Sheltered", "Secret"])

    //need / surplus 
    let ns = rng.shuffle(RESOURCES).slice(0, 4)
    Z.needs = ns.slice(0, 2)
    Z.surplus = ns.slice(2)

    //name base for generation
    Z.nameBase = rng.rpg("1d" + NameGen.nameBases.length)[0] - 1

    //knowns 
    Z.visited = false
    Z.knowns = []
  }
  //name 
  Z.name = name.join(" ")

  //color 
  Z.color = rng.d100()

  return Z
}

export {generateZone}
