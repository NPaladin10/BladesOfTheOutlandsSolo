const FACTIONS = {
  "aboleth": {
    "name": "Aboleth",
    "info": `
    <p>Power hungry schemers and rulers of the watery depths. These amphibian horrors dominate numerous shards in the Underdark and have begun to expand their influence into the Outlands as well.  </p>
    <p>Aboleth are individually paranoid beings. As such, most aboleth towns are small and actually the lair of a singular Elder. They will accept a number of young initiates to serve them, and the town is comprised of the aboleth’s servant and thralls. It isn’t uncommon for one elder to have a few dozen skum thralls. A truly cunning aboleth can bind a handful of elder aboleth into a warp and focus them on a goal. These groups rule the larger aboleth cities. </p>     
    <p>The aboleth all practice magic and they specialize in transmutation. They enjoy transforming other humanoids into their weak-willed skum servants and performing experiments on unfortunate souls as they try to perfect their craft. Visiting an aboleth town is an invitation to become a test subject. </p> 
    `
  },
  "archons": {
    "name": "Archons",
    "info": `<p>Judges and police of the vast frontiers of the Universe.</p>`
  },
  "asgard": {
    "name": "Asgardians",
    "info": `<p></p>`
  },
  "blackflame": {
    "name": "Blackflame",
    "info": null
  },
  "bloodtiamat": {
    "name": "Blood of Tiamat",
    "info": null
  },
  "deva": {
    "name": "Deva",
    "info": null
  },
  "fae": {
    "name": "Fae",
    "info": `<p>Free spirited embodiments of nature.</p>`
  },
  "gaolarch": {
    "name": "Gaolarch",
    "info": null
  },
  "goblyns": {
    "name": "Goblyns",
    "info": `<p>Animalistic beings made from the elements themselves.</p>`
  },
  "guardians": {
    "name": "Guardians",
    "info": `<p>Roving protectors of the innocent and oppressed. They spent much of their resources and energy saving as many shards as they could.</p>`
  },
  "jadeempire": {
    "name": "Jade Empire",
    "info": `<p>Scholars, merchants and mystics seeking to return order to the Universe. The forces of Tiamat usurped much of their territory during the last war.</p>`
  },
  "mechan": {
    "name": "Mechans",
    "info": null
  },
  "myr": {
    "name": "Myr",
    "info": `<p>Shadow sorcerers who scour the Known Universe for powerful relics of the past.</p>`
  },
  "olympian": {
    "name": "Olympians",
    "info": null
  },
  "platinumstar": {
    "name": "Platinum Star",
    "info": null
  },
  "sect": {
    "name": "Sect",
    "info": null
  },
  "shadowsteel": {
    "name": "Shadowsteel Syndicate",
    "info": `<p>Renowned vice dealers, thieves, spies and assassins.</p>`
  },
  "starhive": {
    "name": "StarHive",
    "info": null
  },
  "ymir": {
    "name": "Sons of Ymir",
    "info": null
  },
  "starlord": {
    "name": "Starlords",
    "info": null
  },
  "immortal": {
    "name": "Immortals",
    "info": `
      <p>Powerful cosmic beings who claim to be the creators of the Known Universe. Their iron handed rule and demand for worship from the people that they claimed to create resulted in the First Cosmic War. Many were defeated and imprisoned, but the rest have not forgotten that they once ruled and wish to find a way to do so again.</p>
      <p>Absorbed by their own desires and schemes, titans let their faithful clerics manage the day to day activities. If anyone opposes them they send out their legions of masked warriors and giants. </p>
      `
  },
  "xaoti": {
    "name": "Xaoti",
    "info": null
  },
  "warden": {
    "name": "Wardens",
    "info": `<p>Wary hunters, always on the lookout for signs of ancient darkness.</p>`
  },
  "worm": {
    "name": "Worms",
    "info": null
  },
  "yuloth": {
    "name": "Yuloth",
    "info": null
  }
}

