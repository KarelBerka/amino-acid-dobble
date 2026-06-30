// js/app.js

/**
 * Entry point and UI Controller for Bio-Dobble.
 */
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Themes
  initTheme();
  
  // Initialize Tabs
  initTabs();
  
  // Initialize Encyclopedia Search & Filters
  initEncyclopedia();
  
  // Initialize Card Generator
  initGenerator();
  
  // Initialize Game Instance
  const game = new BioDobbleGame("game-container");
  game.init();
  
  // Render hero landing visualization cards
  renderHeroCards();
});

/* --- Theme Management --- */
function initTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  
  // Load saved theme or default to system preference
  const savedTheme = localStorage.getItem("bio_dobble_theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
  
  document.documentElement.setAttribute("data-theme", initialTheme);
  updateThemeIcon(initialTheme);
  
  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("bio_dobble_theme", newTheme);
    updateThemeIcon(newTheme);
  });
}

function updateThemeIcon(theme) {
  const toggleBtn = document.getElementById("theme-toggle");
  if (theme === "dark") {
    // Moon Icon
    toggleBtn.innerHTML = `
      <svg class="moon-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
    `;
  } else {
    // Sun Icon
    toggleBtn.innerHTML = `
      <svg class="sun-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
    `;
  }
}

/* --- Tab System --- */
function initTabs() {
  window.switchTab = function(tabId) {
    // Deactivate all tabs
    document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(content => content.classList.remove("active"));
    
    // Activate clicked tab
    const activeBtn = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
    if (activeBtn) activeBtn.classList.add("active");
    
    const activeContent = document.getElementById(tabId);
    if (activeContent) activeContent.classList.add("active");
    
    // Custom triggers on tab change
    if (tabId === "generator-tab") {
      renderGeneratorPreview();
    }
  };
  
  // Attach listeners to navigation buttons
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
  
  // Initial Render
  renderEncyclopedia("all", "");
  
  // Search Input Listener
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    const activeFilter = document.querySelector("#ref-filters .filter-btn.active").getAttribute("data-filter");
    renderEncyclopedia(activeFilter, query);
  });
  
  // Filter Button Listeners
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
  grid.innerHTML = "";
  
  const filtered = AMINO_ACIDS.filter(aa => {
    // 1. Group Filter
    if (filter !== "all" && aa.group !== filter) {
      if (filter === "aromatic" && aa.groupCz.indexOf("aromatická") === -1) {
        return false;
      }
      if (filter !== "aromatic") return false;
    }
    
    // 2. Query Text Search
    if (query) {
      return (
        aa.name.toLowerCase().includes(query) ||
        aa.engName.toLowerCase().includes(query) ||
        aa.code3.toLowerCase().includes(query) ||
        aa.code1.toLowerCase().includes(query) ||
        aa.formula.toLowerCase().includes(query)
      );
    }
    
    return true;
  });
  
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">
        <p style="font-size: 1.1rem; font-weight: 600;">Nebyly nalezeny žádné aminokyseliny.</p>
        <p style="font-size: 0.9rem; margin-top: 5px;">Zkuste upravit vyhledávací výraz nebo změnit filtr.</p>
      </div>
    `;
    return;
  }
  
  filtered.forEach(aa => {
    const card = document.createElement("div");
    card.className = "aa-card";
    
    const badgeClass = `badge-${aa.group}`;
    
    card.innerHTML = `
      <div class="aa-header">
        <div class="aa-title">
          <span class="aa-cz-name">${aa.name}</span>
          <span class="aa-eng-name">${aa.engName}</span>
        </div>
        <span class="aa-badge ${badgeClass}">${aa.groupCz.split(" ")[0]}</span>
      </div>
      
      <div class="aa-codes">
        <span class="aa-code3">${aa.code3}</span>
        <span class="aa-code1">${aa.code1}</span>
      </div>
      
      <div class="aa-structure-preview">
        ${renderStructureToSVG(aa.structure, 120, 120)}
      </div>
      
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <span class="aa-formula">${aa.formula.replace(/(\d+)/g, "<sub>$1</sub>")}</span>
      </div>
      
      <p class="aa-desc">${aa.desc}</p>
    `;
    
    grid.appendChild(card);
  });
}

/* --- Card Generator Section --- */
let generatedDeck = [];

function initGenerator() {
  const regenerateBtn = document.getElementById("btn-regenerate-deck");
  const printBtn = document.getElementById("btn-print-deck");
  
  // Settings controllers
  const shapeSelect = document.getElementById("set-card-shape");
  const rotationCheckbox = document.getElementById("set-random-rotation");
  const diffRepsCheckbox = document.getElementById("set-guarantee-diff-reps");
  const helpersCheckbox = document.getElementById("set-show-helpers");
  
  regenerateBtn.addEventListener("click", () => {
    renderGeneratorPreview();
  });
  
  // Redraw preview instantly when visual-only settings change
  shapeSelect.addEventListener("change", () => renderGeneratorPreview(false));
  rotationCheckbox.addEventListener("change", () => renderGeneratorPreview(false));
  helpersCheckbox.addEventListener("change", () => renderGeneratorPreview(false));
  
  // Regenerate math mapping when logic setting changes
  diffRepsCheckbox.addEventListener("change", () => renderGeneratorPreview(true));
  
  printBtn.addEventListener("click", () => {
    window.print();
  });
}

/**
 * Renders the preview deck inside the generator tab.
 * @param {boolean} recomputeMath If true, fully rebuilds Dobble assignments. Otherwise, just updates CSS/visual positions.
 */
function renderGeneratorPreview(recomputeMath = true) {
  const grid = document.getElementById("generator-cards-grid");
  
  if (recomputeMath || generatedDeck.length === 0) {
    const guaranteeDiff = document.getElementById("set-guarantee-diff-reps").checked;
    generatedDeck = generateDobbleDeck(AMINO_ACIDS, guaranteeDiff);
  }
  
  grid.innerHTML = "";
  
  const isSquare = document.getElementById("set-card-shape").value === "square";
  const rotateEnabled = document.getElementById("set-random-rotation").checked;
  const showHelpers = document.getElementById("set-show-helpers").checked;
  
  // Position offsets for 5 elements (identical to game view setup)
  const positions = [
    { x: 110, y: 110, sizeFactor: 1 },    // Center
    { x: 65, y: 65, sizeFactor: 0.9 },     // Top-Left
    { x: 155, y: 65, sizeFactor: 0.9 },    // Top-Right
    { x: 65, y: 155, sizeFactor: 0.9 },    // Bottom-Left
    { x: 155, y: 155, sizeFactor: 0.9 }    // Bottom-Right
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
      const scale = pos.sizeFactor * (0.85 + Math.random() * 0.25);
      
      let content = "";
      let classes = "card-item";
      
      if (rep === 0) {
        content = `<span class="item-text" style="font-size: ${Math.floor(13 * scale)}px;">${aa.name}</span>`;
      } else if (rep === 1) {
        content = `<span class="item-text" style="font-size: ${Math.floor(12 * scale)}px; font-style: italic; color: #4a5568;">${aa.engName}</span>`;
      } else if (rep === 2) {
        content = `<span class="item-text" style="font-size: ${Math.floor(18 * scale)}px; color: var(--primary);">${aa.code3}</span>`;
      } else if (rep === 3) {
        content = `<span class="item-text" style="font-size: ${Math.floor(26 * scale)}px; color: var(--accent);">${aa.code1}</span>`;
      } else {
        classes += " item-structure";
        const svgSize = Math.floor(66 * scale);
        content = renderStructureToSVG(aa.structure, svgSize, svgSize);
      }
      
      itemsHTML += `
        <div class="${classes}" style="left: ${pos.x}px; top: ${pos.y}px; transform: translate(-50%, -50%) rotate(${rotation}deg);">
          ${content}
        </div>
      `;
    });
    
    // Add small card indexing for printable identification
    itemsHTML += `<span class="card-label">Karta ${idx + 1}</span>`;
    
    // Add helper solutions text near bottom rim if checked
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
  
  // Grab two random connected cards (e.g. Card 1 and Card 2)
  const tempDeck = generateDobbleDeck(AMINO_ACIDS, true);
  
  // Force a specific set with a very obvious match for demonstration
  // Let's use Card 0 and Card 16 which overlap at amino acid:
  // Card 1: [16, 17, 18, 19, 20]
  // Card 17: [0, 1, 2, 3, 20]
  // Intersection is 20 (Selenocysteine)
  const cardA = tempDeck[0];
  const cardB = tempDeck[16];
  
  // Custom builder mapping to draw small static preview cards (160x160px size)
  const positions = [
    { x: 80, y: 80 },
    { x: 45, y: 45 },
    { x: 115, y: 45 },
    { x: 45, y: 115 },
    { x: 115, y: 115 }
  ];
  
  const buildHeroCardHTML = (cardData) => {
    let html = "";
    cardData.items.forEach((item, idx) => {
      const pos = positions[idx];
      const aa = item.aminoAcid;
      const rep = item.repType;
      
      let content = "";
      if (rep === 0) content = `<span class="item-text" style="font-size: 10px;">${aa.name}</span>`;
      else if (rep === 1) content = `<span class="item-text" style="font-size: 9px; font-style: italic;">${aa.engName}</span>`;
      else if (rep === 2) content = `<span class="item-text" style="font-size: 13px; color: var(--primary);">${aa.code3}</span>`;
      else if (rep === 3) content = `<span class="item-text" style="font-size: 18px; color: var(--accent);">${aa.code1}</span>`;
      else content = renderStructureToSVG(aa.structure, 45, 45);
      
      // Rotate first, third, fifth items slightly for authentic feel
      const rot = (idx * 40) % 360;
      
      html += `
        <div class="card-item" style="left: ${pos.x}px; top: ${pos.y}px; transform: translate(-50%, -50%) rotate(${rot}deg);">
          ${content}
        </div>
      `;
    });
    return html;
  };
  
  container1.innerHTML = buildHeroCardHTML(cardA);
  container2.innerHTML = buildHeroCardHTML(cardB);
}
