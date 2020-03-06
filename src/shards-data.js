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

//  RESOURCES
const RESOURCES = ["Artisans", "Barter Goods", "Crops", "Defenses", "Energy", "Engineering", "Fresh Water", "Justice", "Land", "Leadership", "Luxury", "Medicine", "Morale", "Prestige", "Scholars", "Rare Materials", "Recruits", "Safety", "Scouts", "Spies", "Trade", "Transport", "Warriors", "Wealth"]

const THEMES = {
  neutral: ["Mecca", "Lap of Luxury", "Colony", "Kingdom", "Empire", "Booming", "Gears and Mechanisms", "Rare Resource", "Radical Lifestyle", "Great City", "Second Chance", "Scattered Holdfasts", "Exiles", "Lazy Villages", "Melting Pot", "Library", "Prison", "Rare Magic", "Crusaders", "Barely Contained Magic", "Monster City", "Weird City", "University", "Legendary", "Lair", "Crossroads", "Monumental Project", "Grand Market", "Utopia", "Last Bastion", "Mining Operation", "Trading Post", "Holy Site", "*Mages", "*Artists", "*Farmers", "*Undead", "*Elementals", "*Sages", "*Merchants", "*Soldiers", "*Nomads", "*Priests", "*Engineers"],
  bad: ["Anarchy", "War Zone", "Rebellion", "Poverty", "In Decline", "Cultural Upheaval", "Necropolis", "Failed State", "Isolationist", "Rival Forces", "Forbidden Knowledge", "Dictator", "Impending Doom", "Decadent", "Quarantined", "Ruined by Magic", "Wasteland"],
  people: ["Ruleds by", "Famous for", "Hostile to", "Unusual"]
}

/*
  Terrain and Weather
*/

const TERRAINS = ['Lakeshore', 'Island', 'Riverside', 'Forest', 'Swamp', 'Cove', 'Costal Beach', 'Cliffs', 'Mangroves', 'Dunes', 'Highlands', 'Scrub', 'Dry Lakebed', 'Hills', 'Plains', 'Forested Hills', 'Mountains', 'Forest Valley', 'Rolling Hills', 'Valley', 'Pass', 'Plateau', 'Chasm', 'Caldera', 'Cove', 'Rocky Reef', 'Atoll', 'Shallows', 'Reef', 'Deep Water', 'Large Rough Cavern', 'Large Worn Cavern', 'Worn Cavern Network', 'Underground River', 'Underground Lake', 'Winding Tangle', 'Branching Tunnels', 'Layered Tunnels', 'Earthburg', 'Kelp Forest', 'Current Confluence', 'Open Water', 'Snow Plain', 'Ice Peak', 'Frozen Lake']

const TERRAINGEN = {
  lake: [["Lakeshore", "Island", "Riverside", "Forest", "Swamp"], [4, 1, 2, 2, 1]],
  coast: [["Cove", "Costal Beach", "Island", "Cliffs", "Mangroves"], [3, 3, 1, 2, 1]],
  desert: [["Dunes", "Highlands", "Scrub", "Dry Lakebed", "Hills"], [3, 1, 3, 1, 2]],
  forest: [["Forest", "Riverside", "Swamp", "Plains", "Forested Hills", "Forest Valley"], [4, 1, 1, 1, 1, 1]],
  plain: [["Plain", "Rolling Hills", "Riverside", "Valley"], [4, 3, 2, 1]],
  mountain: [["Valley", "Cliffs", "Pass", "Plateau", "Chasm"], [3, 3, 1, 2, 1]],
  volcano: [["Valley", "Cliffs", "Caldera"], [3, 5, 2]],
  archipelago: [["Island", "Cove", "Costal Beach", "Rocky Reef"], [4, 1, 3, 2]],
  ocean: [["Island", "Atol", "Shallows", "Reef", "Open Water"], [2, 2, 2, 1, 3]],
  cavern: [["Large Rough Cavern", "Large Worn Cavern", "Worn Cavern Network", "Underground River", "Underground Lake"], [2, 3, 3, 1, 1]],
  tunnel: [["Winding Tangle", "Branching Tunnels", "Layered Tunnels", "Underground River"], [3, 3, 2, 2]],
  underwater: [["Reef", "Earthberg", "Kelp Forest", "Current Confluence", "Open Water"], [2, 2, 2, 2, 2]],
  frozen: [["Snow Plain", "Ice Peak", "Chasm", "Hills", "Frozen Lake"], [3, 1, 1, 3, 2]],
}

const CLIMATE = {
  climate: ["Arctic", "Sub-arctic", "Temperate", "Sub-tropical", "Tropical"],
  rain: ["Rainy", "Seasonal Rain", "Standard Rain", "Arid"]
}

