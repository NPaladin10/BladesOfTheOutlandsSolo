import {tables} from "./generatorTables.js"
import {regionGen} from "./region-gen.js"
import {data as coreFactions} from "./factions-core.js"
import * as frontsData from "./fronts-data.js"

const about = `
<div class="m-1 p-2" align="left">
    <h2>Welcome</h2>
        <p>The Outlands is a high adventure science fantasy setting. 
        Our goal was to create a Sword and Planet setting inspired by Planescape 
        but blend in aspects of Star Wars. At is core the Outlands is about 
        shard (*plane*) hopping exploration and adventure across amazing, 
        improbable and varied landscapes inspired by myth and legend.</p>
        <p>The Outlands is a transitive plane created from a cosmic scale 
        shattering of worlds that happened countless ages ago. It enables 
        quick and secretive travel (within days instead of weeks) between 
        the worlds of the far flung galaxies of the Known Universe. Adventure 
        awaits those brave enough to face the shifting nature of the Outlands 
        and navigate its Ways.</p>
        <p>Magic is high technology - it is all present and permeates every 
        facet of daily life. Plots and intrigue abound as cosmically powered 
        entities like elementals, titans, draconic god-wyrms and Byzantine 
        multi-planar factions all compete for power or control. Even with the 
        factions, in general, the Outlands is a wild, untamable, unpredictable 
        and ever shifting wilderness where only the brave venture out from 
        established safe harbors. But for those who know and can learn the Ways, 
        life in the Outlands can be very rich. And the possibilities for heroism 
        are endless, whether it is rescuing a city from the ravages of a leviathan
         kaiju, helping clear a ruin from the Second Cosmic War, or aiding the 
         resistance in their fight against a despotic immortal.</p>
        <p>The Outlands is open to you. What adventures will you create?</p>
    <h3>Thanks</h3>
    <p>This game is only possible because of the hard work of others. It pulls 
    many of its concepts and mechanics from other sources. </p>
    <ul><strong>
        <li>Concept: <em>Planesecape</em></li>
        <li>Core Rules: </li>
        <li>Pointcrawl: <em>Downcrawl</em></li>
        <li>Generators of all kinds: <em>The Perilous Wilds</em> </li>
        <li>Fronts / Plots: <em>Dungeon World</em> </li>
        </strong>
    </ul>
    <div class="m-1">
        <button type="button" class="btn btn-block btn-info" @click="show('outlands')">Outlands - Overview</button>
        <button type="button" class="btn btn-block btn-info" @click="show('setting')">Outlands - Setting</button>
        <button type="button" class="btn btn-block btn-info" @click="show('factions')">Factions</button>
        <button type="button" class="btn btn-block btn-info" @click="show('rules')">Rules</button>
        <button type="button" class="btn btn-block btn-info" @click="show('generators')">Generators</button>
        <button type="button" class="btn btn-block btn-info" @click="show('trouble-map')">Trouble</button>
        <button type="button" class="btn btn-block btn-info" @click="show('squads')">Squads</button>
        <button type="button" class="btn btn-block btn-info" @click="show('squadextras')">Extras: Heroes & Gear</button>
        <button type="button" class="btn btn-block btn-info" data-toggle="collapse" data-target="#attribution" >Attribution</button>
    </div>
    <div id="attribution" class="collapse p-2">
        <p>The name Outlands Hack and all layout is copyright ©2019 Nathan Ellsworth.</p>
        <p>Many of entries in the generation tables come from <em>The Perilous Wilds</em> by Jason Lutes and Jeremy Strandberg, licensed under a Creative Commons Attribution-ShareAlike 3.0 Unported license.</p>
        <p>The fronts used in the factions and their plots come from <em>Dungeon World</em> by Sage LaTorra and Adam Koebel and licensed under the Creative Commons Attribution 3.0 Unported License.</p>
        <p>The text of <em>Outlands Hack</em> is released under a Creative Commons Attribution-ShareAlike 3.0 Unported license.</p>
    </div>
</div>
`

