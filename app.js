let currentLang = 'en';
let currentCategory = null;

const translations = {
  en: {
    author: "Created by AwaKristal",
    desc: "All Space Catalog (ASC) is an open-source astronomical database designed to explore, categorize, and archive the wonder of our universe—from our local Solar System to distant galaxies and cosmic anomalies.",
    back: "← Back to Categories",
    yearLbl: "Discovery Year:",
    typeLbl: "Type / Class:",
    distLbl: "Distance from Earth:",
    charLbl: "Key Characteristics"
  },
  es: {
    author: "Creado por AwaKristal",
    desc: "All Space Catalog (ASC) es una base de datos astronómica de código abierto diseñada para explorar, categorizar y archivar las maravillas de nuestro universo: desde nuestro Sistema Solar local hasta galaxias lejanas y anomalías cósmicas.",
    back: "← Volver a Categorías",
    yearLbl: "Año de descubrimiento:",
    typeLbl: "Tipo / Clase:",
    distLbl: "Distancia desde la Tierra:",
    charLbl: "Características destacadas"
  }
};

const database = [
  {
    id: "solar-system",
    name: { en: "Solar System", es: "Sistema Solar" },
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Planets2013.svg/1200px-Planets2013.svg.png",
    subtext: { en: "Planets, Moons, Dwarf Planets, Asteroids & Comets", es: "Planetas, Lunas, Planetas Enanos, Asteroides y Cometas" },
    items: [
      {
        name: { en: "Earth", es: "Tierra" },
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/cb/cb/The_Blue_Marble_%28remastered%29.jpg/600px-The_Blue_Marble_%28remastered%29.jpg",
        year: { en: "Prehistoric", es: "Prehistórico" },
        type: { en: "Terrestrial Planet", es: "Planeta Terrestre" },
        dist: "0 AU",
        desc: {
          en: "The third planet from the Sun and the only astronomical object known to harbor life.",
          es: "El tercer planeta desde el Sol y el único objeto astronómico conocido que alberga vida."
        }
      },
      {
        name: { en: "Jupiter", es: "Júpiter" },
        img: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Jupiter_%28PNG%29.png",
        year: { en: "Prehistoric (Moons in 1610)", es: "Prehistórico (Lunas en 1610)" },
        type: { en: "Gas Giant", es: "Gigante Gaseoso" },
        dist: "5.2 AU",
        desc: {
          en: "The largest planet in the Solar System, famous for its Great Red Spot.",
          es: "El planeta más grande del Sistema Solar, famoso por su Gran Mancha Roja."
        }
      }
    ]
  },
  {
    id: "black-holes",
    name: { en: "Black Holes", es: "Agujeros Negros" },
    img: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Black_hole_-_Illustration.png",
    subtext: { en: "Stellar-mass, Intermediate, Supermassive", es: "Masa Estelar, Intermedios, Supermasivos" },
    items: [
      {
        name: { en: "Sagittarius A*", es: "Sagitario A*" },
        img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/EHT_Sgr_A_Black_Hole.jpg",
        year: "1974",
        type: { en: "Supermassive Black Hole", es: "Agujero Negro Supermasivo" },
        dist: "26,000 Light Years / Años Luz",
        desc: {
          en: "The supermassive black hole located at the Galactic Center of the Milky Way.",
          es: "El agujero negro supermasivo ubicado en el centro galáctico de la Vía Láctea."
        }
      }
    ]
  }
];

function updateTexts() {
  const t = translations[currentLang];
  document.getElementById('author-text').innerText = t.author;
  document.getElementById('desc-text').innerText = t.desc;
  document.getElementById('back-btn-text').innerText = t.back;
  document.getElementById('lbl-year').innerText = t.yearLbl;
  document.getElementById('lbl-type').innerText = t.typeLbl;
  document.getElementById('lbl-dist').innerText = t.distLbl;
  document.getElementById('lbl-char').innerText = t.charLbl;
  
  if (currentCategory === null) {
    renderCategories();
  } else {
    renderItems(currentCategory);
  }
}

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'es' : 'en';
  updateTexts();
}

function renderCategories() {
  currentCategory = null;
  document.getElementById('breadcrumb').style.display = 'none';
  const grid = document.getElementById('app-grid');
  grid.innerHTML = database.map((cat, idx) => `
    <div class="card" onclick="openCategory(${idx})">
      <img src="${cat.img}" alt="${cat.name[currentLang]}">
      <div class="card-content">
        <h3>${cat.name[currentLang]}</h3>
        <p>${cat.subtext[currentLang]}</p>
      </div>
    </div>
  `).join('');
}

function openCategory(index) {
  currentCategory = index;
  document.getElementById('breadcrumb').style.display = 'block';
  renderItems(index);
}

function showCategories() {
  renderCategories();
}

function renderItems(catIdx) {
  const cat = database[catIdx];
  const grid = document.getElementById('app-grid');
  grid.innerHTML = cat.items.map((item, itemIdx) => `
    <div class="card" onclick="openModal(${catIdx}, ${itemIdx})">
      <img src="${item.img}" alt="${item.name[currentLang]}">
      <div class="card-content">
        <h3>${item.name[currentLang]}</h3>
        <p>${typeof item.type === 'object' ? item.type[currentLang] : item.type}</p>
      </div>
    </div>
  `).join('');
}

function openModal(catIdx, itemIdx) {
  const item = database[catIdx].items[itemIdx];
  document.getElementById('modal-img').src = item.img;
  document.getElementById('modal-title').innerText = item.name[currentLang];
  document.getElementById('modal-year').innerText = typeof item.year === 'object' ? item.year[currentLang] : item.year;
  document.getElementById('modal-type').innerText = typeof item.type === 'object' ? item.type[currentLang] : item.type;
  document.getElementById('modal-dist').innerText = item.dist;
  document.getElementById('modal-desc').innerText = item.desc[currentLang];
  
  document.getElementById('object-modal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('object-modal').style.display = 'none';
}

// Inicializar la aplicación al cargar
updateTexts();
