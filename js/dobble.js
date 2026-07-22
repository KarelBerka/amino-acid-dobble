// js/dobble.js

/**
 * Dobble card deck generator based on Projective Plane geometry.
 * For order q = 4, it generates 21 cards and 21 symbols, with 5 symbols per card.
 */

// GF(4) arithmetic tables for q=4 projective plane generation
const GF4_ADD = [
  [0, 1, 2, 3],
  [1, 0, 3, 2],
  [2, 3, 0, 1],
  [3, 2, 1, 0]
];

const GF4_MUL = [
  [0, 0, 0, 0],
  [0, 1, 2, 3],
  [0, 2, 3, 1],
  [0, 3, 1, 2]
];

function gf4_add(a, b) {
  return GF4_ADD[a][b];
}

function gf4_mul(a, b) {
  return GF4_MUL[a][b];
}

function gf4_dot(v1, v2) {
  const p1 = gf4_mul(v1[0], v2[0]);
  const p2 = gf4_mul(v1[1], v2[1]);
  const p3 = gf4_mul(v1[2], v2[2]);
  return gf4_add(gf4_add(p1, p2), p3);
}

/**
 * Generates the lines (cards) of the Projective Plane PG(2, 4).
 * Returns an array of 21 cards, where each card is an array of 5 point indices (0..20).
 */
function generatePG2_4() {
  // 1. Generate points (homogeneous coordinates scaled so first non-zero is 1)
  const points = [];
  // (1, a, b)
  for (let a = 0; a < 4; a++) {
    for (let b = 0; b < 4; b++) {
      points.push([1, a, b]);
    }
  }
  // (0, 1, a)
  for (let a = 0; a < 4; a++) {
    points.push([0, 1, a]);
  }
  // (0, 0, 1)
  points.push([0, 0, 1]);

  // 2. Generate lines
  const lines = [];
  for (let a = 0; a < 4; a++) {
    for (let b = 0; b < 4; b++) {
      lines.push([1, a, b]);
    }
  }
  for (let a = 0; a < 4; a++) {
    lines.push([0, 1, a]);
  }
  lines.push([0, 0, 1]);

  // 3. Match points to lines (intersection dot product = 0)
  const cards = [];
  for (let l = 0; l < lines.length; l++) {
    const cardPoints = [];
    for (let p = 0; p < points.length; p++) {
      if (gf4_dot(lines[l], points[p]) === 0) {
        cardPoints.push(p);
      }
    }
    cards.push(cardPoints);
  }

  return cards;
}

/**
 * Verifies that the generated cards satisfy the Dobble property:
 * - Each card has exactly 5 symbols.
 * - Any two cards share exactly one symbol.
 */
function verifyDeck(cards) {
  if (cards.length !== 21) return false;
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].length !== 5) return false;
    for (let j = i + 1; j < cards.length; j++) {
      let intersection = cards[i].filter(x => cards[j].includes(x));
      if (intersection.length !== 1) {
        console.error(`Intersection error between card ${i} and ${j}:`, intersection);
        return false;
      }
    }
  }
  return true;
}

/**
 * Representation types available for amino acids:
 * 0: Czech Name (e.g. "Alanin")
 * 1: English Name (e.g. "Alanine")
 * 2: 3-letter code (e.g. "Ala")
 * 3: 1-letter code (e.g. "A")
 * 4: Chemical Structure (SVG drawing)
 */
const REPRESENTATION_TYPES = {
  CZ_NAME: 0,
  EN_NAME: 1,
  CODE_3: 2,
  CODE_1: 3,
  STRUCTURE: 4
};

/**
 * Generates a fully decorated Dobble deck of cards.
 * @param {Array} aminoAcids The database list of amino acids
 * @param {boolean} guaranteeDifferentReps If true, the shared symbol between any two cards will always be represented differently.
 * @returns {Array} List of card objects. Each card has:
 *                  - id: number (0..20)
 *                  - items: Array of 5 objects: { aminoAcid, repType }
 */
function generateDobbleDeck(aminoAcids, guaranteeDifferentReps = true, allowedReps = [0, 2, 3, 4, 5]) {
  const rawCards = generatePG2_4();
  
  if (!verifyDeck(rawCards)) {
    console.error("Mathematical verification of Projective Plane failed!");
  }

  // Pre-calculate where each amino acid appears (which cards)
  // Each amino acid (0..20) appears in exactly 5 cards.
  const occurrences = Array.from({ length: 21 }, () => []);
  for (let cardIdx = 0; cardIdx < rawCards.length; cardIdx++) {
    rawCards[cardIdx].forEach(aaIdx => {
      occurrences[aaIdx].push(cardIdx);
    });
  }

  // Map each occurrence to a specific representation type
  const representationMapping = Array.from({ length: 21 }, () => ({}));

  for (let aaIdx = 0; aaIdx < 21; aaIdx++) {
    const cardIndices = occurrences[aaIdx]; // Exactly 5 cards
    
    if (guaranteeDifferentReps) {
      // Assign distinct representation types from the allowed list
      let reps = [...allowedReps];
      if (reps.length === 0) reps = [0, 1, 2, 3, 4, 5, 6];
      
      // Pad to at least 5 reps if we need distinct ones but have fewer
      while (reps.length < 5) {
        reps = reps.concat(reps);
      }
      
      // Shuffle representation types
      for (let i = reps.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [reps[i], reps[j]] = [reps[j], reps[i]];
      }
      
      cardIndices.forEach((cardIdx, idx) => {
        representationMapping[aaIdx][cardIdx] = reps[idx];
      });
    } else {
      // Pick random representation types from the allowed list
      let reps = [...allowedReps];
      if (reps.length === 0) reps = [0, 1, 2, 3, 4, 5, 6];
      
      cardIndices.forEach(cardIdx => {
        const randIdx = Math.floor(Math.random() * reps.length);
        representationMapping[aaIdx][cardIdx] = reps[randIdx];
      });
    }
  }

  // Build the final deck structure
  const deck = rawCards.map((cardPoints, cardIdx) => {
    const items = cardPoints.map(aaIdx => {
      const aminoAcid = aminoAcids[aaIdx];
      const repType = representationMapping[aaIdx][cardIdx];
      return {
        aminoAcid,
        repType
      };
    });
    
    // Shuffle the items on the card so they aren't ordered by ID
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }

    return {
      id: cardIdx,
      items: items
    };
  });

  return deck;
}