const outlands = `
<div class="m-1 p-1" align="left">
    <h2>The Outlands</h2>
    <p>The focus of the setting is a mythic point crawl where the heroes seek 
    to discover new shards, the people that inhabit them, and rise to the 
    challenges that they encounter. Running a game on the Outlands requires 
    getting into the right mindset. The following statements should create a basis 
    for all the fiction that you create for your games.</p>    
    <p><strong>The Outlands is vast.</strong></br>
    It is unmappable and infinite. The Outlands is like a mass of soap bubbles 
    floating atop a body of water. While each bubble holds a specific shard of 
    definite size (between 5 and 100 square miles in area), the number of shards 
    is unknown. Navigation is hard, even between familiar waypoints. Rather than 
    a fixed set of races and enemies, there are a boundless number of cultures, 
    powers, and threats.</p>
    <p><strong>The Outlands is challenging.</strong></br>
    Creatures, myths and dreams themselves, and hostile factions roam freely. 
    Regions and shards may morph over time. Distances between shards are 
    indefinite while compasses don’t work. Ways once clear and navigable might
     be lost or twist toward new, unstable destinations. There are few completely 
     safe spaces.</p>
     <p><strong>The Outlands is mythic and weird.</strong></br>
     Take places from myths all over the world (not just the Greek and Norse 
     that most are familiar with), and throw them in a pot. Add a dash of 
     Alice in Wonderland, Lovecraft’s Dream Cycle, Miéville, Spielberg, and 
     Lucas. What happens when myths collide? What does tech so advanced that 
     it may as well be magic look like? People are not just the plethora of 
     humanoid variants but also a myriad of xenospecies, sentient animals, 
     plants, constructs and even living elements. Scenes from stories come 
     alive: courts of fey dancing in the dusk; titanic beasts slumbering in 
     the husks of leveled cities; tombs of forgotten cosmic civilizations; 
     underwater cities/sky palaces/stalactite towers plunging into a luminescent 
     subterranean sea; feral, living forests; and the forgotten ruins of history 
     crumbling before your eyes.    
    <h3>The Map</h3>
    <p>Maps in the Outlands are ephemeral, unstable, and unbounded in terms of 
    direction and dimension. This is a pointcrawl where each point of interest 
    is called a shard, and there are no fixed distances between them. Just 
    because shards share the same region does not mean that they are physically 
    close, nor that there’s easy travel between them. Adjacency is instead 
    represented by the ways that connect them.</p>
    <h3>Realms and Regions</h3>
    <p>In the beginning it is said there was only one realm: the Outlands. All 
    the shards existed within it and travel to all was possible by navigating the 
    ways – some known, but most were secret. Now there are four realms: Outlands, 
    Celestia, Gehenna, and the Underdark, but most still refer to all of the 
    realms collectively as the Outlands. Perhaps the segregation happened through 
    the actions of the cosmics, but no one knows for sure. The reality is that 
    the realm structure complicates travel and it has further segmented the 
    cultures and people. </p>
    <p>Regions are a further delineation within the realms. The shards in a region 
    have similar terrains that creates a theme. Traveling between two locations 
    within a region is also faster than going to another shard within the realm.</p>
    <h3>Ways</h3>
    <p>Shards are not linked by cardinal directions but by shaky and changing routes, 
    nicknamed ways: perhaps temporary, definitely circuitous. Navigating the ways can 
    be perilous because it is very easy to get lost. Outside of the stability 
    provided by a shard’s anchor, directions and distances are meaningless due 
    to the constantly shifting fabric of the Outlands. The more traveled the way, 
    and the more information learned about the destination before setting out, the 
    easier it is to arrive. The locals of a shard often know of a couple ways, but 
    it is possible to be trained to find and navigate “new” ways that are just 
    waiting to be mapped. While old ways might vanish as the heroes adventure and 
    cosmic beings flex their might.</p>
    <p>Navigating between shards is only possible within a realm. For example, 
    one can travel between the City of Shells and Faunel because they are both 
    in the Outlands. But, there are no known ways between Faunel and the City of
    Brass (in Gehenna). And it is highly improbable that the heroes can find/map 
    a new way to link the two. In order to move between realms travelers must go 
    to the specific gateway shards that have established ways.</p> 
    <h3>Shards</h3>
    <p>Shards are the islands of stability within the flux of the Outland’s 
    shifting geography. Its terrain is influenced by the shard’s region, but 
    within a shard is dominated by a specific anchor, be it cultural, 
    geographical, or biological. An anchor may be a single city, a misty valley, 
    a million branching labyrinth-like chasm, the skeleton of a dead titan, or 
    the forgotten factory of a forgotten cosmic civilization. Outside this a 
    trackless, feral wilderness in a variety of terrains – estuaries, mountain 
    cliffs, swamps, rolling plains - awaits those that dare to leave a shard. </p>
    <p>The Outlands is a wild place - many shards remain undeveloped. Unless 
    a shard has a town or a site, the population will be limited to <1000 people. 
    For every new shard roll on the region’s encounter table - the result is 
    the faction that currently claims it. Even undeveloped shards may be 
    claimed. If the result is “Local”, no faction currently claims the shard. 
    A claim does not mean other factions can’t be found in the shard, but they 
    don’t have a strong enough base to make it theirs. </p>
    <h3>Encounters</h3>
    <p>When in need of an encounter, either on a shard or when using a way each 
    region provides an encounter table. Simply roll 2d10 and consult the table. 
    Use the table even on undeveloped shards. Assume the result is there for 
    the same reason as the heroes - they are seeking/guarding what the heroes 
    are after. </p>  
    <h3>Resources</h3>
    <p>Shards may be well known or in dire need for various resources. Instead 
    of a detailed list of every mineral type and trinket that a shard 
    produces/needs, resources are lumped into broad categories. Also, resources 
    are not always physical - it could be an issue of manpower or even a 
    cultural state of mind. </p>
    <p>Possible resources include: Artisans, Barter Goods, Crops, Defenses, 
    Energy, Engineering, Fresh Water, Justice, Land, Leadership, Luxury, 
    Medicine, Morale, Prestige, Scholars, Rare Materials, Recruits, Safety, 
    Scouts, Spies, Trade, Transport, Warriors, and Wealth.</p>
    <h3>Trouble </h3>
    <p>Trouble is what drives adventure. A shard may have any number of 
    troubles that heroes can opt to challenge to win the hearts and minds of 
    the locals. Trouble will be a short description, a level and a number of 
    challenges. Once the heroes have had a number of encounters corresponding 
    to the challenges the trouble is defeated.  </p>
    <p>Challenges types include: Build, Convince, Discover, Endure, Fight, 
    Prowl, and Research. </p>
    <h3>Tech</h3>
    <p>The tech available is a mish-mash of relics, local manufacture, and 
    new cosmic tech (nicknamed c-tech) from the Outside. Local manufacturing 
    across the Outlands is capable of producing gear a little more advanced 
    than modern day. While c-tech is equivalent to what is seen in the Star Wars 
    franchise. Relics are unique pieces from before the Cosmic War that grant 
    supernatural powers. C-tech is rare and relics are very rare and both draw 
    attention to their owners. Shards with a large faction presence have more 
    cosmic level tech in use and available than the rest.</p>
</div>
`

