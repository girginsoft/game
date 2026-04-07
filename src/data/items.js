// Gen 1 Items Data
export const ITEMS = {
  // Pokéballs
  pokeball: {
    id: 1,
    name: 'Poké Ball',
    category: 'pokeball',
    catchRate: 1,
    price: 200,
    description: 'A device for catching Pokémon.',
    icon: '🔴'
  },
  greatball: {
    id: 2,
    name: 'Great Ball',
    category: 'pokeball',
    catchRate: 1.5,
    price: 600,
    description: 'A higher-performance Poké Ball.',
    icon: '🔵'
  },
  ultraball: {
    id: 3,
    name: 'Ultra Ball',
    category: 'pokeball',
    catchRate: 2,
    price: 1200,
    description: 'An ultra-performance Poké Ball.',
    icon: '⚫'
  },
  masterball: {
    id: 4,
    name: 'Master Ball',
    category: 'pokeball',
    catchRate: 255,
    price: 0,
    description: 'Always catches Pokémon.',
    icon: '🟣'
  },
  safariball: {
    id: 5,
    name: 'Safari Ball',
    category: 'pokeball',
    catchRate: 1.5,
    price: 0,
    description: 'Used in the Safari Zone.',
    icon: '🟢'
  },

  // Potions
  potion: {
    id: 11,
    name: 'Potion',
    category: 'medicine',
    effect: 'heal',
    healAmount: 20,
    price: 300,
    description: 'Restores 20 HP.',
    usableInBattle: true,
    icon: '💊'
  },
  superpotion: {
    id: 12,
    name: 'Super Potion',
    category: 'medicine',
    effect: 'heal',
    healAmount: 50,
    price: 700,
    description: 'Restores 50 HP.',
    usableInBattle: true,
    icon: '💊'
  },
  hyperpotion: {
    id: 13,
    name: 'Hyper Potion',
    category: 'medicine',
    effect: 'heal',
    healAmount: 200,
    price: 1500,
    description: 'Restores 200 HP.',
    usableInBattle: true,
    icon: '💊'
  },
  maxpotion: {
    id: 14,
    name: 'Max Potion',
    category: 'medicine',
    effect: 'heal',
    healAmount: 9999,
    price: 2500,
    description: 'Fully restores HP.',
    usableInBattle: true,
    icon: '💊'
  },
  fullrestore: {
    id: 15,
    name: 'Full Restore',
    category: 'medicine',
    effect: 'healfull',
    healAmount: 9999,
    price: 3000,
    description: 'Fully restores HP and cures status.',
    usableInBattle: true,
    icon: '💊'
  },

  // Revives
  revive: {
    id: 16,
    name: 'Revive',
    category: 'medicine',
    effect: 'revive',
    healAmount: 0.5,
    price: 1500,
    description: 'Revives a fainted Pokémon with half HP.',
    usableInBattle: true,
    icon: '⭐'
  },
  maxrevive: {
    id: 17,
    name: 'Max Revive',
    category: 'medicine',
    effect: 'revive',
    healAmount: 1.0,
    price: 4000,
    description: 'Revives a fainted Pokémon with full HP.',
    usableInBattle: true,
    icon: '⭐'
  },

  // Status healers
  antidote: {
    id: 18,
    name: 'Antidote',
    category: 'medicine',
    effect: 'curestatus',
    curesStatus: ['poison'],
    price: 100,
    description: 'Cures poison.',
    usableInBattle: true,
    icon: '💙'
  },
  burnheal: {
    id: 19,
    name: 'Burn Heal',
    category: 'medicine',
    effect: 'curestatus',
    curesStatus: ['burn'],
    price: 250,
    description: 'Cures burn.',
    usableInBattle: true,
    icon: '🔥'
  },
  iceheal: {
    id: 20,
    name: 'Ice Heal',
    category: 'medicine',
    effect: 'curestatus',
    curesStatus: ['freeze'],
    price: 250,
    description: 'Cures freeze.',
    usableInBattle: true,
    icon: '❄️'
  },
  awakening: {
    id: 21,
    name: 'Awakening',
    category: 'medicine',
    effect: 'curestatus',
    curesStatus: ['sleep'],
    price: 250,
    description: 'Wakes up a sleeping Pokémon.',
    usableInBattle: true,
    icon: '💤'
  },
  parlyz_heal: {
    id: 22,
    name: 'Parlyz Heal',
    category: 'medicine',
    effect: 'curestatus',
    curesStatus: ['paralyze'],
    price: 200,
    description: 'Cures paralysis.',
    usableInBattle: true,
    icon: '⚡'
  },
  fullheal: {
    id: 23,
    name: 'Full Heal',
    category: 'medicine',
    effect: 'curestatus',
    curesStatus: ['all'],
    price: 600,
    description: 'Cures all status conditions.',
    usableInBattle: true,
    icon: '💚'
  },

  // PP items
  ether: {
    id: 24,
    name: 'Ether',
    category: 'medicine',
    effect: 'pp',
    ppAmount: 10,
    price: 1200,
    description: 'Restores PP of one move by 10.',
    usableInBattle: true,
    icon: '🔷'
  },
  maxether: {
    id: 25,
    name: 'Max Ether',
    category: 'medicine',
    effect: 'pp',
    ppAmount: 9999,
    price: 2000,
    description: 'Fully restores PP of one move.',
    usableInBattle: true,
    icon: '🔷'
  },
  elixir: {
    id: 26,
    name: 'Elixir',
    category: 'medicine',
    effect: 'ppall',
    ppAmount: 10,
    price: 3000,
    description: 'Restores PP of all moves by 10.',
    usableInBattle: true,
    icon: '💠'
  },
  maxelixir: {
    id: 27,
    name: 'Max Elixir',
    category: 'medicine',
    effect: 'ppall',
    ppAmount: 9999,
    price: 4500,
    description: 'Fully restores PP of all moves.',
    usableInBattle: true,
    icon: '💠'
  },

  // Battle items
  xattack: {
    id: 30,
    name: 'X Attack',
    category: 'battle',
    effect: 'raise_atk',
    stages: 1,
    price: 500,
    description: 'Raises ATTACK in battle.',
    usableInBattle: true,
    icon: '🗡️'
  },
  xdefend: {
    id: 31,
    name: 'X Defend',
    category: 'battle',
    effect: 'raise_def',
    stages: 1,
    price: 550,
    description: 'Raises DEFENSE in battle.',
    usableInBattle: true,
    icon: '🛡️'
  },
  xspeed: {
    id: 32,
    name: 'X Speed',
    category: 'battle',
    effect: 'raise_speed',
    stages: 1,
    price: 350,
    description: 'Raises SPEED in battle.',
    usableInBattle: true,
    icon: '💨'
  },
  xspecial: {
    id: 33,
    name: 'X Special',
    category: 'battle',
    effect: 'raise_spatk',
    stages: 1,
    price: 350,
    description: 'Raises Sp.Atk in battle.',
    usableInBattle: true,
    icon: '✨'
  },
  xaccuracy: {
    id: 34,
    name: 'X Accuracy',
    category: 'battle',
    effect: 'raise_acc',
    stages: 1,
    price: 950,
    description: 'Raises accuracy in battle.',
    usableInBattle: true,
    icon: '🎯'
  },
  guarddpec: {
    id: 35,
    name: 'Guard Spec.',
    category: 'battle',
    effect: 'mist',
    price: 700,
    description: 'Protects stats from being lowered.',
    usableInBattle: true,
    icon: '🔮'
  },
  direHit: {
    id: 36,
    name: 'Dire Hit',
    category: 'battle',
    effect: 'focus',
    price: 650,
    description: 'Increases critical hit ratio.',
    usableInBattle: true,
    icon: '💥'
  },

  // Evolution stones
  firestone: {
    id: 40,
    name: 'Fire Stone',
    category: 'evolution',
    price: 2100,
    description: 'Evolves certain Pokémon.',
    evolvesFrom: ['vulpix', 'growlithe', 'eevee'],
    icon: '🔥'
  },
  waterstone: {
    id: 41,
    name: 'Water Stone',
    category: 'evolution',
    price: 2100,
    description: 'Evolves certain Pokémon.',
    evolvesFrom: ['poliwag', 'shellder', 'staryu', 'eevee'],
    icon: '💧'
  },
  thunderstone: {
    id: 42,
    name: 'Thunder Stone',
    category: 'evolution',
    price: 2100,
    description: 'Evolves certain Pokémon.',
    evolvesFrom: ['pikachu', 'eevee'],
    icon: '⚡'
  },
  leafstone: {
    id: 43,
    name: 'Leaf Stone',
    category: 'evolution',
    price: 2100,
    description: 'Evolves certain Pokémon.',
    evolvesFrom: ['oddish', 'weepinbell', 'exeggcute'],
    icon: '🍃'
  },
  moonstone: {
    id: 44,
    name: 'Moon Stone',
    category: 'evolution',
    price: 0,
    description: 'Evolves certain Pokémon.',
    evolvesFrom: ['nidorino', 'nidorina', 'clefairy', 'jigglypuff'],
    icon: '🌙'
  },

  // Key items
  pokemonflute: {
    id: 50,
    name: 'Poké Flute',
    category: 'key',
    price: 0,
    description: 'Plays music to wake Pokémon.',
    icon: '🎵'
  },
  bikeVoucher: {
    id: 51,
    name: 'Bike Voucher',
    category: 'key',
    price: 0,
    description: 'Exchange at Bike Shop.',
    icon: '🎫'
  },
  bicycle: {
    id: 52,
    name: 'Bicycle',
    category: 'key',
    price: 0,
    description: 'Ride to move faster.',
    icon: '🚲'
  },
  ssticket: {
    id: 53,
    name: 'S.S.Ticket',
    category: 'key',
    price: 0,
    description: 'Lets you board the S.S. Anne.',
    icon: '🎫'
  },
  townmap: {
    id: 54,
    name: 'Town Map',
    category: 'key',
    price: 0,
    description: 'Shows the Kanto region.',
    icon: '🗺️'
  },
  oaksparcel: {
    id: 55,
    name: "Oak's Parcel",
    category: 'key',
    price: 0,
    description: "A parcel for Prof. Oak.",
    icon: '📦'
  },
  pokédex: {
    id: 56,
    name: 'Pokédex',
    category: 'key',
    price: 0,
    description: 'Records Pokémon data.',
    icon: '📱'
  },

  // TMs/HMs
  tm01: { id: 60, name: 'TM01', category: 'tm', move: 'megapunch', price: 3000, description: 'Teaches Mega Punch.', icon: '💿' },
  tm04: { id: 63, name: 'TM04', category: 'tm', move: 'swordsdance', price: 0, description: 'Teaches Swords Dance.', icon: '💿' },
  tm06: { id: 65, name: 'TM06', category: 'tm', move: 'toxic', price: 0, description: 'Teaches Toxic.', icon: '💿' },
  tm09: { id: 68, name: 'TM09', category: 'tm', move: 'takdown', price: 3000, description: 'Teaches Take Down.', icon: '💿' },
  tm10: { id: 69, name: 'TM10', category: 'tm', move: 'doubleedge', price: 0, description: 'Teaches Double-Edge.', icon: '💿' },
  tm14: { id: 73, name: 'TM14', category: 'tm', move: 'blizzard', price: 5500, description: 'Teaches Blizzard.', icon: '💿' },
  tm15: { id: 74, name: 'TM15', category: 'tm', move: 'hyperbeam', price: 7500, description: 'Teaches Hyper Beam.', icon: '💿' },
  tm24: { id: 83, name: 'TM24', category: 'tm', move: 'thunderbolt', price: 0, description: 'Teaches Thunderbolt.', icon: '💿' },
  tm25: { id: 84, name: 'TM25', category: 'tm', move: 'thunder', price: 5500, description: 'Teaches Thunder.', icon: '💿' },
  tm26: { id: 85, name: 'TM26', category: 'tm', move: 'earthquake', price: 0, description: 'Teaches Earthquake.', icon: '💿' },
  tm29: { id: 88, name: 'TM29', category: 'tm', move: 'psychic', price: 3500, description: 'Teaches Psychic.', icon: '💿' },
  tm35: { id: 94, name: 'TM35', category: 'tm', move: 'metronome', price: 0, description: 'Teaches Metronome.', icon: '💿' },
  tm38: { id: 97, name: 'TM38', category: 'tm', move: 'fireBlast', price: 5500, description: 'Teaches Fire Blast.', icon: '💿' },
  hm01: { id: 100, name: 'HM01', category: 'hm', move: 'cut', price: 0, description: 'Teaches Cut (field use).', icon: '💿' },
  hm02: { id: 101, name: 'HM02', category: 'hm', move: 'fly', price: 0, description: 'Teaches Fly (field use).', icon: '💿' },
  hm03: { id: 102, name: 'HM03', category: 'hm', move: 'surf', price: 0, description: 'Teaches Surf (field use).', icon: '💿' },
  hm04: { id: 103, name: 'HM04', category: 'hm', move: 'strength', price: 0, description: 'Teaches Strength (field use).', icon: '💿' },
};

export function getItem(key) {
  return ITEMS[key.toLowerCase().replace(/[^a-z0-9]/g, '')] || ITEMS[key] || null;
}

export const SHOP_ITEMS = {
  pallettown: [],
  viridianCity: ['pokeball', 'potion', 'antidote'],
  pewterCity: ['pokeball', 'potion', 'superpotion', 'antidote', 'burnheal'],
  ceruleanCity: ['pokeball', 'greatball', 'superpotion', 'antidote', 'burnheal', 'awakening'],
  vermilionCity: ['pokeball', 'greatball', 'superpotion', 'hyperpotion', 'antidote', 'burnheal', 'iceheal'],
  lavenderTown: ['pokeball', 'greatball', 'superpotion', 'hyperpotion', 'revive'],
  celadonCity: ['pokeball', 'greatball', 'ultraball', 'hyperpotion', 'maxpotion', 'revive', 'maxrevive', 'firestone', 'waterstone', 'thunderstone', 'leafstone'],
};
