/* ===== Hyrule Compendium — Data & Logic ===== */

/* ---------- ERAS (timeline) ---------- */
const ERAS = [
  {
    year: "1986 — 1993",
    title: "La era 2D clásica",
    desc: "Nace la leyenda en el Famicom Disk System. Miyamoto define el action-adventure con mazmorras, ítems y un mundo abierto antes de que existiera el término. NES, SNES y Game Boy.",
    tags: ["NES", "SNES", "Game Boy"]
  },
  {
    year: "1998 — 2000",
    title: "La revolución 3D",
    desc: "Ocarina of Time redefine el videojuego: Z-targeting, cámara cinematográfica y un Hyrule tridimensional. Majora's Mask lleva la fórmula a un ciclo de 3 días con máscaras que transforman a Link.",
    tags: ["Nintendo 64"]
  },
  {
    year: "2001 — 2004",
    title: "La era Capcom y GameCube",
    desc: "Capcom co-desarrolla los Oracle y The Minish Cap; Wind Waker sorprende con cel-shading. Llega el multijugador con Four Swords y la saga se diversifica en portátiles.",
    tags: ["GBC", "GBA", "GameCube"]
  },
  {
    year: "2006 — 2011",
    title: "La era Wii / DS",
    desc: "Twilight Princess oscurece la saga, Phantom Hourglass y Spirit Tracks explotan la pantalla táctil, y Skyward Sword introduce el control por movimiento y el origen de la Espada Maestra.",
    tags: ["Wii", "GameCube", "Nintendo DS"]
  },
  {
    year: "2013 — 2015",
    title: "3DS y la era de los remakes",
    desc: "A Link Between Worlds reinventa el mundo de SNES con mecánicas de pintura mural. La saga revive sus clásicos en HD y 3D: Ocarina, Wind Waker, Majora y Twilight.",
    tags: ["3DS", "Wii U"]
  },
  {
    year: "2017 — 2024",
    title: "El open world definitivo",
    desc: "Breath of the Wild rompe todas las convenciones: un Hyrule inmenso, física, y libertad total. Tears of the Kingdom lo eleva con construcción. Echoes of Wisdom pone a Zelda como protagonista por primera vez.",
    tags: ["Switch", "Switch 2"]
  }
];

