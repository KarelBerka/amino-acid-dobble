// js/app.js

// Global state for active language
const _VALID_LANGS = ["cs", "en", "de", "fr"];
const _storedLang = localStorage.getItem("aa_dobble_lang");
window.currentLang = _VALID_LANGS.includes(_storedLang) ? _storedLang : "cs";

// Translation dictionary for DOM elements
const TRANSLATIONS = {
  cs: {
    tab_home: "Úvod",
    tab_encyclopedia: "Encyklopedie",
    tab_game: "Tréninková Hra",
    tab_generator: "Generátor Karet",
    hero_title: "AA-Dobble s aminokyselinami",
    hero_desc: "Vítejte v interaktivním generátoru a výukovém trenažéru hry Dobble. Tato verze je unikátní tím, že nehledáte identické obrázky, ale spojujete <strong>významy</strong>: strukturní vzorce, české názvy, anglické názvy, 3-písmenné a 1-písmenné zkratky všech 21 biogenních aminokyselin.",
    hero_btn_play: "Hrát Hru",
    hero_btn_print: "Tisknout Karty",
    how_title: "Jak hra funguje?",
    feat_math_title: "Matematická dokonalost",
    feat_math_desc: "Díky použití projektivní roviny řádu 4 obsahuje balíček přesně 21 karet a 21 aminokyselin. Libovolné dvě karty sdílejí <strong>přesně jednu</strong> společnou aminokyselinu.",
    feat_meaning_title: "Párování podle významu",
    feat_meaning_desc: "Společný prvek na kartách má vždy odlišný formát (napárováno např. strukturní vzorec na jedné kartě a jednopísmenný kód na druhé). Nemůžete se spolehnout na vizuální shodu, musíte znát chemii!",
    feat_print_title: "Tiskový export",
    feat_print_desc: "Nastavte si tvar karet (kulaté / čtvercové), rotaci prvků, tiskové ořezové značky a vytiskněte si hotovou karetní sadu na papír formátu A4.",
    search_placeholder: "Hledat podle názvu, vzorce nebo zkratky...",
    filter_all: "Všechny",
    filter_hydrophobic: "Hydrofobní",
    filter_polar: "Polární",
    filter_basic: "Zásadité",
    filter_acidic: "Kyselé",
    filter_aromatic: "Aromatické",
    print_settings_title: "Nastavení tiskovin",
    card_shape_label: "Tvar karet",
    shape_circle: "Kulaté (Tradiční Dobble)",
    shape_square: "Čtvercové (Snazší stříhání)",
    print_layout_label: "Počet karet na stránku (A4)",
    layout_6: "6 karet (Velké - průměr 95 mm)",
    layout_4: "4 karty (Obří - průměr 100 mm)",
    layout_8: "8 karet (Střední - průměr 71 mm)",
    layout_12: "12 karet (Malé - průměr 66 mm)",
    rotate_symbols_label: "Náhodně otáčet symboly",
    rotate_symbols_sub: "Zvyšuje obtížnost tím, že otáčí zkratky a strukturní vzorce.",
    guarantee_diff_label: "Vždy odlišné reprezentace",
    guarantee_diff_sub: "Zaručí, že společná aminokyselina má na obou kartách jinou formu (např. text vs vzorec).",
    active_reps_label: "Aktivní reprezentace na kartách",
    active_reps_sub: "Zvolte alespoň 1 typ zobrazení. Pokud vyberete méně než 5, typy se mohou opakovat.",
    rep_name: "Název (podle jazyka)",
    rep_alt_name: "Alternativní název / Vzorec",
    rep_code3: "3písmenný kód",
    rep_code1: "1písmenný kód",
    rep_structure2d: "2D vzorec",
    rep_structure3d: "3D model (PyMOL)",
    rep_smiles: "SMILES řetězec",
    show_cheat_label: "Zobrazit tahák (řešení)",
    show_cheat_sub: "Vytiskne drobným písmem seznam aminokyselin do rohu každé karty pro kontrolu.",
    btn_print: "Tisknout sadu karet",
    preview_title: "Náhled karet (21 karet celkem)",
    btn_regenerate: "Přegenerovat sady",
    footer_text: "<p>&copy; 2026 AA-Dobble. Autor: <a href=\"https://karelberka.github.io\" target=\"_blank\" rel=\"noopener\" style=\"color: var(--primary); font-weight: 700; text-decoration: none;\">Karel Berka</a>. Vytvořeno pro výuku biochemie a biogenních aminokyselin.</p>"
  },
  en: {
    tab_home: "Home",
    tab_encyclopedia: "Encyclopedia",
    tab_game: "Training Game",
    tab_generator: "Card Generator",
    hero_title: "AA-Dobble with Amino Acids",
    hero_desc: "Welcome to the interactive card generator and training deck simulator for Dobble. This unique variant matches symbols by <strong>meaning</strong>: skeletal structures, English names, Czech names, 3-letter, and 1-letter codes of the 21 proteinogenic amino acids.",
    hero_btn_play: "Play Game",
    hero_btn_print: "Print Cards",
    how_title: "How it works?",
    feat_math_title: "Mathematical Perfection",
    feat_math_desc: "Using a projective plane of order 4, the deck contains exactly 21 cards and 21 amino acids. Any two cards share <strong>exactly one</strong> matching amino acid.",
    feat_meaning_title: "Semantic Match (Meaning)",
    feat_meaning_desc: "The matching amino acid between two cards is represented in different formats (e.g. skeletal structure vs 1-letter code). You must know their chemical structures to identify the match!",
    feat_print_title: "Printable PDF Export",
    feat_print_desc: "Customize card shape (circular / square), random item rotation, layout margins, cheat sheet solutions, and print directly on standard A4 paper.",
    search_placeholder: "Search by name, formula, or code...",
    filter_all: "All",
    filter_hydrophobic: "Hydrophobic",
    filter_polar: "Polar",
    filter_basic: "Basic",
    filter_acidic: "Acidic",
    filter_aromatic: "Aromatic",
    print_settings_title: "Print Settings",
    card_shape_label: "Card Shape",
    shape_circle: "Circular (Classic Dobble)",
    shape_square: "Square (Easier to cut)",
    print_layout_label: "Cards per page (A4)",
    layout_6: "6 cards (Large - 95 mm diameter)",
    layout_4: "4 cards (Giant - 100 mm diameter)",
    layout_8: "8 cards (Medium - 71 mm diameter)",
    layout_12: "12 cards (Small - 66 mm diameter)",
    rotate_symbols_label: "Randomly rotate symbols",
    rotate_symbols_sub: "Increases difficulty by rotating texts and structural formulas.",
    guarantee_diff_label: "Always different representations",
    guarantee_diff_sub: "Guarantees that the matching amino acid has different forms on the two cards (e.g., text vs structure).",
    active_reps_label: "Active Representations on Cards",
    active_reps_sub: "Choose at least 1 representation type. Selecting fewer than 5 will cause repetitions on cards.",
    rep_name: "Name (based on language)",
    rep_alt_name: "Alternative Name / Formula",
    rep_code3: "3-letter Code",
    rep_code1: "1-letter Code",
    rep_structure2d: "2D Structure",
    rep_structure3d: "3D Model (PyMOL)",
    rep_smiles: "SMILES String",
    show_cheat_label: "Show cheat sheet (solutions)",
    show_cheat_sub: "Prints the list of amino acids in a tiny font in the corner of each card for validation.",
    btn_print: "Print Card Deck",
    preview_title: "Card Preview (21 cards total)",
    btn_regenerate: "Regenerate Decks",
    footer_text: "<p>&copy; 2026 AA-Dobble. Author: <a href=\"https://karelberka.github.io\" target=\"_blank\" rel=\"noopener\" style=\"color: var(--primary); font-weight: 700; text-decoration: none;\">Karel Berka</a>. Designed for teaching biochemistry and proteinogenic amino acids.</p>"
  },
  de: {
    tab_home: "Startseite",
    tab_encyclopedia: "Enzyklopädie",
    tab_game: "Trainingsspiel",
    tab_generator: "Kartengenerator",
    hero_title: "AA-Dobble mit Aminosäuren",
    hero_desc: "Willkommen beim interaktiven Kartengenerator und Trainingssimulator für Dobble. Diese einzigartige Variante vergleicht Symbole nach <strong>Bedeutung</strong>: Skelettformeln, englische Namen, tschechische Namen, 3-Buchstaben- und 1-Buchstaben-Codes der 21 proteinogenen Aminosäuren.",
    hero_btn_play: "Spiel starten",
    hero_btn_print: "Karten drucken",
    how_title: "Wie funktioniert das Spiel?",
    feat_math_title: "Mathematische Perfektion",
    feat_math_desc: "Mithilfe einer projektiven Ebene der Ordnung 4 enthält das Deck genau 21 Karten und 21 Aminosäuren. Je zwei Karten haben <strong>genau eine</strong> gemeinsame Aminosäure.",
    feat_meaning_title: "Semantischer Abgleich (Bedeutung)",
    feat_meaning_desc: "Die gemeinsame Aminosäure zweier Karten wird in verschiedenen Formaten dargestellt (z. B. Skelettformel vs. 1-Buchstaben-Code). Sie müssen die chemischen Strukturen kennen, um den Treffer zu finden!",
    feat_print_title: "Druckbarer Export",
    feat_print_desc: "Passen Sie Kartenform (rund/quadratisch), Symbolrotation, Schnittmarken und Spickzettel an und drucken Sie direkt auf A4-Papier.",
    search_placeholder: "Nach Name, Formel oder Code suchen...",
    filter_all: "Alle",
    filter_hydrophobic: "Hydrophob",
    filter_polar: "Polar",
    filter_basic: "Basisch",
    filter_acidic: "Sauer",
    filter_aromatic: "Aromatisch",
    print_settings_title: "Druckeinstellungen",
    card_shape_label: "Kartenform",
    shape_circle: "Rund (Klassisches Dobble)",
    shape_square: "Quadratisch (Leichter zu schneiden)",
    print_layout_label: "Karten pro Seite (A4)",
    layout_6: "6 Karten (Groß – 95 mm Durchmesser)",
    layout_4: "4 Karten (Riesig – 100 mm Durchmesser)",
    layout_8: "8 Karten (Mittel – 71 mm Durchmesser)",
    layout_12: "12 Karten (Klein – 66 mm Durchmesser)",
    rotate_symbols_label: "Symbole zufällig rotieren",
    rotate_symbols_sub: "Erhöht die Schwierigkeit durch Drehen von Texten und Strukturformeln.",
    guarantee_diff_label: "Immer unterschiedliche Darstellungen",
    guarantee_diff_sub: "Stellt sicher, dass die gemeinsame Aminosäure auf beiden Karten in unterschiedlicher Form erscheint (z. B. Text vs. Struktur).",
    active_reps_label: "Aktive Darstellungen auf Karten",
    active_reps_sub: "Wählen Sie mindestens 1 Darstellungstyp. Weniger als 5 führt zu Wiederholungen.",
    rep_name: "Name (sprachabhängig)",
    rep_alt_name: "Alternativer Name / Formel",
    rep_code3: "3-Buchstaben-Code",
    rep_code1: "1-Buchstaben-Code",
    rep_structure2d: "2D-Struktur",
    rep_structure3d: "3D-Modell (PyMOL)",
    rep_smiles: "SMILES-Zeichenkette",
    show_cheat_label: "Spickzettel anzeigen (Lösungen)",
    show_cheat_sub: "Druckt die Aminosäureliste in kleiner Schrift in jede Kartenecke zur Überprüfung.",
    btn_print: "Kartensatz drucken",
    preview_title: "Kartenvorschau (21 Karten gesamt)",
    btn_regenerate: "Decks neu generieren",
    footer_text: "<p>&copy; 2026 AA-Dobble. Autor: <a href=\"https://karelberka.github.io\" target=\"_blank\" rel=\"noopener\" style=\"color: var(--primary); font-weight: 700; text-decoration: none;\">Karel Berka</a>. Entwickelt für den Unterricht in Biochemie und proteinogenen Aminosäuren.</p>"
  },
  fr: {
    tab_home: "Accueil",
    tab_encyclopedia: "Encyclopédie",
    tab_game: "Jeu d'entraînement",
    tab_generator: "Générateur de cartes",
    hero_title: "AA-Dobble avec les acides aminés",
    hero_desc: "Bienvenue dans le générateur de cartes interactif et le simulateur d'entraînement pour Dobble. Cette variante unique fait correspondre les symboles par <strong>signification</strong> : formules squelettiques, noms anglais, noms tchèques, codes à 3 lettres et à 1 lettre des 21 acides aminés protéinogènes.",
    hero_btn_play: "Jouer",
    hero_btn_print: "Imprimer les cartes",
    how_title: "Comment fonctionne le jeu ?",
    feat_math_title: "Perfection mathématique",
    feat_math_desc: "Grâce à un plan projectif d'ordre 4, le jeu contient exactement 21 cartes et 21 acides aminés. Deux cartes quelconques partagent <strong>exactement un</strong> acide aminé commun.",
    feat_meaning_title: "Correspondance sémantique (sens)",
    feat_meaning_desc: "L'acide aminé commun entre deux cartes est représenté dans des formats différents (ex. : formule squelettique vs. code à 1 lettre). Vous devez connaître les structures chimiques pour identifier la correspondance !",
    feat_print_title: "Export imprimable",
    feat_print_desc: "Personnalisez la forme des cartes (rond/carré), la rotation des éléments, les marques de coupe et imprimez directement sur papier A4.",
    search_placeholder: "Rechercher par nom, formule ou code...",
    filter_all: "Tous",
    filter_hydrophobic: "Hydrophobe",
    filter_polar: "Polaire",
    filter_basic: "Basique",
    filter_acidic: "Acide",
    filter_aromatic: "Aromatique",
    print_settings_title: "Paramètres d'impression",
    card_shape_label: "Forme des cartes",
    shape_circle: "Rondes (Dobble classique)",
    shape_square: "Carrées (Plus facile à découper)",
    print_layout_label: "Cartes par page (A4)",
    layout_6: "6 cartes (Grandes – 95 mm de diamètre)",
    layout_4: "4 cartes (Géantes – 100 mm de diamètre)",
    layout_8: "8 cartes (Moyennes – 71 mm de diamètre)",
    layout_12: "12 cartes (Petites – 66 mm de diamètre)",
    rotate_symbols_label: "Rotation aléatoire des symboles",
    rotate_symbols_sub: "Augmente la difficulté en faisant pivoter les textes et les formules.",
    guarantee_diff_label: "Toujours des représentations différentes",
    guarantee_diff_sub: "Garantit que l'acide aminé commun apparaît dans des formats différents sur les deux cartes (ex. : texte vs. structure).",
    active_reps_label: "Représentations actives sur les cartes",
    active_reps_sub: "Choisissez au moins 1 type de représentation. En choisir moins de 5 entraîne des répétitions.",
    rep_name: "Nom (selon la langue)",
    rep_alt_name: "Nom alternatif / Formule",
    rep_code3: "Code à 3 lettres",
    rep_code1: "Code à 1 lettre",
    rep_structure2d: "Structure 2D",
    rep_structure3d: "Modèle 3D (PyMOL)",
    rep_smiles: "Chaîne SMILES",
    show_cheat_label: "Afficher l'antisèche (solutions)",
    show_cheat_sub: "Imprime la liste des acides aminés en petits caractères dans le coin de chaque carte.",
    btn_print: "Imprimer le jeu de cartes",
    preview_title: "Aperçu des cartes (21 cartes au total)",
    btn_regenerate: "Régénérer les jeux",
    footer_text: "<p>&copy; 2026 AA-Dobble. Auteur : <a href=\"https://karelberka.github.io\" target=\"_blank\" rel=\"noopener\" style=\"color: var(--primary); font-weight: 700; text-decoration: none;\">Karel Berka</a>. Conçu pour l'enseignement de la biochimie et des acides aminés protéinogènes.</p>"
  }
};

