const REALMS = {
  "outlands": {
    "name": "The Outlands",
    "info": `
    <p>The Outlands is the largest Realm and the locals claim that once there 
    was only the Outlands and everything else was just a region within it. 
    Now it has seven regions: Orchards of Arcadia, Forests of Sun and Starlight, 
    Oceanus, Mount Olympus, Islands Beyond the World, Bottomless Depths, and Frostfell.  
    </p>
    `
  },
  "celestia": {
    "name": "Celestia",
    "info":  `
    <p></p>
    `
  },
  "underdark": {
    "name": "Underdark",
    "info":  `
    <p></p>
    `
  },
  "gehenna": {
    "name": "Blasted Reach of Gehenna",
    "info":  `
    <p></p>
    `
  }
}

const REGIONS = {
  "arcadia": {
    "name": "Orchards of Arcadia",
    "parent": "outlands",
    "info": `
    <p>Perfectly lined orchards; small, sleeping villages surrounded by fields; produce and fruit in abundance; communes dedicated to an ancient form of martial arts or magic.</p>
    `
  },
  "forestsunstar": {
    "name": "Forests of Sun and Starlight",
    "parent": "outlands",
    "info":  `
    <p>A mystical forest that is home to the fey. Ancient groves; trees of every description; small villages that disappear when you leave; teeming wildlife; vine choked ruins; mysterious lights dancing in the night; songs heard from a distance; houses in the trees.</p>
    `
  },
  "oceanus": {
    "name": "Oceanus",
    "parent": "outlands",
    "info":  `
    <p>A huge, sluggish river that connects the Outlands. A miles wide river; winding tributaries; lakes; isolated islands; river towns; swamps; catfish that can swallow boats.</p>
    `
  },
  "olympus": {
    "name": "Mount Olympus",
    "parent": "outlands",
    "info":  `
    <p>Home of the Olympians. Picturesque mountain valleys; stately alabaster towns on mountainsides; vineyards as far as they eye can see; ancient and crumbling cities forgotten by time; arenas and coliseums built for sports of all kinds.</p>
    `
  },
  "islebeyond": {
    "name": "Islands Beyond the World",
    "parent": "outlands",
    "info":  `
    <p>An endless ocean dotted with countless volcanic islands. Water as far as the eye can see; smoke rising from a slumbering volcano; isolated atolls; a pod of whales; small island villages.</p>
    `
  },
  "depths": {
    "name": "Bottomless Depths",
    "parent": "outlands",
    "info":  `
    <p>An underwater realm where there is no sky. Blue above and black below; city sized coral reefs suspended in the currents; tangled forests of free-floating kelp; teeming schools of fish.</p>
    `
  },
  "frostfell": {
    "name": "Frostfell",
    "parent": "outlands",
    "info":  `
    <p>Endless winter; plains of drifting snow; jagged, frost covered peaks; chasms of ice that could swallow cities; lakes fed by thermal springs creating islands of life.</p>
    `
  },
  "silversea": {
    "name": "Shores of the Silver Sea",
    "parent": "celestia",
    "info":  `
    <p>The slopes of the great mountain of Celestia that touch the Sea. Small costal islands; isolated coves with quaint villages; sheer cliffs that fall into the Sea; hidden grottos.</p>
    `
  },
  "atlantis": {
    "name": "Atlantis",
    "parent": "celestia",
    "info":  `
    <p>An endless chain of islands. Islands lost in the mist; cities rising from the waters; storms rolling in; island villas; villages whose life is the see; isolated wizard towers.</p>
    `
  },
  "tranquil": {
    "name": "Slopes of Tranquility",
    "parent": "celestia",
    "info":  `
    <p>Winding mountain valleys; breathtaking waterfalls; crisp mountain air; quiet farms; and soaring granite peaks.</p>
    `
  },
  "moltenlakes": {
    "name": "Lakes of Molten Iron",
    "parent": "gehenna",
    "info":  `
    <p>A vast lake of molten iron. Lakeside towns covered in soot; blistering heat; isolated smiths dedicated to their craft; water worth its weight in gold; endless sand dunes.</p>
    `
  },
  "crags": {
    "name": "Crags of Relentless Flame",
    "parent": "gehenna",
    "info":  `
    <p>A mountain chain of titanic volcanoes. Rivers of lava; gorges spanned by bridges; cities built near rare sources of water; isolated fortified complexes; the constant smell of ash and sulfur.</p>
    `
  },
  "undermountain": {
    "name": "Great Undermountain",
    "parent": "underdark",
    "info":  `
    <p>Caverns as big as mountains. Massive sunstones that turn bleak caverns into valleys of paradise; cities of hewn stone; smiths of fine metal and jewelry; villages of hard working people; forgotten tombs.</p>
    `
  },
  "pandemonium": {
    "name": "Howling Caverns of Pandemonium",
    "parent": "underdark",
    "info":  `
    <p>Winding tunnels without end; a constant wind; stone that seems to absorb light; cities tunneled out of the earth; rivers rushing through caverns; mushrooms and fungus of all varieties; isolated predators waiting for prey.</p>
    `
  },
  "chasmsouls": {
    "name": "Chasm of Lost Souls",
    "parent": "underdark",
    "info":  `
    <p>An underground canyon complex that could cover the face of multiple worlds. Villages clinging to the side of cliffs; knife-edge trails; sheer drops into the dark; the sound of falling rock; massive crumbling bridges over nothingness; cliffs riddled with caves.</p>
    `
  },
  "sunlesssea": {
    "name": "Sunless Sea",
    "parent": "underdark",
    "info":  `
    <p>Submerged caverns; cities clinging to cavern ceilings over underground lakes; the constant sound of dripping water; slippery stone; strange lights; underwater cities lit by phosphorescence.</p>
    `
  }
}