/* ---------- GAMES (main series) ---------- */
const GAMES = [
  {
    title: "The Legend of Zelda",
    year: "1986",
    icon: "⚔️",
    era: "classic",
    console: "NES / Famicom Disk System",
    desc: "El juego que lo empezó todo. Hyrule abierto, 9 mazmorras, y el primer save en batería de la historia. Diseñado por Shigeru Miyamoto como el 'jardín en miniatura' donde el jugador descubre por sí mismo.",
    tags: ["Primero de la saga", "Battery save", "Miyamoto"]
  },
  {
    title: "Zelda II: The Adventure of Link",
    year: "1987",
    icon: "🛡️",
    era: "classic",
    console: "NES",
    desc: "La oveja negra: side-scrolling, niveles RPG con experiencia y un mapa de mundo. Dividió a los fans, pero su ambición influyó en todo lo que vino después.",
    tags: ["Side-scrolling", "RPG", "Polémico"]
  },
  {
    title: "A Link to the Past",
    year: "1991",
    icon: "⚡",
    era: "classic",
    console: "SNES",
    desc: "La plantilla perfecta del Zelda 2D: mundo oscuro y mundo claro paralelos, la Espada Maestra, y una estructura de mazmorras que define la saga hasta hoy.",
    tags: ["SNES clásico", "Dos mundos", "Espada Maestra"]
  },
  {
    title: "Link's Awakening",
    year: "1993",
    icon: "🏝️",
    era: "classic",
    console: "Game Boy",
    desc: "Primer Zelda portátil y el más surrealista: Link despierta en la isla Koholint, donde nada es lo que parece. Un sueño con ecos de Twin Peaks y Cameos de Mario.",
    tags: ["Portátil", "Isla Koholint", "Surrealista"]
  },
  {
    title: "Ocarina of Time",
    year: "1998",
    icon: "🎵",
    era: "n64",
    console: "Nintendo 64",
    desc: "El primer 3D de la saga y para muchos el mejor juego de la historia. Viajes en el tiempo, ocarina, Epona y un Ganon adulto. Primer juego con nota perfecta de Famitsu.",
    tags: ["3D", "Perfect score", "GOTY legendario"]
  },
  {
    title: "Majora's Mask",
    year: "2000",
    icon: "🎭",
    era: "n64",
    console: "Nintendo 64",
    desc: "Tres días para salvar Termina. Oscuro, melancólico y brillante: máscaras que transforman a Link en distintas razas y un ciclo temporal que recompensa la exploración obsesiva.",
    tags: ["Ciclo de 3 días", "Máscaras", "Tono oscuro"]
  },
  {
    title: "Oracle of Seasons",
    year: "2001",
    icon: "🌸",
    era: "portable",
    console: "Game Boy Color",
    desc: "Co-desarrollado por Capcom. El poder de cambiar las estaciones altera el mundo entero. Se conecta con Oracle of Ages mediante contraseñas para una aventura extendida.",
    tags: ["Capcom", "Estaciones", "Duología"]
  },
  {
    title: "Oracle of Ages",
    year: "2001",
    icon: "⏳",
    era: "portable",
    console: "Game Boy Color",
    desc: "La contraparte de Seasons: viajar en el tiempo resuelve puzles. Juntas forman una de las aventuras 2D más ricas de la saga, con más énfasis en la narrativa.",
    tags: ["Capcom", "Viaje temporal", "Duología"]
  },
  {
    title: "A Link to the Past & Four Swords",
    year: "2002",
    icon: "🗡️",
    era: "portable",
    console: "Game Boy Advance",
    desc: "Port de GBA del clásico de SNES + Four Swords, el primer Zelda multijugador: hasta 4 Links cooperando en un mismo Game Boy Advance.",
    tags: ["Port", "Multijugador"]
  },
  {
    title: "The Wind Waker",
    year: "2002",
    icon: "⛵",
    era: "portable",
    console: "GameCube",
    desc: "Cel-shading que envejeció de maravilla: un océano infinito, islas por descubrir y la mejor expresividad facial de Link. El arte caricaturesco fue polémico en su día y hoy es adorado.",
    tags: ["Cel-shading", "Océano", "GameCube"]
  },
  {
    title: "Four Swords Adventures",
    year: "2004",
    icon: "👥",
    era: "portable",
    console: "GameCube",
    desc: "Multijugador en consola de sobremesa: hasta 4 jugadores con Game Boy Advance conectados, resolviendo niveles lineales con cooperación obligatoria.",
    tags: ["Multijugador", "GameCube + GBA"]
  },
  {
    title: "The Minish Cap",
    year: "2004",
    icon: "🧢",
    era: "portable",
    console: "Game Boy Advance",
    desc: "Capcom de nuevo. La gorra mágica Ezlo encoge a Link a tamaño diminuto para explorar mundos en miniatura. Uno de los 2D más pulidos de la saga.",
    tags: ["Capcom", "Encogerse", "GBA"]
  },
  {
    title: "Twilight Princess",
    year: "2006",
    icon: "🐺",
    era: "modern",
    console: "GameCube / Wii",
    desc: "La respuesta oscura a Wind Waker: Link se convierte en lobo, Midna es la mejor compañera de la saga, y el tono adulto conquistó al público. Lanzamiento de Wii.",
    tags: ["Lobo", "Midna", "Tono oscuro"]
  },
  {
    title: "Phantom Hourglass",
    year: "2007",
    icon: "⏰",
    era: "modern",
    console: "Nintendo DS",
    desc: "Secuela directa de Wind Waker con control 100% táctil: dibujas la ruta del barco y los ataques con el stylus. La torre del Reloj Fantasma divide opiniones.",
    tags: ["DS", "Touch", "Secuela directa"]
  },
  {
    title: "Spirit Tracks",
    year: "2009",
    icon: "🚂",
    era: "modern",
    console: "Nintendo DS",
    desc: "El ferrocarril de Hyrule: Link es maquinista y viaja con la Zelda fantasma de esta entrega. La química entre ambos la convierte en una de las más queridas de DS.",
    tags: ["Tren", "Zelda fantasma", "DS"]
  },
  {
    title: "Skyward Sword",
    year: "2011",
    icon: "☁️",
    era: "modern",
    console: "Wii",
    desc: "La cronología empieza aquí: el origen de la Espada Maestra, la diosa Hylia y el primer vínculo entre Link y Zelda. Control por movimiento preciso con Wii Motion Plus.",
    tags: ["Origen", "Wii Motion Plus", "Cielo"]
  },
  {
    title: "A Link Between Worlds",
    year: "2013",
    icon: "🖼️",
    era: "modern",
    console: "3DS",
    desc: "Regreso al Hyrule de SNES con libertad total: Link se convierte en pintura mural para atravesar paredes. Rompe la linealidad de las mazmorras de forma genial.",
    tags: ["3DS", "Mecánica mural", "Mundo paralelo"]
  },
  {
    title: "Tri Force Heroes",
    year: "2015",
    icon: "👑",
    era: "modern",
    console: "3DS",
    desc: "Cooperativo puro: tres Links con distintos atuendos resuelven mazmorras juntos. Pensado para jugar en línea o local con amigos.",
    tags: ["Cooperativo", "3DS", "Estilo de moda"]
  },
  {
    title: "Breath of the Wild",
    year: "2017",
    icon: "🏔️",
    era: "openworld",
    console: "Switch / Wii U",
    desc: "La reinvención total. Un Hyrule abierto de verdad: escalas cualquier montaña, la física responde, y 120 santuarios. Lanzamiento del Switch y obra maestra instantánea.",
    tags: ["Open world", "GOTY 2017", "120 santuarios"]
  },
  {
    title: "Tears of the Kingdom",
    year: "2023",
    icon: "🌀",
    era: "openworld",
    console: "Switch",
    desc: "La secuela imposible: tres capas (cielos, superficie, profundidades), poderes de construcción (Ultrahand) y una libertad creativa sin precedentes. Vendió 10M en 3 días.",
    tags: ["Ultrahand", "Tres capas", "Récord de ventas"]
  },
  {
    title: "Echoes of Wisdom",
    year: "2024",
    icon: "✨",
    era: "openworld",
    console: "Switch",
    desc: "¡Zelda protagonista por primera vez en la saga principal! Usa 'ecos' para replicar objetos y enemigos, con el estilo toy-diorama de Link's Awakening HD.",
    tags: ["Zelda jugable", "Primera vez", "Ecos"]
  }
];

