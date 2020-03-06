let WEAPONTAGS = [
      [`Concealed`, `Inconspicuous, easily hidden, doesn’t show on scanners.`],
      [`Defensive`, `Can parry, deflect and disarm.`],
      [`Energy`, `Glows with incandescent energy, melts, burns, cauterizes.`],
      [`Flexible`, `Whip length capable of binding and lashing.`],
      [`Glove`, `A heavy, weaponized glove. Can still manipulate objects.`],
      [`Hafted`, `Two handed. Long reach. Sweeping attacks.`],
      [`Heavy`, `Two handed. Massive, resilient. Devastating attacks, hard to block.`],
      [`Impact`, `Heavy kinetic force that breaks bones and knocks people over.`],
      [`Impaling`, `Can pin targets, pierce thin materials, and stab with great accuracy.`],
      [`Penetrating`, `Ignores Armor.`],
      [`Ripper`, `Loud mechanical motion rips, tears, grinds or shreds.`],
      [`Severing`, `Chops, cuts, causes bleeding and can sever limbs.`],
      [`Shock`, `Electrocutes, causes malfunctions in electronics and robots.`],
      [`Stun`, `Non-lethal. Stuns, snares or renders unconscious.`],
      [`Stylish`, `Looks impressive, distinctive and unique.`],
      [`Thrown`, `Melee weapon that may be thrown.`],
      [`Burst`, `Instead of a single shot, sprays shots in a wide cone.`],
      [`Chemical`, `Creates lasting chemical reaction. Ex: fire, corrosion, frost, smoke, etc.`],
      [`Explosive`, `Loud. Causes messy wounds, property damage near the point of impact.`],
      [`Keyed`, `Can only be fired by you unless you unlock it.`],
      [`Laser`, `Projects focused beams of energy that can cut or melt materials.`],
      [`Launcher`, `Lobbed, arcing projectile with a modest area of effect.`],
      [`Mounted`, `Mounted to a forearm or shoulder rig, keeps hands free.`],
      [`Plasma`, `Fires bright bolts of supercharged, burning energy.`],
      [`Rapid`, `Fire Unleashes suppressing fire at multiple targets.`],
      [`Shrapnel`, `Causes amputation, bleeding and disfigurement in a small radius.`],
      [`Silenced`, `Suppressed muzzle flash and practically silent shot.`],
      [`Stabilized`, `No recoil, can be used in micro-gravity environments.`],
      [`Breaching`,`Damages starships and reinforced structures.`],
      [`Concussive`,`Exceptionally loud and bright. Deafens, blinds and knocks away.`],
      [`Detonation`,`Explodes in a large blast radius.`],
      [`Seeking`,`Projectile arcs towards a moving target.`],
      [`Sustained`,`Unleashes a constant suppressing fire at multiple targets`],
]

let ARMORTAGS = [
      [`Clumsy`,`Gives a Disadvantage on on DEX tests.`],
      [`Comms`,`Can receive and broadcast signals over great distances.`],
      [`Connected`,`Built-in CPU with eye-piece HUD, connects wirelessly to other systems.`],
      [`Impressive`,`Distinctive, intimidating, with embellishments and accessories.`],
      [`Jump`,`Jets Can give small burst jumps, slow descent, and controlled flight in zero-g.`],
      [`Rig`,`Choose a Kit: That Kit is integrated in the suit. Can still cary a 2nd Kit.`],
      [`Tough`,`Protects from elements, hard to damage, easy to repair.`],
      [`Sealed`,`Airtight suit with helmet and oxygen tank.`],
      [`Sensor`,`Choose a type of information. The wrist screen scans for that subject.`],
      [`Force`,`The armor is a barrier of force.`],
      [`Hardened`,`Penetrating weapons do not reduce its AC.`],
      [`Stealthy`,`Muffled, blends in to environments, difficult to pick up on scanners.`],
      [`Visor`,`Choose a type of information. The visor detects that subject.`],
]

const arrSort = (a,b) => {
  var x = a[0].toLowerCase();
  var y = b[0].toLowerCase();
  if (x < y) {return -1;}
  if (x > y) {return 1;}
  return 0;
}

WEAPONTAGS = WEAPONTAGS.sort(arrSort)
ARMORTAGS = ARMORTAGS.sort(arrSort)

const DAMAGE = ["1d4","1d6","1d8","1d10","1d12","1d6+1d8","2d8","3d6","2d10","1d10+1d12"]

const ENTITY = {
  id : "",
  name : "",
  dmg : 1,
  range : 0,
  tags: [],
  multi : []
}

export {ARMORTAGS,WEAPONTAGS,ENTITY,DAMAGE}