// Gen 1 Type effectiveness chart
// effectiveness[attackType][defenseType] = multiplier

export const TYPES = [
  'normal', 'fire', 'water', 'electric', 'grass', 'ice',
  'fighting', 'poison', 'ground', 'flying', 'psychic',
  'bug', 'rock', 'ghost', 'dragon'
];

// 0 = immune, 0.5 = not very effective, 1 = normal, 2 = super effective
export const TYPE_CHART = {
  normal: {
    normal: 1, fire: 1, water: 1, electric: 1, grass: 1, ice: 1,
    fighting: 1, poison: 1, ground: 1, flying: 1, psychic: 1,
    bug: 1, rock: 0.5, ghost: 0, dragon: 1
  },
  fire: {
    normal: 1, fire: 0.5, water: 0.5, electric: 1, grass: 2, ice: 2,
    fighting: 1, poison: 1, ground: 1, flying: 1, psychic: 1,
    bug: 2, rock: 0.5, ghost: 1, dragon: 0.5
  },
  water: {
    normal: 1, fire: 2, water: 0.5, electric: 1, grass: 0.5, ice: 1,
    fighting: 1, poison: 1, ground: 2, flying: 1, psychic: 1,
    bug: 1, rock: 2, ghost: 1, dragon: 0.5
  },
  electric: {
    normal: 1, fire: 1, water: 2, electric: 0.5, grass: 0.5, ice: 1,
    fighting: 1, poison: 1, ground: 0, flying: 2, psychic: 1,
    bug: 1, rock: 1, ghost: 1, dragon: 0.5
  },
  grass: {
    normal: 1, fire: 0.5, water: 2, electric: 1, grass: 0.5, ice: 1,
    fighting: 1, poison: 0.5, ground: 2, flying: 0.5, psychic: 1,
    bug: 0.5, rock: 2, ghost: 1, dragon: 0.5
  },
  ice: {
    normal: 1, fire: 0.5, water: 0.5, electric: 1, grass: 2, ice: 0.5,
    fighting: 1, poison: 1, ground: 2, flying: 2, psychic: 1,
    bug: 1, rock: 1, ghost: 1, dragon: 2
  },
  fighting: {
    normal: 2, fire: 1, water: 1, electric: 1, grass: 1, ice: 2,
    fighting: 1, poison: 0.5, ground: 1, flying: 0.5, psychic: 0.5,
    bug: 0.5, rock: 2, ghost: 0, dragon: 1
  },
  poison: {
    normal: 1, fire: 1, water: 1, electric: 1, grass: 2, ice: 1,
    fighting: 1, poison: 0.5, ground: 0.5, flying: 1, psychic: 1,
    bug: 2, rock: 0.5, ghost: 0.5, dragon: 1
  },
  ground: {
    normal: 1, fire: 2, water: 1, electric: 2, grass: 0.5, ice: 1,
    fighting: 1, poison: 2, ground: 1, flying: 0, psychic: 1,
    bug: 0.5, rock: 2, ghost: 1, dragon: 1
  },
  flying: {
    normal: 1, fire: 1, water: 1, electric: 0.5, grass: 2, ice: 1,
    fighting: 2, poison: 1, ground: 1, flying: 1, psychic: 1,
    bug: 2, rock: 0.5, ghost: 1, dragon: 1
  },
  psychic: {
    normal: 1, fire: 1, water: 1, electric: 1, grass: 1, ice: 1,
    fighting: 2, poison: 2, ground: 1, flying: 1, psychic: 0.5,
    bug: 1, rock: 1, ghost: 0, dragon: 1
  },
  bug: {
    normal: 1, fire: 0.5, water: 1, electric: 1, grass: 2, ice: 1,
    fighting: 0.5, poison: 2, ground: 1, flying: 0.5, psychic: 2,
    bug: 1, rock: 1, ghost: 0.5, dragon: 1
  },
  rock: {
    normal: 1, fire: 2, water: 1, electric: 1, grass: 1, ice: 2,
    fighting: 0.5, poison: 1, ground: 0.5, flying: 2, psychic: 1,
    bug: 2, rock: 1, ghost: 1, dragon: 1
  },
  ghost: {
    normal: 0, fire: 1, water: 1, electric: 1, grass: 1, ice: 1,
    fighting: 1, poison: 1, ground: 1, flying: 1, psychic: 0,
    bug: 1, rock: 1, ghost: 2, dragon: 1
  },
  dragon: {
    normal: 1, fire: 1, water: 1, electric: 1, grass: 1, ice: 1,
    fighting: 1, poison: 1, ground: 1, flying: 1, psychic: 1,
    bug: 1, rock: 1, ghost: 1, dragon: 2
  }
};

export function getTypeEffectiveness(attackType, defenderTypes) {
  let multiplier = 1;
  for (const defType of defenderTypes) {
    const chart = TYPE_CHART[attackType.toLowerCase()];
    if (chart && chart[defType.toLowerCase()] !== undefined) {
      multiplier *= chart[defType.toLowerCase()];
    }
  }
  return multiplier;
}

export function getTypeColor(type) {
  const colors = {
    normal: '#A8A878',
    fire: '#F08030',
    water: '#6890F0',
    electric: '#F8D030',
    grass: '#78C850',
    ice: '#98D8D8',
    fighting: '#C03028',
    poison: '#A040A0',
    ground: '#E0C068',
    flying: '#A890F0',
    psychic: '#F85888',
    bug: '#A8B820',
    rock: '#B8A038',
    ghost: '#705898',
    dragon: '#7038F8',
    dark: '#705848',
    steel: '#B8B8D0'
  };
  return colors[type?.toLowerCase()] || '#68A090';
}