/* ---------- REMAKES ---------- */
const REMAKES = [
  { title: "Ocarina of Time 3D", year: "2011", console: "3DS", desc: "El clásico de N64 remasterizado con gráficos pulidos, mapa táctil y el modo Boss Rush." },
  { title: "Four Swords Anniversary", year: "2011", console: "DSiWare", desc: "Versión especial del multijugador original, con niveles exclusivos y modo solitario." },
  { title: "The Wind Waker HD", year: "2013", console: "Wii U", desc: "Cel-shading en 1080p que se ve mejor que nunca, con navegación más rápida." },
  { title: "Majora's Mask 3D", year: "2015", console: "3DS", desc: "Remaster del ciclo de 3 días con mejoras de calidad de vida y gráficos renovados." },
  { title: "Twilight Princess HD", year: "2016", console: "Wii U", desc: "El lobo de Hyrule en HD, con modo Hero opcional y amiibo de Wolf Link." },
  { title: "Link's Awakening", year: "2019", console: "Switch", desc: "Remake completo con estética toy-diorama y el editor de mazmorras Chamber Dungeons." },
  { title: "Skyward Sword HD", year: "2021", console: "Switch", desc: "Control por botones opcional, 60 fps y el origen de la leyenda remasterizado." },
  { title: "The Legend of Zelda: Collector's Edition", year: "2003", console: "GameCube", desc: "Colección con Zelda 1, Zelda II, Ocarina of Time, Majora's Mask y un demo de Wind Waker." }
];

