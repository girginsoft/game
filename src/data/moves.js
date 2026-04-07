// Gen 1 Moves Data
export const MOVES = {
  // Normal moves
  tackle: { id: 33, name: 'Tackle', type: 'normal', category: 'physical', power: 40, accuracy: 100, pp: 35, maxPP: 35, description: 'A physical attack.' },
  scratch: { id: 10, name: 'Scratch', type: 'normal', category: 'physical', power: 40, accuracy: 100, pp: 35, maxPP: 35, description: 'Hard, sharp nails scratch.' },
  growl: { id: 45, name: 'Growl', type: 'normal', category: 'status', power: 0, accuracy: 100, pp: 40, maxPP: 40, effect: 'lower_atk', description: 'Lowers enemy ATTACK.' },
  tailwhip: { id: 39, name: 'Tail Whip', type: 'normal', category: 'status', power: 0, accuracy: 100, pp: 30, maxPP: 30, effect: 'lower_def', description: 'Lowers enemy DEFENSE.' },
  leer: { id: 43, name: 'Leer', type: 'normal', category: 'status', power: 0, accuracy: 100, pp: 30, maxPP: 30, effect: 'lower_def', description: 'Lowers enemy DEFENSE.' },
  stringshot: { id: 81, name: 'String Shot', type: 'bug', category: 'status', power: 0, accuracy: 95, pp: 40, maxPP: 40, effect: 'lower_speed', description: 'Lowers enemy SPEED.' },
  pound: { id: 1, name: 'Pound', type: 'normal', category: 'physical', power: 40, accuracy: 100, pp: 35, maxPP: 35, description: 'Pounds with forelegs.' },
  doubleslap: { id: 3, name: 'Double Slap', type: 'normal', category: 'physical', power: 15, accuracy: 85, pp: 10, maxPP: 10, multihit: [2,5], description: 'Slaps 2-5 times.' },
  cometpunch: { id: 4, name: 'Comet Punch', type: 'normal', category: 'physical', power: 18, accuracy: 85, pp: 15, maxPP: 15, multihit: [2,5], description: 'Punches 2-5 times.' },
  megapunch: { id: 5, name: 'Mega Punch', type: 'normal', category: 'physical', power: 80, accuracy: 85, pp: 20, maxPP: 20, description: 'A powerful punch.' },
  payDay: { id: 6, name: 'Pay Day', type: 'normal', category: 'physical', power: 40, accuracy: 100, pp: 20, maxPP: 20, description: 'Scatters coins.' },
  firePunch: { id: 7, name: 'Fire Punch', type: 'fire', category: 'physical', power: 75, accuracy: 100, pp: 15, maxPP: 15, effect: 'burn_10', description: '10% chance to burn.' },
  icePunch: { id: 8, name: 'Ice Punch', type: 'ice', category: 'physical', power: 75, accuracy: 100, pp: 15, maxPP: 15, effect: 'freeze_10', description: '10% chance to freeze.' },
  thunderPunch: { id: 9, name: 'Thunder Punch', type: 'electric', category: 'physical', power: 75, accuracy: 100, pp: 15, maxPP: 15, effect: 'paralyze_10', description: '10% chance to paralyze.' },
  cut: { id: 15, name: 'Cut', type: 'normal', category: 'physical', power: 50, accuracy: 95, pp: 30, maxPP: 30, hm: true, description: 'Cuts with sharp claws.' },

  // Fire moves
  ember: { id: 52, name: 'Ember', type: 'fire', category: 'special', power: 40, accuracy: 100, pp: 25, maxPP: 25, effect: 'burn_10', description: '10% chance to burn.' },
  flamethrower: { id: 53, name: 'Flamethrower', type: 'fire', category: 'special', power: 90, accuracy: 100, pp: 15, maxPP: 15, effect: 'burn_10', description: '10% chance to burn.' },
  fireBlast: { id: 126, name: 'Fire Blast', type: 'fire', category: 'special', power: 110, accuracy: 85, pp: 5, maxPP: 5, effect: 'burn_30', description: '30% chance to burn.' },
  fireSpin: { id: 83, name: 'Fire Spin', type: 'fire', category: 'special', power: 15, accuracy: 70, pp: 15, maxPP: 15, effect: 'trap', description: 'Traps enemy for 2-5 turns.' },

  // Water moves
  watergun: { id: 55, name: 'Water Gun', type: 'water', category: 'special', power: 40, accuracy: 100, pp: 25, maxPP: 25, description: 'Shoots water.' },
  surf: { id: 57, name: 'Surf', type: 'water', category: 'special', power: 90, accuracy: 100, pp: 15, maxPP: 15, hm: true, description: 'A huge wave attacks.' },
  hydropump: { id: 56, name: 'Hydro Pump', type: 'water', category: 'special', power: 110, accuracy: 80, pp: 5, maxPP: 5, description: 'Powerful water blast.' },
  bubble: { id: 145, name: 'Bubble', type: 'water', category: 'special', power: 40, accuracy: 100, pp: 30, maxPP: 30, effect: 'lower_speed_10', description: '10% lower speed.' },
  bubblebeam: { id: 61, name: 'Bubblebeam', type: 'water', category: 'special', power: 65, accuracy: 100, pp: 20, maxPP: 20, effect: 'lower_speed_33', description: '33% lower speed.' },
  clamp: { id: 128, name: 'Clamp', type: 'water', category: 'physical', power: 35, accuracy: 75, pp: 10, maxPP: 10, effect: 'trap', description: 'Traps enemy for 2-5 turns.' },
  withdraw: { id: 110, name: 'Withdraw', type: 'water', category: 'status', power: 0, accuracy: 100, pp: 40, maxPP: 40, effect: 'raise_def', description: 'Raises DEFENSE.' },

  // Electric moves
  thundershock: { id: 84, name: 'Thundershock', type: 'electric', category: 'special', power: 40, accuracy: 100, pp: 30, maxPP: 30, effect: 'paralyze_10', description: '10% paralysis.' },
  thunderbolt: { id: 85, name: 'Thunderbolt', type: 'electric', category: 'special', power: 90, accuracy: 100, pp: 15, maxPP: 15, effect: 'paralyze_10', description: '10% paralysis.' },
  thunder: { id: 87, name: 'Thunder', type: 'electric', category: 'special', power: 110, accuracy: 70, pp: 10, maxPP: 10, effect: 'paralyze_30', description: '30% paralysis.' },
  thunderwave: { id: 86, name: 'Thunder Wave', type: 'electric', category: 'status', power: 0, accuracy: 100, pp: 20, maxPP: 20, effect: 'paralyze', description: 'Paralyzes enemy.' },
  spark: { id: 209, name: 'Spark', type: 'electric', category: 'physical', power: 65, accuracy: 100, pp: 20, maxPP: 20, effect: 'paralyze_30', description: '30% paralysis.' },

  // Grass moves
  vinewhip: { id: 22, name: 'Vine Whip', type: 'grass', category: 'physical', power: 45, accuracy: 100, pp: 25, maxPP: 25, description: 'Strikes with vines.' },
  razorleaf: { id: 75, name: 'Razor Leaf', type: 'grass', category: 'physical', power: 55, accuracy: 95, pp: 25, maxPP: 25, critRateBoost: true, description: 'High crit ratio.' },
  solarbeam: { id: 76, name: 'SolarBeam', type: 'grass', category: 'special', power: 120, accuracy: 100, pp: 10, maxPP: 10, chargeUp: true, description: 'Charges then fires.' },
  leechseed: { id: 73, name: 'Leech Seed', type: 'grass', category: 'status', power: 0, accuracy: 90, pp: 10, maxPP: 10, effect: 'leechseed', description: 'Drains HP each turn.' },
  sleeppowder: { id: 79, name: 'Sleep Powder', type: 'grass', category: 'status', power: 0, accuracy: 75, pp: 15, maxPP: 15, effect: 'sleep', description: 'Puts enemy to sleep.' },
  stunspore: { id: 78, name: 'Stun Spore', type: 'grass', category: 'status', power: 0, accuracy: 75, pp: 30, maxPP: 30, effect: 'paralyze', description: 'Paralyzes enemy.' },
  poisonpowder: { id: 77, name: 'PoisonPowder', type: 'grass', category: 'status', power: 0, accuracy: 75, pp: 35, maxPP: 35, effect: 'poison', description: 'Poisons enemy.' },

  // Ice moves
  icebeam: { id: 58, name: 'Ice Beam', type: 'ice', category: 'special', power: 90, accuracy: 100, pp: 10, maxPP: 10, effect: 'freeze_10', description: '10% freeze.' },
  blizzard: { id: 59, name: 'Blizzard', type: 'ice', category: 'special', power: 110, accuracy: 70, pp: 5, maxPP: 5, effect: 'freeze_10', description: '10% freeze.' },

  // Fighting moves
  karatechop: { id: 2, name: 'Karate Chop', type: 'fighting', category: 'physical', power: 50, accuracy: 100, pp: 25, maxPP: 25, critRateBoost: true, description: 'High crit ratio.' },
  lowkick: { id: 67, name: 'Low Kick', type: 'fighting', category: 'physical', power: 50, accuracy: 90, pp: 20, maxPP: 20, effect: 'flinch_30', description: '30% flinch.' },
  highjumpkick: { id: 136, name: 'Hi Jump Kick', type: 'fighting', category: 'physical', power: 85, accuracy: 90, pp: 20, maxPP: 20, description: 'Crashes if miss.' },
  submission: { id: 66, name: 'Submission', type: 'fighting', category: 'physical', power: 80, accuracy: 80, pp: 25, maxPP: 25, recoil: 0.25, description: 'User takes 1/4 dmg.' },

  // Poison moves
  poisonsting: { id: 40, name: 'Poison Sting', type: 'poison', category: 'physical', power: 15, accuracy: 100, pp: 35, maxPP: 35, effect: 'poison_30', description: '30% poison.' },
  acid: { id: 51, name: 'Acid', type: 'poison', category: 'special', power: 40, accuracy: 100, pp: 30, maxPP: 30, effect: 'lower_spdef_33', description: '33% lower Sp.Def.' },
  smog: { id: 123, name: 'Smog', type: 'poison', category: 'special', power: 20, accuracy: 70, pp: 20, maxPP: 20, effect: 'poison_40', description: '40% poison.' },
  sludge: { id: 124, name: 'Sludge', type: 'poison', category: 'special', power: 65, accuracy: 100, pp: 20, maxPP: 20, effect: 'poison_30', description: '30% poison.' },

  // Ground moves
  earthquake: { id: 89, name: 'Earthquake', type: 'ground', category: 'physical', power: 100, accuracy: 100, pp: 10, maxPP: 10, description: 'Strong earthquake.' },
  digattack: { id: 91, name: 'Dig', type: 'ground', category: 'physical', power: 80, accuracy: 100, pp: 10, maxPP: 10, chargeUp: true, description: 'Digs underground.' },
  fissure: { id: 90, name: 'Fissure', type: 'ground', category: 'physical', power: 0, accuracy: 30, pp: 5, maxPP: 5, ohko: true, description: 'One-hit KO if it hits.' },

  // Flying moves
  gust: { id: 16, name: 'Gust', type: 'flying', category: 'special', power: 40, accuracy: 100, pp: 35, maxPP: 35, description: 'Whips up a gust.' },
  wingattack: { id: 17, name: 'Wing Attack', type: 'flying', category: 'physical', power: 60, accuracy: 100, pp: 35, maxPP: 35, description: 'Strikes with wings.' },
  fly: { id: 19, name: 'Fly', type: 'flying', category: 'physical', power: 90, accuracy: 95, pp: 15, maxPP: 15, chargeUp: true, hm: true, description: 'Flies up then strikes.' },
  peck: { id: 64, name: 'Peck', type: 'flying', category: 'physical', power: 35, accuracy: 100, pp: 35, maxPP: 35, description: 'Pecks with a beak.' },
  drillpeck: { id: 65, name: 'Drill Peck', type: 'flying', category: 'physical', power: 80, accuracy: 100, pp: 20, maxPP: 20, description: 'Corkscrews into foe.' },

  // Psychic moves
  psybeam: { id: 60, name: 'Psybeam', type: 'psychic', category: 'special', power: 65, accuracy: 100, pp: 20, maxPP: 20, effect: 'confuse_10', description: '10% confusion.' },
  psychic: { id: 94, name: 'Psychic', type: 'psychic', category: 'special', power: 90, accuracy: 100, pp: 10, maxPP: 10, effect: 'lower_spdef_33', description: '33% lower Sp.Def.' },
  confusion: { id: 93, name: 'Confusion', type: 'psychic', category: 'special', power: 50, accuracy: 100, pp: 25, maxPP: 25, effect: 'confuse_10', description: '10% confusion.' },
  hypnosis: { id: 95, name: 'Hypnosis', type: 'psychic', category: 'status', power: 0, accuracy: 60, pp: 20, maxPP: 20, effect: 'sleep', description: 'Puts enemy to sleep.' },
  kinesis: { id: 134, name: 'Kinesis', type: 'psychic', category: 'status', power: 0, accuracy: 80, pp: 15, maxPP: 15, effect: 'lower_acc', description: 'Lowers enemy accuracy.' },

  // Bug moves
  leechlife: { id: 141, name: 'Leech Life', type: 'bug', category: 'physical', power: 20, accuracy: 100, pp: 15, maxPP: 15, drain: 0.5, description: 'Drains 1/2 HP dealt.' },
  spore: { id: 147, name: 'Spore', type: 'grass', category: 'status', power: 0, accuracy: 100, pp: 15, maxPP: 15, effect: 'sleep', description: 'Always causes sleep.' },

  // Rock moves
  rockthrow: { id: 88, name: 'Rock Throw', type: 'rock', category: 'physical', power: 50, accuracy: 90, pp: 15, maxPP: 15, description: 'Throws boulders.' },
  rockslide: { id: 157, name: 'Rock Slide', type: 'rock', category: 'physical', power: 75, accuracy: 90, pp: 10, maxPP: 10, effect: 'flinch_30', description: '30% flinch.' },

  // Ghost moves
  lick: { id: 122, name: 'Lick', type: 'ghost', category: 'physical', power: 30, accuracy: 100, pp: 30, maxPP: 30, effect: 'paralyze_30', description: '30% paralysis.' },
  nightshade: { id: 101, name: 'Night Shade', type: 'ghost', category: 'special', power: 0, accuracy: 100, pp: 15, maxPP: 15, levelDamage: true, description: 'Damage = user level.' },

  // Dragon moves
  dragonrage: { id: 82, name: 'Dragon Rage', type: 'dragon', category: 'special', power: 0, accuracy: 100, pp: 10, maxPP: 10, fixedDamage: 40, description: 'Always 40 damage.' },

  // Self-buffing moves
  swordsdance: { id: 14, name: 'Swords Dance', type: 'normal', category: 'status', power: 0, accuracy: 100, pp: 30, maxPP: 30, effect: 'raise_atk2', description: 'Sharply raises ATTACK.' },
  agility: { id: 97, name: 'Agility', type: 'psychic', category: 'status', power: 0, accuracy: 100, pp: 30, maxPP: 30, effect: 'raise_speed2', description: 'Sharply raises SPEED.' },
  amnesia: { id: 133, name: 'Amnesia', type: 'psychic', category: 'status', power: 0, accuracy: 100, pp: 20, maxPP: 20, effect: 'raise_spatk2', description: 'Sharply raises Sp.Atk.' },
  harden: { id: 106, name: 'Harden', type: 'normal', category: 'status', power: 0, accuracy: 100, pp: 30, maxPP: 30, effect: 'raise_def', description: 'Raises DEFENSE.' },
  defensecurl: { id: 111, name: 'Defense Curl', type: 'normal', category: 'status', power: 0, accuracy: 100, pp: 40, maxPP: 40, effect: 'raise_def', description: 'Raises DEFENSE.' },

  // Recovery moves
  recover: { id: 105, name: 'Recover', type: 'normal', category: 'status', power: 0, accuracy: 100, pp: 20, maxPP: 20, effect: 'heal_half', description: 'Restores 1/2 max HP.' },
  softboiled: { id: 135, name: 'Soft-Boiled', type: 'normal', category: 'status', power: 0, accuracy: 100, pp: 10, maxPP: 10, effect: 'heal_half', description: 'Restores 1/2 max HP.' },
  rest: { id: 156, name: 'Rest', type: 'psychic', category: 'status', power: 0, accuracy: 100, pp: 10, maxPP: 10, effect: 'rest', description: 'Sleeps to restore HP.' },

  // Multi-hit / special
  rapidSpin: { id: 229, name: 'Rapid Spin', type: 'normal', category: 'physical', power: 20, accuracy: 100, pp: 40, maxPP: 40, description: 'Removes traps.' },
  doublekick: { id: 24, name: 'Double Kick', type: 'fighting', category: 'physical', power: 30, accuracy: 100, pp: 30, maxPP: 30, multihit: [2,2], description: 'Kicks twice.' },
  twineedle: { id: 41, name: 'Twineedle', type: 'bug', category: 'physical', power: 25, accuracy: 100, pp: 20, maxPP: 20, multihit: [2,2], effect: 'poison_20', description: '20% poison each hit.' },
  pinmissile: { id: 42, name: 'Pin Missile', type: 'bug', category: 'physical', power: 14, accuracy: 85, pp: 20, maxPP: 20, multihit: [2,5], description: 'Strikes 2-5 times.' },

  // Other
  slam: { id: 21, name: 'Slam', type: 'normal', category: 'physical', power: 80, accuracy: 75, pp: 20, maxPP: 20, description: 'Slams with a tail.' },
  bodyslam: { id: 34, name: 'Body Slam', type: 'normal', category: 'physical', power: 85, accuracy: 100, pp: 15, maxPP: 15, effect: 'paralyze_30', description: '30% paralysis.' },
  doubleedge: { id: 38, name: 'Double-Edge', type: 'normal', category: 'physical', power: 120, accuracy: 100, pp: 15, maxPP: 15, recoil: 0.33, description: 'User takes 1/3 dmg.' },
  hyperbeam: { id: 63, name: 'Hyper Beam', type: 'normal', category: 'special', power: 150, accuracy: 90, pp: 5, maxPP: 5, recharge: true, description: 'Must recharge next turn.' },
  headbutt: { id: 29, name: 'Headbutt', type: 'normal', category: 'physical', power: 70, accuracy: 100, pp: 15, maxPP: 15, effect: 'flinch_30', description: '30% flinch.' },
  bite: { id: 44, name: 'Bite', type: 'normal', category: 'physical', power: 60, accuracy: 100, pp: 25, maxPP: 25, effect: 'flinch_10', description: '10% flinch.' },
  roar: { id: 46, name: 'Roar', type: 'normal', category: 'status', power: 0, accuracy: 100, pp: 20, maxPP: 20, effect: 'flee', description: 'Forces enemy to flee.' },
  sing: { id: 47, name: 'Sing', type: 'normal', category: 'status', power: 0, accuracy: 55, pp: 15, maxPP: 15, effect: 'sleep', description: 'Puts enemy to sleep.' },
  supersonic: { id: 48, name: 'Supersonic', type: 'normal', category: 'status', power: 0, accuracy: 55, pp: 20, maxPP: 20, effect: 'confuse', description: 'Confuses enemy.' },
  disable: { id: 50, name: 'Disable', type: 'normal', category: 'status', power: 0, accuracy: 55, pp: 20, maxPP: 20, effect: 'disable', description: 'Disables a move.' },
  wrap: { id: 35, name: 'Wrap', type: 'normal', category: 'physical', power: 15, accuracy: 85, pp: 20, maxPP: 20, effect: 'trap', description: 'Traps for 2-5 turns.' },
  stomp: { id: 23, name: 'Stomp', type: 'normal', category: 'physical', power: 65, accuracy: 100, pp: 20, maxPP: 20, effect: 'flinch_30', description: '30% flinch.' },
  earthquake2: { id: 89, name: 'Earthquake', type: 'ground', category: 'physical', power: 100, accuracy: 100, pp: 10, maxPP: 10, description: 'Strong earthquake.' },

  // More moves
  absorb: { id: 71, name: 'Absorb', type: 'grass', category: 'special', power: 20, accuracy: 100, pp: 25, maxPP: 25, drain: 0.5, description: 'Drains 1/2 HP dealt.' },
  megadrain: { id: 72, name: 'Mega Drain', type: 'grass', category: 'special', power: 40, accuracy: 100, pp: 15, maxPP: 15, drain: 0.5, description: 'Drains 1/2 HP dealt.' },
  flash: { id: 148, name: 'Flash', type: 'normal', category: 'status', power: 0, accuracy: 70, pp: 20, maxPP: 20, effect: 'lower_acc', description: 'Lowers enemy accuracy.' },
  furyattack: { id: 31, name: 'Fury Attack', type: 'normal', category: 'physical', power: 15, accuracy: 85, pp: 20, maxPP: 20, multihit: [2,5], description: 'Stabs 2-5 times.' },
  horndrill: { id: 32, name: 'Horn Drill', type: 'normal', category: 'physical', power: 0, accuracy: 30, pp: 5, maxPP: 5, ohko: true, description: 'One-hit KO if it hits.' },
  guillotine: { id: 12, name: 'Guillotine', type: 'normal', category: 'physical', power: 0, accuracy: 30, pp: 5, maxPP: 5, ohko: true, description: 'One-hit KO if it hits.' },
  razorwind: { id: 13, name: 'Razor Wind', type: 'normal', category: 'special', power: 80, accuracy: 75, pp: 10, maxPP: 10, chargeUp: true, critRateBoost: true, description: 'Charges, then strikes.' },
  skullbash: { id: 130, name: 'Skull Bash', type: 'normal', category: 'physical', power: 100, accuracy: 100, pp: 15, maxPP: 15, chargeUp: true, description: 'Charges, then rams.' },
  megakick: { id: 25, name: 'Mega Kick', type: 'normal', category: 'physical', power: 120, accuracy: 75, pp: 5, maxPP: 5, description: 'Powerful kick.' },
  jumpkick: { id: 26, name: 'Jump Kick', type: 'fighting', category: 'physical', power: 70, accuracy: 95, pp: 25, maxPP: 25, description: 'Crashes if miss.' },
  rollingkick: { id: 27, name: 'Rolling Kick', type: 'fighting', category: 'physical', power: 60, accuracy: 85, pp: 15, maxPP: 15, effect: 'flinch_30', description: '30% flinch.' },
  sandattack: { id: 28, name: 'Sand Attack', type: 'ground', category: 'status', power: 0, accuracy: 100, pp: 15, maxPP: 15, effect: 'lower_acc', description: 'Lowers accuracy.' },
  hornattack: { id: 30, name: 'Horn Attack', type: 'normal', category: 'physical', power: 65, accuracy: 100, pp: 25, maxPP: 25, description: 'Jabs with horn.' },
  tackle2: { id: 33, name: 'Tackle', type: 'normal', category: 'physical', power: 40, accuracy: 100, pp: 35, maxPP: 35, description: 'A physical attack.' },
  whirlwind: { id: 18, name: 'Whirlwind', type: 'normal', category: 'status', power: 0, accuracy: 100, pp: 20, maxPP: 20, effect: 'flee', description: 'Forces a switch.' },

  // Charmeleon/Charizard moves
  rage: { id: 99, name: 'Rage', type: 'normal', category: 'physical', power: 20, accuracy: 100, pp: 20, maxPP: 20, description: 'Raises Atk when hit.' },
  smokescreen: { id: 108, name: 'Smokescreen', type: 'normal', category: 'status', power: 0, accuracy: 100, pp: 20, maxPP: 20, effect: 'lower_acc', description: 'Lowers enemy accuracy.' },

  // Pikachu moves
  quickattack: { id: 98, name: 'Quick Attack', type: 'normal', category: 'physical', power: 40, accuracy: 100, pp: 30, maxPP: 30, priority: 1, description: 'Always strikes first.' },

  // More common moves
  waterfall: { id: 127, name: 'Waterfall', type: 'water', category: 'physical', power: 80, accuracy: 100, pp: 15, maxPP: 15, hm: true, description: 'Strong water attack.' },
  strength: { id: 70, name: 'Strength', type: 'normal', category: 'physical', power: 80, accuracy: 100, pp: 15, maxPP: 15, hm: true, description: 'Strong physical move.' },
  surf2: { id: 57, name: 'Surf', type: 'water', category: 'special', power: 90, accuracy: 100, pp: 15, maxPP: 15, hm: true, description: 'A huge wave attacks.' },

  // Gengar/Ghost
  shadowball: { id: 247, name: 'Shadow Ball', type: 'ghost', category: 'special', power: 80, accuracy: 100, pp: 15, maxPP: 15, effect: 'lower_spdef_20', description: '20% lower Sp.Def.' },
  confuseray: { id: 109, name: 'Confuse Ray', type: 'ghost', category: 'status', power: 0, accuracy: 100, pp: 10, maxPP: 10, effect: 'confuse', description: 'Confuses enemy.' },

  // Slowbro/Slowpoke
  watergun2: { id: 55, name: 'Water Gun', type: 'water', category: 'special', power: 40, accuracy: 100, pp: 25, maxPP: 25, description: 'Shoots water.' },

  // Snorlax
  amnesia2: { id: 133, name: 'Amnesia', type: 'psychic', category: 'status', power: 0, accuracy: 100, pp: 20, maxPP: 20, effect: 'raise_spatk2', description: 'Sharply raises Sp.Atk.' },

  // Mewtwo
  barrierMove: { id: 112, name: 'Barrier', type: 'psychic', category: 'status', power: 0, accuracy: 100, pp: 30, maxPP: 30, effect: 'raise_def2', description: 'Sharply raises Defense.' },

  // Misc
  conversion: { id: 160, name: 'Conversion', type: 'normal', category: 'status', power: 0, accuracy: 100, pp: 30, maxPP: 30, description: 'Changes type to move.' },
  selfdestruct: { id: 120, name: 'Self-Destruct', type: 'normal', category: 'physical', power: 200, accuracy: 100, pp: 5, maxPP: 5, faint: true, description: 'User faints on use.' },
  explosion: { id: 153, name: 'Explosion', type: 'normal', category: 'physical', power: 250, accuracy: 100, pp: 5, maxPP: 5, faint: true, description: 'User faints on use.' },

  // Moves for various pokemon
  furyswipes: { id: 154, name: 'Fury Swipes', type: 'normal', category: 'physical', power: 18, accuracy: 80, pp: 15, maxPP: 15, multihit: [2,5], description: 'Slashes 2-5 times.' },
  slash: { id: 163, name: 'Slash', type: 'normal', category: 'physical', power: 70, accuracy: 100, pp: 20, maxPP: 20, critRateBoost: true, description: 'High crit ratio.' },

  // Meowth
  payday: { id: 6, name: 'Pay Day', type: 'normal', category: 'physical', power: 40, accuracy: 100, pp: 20, maxPP: 20, description: 'Scatters coins.' },

  // Geodude
  rockpolish: { id: 397, name: 'Rock Polish', type: 'rock', category: 'status', power: 0, accuracy: 100, pp: 20, maxPP: 20, effect: 'raise_speed2', description: 'Sharply raises Speed.' },
  rockblast: { id: 350, name: 'Rock Blast', type: 'rock', category: 'physical', power: 25, accuracy: 90, pp: 10, maxPP: 10, multihit: [2,5], description: 'Hits 2-5 times.' },

  // Ditto
  transform: { id: 144, name: 'Transform', type: 'normal', category: 'status', power: 0, accuracy: 100, pp: 10, maxPP: 10, effect: 'transform', description: 'Transforms into foe.' },

  // Eevee
  tackle3: { id: 33, name: 'Tackle', type: 'normal', category: 'physical', power: 40, accuracy: 100, pp: 35, maxPP: 35, description: 'A physical attack.' },

  // Mew
  metronome: { id: 118, name: 'Metronome', type: 'normal', category: 'status', power: 0, accuracy: 100, pp: 10, maxPP: 10, effect: 'metronome', description: 'Uses a random move.' },

  // Venusaur line
  petaldance: { id: 80, name: 'Petal Dance', type: 'grass', category: 'special', power: 70, accuracy: 100, pp: 20, maxPP: 20, lockedIn: true, confuseSelf: true, description: 'Attacks 2-3 turns.' },

  // Blastoise
  flash2: { id: 148, name: 'Flash', type: 'normal', category: 'status', power: 0, accuracy: 70, pp: 20, maxPP: 20, effect: 'lower_acc', description: 'Lowers accuracy.' },
};

export function getMoveData(moveName) {
  const key = moveName.toLowerCase().replace(/[^a-z0-9]/g, '');
  return MOVES[key] || MOVES[moveName] || null;
}

export function getMoveName(moveKey) {
  const move = MOVES[moveKey];
  return move ? move.name : moveKey;
}