let activeGameInstance = null;

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initTabs();
  initLanguage();
  initEncyclopedia();
  initGenerator();
  
  // Create game instance
  activeGameInstance = new window.AADobbleGame("game-container");
  activeGameInstance.init();
  
  renderHeroCards();
});

/* --- Theme Management --- */
function initTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  
  const savedTheme = localStorage.getItem("aa_dobble_theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
  
  document.documentElement.setAttribute("data-theme", initialTheme);
  updateThemeIcon(initialTheme);
  
  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("aa_dobble_theme", newTheme);
    updateThemeIcon(newTheme);
  });
}

function updateThemeIcon(theme) {
  const toggleBtn = document.getElementById("theme-toggle");
  if (theme === "dark") {
    toggleBtn.innerHTML = `
      <svg class="moon-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
    `;
  } else {
    toggleBtn.innerHTML = `
      <svg class="sun-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
    `;
  }
}

/* --- Localization Management --- */
function initLanguage() {
  const langToggle = document.getElementById("lang-toggle");

  // Restore saved language
  langToggle.value = window.currentLang;
  translatePage();

  langToggle.addEventListener("change", () => {
    window.currentLang = langToggle.value;
    localStorage.setItem("aa_dobble_lang", window.currentLang);
    
    // Update html lang attribute for accessibility / SEO
    document.documentElement.setAttribute("lang", window.currentLang);

    // Update translations
    translatePage();

    // Refresh Encyclopedia and Generator if active
    const searchInput = document.getElementById("ref-search");
    const activeFilter = document.querySelector("#ref-filters .filter-btn.active").getAttribute("data-filter");
    renderEncyclopedia(activeFilter, searchInput.value.toLowerCase().trim());

    if (document.getElementById("generator-tab").classList.contains("active")) {
      renderGeneratorPreview(false); // redraw visually
    }

    // Update active game start screen or state
    if (activeGameInstance) {
      if (activeGameInstance.gameState !== "playing") {
        activeGameInstance.renderStartScreen();
      } else {
        // Redraw current cards in active game to update language texts immediately without skipping round
        activeGameInstance.updateLang();
      }
    }

    // Redraw hero showcase
    renderHeroCards();
  });
}