let powerTable = ""
/*
Object.entries(powers).map(p=> {
    //<td>Red</td><td>Ruby</td>
    return ["<tr><td>",p[0],"</td>","<td>",p[1].description,"</td></tr>"].join("")
}).join("")
*/


const genTables = {}
for(let x in tables) {
    let T = tables[x]

    //create one row with sub columns
    let row = T.data.map(data => {
        //start column - loop through sub rows in column 
        let col = data.map(d=> {
            //start sub row 
            let subrow = d.map((sub,j) => {
                let span = j == 1 ? `<span align="right"` : `<span`
                let nowrap = j == 0 && sub.includes("-") ? ` style="white-space: nowrap;"` : ""
                span += nowrap+">"
                return span + sub+`</span>`
              }).join("")
            
            //end subrow 
            return `<div class="d-flex justify-content-between p-1">`+subrow+`</div>`
          }).join("")   
        
        //end row
        return `<div class="col table-gen">`+col+`</div>`
    }).join("")
    
    genTables[x] = `<div class="container mb-2"><div class="row">`+row+`</div></div>`
}


const rules = `
<div class="m-1 p-1" align="left">
    <h2>Rules</h2>
    <ul>
        <li><a href="#journeys">Journeys Between Shards</a></li>
        <li><a href="#money">Cosmic & Money</a></li>
        <li><a href="#weapons">Weapons</a> & <a href="#armor">Armor</a></li>
    </ul>

    <h3 id="journeys">Journeys Between Shards</h3>
    <p>Travelling between two <bi>shards</bi> within the same <bi>region</bi> 
    takes 1d4+1 <bi>days</bi>. Travelling between <bi>shards</bi> in different 
    <bi>regions</bi> takes 2d4+2 <bi>days</bi>. Travel between <bi>shards</bi> 
    in two different <bi>realms</bi> is impossible, unless there is a known 
    <bi>way</bi>, then the journey takes 2d6+2 <bi>days</bi>. The travel time 
    is modified by the following conditions:
    <ul>
        <li>If a <bi>way</bi> connects the two <em>cut the time in half</em>.</li>
        <li>If destination is not connected to the origin, but a <bi>way</bi> connects 
        the destination to another <bi>shard</bi> <em>subtract one</em> <bi>day</bi>.</li>
        <li>If <em>half or more</em> of the heroes have visited the destination before 
        <em>cut the time in half</em>.</li>
        <li>If <em>any but less than half</em> have visited the destination 
        <em>subtract one <em><bi>day</bi>.</li>
    </ul>
    <p><em>Round fractions down, but the time cannot be less than one <bi>day</bi>. </em></p>
    <h3>Challenges and Progress</h3>
    <p>Every <bi>day</bi> of the <bi>journey</bi>, the heroes must face a 
    <bi>challenge</bi>. Roll 2d12 and consult the <bi>Challenge Generator</bi> 
    to determine the <bi>skill check / saving throw</bi> to use and give the challenge a difficulty (12+1d8). 
    Procede based on whether the result is a skill or saving throw:
    <ul>
        <li>For a skill:
            <ul>
                <li>One hero rolls at a time until there is success.</li>
                <li>Only one hero must succeed to progress.</li>
            </ul>
        </li>
        <li>For a saving throw:
            <ul>
                <li>All heroes must roll.</li>
                <li>All heroes must succeed to progress.</li>
            </ul>
        </li>
    </ul>
    If any hero fails a roll, they take damage based on the difficulty: 5 x (DC-10). If the heroes make 
    progress reduce the travel time by one <bi>day</bi>. After the number of <bi>days</bi> reach 0 the heroes reach 
    their destination.</p>
    <div align="center"><h4>Challenge Generator<h4></div>
    `+genTables.challenge+`

    <h3>Resting on a Way</h3>
    <p>Heroes may/should <bi>rest overnight</bi> after a <bi>challenge</bi>, 
    but resting on a <bi>way</bi> is never as effective as resting in the 
    relative safety of a town. When they <bi>rest overnight on a way</bi> 
    they only recover HP equal to their  Constitution modifier (minimum 1) times half
    their level. 
    </p>

    <h3 id="money">Cosmic & Money</h3>
    <p><em>Essence of raw creation; quantum nanomaterial; money; solidified 
    potential; the glow; ultra-dense energy; diamond; harnessed probability; 
    power; cosmic is all of these things and more. </em></p>
    <p>Due to the nature of the Outlands, there is no uniform currency, but 
    <bi>cosmic</bi> is a widely accepted medium of exchange and a uniform store of value. 
    Any market and every port will expect the buyer to haggle and barter, but 
    underpinning the main trade some <bi>cosmic</bi> always changes hands. People 
    carry small, half a pen, glass/quartz spindles imprinted with <bi>cosmic</bi> and 
    thumb sized devices are used to transfer it between spindles. THe basic measure of
    cosmic is the <bi>Quint (Q)</bi>.</p>
    
    <p>Cosmic became this medium exchange because of its usefulness. 
    If cosmic is refined, Heroes can use it three direct ways:
    <ul>
        <li><bi>Healing (1d4x200 Q):</bi> The hero regains 2d4+2 HP.</li>
        <li><bi>Fuel (1d6x10 Q):</bi> The hero does not need to eat for a Week.</li>
        <li><bi>Channel (1d6x100 Q):</bi> Roll the cosmic’s Usage Die and select one of the 
        following benefits:
            <ul>
            <li>Add 1d6 to an Attribute Test </li>
            <li>Add 1d6 to the hero’s Damage Roll </li> 
            <li>Reduce damage to the hero by 1d6</li>
            </ul>
        </li>
    </ul>
    </p>

    <p>Cosmic can also be refined into hues, it is less expensive than 
    pure, but this limits its usefulness to certain situations. It can 
    only be Channeled and then only if one of its Tags applies 
    to the Action, but the end effect is the same. The slang for cosmic 
    is based on gemstones - pure is known as diamond and the rest are 
    linked to their color. The table below outlines the hues, gemstone
    name, and tags of cosmic.</p>

    <div align="center"><h4>Cosmic Hues<h4></div>
    <table class="mb-2" style="width:100%;">
      <tr>
        <th>Hue</th>
        <th>Gem</th>
        <th>Tags</th>
      </tr>
      <tr>
        <td>Red</td>
        <td>Ruby</td>
        <td>Charisma, Evocation, Fire, Light</td>
      </tr>
      <tr>
        <td>Orange</td>
        <td>Citrine</td>
        <td>Dexterity, Illusion,Summoning, Air, Storm</td>
      </tr>
      <tr>
        <td>Yellow</td>
        <td>Topaz</td>
        <td>Strength, Abjuration, Enchantment, Earth</td>
      </tr>
      <tr>
        <td>Green</td>
        <td>Emerald</td>
        <td>Constitution, Transmutation, Life, Plants</td>
      </tr>
      <tr>
        <td>Blue</td>
        <td>Sapphire</td>
        <td>Intelligence, Divination, Water, Ice</td>
      </tr>
      <tr>
        <td>Violet</td>
        <td>Amethyst</td>
        <td>Wisdom, Necromancy, Death, Shadow</td>
      </tr>
    </table>

    <h3 id="weapons">Weapons</h3>
    <p>Weapons are varied and dangerous. Pointy and sharp metal is standard across the Outlands, but 
    technology has enabled an amazing variety of instruments of destruction. </p>

    <h3 id="armor">Armor</h3>
    <p>Just like weapons, armor comes in many forms from thick metal plate to shimmering 
    screens of pure force.</p>

</div>
`

