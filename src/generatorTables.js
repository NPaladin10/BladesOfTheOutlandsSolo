const tables = {
  challenge : {
    title:"Challenge Generator",
    th: [0],
    data : [
      [["1-2","Strength"],["Athletics"]],
      [["3-4","Dexterity"],["Acrobatics"],["Stealth"],["Thievery"]],
      [["5-6","Intelligence"],["Arcana"],["Crafting"],["Lore"],["Occultism"],["Society"]],
      [["7-8","Wisdom"],["Medicine"],["Nature"],["Religion"],["Survival"]],
      [["9-10","Charisma"],["Deception"],["Diplomacy"],["Intimidation"],["Performance"]],
      [["11-12","Saving Throw"],["Fortitude"],["Reflex"],["Will"]],
    ]
  },
  terrain : {
    title:"Terrain Generator",
    th: [0],
    data : [
      [["1-5","Landmark"],["1-4","Water-based (waterfall,geyser, etc.)"],["5-8","Plant-based (ancient tree, giant flowers, etc.)"],["9-12","Earth-based (peak, formation, crater, etc.)"]],
      [["6-10","Obstacle"],["1-4","Water-based (rapids, whirlpools, waterfalls, etc)"],["5-8","Plant-based (dangerous plants, thick jungle, etc)"],["9-12","Earth-based (peak, cliff, chasm, ravine, etc)"]],
      [["11-12","Resource"],["1-4","Game/Fruit/Vegetable"],["5-6","Herb/Spice/Dye Source"],["7-9","Timber/Stone"],["10-11","Ore/Precious/Metal/Gems"],["12","Cosmic"]]
    ]
  },
  site : {
    title:"Site Generator",
    th: [0],
    data : [
      [["1-4","Infrastructure"],["1-2","Crossroads"],["3-4","Bridge"],["5-7","Mine/Quarry"],["8-10","Factory/Warehouse"],["11-12","Airport/Sea port"]],
      [["5-7","Religious"],["1-3","Graveyard/Necropolis"],["4-6","Tomb/Crypt"],["7-10","Temple/Retreat"],["11-12","Great Temple"]],
      [["8-11","Dwelling/Structure"],["1-2","Farm/Estate"],["3-4","Tower/Keep/Outpost"],["5-6","Prison"],["7-8","Library/Museum/School"],["9-10","Factory/Warehouse"],["11","Neighborhood"],["12","Skyscraper"]],
      [["12","Unnatural"],["1-2","Arcane Blight"],["3-5","Arcane Enchantment"],["6-8","Arcane Source"],["9-10","Distortion/Warp"],["11-12","Rift/Portal"]],
    ]
  },
  lair : {
    title:"Lair Generator",
    th: [0],
    data : [
      [["1-6","Beast"],["1-3","Burrow"],["4-7","Cave/Tunnels"],["8-9","Nest/Aerie"],["10","Hive"],["11-12","Ruin (roll below)"]],
      [["7-12","People/Faction"],["1-2","Mine/Quarry"],["3","Bunkers"],["4-5","Factory/Warehouse"],["6-7","Temple/Retreat"],["8","Estate"],["9-10","Tower/Keep/Outpost"],["11-12","Ruin (roll below)"]]
    ]
  },
  ruin : {
    title:"Ruin Generator",
    th: [0],
    data : [
      [["1","Enigmatic"],["1-3","Earthworks"],["4-5","Megalith"],["6-9","Statue"],["10-11","Source/Portal"],["12","Oddity"]],
      [["2-4","Infrastructure"],["1","Road Interchange"],["2-3","Bridge"],["4-5","Mine/Quarry"],["6","Bunkers"],["7","Aqueduct/Canal"],["8-10","Factory/Warehouse"],["11-12","Airport/Sea port"]],
      [["5-7","Religious"],["1-2","Barrow"],["3-4","Graveyard/Necropolis"],["5-7","Tomb/Crypt"],["8-10","Temple/Retreat"],["11-12","Great Temple"]],
      [["8-10","Dwelling/Structure"],["1-2","Farm/Estate/Tower"],["3-4","Prison"],["5-6","Library/Museum/School"],["7-8","Factory/Warehouse"],["9-10","Neighborhood"],["11-12","Skyscraper"]],
      [["11-12","Town"],["1-2","Small Town (<10,000)"],["3-6","Mid-sized Town (<200,000)"],["7-11","City (<2 million)"],["12","Mega-city (10+ million)"]]
    ]
  },
  people : {
    title:"People Generator",
    th: [0],
    data : [
      [["1-4","Elemental"],["1-4","Element + Biological (form)"],["5-8","Element + Construct (d10)"],["9-12","Biological + Element (trait)"]],
      [["5-6","Construct"],["1-3","Cube/Boxy"],["4-5","Cylinder"],["6-8","Spherical"],["9-10","Other Geometric"],["11-12","Biological"]],
      [["7-12","Biological"],["1-3","Humanoid"],["4-6","Humanoid + Beast"],["7-9","Beast"],["10-12","Beast + Beast"]]
    ]
  },
  beast : {
    title:"Beast Generator",
    th: [0],
    data : [
      [["1-6","Earthbound"],["termite/tick/louse"],["snail/slug/worm"],["ant/centipede/scorpion"],
        ["snake/lizard"],["vole/rat/weasel"],["boar/pig"],["dog/fox/wolf"],["cat/lion/panther"],
        ["deer/horse/camel"],["ox/rhino"],["bear/ape/gorilla"],["mammoth/dinosaur"]],
      [["7-10","Airborn"],["mosquito/firefly"],["locust/dragonfly/moth"],["bee/wasp"],["chicken/duck/goose"],
        ["songbird/parrot"],["gull/waterbird"],["heron/crane/stork"],["crow/raven"],
        ["hawk/falcon"],["eagle/owl"],["condor"],["pteranodon"]],
      [["11-12","Water-going"],["insect"],["jelly/anemone"],["clam/oyster/snail"],["eel/snake"],["frog/toad"],
        ["fish"],["crab/lobster"],["turtle"],["alligator/crocodile"],["dolphin/shark"],
        ["squid/octopus"],["whale"]]
    ]
  },
  element : {
    title:"Element Generator",
    th: [],
    data : [
      [["Element"],["1-2","Air/Storm"],["3-4","Earth/Sand/Mud"],["5-6","Fire/Light/Lava"],["7-8","Water/Ice/Ocean"],["9-10","Life/Plants"],["11-12","Death/Shadow"]],
    ]
  },
  magic : {
    title:"Magic Generator",
    th: [],
    data : [
      [["Magic"],["1-2","Divination"],["3-4","Abjuration/Enchantment"],["5-6","Evocation"],["7-8","Illusion/Summoning"],["9-10","Necromancy"],["11-12","Transmutation"]],
    ]
  },
  aspect : {
    title:"Aspect Generator",
    th: [],
    data : [
      [["Aspect"],["power/strength"],["trickery/dexterity"],["time/constitution"],["knowledge/intelligence"],
      ["nature/wisdom"],["culture/charisma"],["war/lies/discord"],["peace/truth/balance"],
      ["hate/envy"],["love/admiration"],["city/tech"],["travel/speed"]],
    ]
  },
}

const shards = {
  arcadia : {
  }
}

export {tables}