function translatePage() {
  const lang = window.currentLang;
  
  // Translate search input placeholder
  const searchInput = document.getElementById("ref-search");
  if (searchInput) {
    searchInput.placeholder = TRANSLATIONS[lang].search_placeholder;
  }
  
  // Translate other elements with data-translate attribute
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    if (TRANSLATIONS[lang][key]) {
      // Keep SVG icon markup inside tab buttons during translation
      if (el.classList.contains("tab-btn") || el.classList.contains("btn")) {
        const svg = el.querySelector("svg");
        el.innerHTML = "";
        if (svg) el.appendChild(svg.cloneNode(true));
        el.appendChild(document.createTextNode(" " + TRANSLATIONS[lang][key]));
      } else {
        el.innerHTML = TRANSLATIONS[lang][key];
      }
    }
  });
}

/* --- Tab System --- */
function initTabs() {
  window.switchTab = function(tabId) {
    document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(content => content.classList.remove("active"));
    
    const activeBtn = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
    if (activeBtn) activeBtn.classList.add("active");
    
    const activeContent = document.getElementById(tabId);
    if (activeContent) activeContent.classList.add("active");
    
    if (tabId === "generator-tab") {
      renderGeneratorPreview();
    }
  };
  
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const tabId = btn.getAttribute("data-tab");
      switchTab(tabId);
    });
  });
}