const SHARDS = {
  "opalhalls": {
    "name": "Opal Halls of Memory",
    "parent": "arcadia",
    "claim": "jadeempire",
    "rct": "3.3.4",
    "anchor": 24,
    "info": `<p>A large white walled compound in the middle of an extensive orchard. Hired laborers bustle about while pilgrims trail in and out of the Great Hall, and dedicated students spend all their waking hours honing their martial techniques. There are currently seven masters in attendance and each has an extensive hierarchy of students. The monks spend their lives training, but their primary job is guarding the Great Hall which is the focus of the pilgrims. The Hall is a stadium sized complex that houses the opal walls - hundreds of ancient cosmic relics each the size of a house wall. The walls allow those that study them for long enough to plumb the depths of the past for answers.</p>`,
    "special": `
    <p><bi>Ancient Martial Arts Technique.</bi> Heroes can spend time training under the local masters to learn martial arts.    
    </br><bi>Opal Reflection.</bi> If the heroes spend a week in residence and study the opal walls of the great hall each may learn the answer to one question about the past. The past could be as recent as yesterday or as far back as before the Shattering. Answers are never simple, and usually lead to a number of new questions.  
    </p>
    `
  },
  "gfstarlight": {
    "name": "Grandfather Starlight",
    "parent": "forestsunstar",
    "claim": "fae",
    "rct": "1.4.4",
    "anchor": 3,
    "info": `<p>A huge tree twists and climbs over a mile into the sky. The fae call the great tree Grandfather Starlight and it is really an organic city that is home to the Summer Court. While from far away Grandfather appears to be a singular tree it is actually a forest woven and twinded together by fae magic. </p>`,
    "special": `
    <p><bi>Ironwood Gear.</bi> The fae woodshapers have been harvesting pieces of Grandfather for years. Their work is harder than steel and weighs half as much. 
      </br><bi>Star fruit.</bi> Parts of Grandfather are continuously blooming, and bearing fruit. Depending upon the time of year and the location the fruit looks and tastes different and has various magical properties. All of the fruit glows with a soft inner light. It lasts for 1d6 days fresh, or up to 3 months if preserved properly. 
      </br><bi>Dreams of the Forest.</bi> Anyone that stays for Downtime under Grandfather's branches experiences dreams and visions. If they remain long enough the dreams convey the secrets of the fae and wilders to those willing to embrace the factions ideals.
      </br><bi>Audience With The Summer Court.</bi> The fae aren’t exactly a unified faction. The Summer Court is one of the most powerful sub-factions, and the leding elite consider Grandfather home. If the heroes wish an audience with some of the most powerful fae in the Known Universe they can bring a gift and get in line. 
    </p>`
  },
  "emrldbastion": {
    "name": "Emerald Bastion",
    "parent": "oceanus",
    "claim": "guardians",
    "rct": "3.3.2",
    "anchor": 4,
    "info": `<p>An outpost of the Guardians and a bustling metropolis. Green stone walls; tall towers; airships overhead; murmur of voices in hundreds of tongues; people from all over the Outlands.</p>`,
    "special": `
    <p><bi>Guardian Membership.</bi> The Bastion is a stronghold for the Guardians, and may or may not be their seat of power in the Outlands. If a hero wishes to join the Guardians, they could apply to do so here. If they first pass a thorough evaluation and then extensive training, they may be asked to join. 
      </br><bi>Trade.</bi> The Emerald Bastion is arguably the busiest port in the Outlands. Anything and everything - of upstanding morality (because the Guardians check all cargo) - can be found for purchase.  
      </br><bi>Airship Transport.</bi> For the right price, heroes can get safe and fast transport to other shards. A trip to a shard within the Outlands costs d6/d8 cosmic, while one to a different realm will cost d10/d12. While the costs may seem expensive, there are benefits: it only takes 1d6 hours to get to a shard in the Outlands, or 1d3 days to get to a shard in a different realm. And the trip is “safe” - the heroes don’t have to make any rolls, but the GM may plan their own diversions. 
    </p>`
  },
  "faunel": {
    "name": "Faunel",
    "parent": "oceanus",
    "claim": "warden",
    "rct": "2.5.3",
    "anchor": 2,
    "info": `<p>A town deep in the forest on a tributary of Oceanus. Animals are people; grand treehouses; flying bridges; animals scurrying in the branches; constant humidity.</p>`,
    "special": `
    <p><bi>Awoken Animals.</bi> Any unintelligent animal/beast that comes to Faunel will gain sentience over time. Set the target to 20, and every day roll a d20. If the roll is equal to or greater than the target the beast gains sentience, but if the roll fails reduce the target by one. While an animal may be sentient their ability to communicate is still limited by their nature. The animal remains sentient even if they leave Faunel. 
    </p>`
  },
  "colossheroes": {
    "name": "Colosseum of Heroes",
    "parent": "olympus",
    "claim": "olympian",
    "rct": "3.4.20",
    "anchor": 25,
    "info": `<p></p>`
  },
  "grtkelpfrst": {
    "name": "Great Kelp Forest",
    "parent": "islebeyond",
    "claim": null,
    "rct": "3.3.40",
    "anchor": 11,
    "info": null
  },
  "wayfairgrotto": {
    "name": "Wayfarer’s Grotto",
    "parent": "islebeyond",
    "claim": "guardians",
    "rct": "2.5.6",
    "anchor": 2,
    "info": null
  },
  "rainbowreef": {
    "name": "Rainbow Reef",
    "parent": "islebeyond",
    "claim": null,
    "rct": "2.5.29",
    "anchor": 5,
    "info": null
  },
  "frstblackcoral": {
    "name": "Forest of Black Coral",
    "parent": "depths",
    "claim": null,
    "rct": "3.5.29",
    "anchor": 5,
    "info": null
  },
  "seatimelessness": {
    "name": "Sea of Timelessness",
    "parent": "depths",
    "claim": "deva",
    "rct": "3.4.41",
    "anchor": 15,
    "info": null
  },
  "cityshells": {
    "name": "City of Shells",
    "parent": "depths",
    "claim": "fae",
    "rct": "3.3.42",
    "anchor": 3,
    "info": null
  },
  "icedagger": {
    "name": "Icedagger Estate",
    "parent": "frostfell",
    "claim": null,
    "rct": "4.1.44",
    "anchor": 55,
    "info": null
  },
  "niflheim": {
    "name": "Niflheim - Home of Mist",
    "parent": "frostfell",
    "claim": "ymir",
    "rct": "1.2.45",
    "anchor": 3,
    "info": null
  },
  "lightgoldenflame": {
    "name": "Lighthouse of Golden Flame",
    "parent": "silversea",
    "claim": "archons",
    "rct": "2.3.2",
    "anchor": 32,
    "info": null
  },
  "azureharbor": {
    "name": "Azure Harbor",
    "parent": "silversea",
    "claim": "guardians",
    "rct": "4.4.6",
    "anchor": 3,
    "info": null
  },
  "krakenarms": {
    "name": "The Kraken’s Arms",
    "parent": "atlantis",
    "claim": null,
    "rct": "1.3.26",
    "anchor": 10,
    "info": null
  },
  "atlantiscity": {
    "name": "Atlantis",
    "parent": "atlantis",
    "claim": "asgard",
    "rct": "2.4.2",
    "anchor": 3,
    "info": null
  },
  "pillarsbahamut": {
    "name": "Platinum Pillars of Bahamut",
    "parent": "tranquil",
    "claim": "platinumstar",
    "rct": "3.5.8",
    "anchor": 53,
    "info": null
  },
  "reddunes": {
    "name": "Red Dunes",
    "parent": "moltenlakes",
    "claim": null,
    "rct": "4.5.10",
    "anchor": 7,
    "info": null
  },
  "citybrass": {
    "name": "City of Brass",
    "parent": "moltenlakes",
    "claim": "blackflame",
    "rct": "4.5.1",
    "anchor": 3,
    "info": null
  },
  "volcshadows": {
    "name": "Volcano of Screaming Shadows",
    "parent": "crags",
    "claim": "bloodtiamat",
    "rct": "2.4.24",
    "anchor": 10,
    "info": null
  },
  "twnarcanewisper": {
    "name": "Tower of Arcane Whispers",
    "parent": "crags",
    "claim": "myr",
    "rct": "1.3.8",
    "anchor": 55,
    "info": null
  },
  "obsidianbridge": {
    "name": "Obsidian Bridge",
    "parent": "crags",
    "claim": "immortal",
    "rct": "4.5.23",
    "anchor": 2,
    "info": null
  },
  "cavernunderstars": {
    "name": "Caverns Under the Stars",
    "parent": "undermountain",
    "claim": "fae",
    "rct": "3.4.32",
    "anchor": 3,
    "info": null
  },
  "stonemire": {
    "name": "Stonemire",
    "parent": "undermountain",
    "claim": null,
    "rct": "1.3.31",
    "anchor": 47,
    "info": null
  },
  "bedlam": {
    "name": "Bedlam",
    "parent": "pandemonium",
    "claim": null,
    "rct": "3.3.36",
    "anchor": 2,
    "info": null
  },
  "midnightaerie": {
    "name": "Midnight Aerie",
    "parent": "chasmsouls",
    "claim": null,
    "rct": "4.4.23",
    "anchor": 2,
    "info": null
  },
  "islecrystaldreams": {
    "name": "Isle of Crystal Dreams",
    "parent": "sunlesssea",
    "claim": null,
    "rct": "2.5.35",
    "anchor": 34,
    "info": null
  },
  "cityvioletgeometries": {
    "name": "City of Violet Geometries",
    "parent": "sunlesssea",
    "claim": "aboleth",
    "rct": "3.3.35",
    "anchor": 3,
    "info": null
  },
}

const data = Object.entries(REALMS).map(R => {
  let realm = Object.assign({id:R[0]},R[1])
  let children = [] 

  //add regions 
  Object.entries(REGIONS).forEach(r => {
    let region = Object.assign({id:r[0]},r[1])
    //check if region is in realm 
    if(r[1].parent == realm.id) {
      let rc = []
      //now run shards 
      Object.entries(SHARDS).forEach(s => {
        let shard = Object.assign({id:s[0]},s[1])
        if(shard.parent == region.id) rc.push(shard)
      })
      region.children = rc.slice()
      children.push(region)
    }
  })
  realm.children = children

  return realm
})

export {data}