const FRONTS = {
  "aboleth": {
    "fronts": "2,3,6,7,14,19,21,24",
    "frontsP": "1-2,3-5,6-7,8-9,10-12,13-14,15-17,18-20"
  },
  "archons": {
    "fronts": "1,4,5,11,12,17,21",
    "frontsP": "1-4,5-7,8-9,10-12,13-15,16-17,18-20"
  },
  "fae": {
    "fronts": "1,2,5,11,12,14,17,19,21,24,28",
    "frontsP": "1-2,3,4-5,6-8,9-10,11,12,13-14,15-17,18-19,20"
  },
  "goblyns": {
    "fronts": "10,14,18,19,20,24,25",
    "frontsP": "1-4,5-6,7-9,10-12,13-16,17-18,19-20"
  },
  "guardians": {
    "fronts": "1,4,11,12,14,17,21,24,28",
    "frontsP": "1-2,3-4,5-6,7-8,9-10,11-13,14-16,17-18,19-20"
  },
  "jadeempire": {
    "fronts": "1,2,4,5,12,14,21",
    "frontsP": "1-3,4-6,7-9,10-12,13-14,15-17,18-20"
  },
  "myr": {
    "fronts": "2,6,14,22,23,24,27",
    "frontsP": "1-3,4-5,6-10,11-12,13-14,15-18,19-20"
  },
  "shadowsteel": {
    "fronts": "2,3,6,10,14,20,27",
    "frontsP": "1-3,4-7,8-10,11-12,13-15,16-17,18-20"
  },
  "immortal": {
    "fronts": "2,3,4,5,6,7,8,11,14,17,19,26",
    "frontsP": "1,2-3,4-5,6-7,8-9,10-11,12-13,14,15-16,17,18-19,20"
  },
  "warden": {
    "fronts": "1,11,12,14,17,21,24,28",
    "frontsP": "1-4,5-6,7-10,11,11-14,15-16,17-19,20"
  }
}

const FORCES = {
  "aboleth": "Chuul,Merrow,Kuo-Toa,Rune Naga,Water Elemental",
  "archons": "Knight,Champion,Enchanter,Deva",
  "asgard": null,
  "blackflame": "Fire Giant,Fire Giant Dreadnought,Fire Elemental,Fire Elemental Myrmidon,Firenewt Warrior,Salamander,Eternal Flame Guardian,Eternal Flame Priest,Magma Mephit,Azer,Magmin",
  "bloodtiamat": null,
  "deva": null,
  "fae": "Dryad,Sprite,Pixie,Nereid,Druid,Vine Blight,Lion,Eagle",
  "gaolarch": null,
  "goblyns": "Goblin,Goblin Boss,Dust Mephit,Magma Mephit,Mud Mephit,Steam Mephit,Troll,Needle Blight",
  "guardians": "Sword Guardian,Shield Guardian,Crown Guardian",
  "jadeempire": "Light Jade Automaton,Jade Guard,Remote Sentry,Earth Shaper,Water Shaper,Fire Shaper,Wind Shaper,Forest Shaper",
  "mechan": null,
  "myr": "Shadow,Wolf,Bat,Giant Bat,Shadow Mote Swarm,Evoker,Conjurer,Illusionist",
  "olympian": null,
  "platinumstar": null,
  "sect": null,
  "shadowsteel": "Shadow,Hound,Raven,Swarm of Ravens,Grunt,Blademaster,Night Rogue",
  "starhive": "Hydra,",
  "ymir": null,
  "starlord": null,
  "immortal": "Faceless Legionary,Faceless Centurion,Faceless Arc Knight,Faceless Primus,Faceless Hierophont,Black Earth Priest,Eternal Flame Priest,Lesser Immortal,Cloud Giant",
  "xaoti": null,
  "warden": "Ranger,Wilder,Zverhai",
  "worm": null,
  "yuloth": "Merc Guard,Merc Captain,Sentry Drone,Evoker,Conjuror"
}

const show = ["aboleth", "archons", "fae", "goblyns", "guardians", "jadeempire", "myr", "shadowsteel", "immortal", "warden"]

const data = Object.entries(FACTIONS).map(F=>{
  let id = F[0]
  let faction = Object.assign({
    id
  }, F[1])
  //assign fronts 
  if (FRONTS[id]) {
    faction.fronts = FRONTS[id].fronts.split(",").map(Number)
    faction.frontsP = FRONTS[id].frontsP.split(",")
  }
  //look for forces
  faction.forces = []
  if (FORCES[id]) {
    faction.forces = FORCES[id].split(",")
  }

  return faction
}
).filter(f=>show.includes(f.id))

export {data}