/* --- Encyclopedia Section --- */
function initEncyclopedia() {
  const searchInput = document.getElementById("ref-search");
  const filterBtns = document.querySelectorAll("#ref-filters .filter-btn");
  
  renderEncyclopedia("all", "");
  
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    const activeFilter = document.querySelector("#ref-filters .filter-btn.active").getAttribute("data-filter");
    renderEncyclopedia(activeFilter, query);
  });
  
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      const filter = btn.getAttribute("data-filter");
      const query = searchInput.value.toLowerCase().trim();
      renderEncyclopedia(filter, query);
    });
  });
}

function renderEncyclopedia(filter, query) {
  const grid = document.getElementById("ref-grid");
  if (!grid) return;
  grid.innerHTML = "";
  const lang = window.currentLang;
  
  const filtered = AMINO_ACIDS.filter(aa => {
    if (filter !== "all" && aa.group !== filter) {
      if (filter === "aromatic" && aa.groupCz.indexOf("aromatická") === -1) {
        return false;
      }
      if (filter !== "aromatic") return false;
    }
    
    if (query) {
      return (
        aa.name.toLowerCase().includes(query) ||
        aa.engName.toLowerCase().includes(query) ||
        aa.code3.toLowerCase().includes(query) ||
        aa.code1.toLowerCase().includes(query) ||
        aa.formula.toLowerCase().includes(query) ||
        aa.condensed.toLowerCase().includes(query)
      );
    }
    
    return true;
  });
  
  if (filtered.length === 0) {
    const noResultsText = lang === "cs"
      ? `Nebuly nalezeny žádné aminokyseliny. Zkuste upravit vyhledávací výraz.`
      : lang === "de"
      ? `Keine Aminosäuren gefunden. Verfeinern Sie Ihre Suche.`
      : lang === "fr"
      ? `Aucun acide aminé trouvé. Affinez votre recherche.`
      : `No amino acids found. Try refining your search.`;
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">
        <p style="font-size: 1.1rem; font-weight: 600;">${noResultsText}</p>
      </div>
    `;
    return;
  }
  
  filtered.forEach(aa => {
    const card = document.createElement("div");
    card.className = "aa-card";
    
    const badgeClass = `badge-${aa.group}`;
    const badgeLabel = lang === "cs"
      ? aa.groupCz.split(" ")[0]
      : aa.group.charAt(0).toUpperCase() + aa.group.slice(1);

    const descText = lang === "cs"
      ? aa.desc
      : `Essential amino acid in biochemical processes. Formula: ${aa.formula}. Side chain features ${aa.group} properties.`;
    
    const formattedFormula = aa.condensed.replace(/(\d+)/g, "<sub>$1</sub>").replace(/([⁺⁻])/g, "<sup>$1</sup>");
    
    card.innerHTML = `
      <div class="aa-header">
        <div class="aa-title">
          <span class="aa-cz-name">${lang === "cs" ? aa.name : aa.engName}</span>
          <span class="aa-eng-name">${lang === "cs" ? aa.engName : aa.name}</span>
        </div>
        <span class="aa-badge ${badgeClass}">${badgeLabel}</span>
      </div>
      
      <div class="aa-codes">
        <span class="aa-code3">${aa.code3}</span>
        <span class="aa-code1">${aa.code1}</span>
      </div>
      
      <div class="aa-structure-container">
        <div class="aa-structure-preview" title="2D Skeletal Formula">
          ${renderStructureToSVG(aa.structure, 100, 100)}
        </div>
        <div class="aa-structure-preview" title="3D Ball-and-Stick (PyMOL)">
          <img src="assets/structures/${aa.code3.toLowerCase()}.png" alt="${lang === 'cs' ? aa.name : aa.engName} 3D model" onerror="this.style.display='none'">
        </div>
      </div>
      
      <div style="display: flex; flex-direction: column; gap: 4px;">
        <span class="aa-formula" style="font-weight: 700; color: var(--primary);">${formattedFormula}</span>
        <span class="aa-formula">${aa.formula.replace(/(\d+)/g, "<sub>$1</sub>")}</span>
        <span class="aa-formula" style="font-family: monospace; font-size: 0.8rem; word-break: break-all; color: var(--text-muted);">SMILES: ${aa.smiles}</span>
      </div>
      
      <p class="aa-desc">${descText}</p>
    `;
    
    grid.appendChild(card);
  });
}

/* --- Card Generator Section --- */
let generatedDeck = [];

function initGenerator() {
  const regenerateBtn = document.getElementById("btn-regenerate-deck");
  const printBtn = document.getElementById("btn-print-deck");
  
  const shapeSelect = document.getElementById("set-card-shape");
  const printLayoutSelect = document.getElementById("set-print-layout");
  const rotationCheckbox = document.getElementById("set-random-rotation");
  const diffRepsCheckbox = document.getElementById("set-guarantee-diff-reps");
  const helpersCheckbox = document.getElementById("set-show-helpers");
  
  if (regenerateBtn) {
    regenerateBtn.addEventListener("click", () => {
      renderGeneratorPreview(true);
    });
  }
  
  if (shapeSelect) shapeSelect.addEventListener("change", () => renderGeneratorPreview(false));
  if (printLayoutSelect) printLayoutSelect.addEventListener("change", () => renderGeneratorPreview(false));
  if (rotationCheckbox) rotationCheckbox.addEventListener("change", () => renderGeneratorPreview(false));
  if (helpersCheckbox) helpersCheckbox.addEventListener("change", () => renderGeneratorPreview(false));
  if (diffRepsCheckbox) diffRepsCheckbox.addEventListener("change", () => renderGeneratorPreview(true));
  
  document.querySelectorAll(".rep-checkbox").forEach(cb => {
    cb.addEventListener("change", () => {
      renderGeneratorPreview(true);
    });
  });
  
  if (printBtn) {
    printBtn.addEventListener("click", () => {
      window.print();
    });
  }
}

/**
 * Renders the preview deck inside the generator tab.
 */
function renderGeneratorPreview(recomputeMath = true) {
  const grid = document.getElementById("generator-cards-grid");
  if (!grid) return;
  
  if (recomputeMath || generatedDeck.length === 0) {
    const guaranteeDiff = document.getElementById("set-guarantee-diff-reps").checked;
    
    // Get checked representations
    const checkedBoxes = document.querySelectorAll(".rep-checkbox:checked");
    let allowedReps = Array.from(checkedBoxes).map(cb => parseInt(cb.value));
    
    // Fallback if none are selected
    if (allowedReps.length === 0) {
      allowedReps = [0, 1, 2, 3, 4, 5, 6];
      document.querySelectorAll(".rep-checkbox").forEach(cb => cb.checked = true);
    }
    
    generatedDeck = generateDobbleDeck(AMINO_ACIDS, guaranteeDiff, allowedReps);
  }
  
  const printLayoutSelect = document.getElementById("set-print-layout");
  const layoutVal = printLayoutSelect ? printLayoutSelect.value : "6";
  grid.setAttribute("data-layout", layoutVal);
  
  grid.innerHTML = "";
  
  const isSquare = document.getElementById("set-card-shape").value === "square";
  const rotateEnabled = document.getElementById("set-random-rotation").checked;
  const showHelpers = document.getElementById("set-show-helpers").checked;
  const lang = window.currentLang;
  
  const positions = [
    { x: 50, y: 50 },  // Center
    { x: 27, y: 27 },  // Top-Left
    { x: 73, y: 27 },  // Top-Right
    { x: 27, y: 73 },  // Bottom-Left
    { x: 73, y: 73 }   // Bottom-Right
  ];

  generatedDeck.forEach((card, idx) => {
    const cardEl = document.createElement("div");
    cardEl.className = `dobble-card ${isSquare ? 'square' : ''}`;
    
    let itemsHTML = "";
    
    card.items.forEach((item, posIdx) => {
      const pos = positions[posIdx];
      const aa = item.aminoAcid;
      const rep = item.repType;
      
      const rotation = rotateEnabled ? Math.floor(Math.random() * 360) : 0;
      const scale = 0.9 + Math.random() * 0.2; // adjusted scale factor
      
      let content = "";
      let classes = "card-item";
      
      if (rep === 0) {
        const displayName = lang === "cs" ? aa.name : aa.engName; // DE/FR use English name as fallback
        content = `<span class="item-text">${displayName}</span>`;
      } else if (rep === 1) {
        if (lang === "cs") {
          content = `<span class="item-text item-subtext">${aa.engName}</span>`;
        } else {
          const formattedFormula = aa.condensed.replace(/(\d+)/g, "<sub>$1</sub>").replace(/([⁺⁻])/g, "<sup>$1</sup>");
          content = `<span class="item-condensed">${formattedFormula}</span>`;
        }
      } else if (rep === 2) {
        content = `<span class="item-code3">${aa.code3}</span>`;
      } else if (rep === 3) {
        content = `<span class="item-code1">${aa.code1}</span>`;
      } else if (rep === 4) {
        classes += " item-structure";
        content = renderStructureToSVG(aa.structure, "100%", "100%");
      } else if (rep === 5) {
        classes += " item-structure";
        content = `<img src="assets/structures/${aa.code3.toLowerCase()}.png" alt="${lang === 'cs' ? aa.name : aa.engName} 3D" onerror="this.style.display='none'">`;
      } else {
        content = `<span class="item-smiles">${aa.smiles}</span>`;
      }
      
      itemsHTML += `
        <div class="${classes}" style="--x: ${pos.x}%; --y: ${pos.y}%; --scale: ${scale}; --rot: ${rotation}deg;">
          ${content}
        </div>
      `;
    });
    
    const cardLabelText = lang === "cs" ? `Karta ${idx + 1}` : `Card ${idx + 1}`;
    itemsHTML += `<span class="card-label">${cardLabelText}</span>`;
    
    if (showHelpers) {
      const listText = card.items.map(item => item.aminoAcid.code3).join(", ");
      itemsHTML += `
        <div style="position: absolute; bottom: 5px; left: 0; right: 0; font-size: 0.5rem; text-align: center; color: #cbd5e0; font-weight: 500; pointer-events: none; z-index: 10;">
          ${listText}
        </div>
      `;
    }
    
    cardEl.innerHTML = itemsHTML;
    grid.appendChild(cardEl);
  });
}

/* --- Hero Showcase Cards --- */
function renderHeroCards() {
  const container1 = document.getElementById("hero-card-1");
  const container2 = document.getElementById("hero-card-2");
  
  if (!container1 || !container2) return;
  
  const tempDeck = generateDobbleDeck(AMINO_ACIDS, true);
  
  const cardA = tempDeck[0];
  const cardB = tempDeck[16];
  const lang = window.currentLang;
  
  const positions = [
    { x: 50, y: 50 },  // Center
    { x: 27, y: 27 },  // Top-Left
    { x: 73, y: 27 },  // Top-Right
    { x: 27, y: 73 },  // Bottom-Left
    { x: 73, y: 73 }   // Bottom-Right
  ];
  
  const buildHeroCardHTML = (cardData) => {
    let html = "";
    cardData.items.forEach((item, idx) => {
      const pos = positions[idx];
      const aa = item.aminoAcid;
      const rep = item.repType;
      
      let content = "";
      let classes = "card-item";
      
      if (rep === 0) {
        const displayName = lang === "cs" ? aa.name : aa.engName;
        content = `<span class="item-text">${displayName}</span>`;
      } else if (rep === 1) {
        if (lang === "cs") {
          content = `<span class="item-text item-subtext">${aa.engName}</span>`;
        } else {
          const formattedFormula = aa.condensed.replace(/(\d+)/g, "<sub>$1</sub>").replace(/([⁺⁻])/g, "<sup>$1</sup>");
          content = `<span class="item-condensed">${formattedFormula}</span>`;
        }
      } else if (rep === 2) {
        content = `<span class="item-code3">${aa.code3}</span>`;
      } else if (rep === 3) {
        content = `<span class="item-code1">${aa.code1}</span>`;
      } else if (rep === 4) {
        classes += " item-structure";
        content = renderStructureToSVG(aa.structure, "100%", "100%");
      } else if (rep === 5) {
        classes += " item-structure";
        content = `<img src="assets/structures/${aa.code3.toLowerCase()}.png" alt="${lang === 'cs' ? aa.name : aa.engName} 3D" onerror="this.style.display='none'">`;
      } else {
        content = `<span class="item-smiles">${aa.smiles}</span>`;
      }
      
      const rot = (idx * 40) % 360;
      
      html += `
        <div class="${classes}" style="--x: ${pos.x}%; --y: ${pos.y}%; --scale: 0.9; --rot: ${rot}deg;">
          ${content}
        </div>
      `;
    });
    return html;
  };
  
  container1.innerHTML = buildHeroCardHTML(cardA);
  container2.innerHTML = buildHeroCardHTML(cardB);
}