/* ---------- SPIN-OFFS ---------- */
const SPINOFFS = [
  { title: "Link: The Faces of Evil", year: "1993", desc: "El infame Zelda de Philips CD-i, con cinemáticas animadas y fama de 'el peor Zelda'." },
  { title: "Zelda: The Wand of Gamelon", year: "1993", desc: "El segundo CD-i: Zelda protagoniza, y la animación es legendaria por las razones equivocadas." },
  { title: "Zelda's Adventure", year: "1994", desc: "El tercer CD-i, en FMV con actores reales. El capítulo final de la trilogía maldita." },
  { title: "Freshly-Picked Tingle's Rosy Rupeeland", year: "2006", desc: "Tingle es el protagonista en un RPG de búsqueda de rupias tan raro como suena. Solo en Japón y Europa." },
  { title: "Link's Crossbow Training", year: "2007", desc: "Shooter con el Wii Zapper ambientado en el mundo de Twilight Princess. Incluía el accesorio." },
  { title: "Hyrule Warriors", year: "2014", desc: "El crossover con Dynasty Warriors: cientos de enemigos en pantalla con todos los héroes de la saga." },
  { title: "Cadence of Hyrule", year: "2019", desc: "Crossover con Crypt of the NecroDancer: Zelda al ritmo de la música, con roguelike procedural." },
  { title: "Hyrule Warriors: Age of Calamity", year: "2020", desc: "Prequela de Breath of the Wild: la Gran Guerra 100 años antes, con 100 años de lore en formato musou." },
  { title: "Game & Watch: The Legend of Zelda", year: "2021", desc: "Consola coleccionable con Zelda 1, Zelda II y Link's Awakening más un minijuego de reloj." }
];

/* ---------- RENDER: TIMELINE ---------- */
function renderTimeline() {
  const root = document.getElementById('timelineRoot');
  root.innerHTML = ERAS.map(era => `
    <div class="tl-item">
      <div class="tl-year">${era.year}</div>
      <div class="tl-title">${era.title}</div>
      <div class="tl-desc">${era.desc}</div>
      <div class="tl-tags">${era.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    </div>
  `).join('');
}

/* ---------- RENDER: GAMES ---------- */
function renderGames(filter) {
  const grid = document.getElementById('gamesGrid');
  const list = [...GAMES];
  if (filter === 'remake') {
    // remakes shown in separate subgrid below
  }
  const filtered = filter === 'all' ? list : list.filter(g => g.era === filter);
  grid.innerHTML = filtered.map((g, i) => `
    <article class="game-card" style="--card-color: ${eraColor(g.era)}; animation-delay: ${i * 0.04}s">
      <div class="game-icon">${g.icon}</div>
      <span class="game-year">${g.year}</span>
      <h3 class="game-title">${g.title}</h3>
      <p class="game-desc">${g.desc}</p>
      <div class="tags">
        <span class="tag">${g.console}</span>
        ${g.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
    </article>
  `).join('');
}

function eraColor(era) {
  const map = {
    classic: '#8a7327',
    n64: '#d4af37',
    portable: '#4f8f6b',
    modern: '#4a7fb5',
    openworld: '#b5654a'
  };
  return map[era] || '#d4af37';
}

/* ---------- RENDER: REMAKES ---------- */
function renderRemakes() {
  const grid = document.getElementById('remakesGrid');
  if (!grid) return;
  grid.innerHTML = REMAKES.map(r => `
    <div class="spinoff-card">
      <div class="spinoff-year">${r.year} · ${r.console}</div>
      <div class="spinoff-title">${r.title}</div>
      <div class="spinoff-desc">${r.desc}</div>
    </div>
  `).join('');
}

/* ---------- RENDER: SPIN-OFFS ---------- */
function renderSpinoffs() {
  const grid = document.getElementById('spinoffsGrid');
  grid.innerHTML = SPINOFFS.map(s => `
    <div class="spinoff-card">
      <div class="spinoff-year">${s.year}</div>
      <div class="spinoff-title">${s.title}</div>
      <div class="spinoff-desc">${s.desc}</div>
    </div>
  `).join('');
}

/* ---------- FILTERS ---------- */
function setupFilters() {
  const container = document.getElementById('filters');
  container.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    container.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderGames(btn.dataset.filter);
    // scroll to grid top
    document.getElementById('games').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

/* ---------- COUNTERS ---------- */
function animateCounters() {
  const counters = document.querySelectorAll('.stat-num[data-count]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = +el.dataset.count;
      let current = 0;
      const step = Math.max(1, Math.round(target / 40));
      const timer = setInterval(() => {
        current += step;
        if (current >= target) { current = target; clearInterval(timer); }
        el.textContent = current;
      }, 30);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

/* ---------- INIT ---------- */
document.addEventListener('DOMContentLoaded', () => {
  renderTimeline();
  renderGames('all');
  renderSpinoffs();
  setupFilters();
  animateCounters();
});