const generators = `
<div class="m-1 p-1" align="left">
    <h2>Generators</h2>
    <p>Generators help you detail and populate the Outlands. These generators focus on a shard’s anchor. Follow the guidelines of each region to generate the terrain and anchor type of the shard, and then use these generators to further define the anchor. </p>
    
    <div class="border p-1 m-1">
    <h3>Town</h3>
    <p>Towns are centers of Outlands population. They are compact and built vertically - there are very few sprawling suburban neighborhoods due to the area constraints of the shards. Shards with a town have little unclaimed space and anything without a building is a park or farm for the locals.</p>
    <p>Their inhabitants and styles are as varied as the Outlands itself. Even in small towns can have 1d4+1 different people groups, and cities are full of a myriad of people groups. Architecture is often a blend just like the people, but a town that has a large faction presence will feature their styles.</p>
    <p>Determine who claims the town by rolling on the realm’s Encounter table. If Local is rolled, the final result is always People. Next, determine the size of the city by rolling a d12 and consulting the list below. </p>
    <p>Size (d12): 1-2 Small Town (<10,000), 3-8 Mid-sized Town (<200,000), 9-11 City (<2 million), 12 Mega-city (2+ million)</p>
    <p>Now roll a d6, on an even result the city actually dates back to before the Second Cosmic War. These towns often have sites (or even ruins) from before the Shattering. </p>
    </div>
    
    <div class="border p-1 m-1">
    <h3>Terrain</h3>
    <p>When the terrain is the anchor, the shard features an impressive or unique terrain feature. Make it grand, mythic, or weird. It isn’t just a mountain - its a mountain split in two by a massive orbital strike. A forest is one where the trees drip starlight.</p>
    <p>Roll 2d12: the first d12 determines its category - go to that column, while the second describes the subcategory - go to that row. Take the shard’s terrain into account when creating the feature. </p>
    <div align="center"><h4>Terrain Generator<h4></div>
    `+genTables.terrain+`
    </div>

    <div class="border p-1 m-1">
    <h3>Site</h3>
    <p>Sites are focal points of Outlands civilization. They are not towns, but they see regular visitors, and they may even be inhabited all the time (the population limit is ~2000). </p>
    <p>Roll 2d12+1d6 to determine why the site is important. The first d12 determines its category - go to that column, while the second describes the subcategory - go to that row. If the d6 is even the site actually dates back to before the Second Cosmic War and the Shattering.</p>
    <div align="center"><h4>Site Generator<h4></div>
    `+genTables.site+`
    </div>

    <div class="border p-1 m-1">
    <h3>Lair</h3>
    <p>Lairs are places where danger lurks. This danger may not be currently hostile towards the heroes, or it could be slumbering. Alternatively it could be a place filled with beasts dripping venom and ready to tear any intruder apart.  </p>
    <p>This table can be used in two different ways: either roll 2d12 and consult the table below. Or roll on the realm’s encounter table - to determine who the lair belongs to - and then roll a d12 and consult the appropriate row. If a ruin result is rolled - the beings have taken up residence in a ruin - use the ruin generator below.</p>
    <div align="center"><h4>Lair Generator<h4></div>
    `+genTables.lair+`
    </div>

    <div class="border p-1 m-1">
    <h3>Ruin</h3>
    <p>Ruins are the remnants of the uncountable worlds before they were shattered. Almost all of the worlds were advanced cosmic societies - shape the ruins accordingly. Huge bridges, shattered skyscrapers, sprawling overgrown universities, abandoned quantum widget factories. Think big, once glittering and majestic, and tech so advanced that it seems like magic. </p>
    <p>Roll 2d12+1d4: the first d12 determines its category - go to that column, while the second describes the subcategory - go to that row. If the d4 is a 4 the ruin is a “dungeon” it has sunk/been covered and most of it is located underground. </p>
    <p>If the shard is the ruin of a town, it will be a huge and sprawling site - today a mid sized town can easily be over the 100 sq mi cap of a shard. Heroes could easily find 1d4+1 ruined structures/sites on the shard. The size of the town flavors the type of structures that may be found. Roll as above, but use 1d10+1d12+1d4 - the d10 determines the category/column.</p>
    <div align="center"><h4>Ruin Generator<h4></div>
    `+genTables.ruin+`
    </div>

    <div class="border p-1 m-1">
    <h3>People</h3>
    <p>People is a general word to describe any sentient, thinking being. The form people take is varied and, thanks to cosmic influence, does not have to follow natural biology.</p>
    <p>Roll 2d12 and consult the table below. The first d12 determines whether the people are elemental, robotic or biological. The second d12 determines the form they take. Elemental people are either living elements that take a particular form (biological/construct) or a biological being that has elemental traits. For all elemental people roll on the Element table to determine their element. Construct people are sentient beings constructed by another - these could be far future robots or mystic golems. They are definitely not biological and look artificial - even if they have a biological form. Biological people are beings comprised of living cells - a living being as we know it. Biologics can take many forms - from completely bland humans to sentient turkey-squirrels with telekinetic powers.</p>
    <div align="center"><h4>People Generator<h4></div>
    `+genTables.people+`
    <p>Now determine their size (d12): 1-3 Small, 4-9 Medium, 10-11 Large, 12 Huge. 
    </br>Humanoid examples: human, elf, dwarf, orc, ogre, goblin, klingon, vulcan, etc. 
    </p>
    </div>

    <div class="border p-1 m-1">
    <h3>Beasts</h3>
    <p>Roll 2d12 and consult the table below. The first d12 determines the natural habitat and the second determines the general form. Use this as a base and make it unique/weird/mythic.</p>
    `+genTables.beast+`
    <p>Now determine their size (d12): 1 Tiny, 2-3 Small, 4-9 Medium, 10-11 Large, 12 Huge. </p>
    <p>Modifications can be made:
    <ul>
        <li>Hybrid: Roll twice and combine results</li>
        <li>Chimera: Roll three times</li>
        <li>Elemental: Element + Beast </li>
        <li>Draconic: Snake/Lizard/Bat + Beast + Element + Large/Huge</li>
    </ul>
    </p>
    </div>

    <div class="border p-1 m-1">
    <h3>Details</h3>
    <p>Extra details that can be added to any of the above generators to make them unique. The other generators may also refer to the table below by their column heading. </p>
    `+genTables.element+`
    `+genTables.magic+`
    `+genTables.aspect+`
    <p></p>
    </div>

    <div class="border p-1 m-1">
    <h3>Faction Front Plots</h3>
    <div v-for="fp in frontPlots" align="center" class="mb-4">
        <h4>{{fp.id}} Plots</h4>
        <div class="font-weight-bold">Plots for: {{frontTypes[fp.id].join(', ')}}</div>
        <div class="container table-gen" >
            <div class="row table-gen">
                <div class="col-2">Roll (1d12)</div>
                <div class="col">Plot</div>
            </div>
            <div v-for="p in fp.plots" class="row table-gen">
                <div class="col-2">{{p[0]}}</div>
                <div class="col">{{p[1]}}</div>
            </div>
        </div>
    </div>
    </div>
</div>
`