/*
  Anchors
*/
const ANCHORS = ['Town.Small Town (<10,000)', 'Town.Mid-sized Town (<200,000)', 'Town.City (<2 million)', 'Town.Mega-city (2+ million)', 'Terrain.Landmark.Water-based (waterfall,geyser,etc.)', 'Terrain.Landmark.Plant-based (ancient tree, giant flowers, etc.)', 'Terrain.Landmark.Earth-based (peak,formation, crater, etc.)', 'Terrain.Obstacle.Water-based (rapids, whirlpools, waterfalls, etc)', 'Terrain.Obstacle.Plant-based (dangerous plants, thick jungle, etc)', 'Terrain.Obstacle.Earth-based (peak,cliff, chasm, ravine, etc)', 'Terrain.Resource.Game/Fruit/Vegetable', 'Terrain.Resource.Herb/Spice/Dye Source', 'Terrain.Resource.Timber/Stone', 'Terrain.Resource.Ore/Precious Metal/Gems', 'Terrain.Resource.Cosmic', 'Site.Infrastructure.Crossroads', 'Site.Infrastructure.Bridge', 'Site.Infrastructure.Mine/Quarry', 'Site.Infrastructure.Factory/Warehouse', 'Site.Infrastructure.Airport/Sea port', 'Site.Religious.Graveyard/Necropolis', 'Site.Religious.Tomb/Crypt', 'Site.Religious.Temple/Retreat', 'Site.Religious.Great Temple', 'Site.Structure.Sports', 'Site.Structure.Farm/Estate', 'Site.Structure.Tower/Keep/Outpost', 'Site.Structure.Prison', 'Site.Structure.Library/Museum/School', 'Site.Structure.Factory/Warehouse', 'Site.Structure.Neighborhood', 'Site.Structure.Skyscraper', 'Site.Unnatural.Arcane Blight', 'Site.Unnatural.Arcane Enchantment', 'Site.Unnatural.Arcane Source', 'Site.Unnatural.Distortion/Warp', 'Site.Unnatural.Rift/Portal', 'Lair.Beast.Burrow', 'Lair.Beast.Cave/Tunnels', 'Lair.Beast.Nest/Aerie', 'Lair.Beast.Hive', 'Lair.Beast.Ruin', 'Lair.People.Mine/Quarry', 'Lair.People.Bunkers', 'Lair.People.Factory/Warehouse', 'Lair.People.Temple/Retreat', 'Lair.People.Estate', 'Lair.People.Tower/Keep/Outpost', 'Lair.People.Ruin', 'Lair.Faction.Mine/Quarry', 'Lair.Faction.Bunkers', 'Lair.Faction.Factory/Warehouse', 'Lair.Faction.Temple/Retreat', 'Lair.Faction.Estate', 'Lair.Faction.Tower/Keep/Outpost', 'Lair.Faction.Ruin', 'Ruin.Enigmatic.Earthworks', 'Ruin.Enigmatic.Megalith', 'Ruin.Enigmatic.Statue', 'Ruin.Enigmatic.Source/Portal', 'Ruin.Enigmatic.Oddity', 'Ruin.Infrastructure.Road Interchange', 'Ruin.Infrastructure.Bridge', 'Ruin.Infrastructure.Mine/Quarry', 'Ruin.Infrastructure.Bunkers', 'Ruin.Infrastructure.Aqueduct/Canal', 'Ruin.Infrastructure.Factory/Warehouse', 'Ruin.Infrastructure.Airport/Sea port', 'Ruin.Religious.Barrow', 'Ruin.Religious.Graveyard/Necropolis', 'Ruin.Religious.Tomb/Crypt', 'Ruin.Religious.Temple/Retreat', 'Ruin.Religious.Great Temple', 'Ruin.Structure.Sports', 'Ruin.Structure.Farm/Estate/Tower', 'Ruin.Structure.Prison', 'Ruin.Structure.Library/Museum/School', 'Ruin.Structure.Factory/Warehouse', 'Ruin.Structure.Neighborhood', 'Ruin.Structure.Skyscraper', 'Ruin.Town.Small Town (<10,000)', 'Ruin.Town.Mid-sized Town (<200,000)', 'Ruin.Town.City (<2 million)', 'Ruin.Town.Mega-city (10+ million)']

//SECTOR or REGION 
const nameGen = (rng) => {
  let name = [], style, scheme;
  style = [["adjective", "terrain"], ["terrain", "of (the)", "noun"], ["The", "terrain", "adjective"], ["noun", "terrain"], ["noun", "adjective", "terrain"], ["adjective", "terrain", "of (the)", "noun"]]
  
  scheme = rng.weighted(style, [4, 2, 2, 2, 1, 1])
  scheme.forEach(what=>{
    if (REGIONDESCRIPTORS[what]) name.push(rng.pickone(REGIONDESCRIPTORS[what]))
    else name.push(what)
  }) 
}

export {CLIMATE,TERRAINS,ANCHORS}
