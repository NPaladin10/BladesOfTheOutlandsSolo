const FRONTS = [
  {
    "front": "Misguided Good",
    "impulse": "to do what is “right” no matter the cost",
    "type": "Ambitious Organizations"
  },
  {
    "front": "Thieves Guild",
    "impulse": "to take by subterfuge",
    "type": "Ambitious Organizations"
  },
  {
    "front": "Cult",
    "impulse": "to infest from within",
    "type": "Ambitious Organizations"
  },
  {
    "front": "Religious Organization",
    "impulse": "to establish and follow doctrine",
    "type": "Ambitious Organizations"
  },
  {
    "front": "Corrupt Government",
    "impulse": "to maintain the status quo",
    "type": "Ambitious Organizations"
  },
  {
    "front": "Cabal",
    "impulse": "to absorb those in power, to grow",
    "type": "Ambitious Organizations"
  },
  {
    "front": "God",
    "impulse": "to gather worshippers",
    "type": "Planar Forces"
  },
  {
    "front": "Immortal Prince",
    "impulse": "to release imprisoned immortals",
    "type": "Planar Forces"
  },
  {
    "front": "Elemental Lord",
    "impulse": "to tear down creation to its component parts",
    "type": "Planar Forces"
  },
  {
    "front": "Force of Chaos",
    "impulse": "to destroy all semblance of order",
    "type": "Planar Forces"
  },
  {
    "front": "Choir of Angels",
    "impulse": "to pass judgement",
    "type": "Planar Forces"
  },
  {
    "front": "Construct of Law",
    "impulse": "to eliminate perceived disorder",
    "type": "Planar Forces"
  },
  {
    "front": "Lord of the Undead",
    "impulse": "to seek true immortality",
    "type": "Arcane Enemies"
  },
  {
    "front": "Power-mad Wizard",
    "impulse": "to seek magical power",
    "type": "Arcane Enemies"
  },
  {
    "front": "Sentient Artifact",
    "impulse": "to find a worthy wielder",
    "type": "Arcane Enemies"
  },
  {
    "front": "Ancient Curse",
    "impulse": "to ensnare",
    "type": "Arcane Enemies"
  },
  {
    "front": "Chosen One",
    "impulse": "to fulfill or resent their destiny",
    "type": "Arcane Enemies"
  },
  {
    "front": "Dragon",
    "impulse": "to hoard gold and jewels, to protect the clutch",
    "type": "Arcane Enemies"
  },
  {
    "front": "Wandering Barbarians",
    "impulse": "to grow strong, to drive their enemies before them",
    "type": "Hordes"
  },
  {
    "front": "Vermin",
    "impulse": "to breed, to multiply and consume",
    "type": "Hordes"
  },
  {
    "front": "Underground Dwellers",
    "impulse": "to defend the complex from outsiders",
    "type": "Hordes"
  },
  {
    "front": "Plague of the Undead",
    "impulse": "to spread",
    "type": "Hordes"
  },
  {
    "front": "Abandoned Tower",
    "impulse": "to draw in the weak-willed",
    "type": "Cursed Places"
  },
  {
    "front": "Spawning Ground",
    "impulse": "to spawn",
    "type": "Cursed Places"
  },
  {
    "front": "Elemental Vortex",
    "impulse": "to grow, to tear apart reality",
    "type": "Cursed Places"
  },
  {
    "front": "Dark Portal",
    "impulse": "to disgorge demons",
    "type": "Cursed Places"
  },
  {
    "front": "Shadowland",
    "impulse": "to corrupt or consume the living",
    "type": "Cursed Places"
  },
  {
    "front": "Place of Power",
    "impulse": "to be controlled or tamed",
    "type": "Cursed Places"
  }
]

const TYPES = FRONTS.reduce((all,f)=>{
  if(all[f.type]) all[f.type].push(f.front)
  else all[f.type] = [f.front]
  return all
},{})

const PLOTS = {
  "Ambitious Organizations" : "1-2:Attack someone by stealthy means (kidnapping, etc.)~3:Attack someone directly (with a gang or single assailant)~4-5:Absorb or buy out someone important (an ally, perhaps)~6:Influence a powerful institution (change a law, manipulate doctrine)~7:Establish a new rule (within the organization)~8-9:Claim territory or resources~10-11:Negotiate a deal~12:Observe a potential foe in great detail",
  "Planar Forces" : "1-2:Turn an organization (corrupt or infiltrate with influence)~3:Give dreams of prophecy~4-5:Lay a Curse on a foe~6-7:Extract a promise in exchange for a boon~8-9:Attack indirectly, through intermediaries~10:Rarely, when the stars are right, attack directly~11:Foster rivalries with other, similar powers~12:Expose someone to a Truth, wanted or otherwise",
  "Arcane Enemies" : "1-2:Learn forbidden knowledge~3-4:Cast a spell over time and space~5-6:Attack a foe with magic, directly or otherwise~7-8:Spy on someone with a scrying spell~9-10:Recruit a follower or toady~11:Tempt someone with promises~12:Demand a sacrifice",
  "Hordes": "1-2:Assault a bastion of civilization~3:Embrace internal chaos~4:Change direction suddenly~5-6:Overwhelm a weaker force~7:Perform a show of dominance~8:Abandon an old home, find a new one~9-10:Grow in size by breeding or conquest~11:Appoint a champion~12:Declare war and act upon that declaration without hesitation or deliberation",
  "Cursed Places": "1-2:Vomit forth a lesser monster~3:Spread to an adjacent place~4:Lure someone in~5-6:Grow in intensity or depth~7:Leave a lingering effect on an inhabitant or visitor~8:Hide something from sight~9:Offer power~10:Dampen magic or increase its effects~11:Confuse or obfuscate truth or direction~12:Corrupt a natural law"
}

let plots = Object.entries(PLOTS).map(e => {
  return {
    id : e[0],
    plots : e[1].split("~").map(p=> p.split(":"))
  }
})

export {FRONTS, TYPES, plots}