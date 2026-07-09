// js/database.js

/**
 * Detailed database of the 21 amino acids, including Czech nomenclature,
 * codes, side chain classifications, and SVG coordinate data for chemical drawings.
 */
const AMINO_ACIDS = [
  {
    id: 0,
    name: "Alanin",
    engName: "Alanine",
    code3: "Ala",
    smiles: "CC(N)C(=O)O",
    code1: "A",
    group: "hydrophobic",
    groupCz: "Hydrofobní (alifatická)",
    formula: "C3H7NO2",
    condensed: "CH₃CH(NH₂)COOH",
    desc: "Jednoduchá alifatická aminokyselina s methylovou skupinou. Je jednou z nejčastějších aminokyselin v proteinech.",
    descEn: "Simple aliphatic amino acid with a methyl side chain. One of the most abundant amino acids found in proteins.",
    descDe: "Einfache aliphatische Aminosäure mit einer Methylseitengruppe. Gehört zu den häufigsten Aminosäuren in Proteinen.",
    descFr: "Acide aminé aliphatique simple avec un groupement méthyle. L'une des acides aminés les plus abondants dans les protéines.",
    structure: {
      atoms: [
        { x: 20, y: 50, label: "H₂N", type: "N" }, // 0
        { x: 40, y: 50, label: "", type: "C" },    // 1 (Ca)
        { x: 60, y: 50, label: "", type: "C" },    // 2 (C=O)
        { x: 70, y: 33, label: "O", type: "O" },   // 3
        { x: 75, y: 62, label: "OH", type: "O" },  // 4
        { x: 40, y: 70, label: "CH₃", type: "C" }  // 5 (side chain)
      ],
      bonds: [
        { from: 0, to: 1, type: 1 },
        { from: 1, to: 2, type: 1 },
        { from: 2, to: 3, type: 2 },
        { from: 2, to: 4, type: 1 },
        { from: 1, to: 5, type: 1 }
      ]
    }
  },
  {
    id: 1,
    name: "Arginin",
    engName: "Arginine",
    code3: "Arg",
    smiles: "NC(=N)NCCCC(N)C(=O)O",
    code1: "R",
    group: "basic",
    groupCz: "Zásaditá (kladně nabitá)",
    formula: "C6H14N4O2",
    condensed: "HN=C(NH₂)NH(CH₂)₃CH(NH₂)COOH",
    desc: "Aminokyselina s dlouhým postranním řetězcem zakončeným silně bazickou guanidinovou skupinou.",
    descEn: "Amino acid with a long side chain ending in a strongly basic guanidinium group.",
    descDe: "Aminosäure mit einer langen Seitenkette, die in einer stark basischen Guanidiniumgruppe endet.",
    descFr: "Acide aminé avec une longue chaîne latérale se terminant par un groupe guanidinium fortement basique.",
    structure: {
      atoms: [
        { x: 20, y: 35, label: "H₂N", type: "N" },
        { x: 38, y: 35, label: "", type: "C" },
        { x: 48, y: 20, label: "", type: "C" },
        { x: 48, y: 5, label: "O", type: "O" },
        { x: 64, y: 25, label: "OH", type: "O" },
        // Side chain
        { x: 38, y: 53, label: "", type: "C" },    // Cb (5)
        { x: 24, y: 62, label: "", type: "C" },    // Cg (6)
        { x: 24, y: 80, label: "", type: "C" },    // Cd (7)
        { x: 38, y: 88, label: "NH", type: "N" },   // Ne (8)
        { x: 38, y: 106, label: "", type: "C" },   // Cz (9)
        { x: 24, y: 114, label: "NH₂", type: "N" }, // Nh1 (10)
        { x: 53, y: 114, label: "NH₂⁺", type: "N" } // Nh2 (11)
      ],
      bonds: [
        { from: 0, to: 1, type: 1 },
        { from: 1, to: 2, type: 1 },
        { from: 2, to: 3, type: 2 },
        { from: 2, to: 4, type: 1 },
        { from: 1, to: 5, type: 1 },
        { from: 5, to: 6, type: 1 },
        { from: 6, to: 7, type: 1 },
        { from: 7, to: 8, type: 1 },
        { from: 8, to: 9, type: 1 },
        { from: 9, to: 10, type: 1 },
        { from: 9, to: 11, type: 2 }
      ]
    }
  },
  {
    id: 2,
    name: "Asparagin",
    engName: "Asparagine",
    code3: "Asn",
    smiles: "NC(=O)CC(N)C(=O)O",
    code1: "N",
    group: "polar",
    groupCz: "Polární (nenabitá)",
    formula: "C4H8N2O3",
    condensed: "H₂NCOCH₂CH(NH₂)COOH",
    desc: "Polární aminokyselina s karboxamidovou skupinou v postranním řetězci. První izolovaná aminokyselina (z chřestu).",
    descEn: "Polar amino acid with a carboxamide group in its side chain. The first amino acid ever isolated (from asparagus).",
    descDe: "Polare Aminosäure mit einer Carboxamidgruppe in der Seitenkette. Erste isolierte Aminosäure (aus Spargel).",
    descFr: "Acide aminé polaire avec un groupement carboxamide dans sa chaîne latérale. Premier acide aminé isolé (à partir d'asperges).",
    structure: {
      atoms: [
        { x: 20, y: 50, label: "H₂N", type: "N" },
        { x: 40, y: 50, label: "", type: "C" },
        { x: 60, y: 50, label: "", type: "C" },
        { x: 70, y: 33, label: "O", type: "O" },
        { x: 75, y: 62, label: "OH", type: "O" },
        // Side chain
        { x: 40, y: 70, label: "", type: "C" },     // Cb
        { x: 25, y: 78, label: "", type: "C" },     // Cg
        { x: 12, y: 70, label: "O", type: "O" },    // Od1
        { x: 25, y: 95, label: "NH₂", type: "N" }   // Nd2
      ],
      bonds: [
        { from: 0, to: 1, type: 1 },
        { from: 1, to: 2, type: 1 },
        { from: 2, to: 3, type: 2 },
        { from: 2, to: 4, type: 1 },
        { from: 1, to: 5, type: 1 },
        { from: 5, to: 6, type: 1 },
        { from: 6, to: 7, type: 2 },
        { from: 6, to: 8, type: 1 }
      ]
    }
  },
  {
    id: 3,
    name: "Aspartát",
    engName: "Aspartate",
    code3: "Asp",
    smiles: "OC(=O)CC(N)C(=O)O",
    code1: "D",
    group: "acidic",
    groupCz: "Kyselá (záporně nabitá)",
    formula: "C4H7NO4",
    condensed: "HOOCCH₂CH(NH₂)COOH",
    desc: "Kyselá aminokyselina (kyselina asparagová), která nese při fyziologickém pH záporný náboj.",
    descEn: "Acidic amino acid (aspartic acid) that carries a negative charge at physiological pH.",
    descDe: "Saure Aminosäure (Asparaginsäure), die bei physiologischem pH eine negative Ladung trägt.",
    descFr: "Acide aminé acide (acide aspartique) qui porte une charge négative au pH physiologique.",
    structure: {
      atoms: [
        { x: 20, y: 50, label: "H₂N", type: "N" },
        { x: 40, y: 50, label: "", type: "C" },
        { x: 60, y: 50, label: "", type: "C" },
        { x: 70, y: 33, label: "O", type: "O" },
        { x: 75, y: 62, label: "OH", type: "O" },
        // Side chain
        { x: 40, y: 70, label: "", type: "C" },     // Cb
        { x: 25, y: 78, label: "", type: "C" },     // Cg
        { x: 12, y: 70, label: "O", type: "O" },    // Od1
        { x: 25, y: 95, label: "O⁻", type: "O" }    // Od2 (ionized)
      ],
      bonds: [
        { from: 0, to: 1, type: 1 },
        { from: 1, to: 2, type: 1 },
        { from: 2, to: 3, type: 2 },
        { from: 2, to: 4, type: 1 },
        { from: 1, to: 5, type: 1 },
        { from: 5, to: 6, type: 1 },
        { from: 6, to: 7, type: 2 },
        { from: 6, to: 8, type: 1 }
      ]
    }
  },
  {
    id: 4,
    name: "Cystein",
    engName: "Cysteine",
    code3: "Cys",
    smiles: "C(C(C(=O)O)N)S",
    code1: "C",
    group: "polar",
    groupCz: "Polární (obsahující síru)",
    formula: "C3H7NO2S",
    condensed: "HSCH₂CH(NH₂)COOH",
    desc: "Polární aminokyselina obsahující reaktivní sulfhydrylovou (-SH) skupinu, která tvoří disulfidické můstky.",
    descEn: "Polar amino acid containing a reactive sulfhydryl (–SH) group capable of forming disulfide bridges.",
    descDe: "Polare Aminosäure mit einer reaktiven Sulfhydrylgruppe (–SH), die Disulfidbrücken bilden kann.",
    descFr: "Acide aminé polaire contenant un groupement sulfhydryle (–SH) réactif, capable de former des ponts disulfures.",
    structure: {
      atoms: [
        { x: 20, y: 50, label: "H₂N", type: "N" },
        { x: 40, y: 50, label: "", type: "C" },
        { x: 60, y: 50, label: "", type: "C" },
        { x: 70, y: 33, label: "O", type: "O" },
        { x: 75, y: 62, label: "OH", type: "O" },
        // Side chain
        { x: 40, y: 70, label: "", type: "C" },     // Cb
        { x: 40, y: 88, label: "SH", type: "S" }     // Sg
      ],
      bonds: [
        { from: 0, to: 1, type: 1 },
        { from: 1, to: 2, type: 1 },
        { from: 2, to: 3, type: 2 },
        { from: 2, to: 4, type: 1 },
        { from: 1, to: 5, type: 1 },
        { from: 5, to: 6, type: 1 }
      ]
    }
  },
  {
    id: 5,
    name: "Glutamin",
    engName: "Glutamine",
    code3: "Gln",
    smiles: "NC(=O)CCC(N)C(=O)O",
    code1: "Q",
    group: "polar",
    groupCz: "Polární (nenabitá)",
    formula: "C5H10N2O3",
    condensed: "H₂NCO(CH₂)₂CH(NH₂)COOH",
    desc: "Nejhojnější volná aminokyselina v těle. Slouží k bezpečnému transportu amoniaku krví.",
    descEn: "The most abundant free amino acid in the body. Serves as a safe carrier of ammonia in the bloodstream.",
    descDe: "Die häufigste freie Aminosäure im Körper. Dient als sicherer Ammoniak-Transporteur im Blut.",
    descFr: "L'acide aminé libre le plus abondant dans l'organisme. Sert à transporter l'ammoniaque en toute sécurité dans le sang.",
    structure: {
      atoms: [
        { x: 20, y: 50, label: "H₂N", type: "N" },
        { x: 40, y: 50, label: "", type: "C" },
        { x: 60, y: 50, label: "", type: "C" },
        { x: 70, y: 33, label: "O", type: "O" },
        { x: 75, y: 62, label: "OH", type: "O" },
        // Side chain
        { x: 40, y: 70, label: "", type: "C" },     // Cb
        { x: 26, y: 78, label: "", type: "C" },     // Cg
        { x: 26, y: 95, label: "", type: "C" },     // Cd
        { x: 13, y: 104, label: "O", type: "O" },    // Oe1
        { x: 40, y: 104, label: "NH₂", type: "N" }   // Ne2
      ],
      bonds: [
        { from: 0, to: 1, type: 1 },
        { from: 1, to: 2, type: 1 },
        { from: 2, to: 3, type: 2 },
        { from: 2, to: 4, type: 1 },
        { from: 1, to: 5, type: 1 },
        { from: 5, to: 6, type: 1 },
        { from: 6, to: 7, type: 1 },
        { from: 7, to: 8, type: 2 },
        { from: 7, to: 9, type: 1 }
      ]
    }
  },
  {
    id: 6,
    name: "Glutamát",
    engName: "Glutamate",
    code3: "Glu",
    smiles: "OC(=O)CCC(N)C(=O)O",
    code1: "E",
    group: "acidic",
    groupCz: "Kyselá (záporně nabitá)",
    formula: "C5H9NO4",
    condensed: "HOOC(CH₂)₂CH(NH₂)COOH",
    desc: "Kyselá aminokyselina (kyselina glutamová). V mozku působí jako hlavní excitační neurotransmiter.",
    descEn: "Acidic amino acid (glutamic acid). Acts as the main excitatory neurotransmitter in the brain.",
    descDe: "Saure Aminosäure (Glutaminsäure). Wirkt im Gehirn als wichtigster erregender Neurotransmitter.",
    descFr: "Acide aminé acide (acide glutamique). Agit comme principal neurotransmetteur excitateur dans le cerveau.",
    structure: {
      atoms: [
        { x: 20, y: 50, label: "H₂N", type: "N" },
        { x: 40, y: 50, label: "", type: "C" },
        { x: 60, y: 50, label: "", type: "C" },
        { x: 70, y: 33, label: "O", type: "O" },
        { x: 75, y: 62, label: "OH", type: "O" },
        // Side chain
        { x: 40, y: 70, label: "", type: "C" },     // Cb
        { x: 26, y: 78, label: "", type: "C" },     // Cg
        { x: 26, y: 95, label: "", type: "C" },     // Cd
        { x: 13, y: 104, label: "O", type: "O" },    // Oe1
        { x: 40, y: 104, label: "O⁻", type: "O" }    // Oe2 (ionized)
      ],
      bonds: [
        { from: 0, to: 1, type: 1 },
        { from: 1, to: 2, type: 1 },
        { from: 2, to: 3, type: 2 },
        { from: 2, to: 4, type: 1 },
        { from: 1, to: 5, type: 1 },
        { from: 5, to: 6, type: 1 },
        { from: 6, to: 7, type: 1 },
        { from: 7, to: 8, type: 2 },
        { from: 7, to: 9, type: 1 }
      ]
    }
  },
  {
    id: 7,
    name: "Glycin",
    engName: "Glycine",
    code3: "Gly",
    smiles: "NCC(=O)O",
    code1: "G",
    group: "hydrophobic",
    groupCz: "Nejjednodušší (achirální)",
    formula: "C2H5NO2",
    condensed: "H₂NCH₂COOH",
    desc: "Nejmenší a nejjednodušší aminokyselina. Jako jediná nemá asymetrický uhlík (je achirální).",
    descEn: "The smallest and simplest amino acid. The only one without an asymmetric carbon atom (achiral).",
    descDe: "Die kleinste und einfachste Aminosäure. Als einzige besitzt sie kein asymmetrisches Kohlenstoffatom (achiral).",
    descFr: "Le plus petit et le plus simple des acides aminés. Le seul à ne pas posséder de carbone asymétrique (achiral).",
    structure: {
      atoms: [
        { x: 20, y: 50, label: "H₂N", type: "N" },
        { x: 40, y: 50, label: "", type: "C" },
        { x: 60, y: 50, label: "", type: "C" },
        { x: 70, y: 33, label: "O", type: "O" },
        { x: 75, y: 62, label: "OH", type: "O" },
        { x: 40, y: 72, label: "H", type: "H" }      // explicit H for glycine makes it recognizable
      ],
      bonds: [
        { from: 0, to: 1, type: 1 },
        { from: 1, to: 2, type: 1 },
        { from: 2, to: 3, type: 2 },
        { from: 2, to: 4, type: 1 },
        { from: 1, to: 5, type: 1 }
      ]
    }
  },
  {
    id: 8,
    name: "Histidin",
    engName: "Histidine",
    code3: "His",
    smiles: "NC(Cc1c[nH]cn1)C(=O)O",
    code1: "H",
    group: "basic",
    groupCz: "Zásaditá (aromatická)",
    formula: "C6H9N3O2",
    condensed: "C₃H₃N₂CH₂CH(NH₂)COOH",
    desc: "Aminokyselina s imidazolovým kruhem. Její pKa je blízké fyziologickému pH (často v aktivních místech enzymů).",
    descEn: "Amino acid with an imidazole ring. Its pKa is close to physiological pH, making it frequent in enzyme active sites.",
    descDe: "Aminosäure mit einem Imidazolring. Ihr pKa liegt nahe am physiologischen pH – daher oft in aktiven Zentren von Enzymen.",
    descFr: "Acide aminé avec un cycle imidazole. Son pKa proche du pH physiologique en fait un résidu fréquent dans les sites actifs des enzymes.",
    structure: {
      atoms: [
        { x: 20, y: 50, label: "H₂N", type: "N" },
        { x: 40, y: 50, label: "", type: "C" },
        { x: 60, y: 50, label: "", type: "C" },
        { x: 70, y: 33, label: "O", type: "O" },
        { x: 75, y: 62, label: "OH", type: "O" },
        // Side chain
        { x: 40, y: 70, label: "", type: "C" },     // Cb (5)
        { x: 40, y: 87, label: "", type: "C" },     // Cg (6)
        { x: 25, y: 95, label: "N", type: "N" },    // Nd1 (7)
        { x: 31, y: 111, label: "", type: "C" },    // Ce1 (8)
        { x: 49, y: 111, label: "NH", type: "N" },  // Ne2 (9)
        { x: 55, y: 95, label: "", type: "C" }     // Cd2 (10)
      ],
      bonds: [
        { from: 0, to: 1, type: 1 },
        { from: 1, to: 2, type: 1 },
        { from: 2, to: 3, type: 2 },
        { from: 2, to: 4, type: 1 },
        { from: 1, to: 5, type: 1 },
        { from: 5, to: 6, type: 1 },
        { from: 6, to: 7, type: 1 },
        { from: 7, to: 8, type: 2 }, // double bond N=C
        { from: 8, to: 9, type: 1 },
        { from: 9, to: 10, type: 1 },
        { from: 10, to: 6, type: 2 } // double bond C=C
      ]
    }
  },
  {
    id: 9,
    name: "Isoleucin",
    engName: "Isoleucine",
    code3: "Ile",
    smiles: "CCC(C)C(N)C(=O)O",
    code1: "I",
    group: "hydrophobic",
    groupCz: "Hydrofobní (alifatická)",
    formula: "C6H13NO2",
    condensed: "CH₃CH₂CH(CH₃)CH(NH₂)COOH",
    desc: "Esenciální aminokyselina s rozvětveným řetězcem (BCAA). Je izomerem leucinu s asymetrickým Cβ.",
    descEn: "Essential branched-chain amino acid (BCAA). An isomer of leucine with an additional asymmetric Cβ carbon.",
    descDe: "Essentielle verzweigtkettige Aminosäure (BCAA). Ein Isomer des Leucins mit einem zusätzlichen asymmetrischen Cβ-Kohlenstoff.",
    descFr: "Acide aminé essentiel à chaîne ramifiée (BCAA). Isomère de la leucine avec un Cβ asymétrique supplémentaire.",
    structure: {
      atoms: [
        { x: 20, y: 50, label: "H₂N", type: "N" },
        { x: 40, y: 50, label: "", type: "C" },
        { x: 60, y: 50, label: "", type: "C" },
        { x: 70, y: 33, label: "O", type: "O" },
        { x: 75, y: 62, label: "OH", type: "O" },
        // Side chain
        { x: 40, y: 68, label: "", type: "C" },     // Cb (5)
        { x: 53, y: 77, label: "CH₃", type: "C" },  // Cg2 (6) methyl
        { x: 27, y: 77, label: "", type: "C" },     // Cg1 (7)
        { x: 27, y: 94, label: "CH₃", type: "C" }   // Cd1 (8)
      ],
      bonds: [
        { from: 0, to: 1, type: 1 },
        { from: 1, to: 2, type: 1 },
        { from: 2, to: 3, type: 2 },
        { from: 2, to: 4, type: 1 },
        { from: 1, to: 5, type: 1 },
        { from: 5, to: 6, type: 1 },
        { from: 5, to: 7, type: 1 },
        { from: 7, to: 8, type: 1 }
      ]
    }
  },
  {
    id: 10,
    name: "Leucin",
    engName: "Leucine",
    code3: "Leu",
    smiles: "CC(C)CC(N)C(=O)O",
    code1: "L",
    group: "hydrophobic",
    groupCz: "Hydrofobní (alifatická)",
    formula: "C6H13NO2",
    condensed: "(CH₃)₂CHCH₂CH(NH₂)COOH",
    desc: "Esenciální rozvětvená aminokyselina (BCAA). Slouží jako klíčový signální stimulátor syntézy svalových proteinů (mTOR).",
    descEn: "Essential branched-chain amino acid (BCAA). A key activator of the mTOR pathway, stimulating muscle protein synthesis.",
    descDe: "Essentielle verzweigtkettige Aminosäure (BCAA). Wichtiger Aktivator des mTOR-Signalwegs zur Stimulierung der Muskelproteinsynthese.",
    descFr: "Acide aminé essentiel à chaîne ramifiée (BCAA). Activateur clé de la voie mTOR, stimulant la synthèse des protéines musculaires.",
    structure: {
      atoms: [
        { x: 20, y: 50, label: "H₂N", type: "N" },
        { x: 40, y: 50, label: "", type: "C" },
        { x: 60, y: 50, label: "", type: "C" },
        { x: 70, y: 33, label: "O", type: "O" },
        { x: 75, y: 62, label: "OH", type: "O" },
        // Side chain
        { x: 40, y: 68, label: "", type: "C" },     // Cb
        { x: 40, y: 84, label: "", type: "C" },     // Cg
        { x: 27, y: 94, label: "CH₃", type: "C" },  // Cd1
        { x: 53, y: 94, label: "CH₃", type: "C" }   // Cd2
      ],
      bonds: [
        { from: 0, to: 1, type: 1 },
        { from: 1, to: 2, type: 1 },
        { from: 2, to: 3, type: 2 },
        { from: 2, to: 4, type: 1 },
        { from: 1, to: 5, type: 1 },
        { from: 5, to: 6, type: 1 },
        { from: 6, to: 7, type: 1 },
        { from: 6, to: 8, type: 1 }
      ]
    }
  },
  {
    id: 11,
    name: "Lysin",
    engName: "Lysine",
    code3: "Lys",
    smiles: "NCCCC(N)C(=O)O",
    code1: "K",
    group: "basic",
    groupCz: "Zásaditá (kladně nabitá)",
    formula: "C6H14N2O2",
    condensed: "H₂N(CH₂)₄CH(NH₂)COOH",
    desc: "Esenciální aminokyselina s dlouhým alifatickým řetězcem zakončeným primární amino skupinou.",
    descEn: "Essential amino acid with a long aliphatic chain ending in a primary amino group.",
    descDe: "Essentielle Aminosäure mit einer langen aliphatischen Kette, die in einer primären Aminogruppe endet.",
    descFr: "Acide aminé essentiel avec une longue chaîne aliphatique se terminant par un groupement amino primaire.",
    structure: {
      atoms: [
        { x: 20, y: 50, label: "H₂N", type: "N" },
        { x: 40, y: 50, label: "", type: "C" },
        { x: 60, y: 50, label: "", type: "C" },
        { x: 70, y: 33, label: "O", type: "O" },
        { x: 75, y: 62, label: "OH", type: "O" },
        // Side chain
        { x: 40, y: 68, label: "", type: "C" },     // Cb
        { x: 53, y: 77, label: "", type: "C" },     // Cg
        { x: 53, y: 93, label: "", type: "C" },     // Cd
        { x: 66, y: 101, label: "", type: "C" },    // Ce
        { x: 66, y: 117, label: "NH₃⁺", type: "N" }  // Nz (ionized)
      ],
      bonds: [
        { from: 0, to: 1, type: 1 },
        { from: 1, to: 2, type: 1 },
        { from: 2, to: 3, type: 2 },
        { from: 2, to: 4, type: 1 },
        { from: 1, to: 5, type: 1 },
        { from: 5, to: 6, type: 1 },
        { from: 6, to: 7, type: 1 },
        { from: 7, to: 8, type: 1 },
        { from: 8, to: 9, type: 1 }
      ]
    }
  },
  {
    id: 12,
    name: "Methionin",
    engName: "Methionine",
    code3: "Met",
    smiles: "CSCCC(N)C(=O)O",
    code1: "M",
    group: "hydrophobic",
    groupCz: "Hydrofobní (obsahující síru)",
    formula: "C5H11NO2S",
    condensed: "CH₃S(CH₂)₂CH(NH₂)COOH",
    desc: "Esenciální aminokyselina. Slouží jako startovní aminokyselina při syntéze proteinů (kodón AUG).",
    descEn: "Essential amino acid. Serves as the initiator amino acid for protein synthesis (start codon AUG).",
    descDe: "Essentielle Aminosäure. Dient als Start-Aminosäure bei der Proteinsynthese (Startcodon AUG).",
    descFr: "Acide aminé essentiel. Sert d'acide aminé initiateur pour la synthèse des protéines (codon start AUG).",
    structure: {
      atoms: [
        { x: 20, y: 50, label: "H₂N", type: "N" },
        { x: 40, y: 50, label: "", type: "C" },
        { x: 60, y: 50, label: "", type: "C" },
        { x: 70, y: 33, label: "O", type: "O" },
        { x: 75, y: 62, label: "OH", type: "O" },
        // Side chain
        { x: 40, y: 68, label: "", type: "C" },     // Cb
        { x: 53, y: 77, label: "", type: "C" },     // Cg
        { x: 53, y: 94, label: "S", type: "S" },     // Sd
        { x: 66, y: 103, label: "CH₃", type: "C" }  // Ce
      ],
      bonds: [
        { from: 0, to: 1, type: 1 },
        { from: 1, to: 2, type: 1 },
        { from: 2, to: 3, type: 2 },
        { from: 2, to: 4, type: 1 },
        { from: 1, to: 5, type: 1 },
        { from: 5, to: 6, type: 1 },
        { from: 6, to: 7, type: 1 },
        { from: 7, to: 8, type: 1 }
      ]
    }
  },
  {
    id: 13,
    name: "Fenylalanin",
    engName: "Phenylalanine",
    code3: "Phe",
    smiles: "NC(Cc1ccccc1)C(=O)O",
    code1: "F",
    group: "aromatic",
    groupCz: "Aromatická (nepolární)",
    formula: "C9H11NO2",
    condensed: "C₆H₅CH₂CH(NH₂)COOH",
    desc: "Esenciální aminokyselina s benzenovým kruhem. Je prekurzorem tyrosinu a katecholaminů.",
    descEn: "Essential aromatic amino acid with a benzene ring. Precursor to tyrosine and catecholamines.",
    descDe: "Essentielle aromatische Aminosäure mit einem Benzolring. Vorläufer von Tyrosin und Katecholaminen.",
    descFr: "Acide aminé aromatique essentiel avec un cycle benzénique. Précurseur de la tyrosine et des catécholamines.",
    structure: {
      atoms: [
        { x: 20, y: 50, label: "H₂N", type: "N" },
        { x: 40, y: 50, label: "", type: "C" },
        { x: 60, y: 50, label: "", type: "C" },
        { x: 70, y: 33, label: "O", type: "O" },
        { x: 75, y: 62, label: "OH", type: "O" },
        // Side chain
        { x: 40, y: 68, label: "", type: "C" },     // Cb (5)
        { x: 40, y: 84, label: "", type: "C" },     // Cg (6)
        { x: 26, y: 92, label: "", type: "C" },     // Cd1 (7)
        { x: 26, y: 108, label: "", type: "C" },    // Ce1 (8)
        { x: 40, y: 116, label: "", type: "C" },    // Cz (9)
        { x: 54, y: 108, label: "", type: "C" },    // Ce2 (10)
        { x: 54, y: 92, label: "", type: "C" }      // Cd2 (11)
      ],
      bonds: [
        { from: 0, to: 1, type: 1 },
        { from: 1, to: 2, type: 1 },
        { from: 2, to: 3, type: 2 },
        { from: 2, to: 4, type: 1 },
        { from: 1, to: 5, type: 1 },
        { from: 5, to: 6, type: 1 },
        { from: 6, to: 7, type: 2 },  // double bond in ring
        { from: 7, to: 8, type: 1 },
        { from: 8, to: 9, type: 2 },  // double bond
        { from: 9, to: 10, type: 1 },
        { from: 10, to: 11, type: 2 }, // double bond
        { from: 11, to: 6, type: 1 }
      ]
    }
  },
  {
    id: 14,
    name: "Prolin",
    engName: "Proline",
    code3: "Pro",
    smiles: "C1CCNC1C(=O)O",
    code1: "P",
    group: "hydrophobic",
    groupCz: "Cyklická iminokyselina",
    formula: "C5H9NO2",
    condensed: "C₄H₇NHCOOH",
    desc: "Sekundární aminokyselina (iminokyselina). Její cyklická struktura způsobuje 'zalomení' v alfa-helixech proteinů.",
    descEn: "Secondary amino acid (imino acid). Its cyclic pyrrolidine ring introduces kinks and breaks in protein alpha-helices.",
    descDe: "Sekundäre Aminosäure (Iminosäure). Ihr zyklischer Pyrrolidinring erzeugt Knicke und Unterbrechungen in Alpha-Helices von Proteinen.",
    descFr: "Acide aminé secondaire (iminoacide). Son cycle pyrrolidine introduit des coudes dans les hélices alpha des protéines.",
    structure: {
      atoms: [
        { x: 22, y: 48, label: "HN", type: "N" },  // 0 (ring nitrogen)
        { x: 40, y: 50, label: "", type: "C" },    // 1 (Ca)
        { x: 56, y: 40, label: "", type: "C" },    // 2 (C)
        { x: 56, y: 20, label: "O", type: "O" },   // 3
        { x: 71, y: 48, label: "OH", type: "O" },  // 4
        // Ring side chain
        { x: 44, y: 68, label: "", type: "C" },    // Cb (5)
        { x: 29, y: 76, label: "", type: "C" },    // Cg (6)
        { x: 16, y: 62, label: "", type: "C" }     // Cd (7)
      ],
      bonds: [
        { from: 0, to: 1, type: 1 },
        { from: 1, to: 2, type: 1 },
        { from: 2, to: 3, type: 2 },
        { from: 2, to: 4, type: 1 },
        { from: 1, to: 5, type: 1 },
        { from: 5, to: 6, type: 1 },
        { from: 6, to: 7, type: 1 },
        { from: 7, to: 0, type: 1 } // close the ring to nitrogen!
      ]
    }
  },
  {
    id: 15,
    name: "Serin",
    engName: "Serine",
    code3: "Ser",
    smiles: "OCC(N)C(=O)O",
    code1: "S",
    group: "polar",
    groupCz: "Polární (s hydroxylovou sk.)",
    formula: "C3H7NO3",
    condensed: "HOCH₂CH(NH₂)COOH",
    desc: "Polární aminokyselina s hydroxylovou skupinou. Je často modifikována fosforylací v buněčné signalizaci.",
    descEn: "Polar amino acid with a hydroxyl group. Frequently modified by phosphorylation in cellular signalling pathways.",
    descDe: "Polare Aminosäure mit einer Hydroxylgruppe. Wird häufig durch Phosphorylierung in zellulären Signalwegen modifiziert.",
    descFr: "Acide aminé polaire avec un groupement hydroxyle. Fréquemment modifié par phosphorylation dans les voies de signalisation cellulaire.",
    structure: {
      atoms: [
        { x: 20, y: 50, label: "H₂N", type: "N" },
        { x: 40, y: 50, label: "", type: "C" },
        { x: 60, y: 50, label: "", type: "C" },
        { x: 70, y: 33, label: "O", type: "O" },
        { x: 75, y: 62, label: "OH", type: "O" },
        // Side chain
        { x: 40, y: 70, label: "", type: "C" },     // Cb
        { x: 40, y: 88, label: "OH", type: "O" }    // Og
      ],
      bonds: [
        { from: 0, to: 1, type: 1 },
        { from: 1, to: 2, type: 1 },
        { from: 2, to: 3, type: 2 },
        { from: 2, to: 4, type: 1 },
        { from: 1, to: 5, type: 1 },
        { from: 5, to: 6, type: 1 }
      ]
    }
  },
  {
    id: 16,
    name: "Threonin",
    engName: "Threonine",
    code3: "Thr",
    smiles: "CC(O)C(N)C(=O)O",
    code1: "T",
    group: "polar",
    groupCz: "Polární (s hydroxylovou sk.)",
    formula: "C4H9NO3",
    condensed: "CH₃CH(OH)CH(NH₂)COOH",
    desc: "Esenciální polární aminokyselina se dvěma chirálními centry. Cílové místo pro O-glykosylaci proteinů.",
    descEn: "Essential polar amino acid with two chiral centres. A primary site for O-glycosylation of proteins.",
    descDe: "Essentielle polare Aminosäure mit zwei chiralen Zentren. Hauptzielort für die O-Glykosylierung von Proteinen.",
    descFr: "Acide aminé polaire essentiel avec deux centres chiraux. Site privilégié pour la O-glycosylation des protéines.",
    structure: {
      atoms: [
        { x: 20, y: 50, label: "H₂N", type: "N" },
        { x: 40, y: 50, label: "", type: "C" },
        { x: 60, y: 50, label: "", type: "C" },
        { x: 70, y: 33, label: "O", type: "O" },
        { x: 75, y: 62, label: "OH", type: "O" },
        // Side chain
        { x: 40, y: 68, label: "", type: "C" },     // Cb
        { x: 27, y: 78, label: "OH", type: "O" },   // Og1
        { x: 53, y: 78, label: "CH₃", type: "C" }   // Cg2
      ],
      bonds: [
        { from: 0, to: 1, type: 1 },
        { from: 1, to: 2, type: 1 },
        { from: 2, to: 3, type: 2 },
        { from: 2, to: 4, type: 1 },
        { from: 1, to: 5, type: 1 },
        { from: 5, to: 6, type: 1 },
        { from: 5, to: 7, type: 1 }
      ]
    }
  },
  {
    id: 17,
    name: "Tryptofan",
    engName: "Tryptophan",
    code3: "Trp",
    smiles: "NC(Cc1c[nH]c2ccccc12)C(=O)O",
    code1: "W",
    group: "aromatic",
    groupCz: "Aromatická (prekurzor hormonů)",
    formula: "C11H12N2O2",
    condensed: "C₈H₆NCH₂CH(NH₂)COOH",
    desc: "Největší aminokyselina s dvojitým indolovým kruhem. Je esenciální a slouží jako prekurzor serotoninu a melatoninu.",
    descEn: "The largest amino acid, with a bicyclic indole ring. Essential; serves as a precursor to serotonin and melatonin.",
    descDe: "Die größte Aminosäure mit einem bizyklischen Indolring. Essenziell; Vorläufer von Serotonin und Melatonin.",
    descFr: "Le plus grand des acides aminés, avec un cycle indole bicyclique. Essentiel ; précurseur de la sérotonine et de la mélatonine.",
    structure: {
      atoms: [
        { x: 15, y: 35, label: "H₂N", type: "N" },
        { x: 33, y: 35, label: "", type: "C" },
        { x: 43, y: 20, label: "", type: "C" },
        { x: 43, y: 5, label: "O", type: "O" },
        { x: 59, y: 25, label: "OH", type: "O" },
        // Side chain
        { x: 33, y: 53, label: "", type: "C" },    // Cb (5)
        { x: 33, y: 69, label: "", type: "C" },    // Cg (6)
        { x: 47, y: 75, label: "", type: "C" },    // Cd1 (7)
        { x: 42, y: 89, label: "NH", type: "N" },  // Ne1 (8)
        { x: 28, y: 89, label: "", type: "C" },    // Ce2 (9) (fused)
        { x: 23, y: 77, label: "", type: "C" },    // Cd2 (10) (fused)
        { x: 9, y: 77, label: "", type: "C" },     // Ce3 (11)
        { x: 2, y: 89, label: "", type: "C" },     // Cz3 (12)
        { x: 7, y: 101, label: "", type: "C" },    // Ch2 (13)
        { x: 21, y: 101, label: "", type: "C" }    // Cz2 (14)
      ],
      bonds: [
        { from: 0, to: 1, type: 1 },
        { from: 1, to: 2, type: 1 },
        { from: 2, to: 3, type: 2 },
        { from: 2, to: 4, type: 1 },
        { from: 1, to: 5, type: 1 },
        { from: 5, to: 6, type: 1 },
        // Pyrrole ring (5-ring)
        { from: 6, to: 7, type: 2 }, // Cg=Cd1
        { from: 7, to: 8, type: 1 },
        { from: 8, to: 9, type: 1 },
        { from: 9, to: 10, type: 1 },
        { from: 10, to: 6, type: 1 },
        // Benzene ring (6-ring)
        { from: 10, to: 11, type: 2 }, // Cd2=Ce3
        { from: 11, to: 12, type: 1 },
        { from: 12, to: 13, type: 2 }, // Cz3=Ch2
        { from: 13, to: 14, type: 1 },
        { from: 14, to: 9, type: 2 }  // Cz2=Ce2 (fused double bond)
      ]
    }
  },
  {
    id: 18,
    name: "Tyrosin",
    engName: "Tyrosine",
    code3: "Tyr",
    smiles: "NC(Cc1ccc(O)cc1)C(=O)O",
    code1: "Y",
    group: "aromatic",
    groupCz: "Aromatická (polární)",
    formula: "C9H11NO3",
    condensed: "HOC₆H₄CH₂CH(NH₂)COOH",
    desc: "Aromatická aminokyselina s fenolovou skupinou. Je klíčová pro syntézu hormonů štítné žlázy a neurotransmiteru dopaminu.",
    descEn: "Aromatic amino acid with a phenol group. Key precursor for thyroid hormones and the neurotransmitter dopamine.",
    descDe: "Aromatische Aminosäure mit einer Phenolgruppe. Wichtiger Vorläufer für Schilddrüsenhormone und den Neurotransmitter Dopamin.",
    descFr: "Acide aminé aromatique avec un groupement phénol. Précurseur clé des hormones thyroïdiennes et du neurotransmetteur dopamine.",
    structure: {
      atoms: [
        { x: 20, y: 50, label: "H₂N", type: "N" },
        { x: 40, y: 50, label: "", type: "C" },
        { x: 60, y: 50, label: "", type: "C" },
        { x: 70, y: 33, label: "O", type: "O" },
        { x: 75, y: 62, label: "OH", type: "O" },
        // Side chain
        { x: 40, y: 68, label: "", type: "C" },     // Cb (5)
        { x: 40, y: 84, label: "", type: "C" },     // Cg (6)
        { x: 26, y: 92, label: "", type: "C" },     // Cd1 (7)
        { x: 26, y: 108, label: "", type: "C" },    // Ce1 (8)
        { x: 40, y: 116, label: "", type: "C" },    // Cz (9)
        { x: 54, y: 108, label: "", type: "C" },    // Ce2 (10)
        { x: 54, y: 92, label: "", type: "C" },     // Cd2 (11)
        { x: 40, y: 132, label: "OH", type: "O" }    // Oh (12)
      ],
      bonds: [
        { from: 0, to: 1, type: 1 },
        { from: 1, to: 2, type: 1 },
        { from: 2, to: 3, type: 2 },
        { from: 2, to: 4, type: 1 },
        { from: 1, to: 5, type: 1 },
        { from: 5, to: 6, type: 1 },
        // ring
        { from: 6, to: 7, type: 2 },
        { from: 7, to: 8, type: 1 },
        { from: 8, to: 9, type: 2 },
        { from: 9, to: 10, type: 1 },
        { from: 10, to: 11, type: 2 },
        { from: 11, to: 6, type: 1 },
        // phenol OH
        { from: 9, to: 12, type: 1 }
      ]
    }
  },
  {
    id: 19,
    name: "Valin",
    engName: "Valine",
    code3: "Val",
    smiles: "CC(C)C(N)C(=O)O",
    code1: "V",
    group: "hydrophobic",
    groupCz: "Hydrofobní (alifatická)",
    formula: "C5H11NO2",
    condensed: "(CH₃)₂CHCH(NH₂)COOH",
    desc: "Esenciální aminokyselina s rozvětveným isopropylovým řetězcem (BCAA). Důležitá pro regeneraci tkání.",
    descEn: "Essential branched-chain amino acid (BCAA) with an isopropyl side chain. Important for tissue repair and regeneration.",
    descDe: "Essentielle verzweigtkettige Aminosäure (BCAA) mit einer Isopropylseitenkette. Wichtig für Gewebereparatur und -regeneration.",
    descFr: "Acide aminé essentiel à chaîne ramifiée (BCAA) avec une chaîne latérale isopropyle. Important pour la réparation et la régénération des tissus.",
    structure: {
      atoms: [
        { x: 20, y: 50, label: "H₂N", type: "N" },
        { x: 40, y: 50, label: "", type: "C" },
        { x: 60, y: 50, label: "", type: "C" },
        { x: 70, y: 33, label: "O", type: "O" },
        { x: 75, y: 62, label: "OH", type: "O" },
        // Side chain
        { x: 40, y: 68, label: "", type: "C" },     // Cb
        { x: 27, y: 78, label: "CH₃", type: "C" },  // Cg1
        { x: 53, y: 78, label: "CH₃", type: "C" }   // Cg2
      ],
      bonds: [
        { from: 0, to: 1, type: 1 },
        { from: 1, to: 2, type: 1 },
        { from: 2, to: 3, type: 2 },
        { from: 2, to: 4, type: 1 },
        { from: 1, to: 5, type: 1 },
        { from: 5, to: 6, type: 1 },
        { from: 5, to: 7, type: 1 }
      ]
    }
  },
  {
    id: 20,
    name: "Selenocystein",
    engName: "Selenocysteine",
    code3: "Sec",
    smiles: "NC(C[SeH])C(=O)O",
    code1: "U",
    group: "polar",
    groupCz: "Polární (21. aminokyselina)",
    formula: "C3H7NO2Se",
    condensed: "HSeCH₂CH(NH₂)COOH",
    desc: "Obsahuje selen místo síry (selenolová skupina). Je kódována stop-kodónem UGA za přítomnosti specifického SECIS elementu mRNA.",
    descEn: "Contains selenium instead of sulfur (selenol group). Encoded by the UGA stop codon in the presence of a specific SECIS mRNA element.",
    descDe: "Enthält Selen statt Schwefel (Selenolgruppe). Wird durch das UGA-Stoppcodon codiert, wenn ein spezifisches SECIS-mRNA-Element vorhanden ist.",
    descFr: "Contient du sélénium à la place du soufre (groupe sélenol). Encodé par le codon stop UGA en présence d'un élément SECIS spécifique dans l'ARNm.",
    structure: {
      atoms: [
        { x: 20, y: 50, label: "H₂N", type: "N" },
        { x: 40, y: 50, label: "", type: "C" },
        { x: 60, y: 50, label: "", type: "C" },
        { x: 70, y: 33, label: "O", type: "O" },
        { x: 75, y: 62, label: "OH", type: "O" },
        // Side chain
        { x: 40, y: 70, label: "", type: "C" },     // Cb
        { x: 40, y: 88, label: "SeH", type: "Se" }   // Se
      ],
      bonds: [
        { from: 0, to: 1, type: 1 },
        { from: 1, to: 2, type: 1 },
        { from: 2, to: 3, type: 2 },
        { from: 2, to: 4, type: 1 },
        { from: 1, to: 5, type: 1 },
        { from: 5, to: 6, type: 1 }
      ]
    }
  }
];