const faction = `
<div class="border m-1 p-1" align="left">
    <h2>{{faction.name}}</h2>
    <div v-html="faction.info"></div>
    <h4 align="center">{{faction.name}} Fronts</h4>
    <div class="container table-gen my-2">
        <div class="row table-gen">
            <div class="col">Roll (d20)</div>
            <div class="col">Front</div>
        </div>
        <div v-for="(f,i) in fronts" class="row table-gen">
            <div class="col-2">{{faction.frontsP[i]}}</div>
            <div class="col">{{f.name}} <em>(impulse: {{f.impulse}})</em></div>
        </div>
    </div>
    <h4 align="center">Forces</h4>
    <div class="container table-gen" align="center">
        <div class="row table-gen">
            <div class="col">CR</div>
            <div class="col">Creature</div>
        </div>
        <div v-for="fcr in forcesByCR" class="row table-gen">
            <div class="col">
                <span v-if="fcr[0]!=-1">{{fcr[0]}}</span>
                <span v-else>unassigned</span>
            </div>
            <div class="col d-flex">
                <div class="px-1" v-for="f in fcr[1]">
                    <div v-if="f.abilities" class="dashed pointer" @click="showForces.push(f)">{{f.name}}</div>
                    <div v-else>{{f.name}}</div>
                </div>
            </div>
        </div>
    </div>
    <div class="d-flex">
        
    </div>
    <force :forces="showForces"></force>
</div>
`

