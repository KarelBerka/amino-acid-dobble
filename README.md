# AA-Dobble: Proteinogenic Amino Acids Game

An interactive, web-based card generator and practice trainer themed around proteinogenic amino acids, inspired by the mechanics of the game **Dobble (Spot It!)**.

Live demo: **[https://karelberka.github.io/amino-acid-dobble/](https://karelberka.github.io/amino-acid-dobble/)**

---

## 🧪 Semantic Match: Matching by Meaning

Unlike classic Dobble where players identify identical illustrations, **AA-Dobble** challenges players to match representations by **meaning**. 

For each of the **21 amino acids** in the game, there are **5 different representations**:
1. **Name** (Language dependent: Czech name in CZ mode, English name in EN mode)
2. **3-letter Code** (e.g., `Ala`, `Gly`, `Val`)
3. **1-letter Code** (e.g., `A`, `G`, `V`)
4. **Condensed Chemical Formula** (e.g., `CH₃CH(NH₂)COOH` for Alanine)
5. **Skeletal Chemical Structure** (crisp, color-coded vector drawings)

The deck generator shuffles these representations so that the single matching amino acid between any two cards **always appears in two different formats** (e.g., one card shows the skeletal structure and the other shows the 1-letter code). This forces players to translate the meaning in their head instead of relying on simple visual matching!

---

## 📐 Mathematical Perfection: Projective Plane $PG(2, 4)$

The card deck is generated using a finite projective plane of order $q = 4$ constructed over the Galois Field $GF(4)$. This mathematical model guarantees the following properties:
* **Total Symbols (Amino Acids)**: $q^2 + q + 1 = 21$ symbols
* **Total Cards**: $q^2 + q + 1 = 21$ cards
* **Symbols per Card**: $q + 1 = 5$ symbols
* **Intersection Property**: Any two distinct cards share **exactly one** symbol in common.

### Included Amino Acids
The deck features the **20 standard proteinogenic amino acids** plus **Selenocysteine (Sec, U)** as the 21st amino acid to complete the projective plane perfectly.

---

## 🚀 Key Features

* **Interactive Trainer**: Play a fast-paced game against the clock to practice matching cards. Includes point scoring, active combo streak multipliers, a dynamic progress bar, sound effects synthesized on-the-fly using the **Web Audio API**, particle explosions, and screen-shake feedback.
* **Printable Deck Generator**: Generate and customize your own printable deck!
  - **Card Shape**: Choose between classic circular cards or square cards for easier cutting.
  - **Cheatsheet Solutions**: Optionally print tiny helper lists of codes on each card for quick verification.
  - **Symbol Rotation**: Toggle random rotations of symbols to adjust difficulty.
  - **Print Layout**: Fully optimized print stylesheet (`@media print`) that automatically formats cards into grid pages with cut-guides and removes all UI controls when printed.
* **Bilingual Support (CZ / EN)**: Instantly switch between Czech and English. The UI translated dynamically and the cards adapt their representation pairs.
* **Skeletal Structure Library (Encyclopedia)**: An interactive reference library displaying all 21 amino acids with names, codes, IUPAC-style condensed formulas, biological descriptions, and color-coded structures (Carbon: charcoal, Nitrogen: blue, Oxygen: red, Sulfur: gold, Selenium: orange).

---

## 🛠️ Technology Stack

This application is built as a lightweight, modular, self-contained client-side web app:
* **HTML5 & CSS3**: Structured layouts with glassmorphic elements, modern styling, responsive grid flexboxes, and CSS animations.
* **Vanilla JavaScript**: Lightweight logic including $GF(4)$ Galois Field math generators, Web Audio API sound synthesizers, DOM translation systems, and dynamic SVG drawing engines.
* **Zero Dependencies**: Runs 100% client-side. No libraries, external asset loading, or compilation steps needed. Works entirely offline.

---

## 🏃 How to Run Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/KarelBerka/amino-acid-dobble.git
   ```
2. Navigate to the project directory and open `index.html` in any web browser (simply double-click the file).

---

## 🖨️ How to Print Your Cards

1. Open the app and navigate to the **Card Generator** tab.
2. Select your preferred settings (card shape, symbol rotations, cheatsheet text).
3. Click the **Print Card Deck** button (or press `Ctrl+P` / `Cmd+P` in your browser).
4. In the print dialog, make sure to enable **Background graphics** under options so that the vector structures and card background colors print properly.
5. Print, cut out the cards, and start playing!