// Map of atom element types to custom display properties (colors)
const ATOM_STYLES = {
  "N": { color: "#3182CE", bg: "#EBF8FF", radius: 8 },  // Blue
  "O": { color: "#E53E3E", bg: "#FED7D7", radius: 8 },  // Red
  "S": { color: "#D69E2E", bg: "#FEFCBF", radius: 8 },  // Yellow-gold
  "Se": { color: "#ED8936", bg: "#FEEBC8", radius: 8 }, // Orange
  "H": { color: "#718096", bg: "#EDF2F7", radius: 6 },  // Gray
  "C": { color: "#2D3748", bg: "#FFFFFF", radius: 0 }   // Charcoal (bare vertices)
};

/**
 * Renders a chemical structure into an SVG string.
 * @param {Object} structure The structure object from AMINO_ACIDS
 * @param {number} width Width of the SVG canvas
 * @param {number} height Height of the SVG canvas
 * @param {string} bondColor Color of the bond lines
 * @param {number} bondWidth Thickness of the bond lines
 * @returns {string} The SVG element as HTML string
 */
function renderStructureToSVG(structure, width = 140, height = 140, bondColor = "#2D3748", bondWidth = 2.5) {
  // Find coordinate bounds to auto-scale/fit the drawing
  let minX = Infinity, maxX = -Infinity;
  let minY = Infinity, maxY = -Infinity;
  
  structure.atoms.forEach(atom => {
    // Hide aliphatic carbon labels (CH3, CH2, CH, etc.) to show clean skeletal branches
    const cleanLabel = atom.label ? atom.label.replace(/[\u2080-\u2089]/g, m => String.fromCharCode(m.charCodeAt(0) - 0x2080 + 48)) : "";
    const isAliphaticCarbon = atom.label && /^(CH\d*|H\d*C|C)$/i.test(cleanLabel);
    const hasVisibleLabel = atom.label && !isAliphaticCarbon;
    
    // Add extra padding around visible text labels to prevent clipping
    const padding = hasVisibleLabel ? 10 : 2;
    if (atom.x - padding < minX) minX = atom.x - padding;
    if (atom.x + padding > maxX) maxX = atom.x + padding;
    if (atom.y - padding < minY) minY = atom.y - padding;
    if (atom.y + padding > maxY) maxY = atom.y + padding;
  });

  const contentW = maxX - minX;
  const contentH = maxY - minY;
  
  // Create padding and maintain aspect ratio
  const margin = 10;
  const paddedW = contentW + 2 * margin;
  const paddedH = contentH + 2 * margin;
  
  // Center coordinates in a viewbox
  const vbX = minX - margin;
  const vbY = minY - margin;
  const vbW = paddedW;
  const vbH = paddedH;

  let svgContent = "";
  
  // Draw bonds (lines) first so labels render on top
  structure.bonds.forEach(bond => {
    const fromAtom = structure.atoms[bond.from];
    const toAtom = structure.atoms[bond.to];
    
    if (bond.type === 2) {
      // Double bond: draw two parallel lines
      // Calculate perpendicular vector for offset
      const dx = toAtom.x - fromAtom.x;
      const dy = toAtom.y - fromAtom.y;
      const len = Math.sqrt(dx * dx + dy * dy);
      const px = -dy / len * 2;
      const py = dx / len * 2;
      
      svgContent += `
        <line x1="${fromAtom.x - px}" y1="${fromAtom.y - py}" x2="${toAtom.x - px}" y2="${toAtom.y - py}" stroke="${bondColor}" stroke-width="${bondWidth}" stroke-linecap="round"/>
        <line x1="${fromAtom.x + px}" y1="${fromAtom.y + py}" x2="${toAtom.x + px}" y2="${toAtom.y + py}" stroke="${bondColor}" stroke-width="${bondWidth}" stroke-linecap="round"/>
      `;
    } else {
      // Single bond
      svgContent += `
        <line x1="${fromAtom.x}" y1="${fromAtom.y}" x2="${toAtom.x}" y2="${toAtom.y}" stroke="${bondColor}" stroke-width="${bondWidth}" stroke-linecap="round"/>
      `;
    }
  });

  // Draw atom labels (text) with white background mask to clean up overlapping bond lines
  structure.atoms.forEach(atom => {
    const cleanLabel = atom.label ? atom.label.replace(/[\u2080-\u2089]/g, m => String.fromCharCode(m.charCodeAt(0) - 0x2080 + 48)) : "";
    const isAliphaticCarbon = atom.label && /^(CH\d*|H\d*C|C)$/i.test(cleanLabel);
    if (atom.label && !isAliphaticCarbon) {
      const style = ATOM_STYLES[atom.type] || { color: bondColor, bg: "#FFFFFF", radius: 8 };
      
      // Determine font sizing and positioning offsets based on label length
      let labelWidth = atom.label.length * 7;
      let labelHeight = 12;
      
      // Render white backing rectangle for mask
      svgContent += `
        <rect x="${atom.x - labelWidth/2}" y="${atom.y - labelHeight}" width="${labelWidth}" height="${labelHeight * 1.5}" fill="#FFFFFF" rx="3" ry="3"/>
      `;
      
      // Render colored text label
      svgContent += `
        <text x="${atom.x}" y="${atom.y + 2}" font-family="system-ui, -apple-system, sans-serif" font-size="11px" font-weight="bold" fill="${style.color}" text-anchor="middle" dominant-baseline="middle">${atom.label}</text>
      `;
    }
  });

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vbX} ${vbY} ${vbW} ${vbH}" width="${width}" height="${height}">${svgContent}</svg>`;
}