const factions = `
<div class="m-1 p-1" align="left">
    <faction v-for="F in factions" :faction="F"></faction>
</div>
`

const forces = `
<div class="m-1 p-1" align="left">
    <div class="container table-gen" align="center">
        <div class="row table-gen">
            <div class="col" align="left">Name</div>
            <div class="col">HD</div>
            <div class="col">AC</div>
            <div class="col">ATK</div>
            <div class="col">DMG</div>
            <div class="col">Morale</div>
            <div class="col">Move</div>
        </div>
        <div v-for="(f,i) in forces" class="row table-gen">
            <div class="col" align="left">{{f.name}}</div>
            <div class="col">{{f.HD}}</div>
            <div class="col">{{f.AC}}</div>
            <div class="col">{{f.atk}}</div>
            <div class="col">{{f.dmg}}</div>
            <div class="col">{{f.ml}}</div>
            <div class="col">{{f.mv}}</div>
        </div>
    </div>
</div>
`


/* 
UI 
*/
const UI = (app)=>{

  Vue.component("about",{
    template: about,
    methods : {
        show (what) {
            app.UI.main.show = what
        }
    }
  })
  Vue.component("outlands",{
    template: outlands,
  })
  Vue.component("rules",{
    template: rules,
    data: function() {
      return {}
    },
  })
  Vue.component("generators",{
    template: generators,
    data: function() {
      return {
          frontTypes : frontsData.TYPES,
        frontPlots : frontsData.plots,
      }
    },
  })
  
  Vue.component("factions",{
    template: factions,
    data: function() {
      return {
        factions : [],
      }
    },
    mounted() {
      this.factions = coreFactions.slice()
    },
  })
  Vue.component("faction",{
    template: faction,
    props : ["faction"],
    data: function() {
      return {
        showForces : [],
      }
    },
    computed : {
        fronts () { 
            let f = this.faction.fronts || []
            return f.map(fid => {
                return {
                    name: frontsData.FRONTS[fid-1].front,
                    impulse: frontsData.FRONTS[fid-1].impulse
                }
            })
        }, 
        forcesByCR () { return [] }
    }
  })
  Vue.component("forces",{
    template: forces,
    data: function() {
      return {
        forces : [],
      }
    },
  })
}

export {UI}
