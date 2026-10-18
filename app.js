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
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Planets2013.svg/800px-Planets2013.svg.png",
    subtext: { en: "Planets, Moons, Dwarf Planets, Asteroids & Comets", es: "Planetas, Lunas, Planetas Enanos, Asteroides y Cometas" },
    items: [
      {
        name: { en: "The Sun", es: "El Sol" },
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg/600px-The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg",
        year: { en: "Prehistoric", es: "Prehistórico" },
        type: { en: "Yellow Dwarf Star (G2V)", es: "Estrella Enana Amarilla (G2V)" },
        dist: "0.0000158 AU (149.6M km)",
        desc: {
          en: "The star at the center of our Solar System. It holds 99.86% of the total mass of the Solar System.",
          es: "La estrella en el centro de nuestro Sistema Solar. Contiene el 99.86% de la masa total del Sistema Solar."
        }
      },
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
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Jupiter_New_Horizons_Hubble_2020-08-25.jpg/600px-Jupiter_New_Horizons_Hubble_2020-08-25.jpg",
        year: { en: "Prehistoric (Moons: 1610)", es: "Prehistórico (Lunas: 1610)" },
        type: { en: "Gas Giant", es: "Gigante Gaseoso" },
        dist: "5.2 AU",
        desc: {
          en: "The largest planet in our Solar System, famous for its Great Red Spot storm.",
          es: "El planeta más grande de nuestro Sistema Solar, famoso por su Gran Mancha Roja."
        }
      },
      {
        name: { en: "Saturn", es: "Saturno" },
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/e2/Saturn_from_Cassini_Orbiter_%282004-10-06%29.jpg/600px-Saturn_from_Cassini_Orbiter_%282004-10-06%29.jpg",
        year: { en: "Prehistoric", es: "Prehistórico" },
        type: { en: "Gas Giant", es: "Gigante Gaseoso" },
        dist: "9.5 AU",
        desc: {
          en: "Known for its extensive and complex ring system made mostly of ice particles.",
          es: "Conocido por su extenso y complejo sistema de anillos compuesto principalmente de hielo."
        }
      },
      {
        name: { en: "Pluto", es: "Plutón" },
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-%20July_14_2015.org.jpg/600px-Pluto_in_True_Color_-%20July_14_2015.org.jpg",
        year: "1930",
        type: { en: "Dwarf Planet", es: "Planeta Enano" },
        dist: "39.5 AU",
        desc: {
          en: "A dwarf planet in the Kuiper Belt with a heart-shaped glacier named Tombaugh Regio.",
          es: "Un planeta enano en el Cinturón de Kuiper con un glaciar en forma de corazón llamado Tombaugh Regio."
        }
      }
    ]
  },
  {
    id: "stars",
    name: { en: "Stars", es: "Estrellas" },
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Crab_Nebula.jpg/600px-Crab_Nebula.jpg",
    subtext: { en: "Main Sequence, Red Giants, Supergiants, Brown Dwarfs", es: "Secuencia Principal, Gigantes Rojas, Supergigantes, Enanas Marrones" },
    items: [
      {
        name: { en: "Betelgeuse", es: "Betelgeuse" },
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Betelgeuse_captured_by_ALMA.jpg/600px-Betelgeuse_captured_by_ALMA.jpg",
        year: { en: "Prehistoric", es: "Prehistórico" },
        type: { en: "Red Supergiant", es: "Supergigante Roja" },
        dist: "642.5 Light Years / Años Luz",
        desc: {
          en: "A massive red supergiant star in the constellation Orion nearing the end of its life.",
          es: "Una enorme estrella supergigante roja en la constelación de Orión cerca del final de su vida."
        }
      },
      {
        name: { en: "Sirius A", es: "Sirio A" },
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Sirius_A_and_B_art_concept.jpg/600px-Sirius_A_and_B_art_concept.jpg",
        year: { en: "Prehistoric", es: "Prehistórico" },
        type: { en: "Main Sequence (A1V)", es: "Secuencia Principal (A1V)" },
        dist: "8.6 Light Years / Años Luz",
        desc: {
          en: "The brightest star in Earth's night sky, located in the constellation Canis Major.",
          es: "La estrella más brillante en el cielo nocturno de la Tierra, ubicada en Canis Major."
        }
      },
      {
        name: { en: "VY Canis Majoris", es: "VY Canis Majoris" },
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Comparison_sun_vy_canis_majoris.svg/600px-Comparison_sun_vy_canis_majoris.svg.png",
        year: "1801",
        type: { en: "Red Hypergiant", es: "Hipergigante Roja" },
        dist: "3,900 Light Years / Años Luz",
        desc: {
          en: "One of the largest known stars by radius, over 1,400 times larger than our Sun.",
          es: "Una de las estrellas más grandes conocidas por radio, más de 1,400 veces más grande que el Sol."
        }
      }
    ]
  },
  {
    id: "exoplanets",
    name: { en: "Exoplanets", es: "Exoplanetas" },
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Exoplanet_Comparison_Kepler-22b.png/600px-Exoplanet_Comparison_Kepler-22b.png",
    subtext: { en: "Hot Jupiters, Super-Earths, Habitable Zone Worlds", es: "Júpiteres Calientes, Supertierras, Mundos Habitables" },
    items: [
      {
        name: { en: "TRAPPIST-1e", es: "TRAPPIST-1e" },
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/PIA21422_-_TRAPPIST-1e_artist_impression_2018.jpg/600px-PIA21422_-_TRAPPIST-1e_artist_impression_2018.jpg",
        year: "2017",
        type: { en: "Terrestrial Super-Earth", es: "Supertierra Terrestre" },
        dist: "40 Light Years / Años Luz",
        desc: {
          en: "An Earth-sized exoplanet orbiting in the habitable zone of the ultra-cool dwarf star TRAPPIST-1.",
          es: "Un exoplaneta del tamaño de la Tierra en la zona habitable de la enana ultrafría TRAPPIST-1."
        }
      },
      {
        name: { en: "HD 189733b", es: "HD 189733b" },
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Artist%27s_impression_of_the_deep_blue_planet_HD_189733b.jpg/600px-Artist%27s_impression_of_the_deep_blue_planet_HD_189733b.jpg",
        year: "2005",
        type: { en: "Hot Jupiter", es: "Júpiter Caliente" },
        dist: "64.5 Light Years / Años Luz",
        desc: {
          en: "A deep blue exoplanet where it rains molten glass sideways due to 8,700 km/h winds.",
          es: "Un exoplaneta azul profundo donde llueve cristal fundido de lado debido a vientos de 8,700 km/h."
        }
      }
    ]
  },
  {
    id: "black-holes",
    name: { en: "Black Holes", es: "Agujeros Negros" },
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Black_hole_-_Illustration.png/600px-Black_hole_-_Illustration.png",
    subtext: { en: "Stellar-mass, Intermediate, Supermassive", es: "Masa Estelar, Intermedios, Supermasivos" },
    items: [
      {
        name: { en: "Sagittarius A*", es: "Sagitario A*" },
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/EHT_Sgr_A_Black_Hole.jpg/600px-EHT_Sgr_A_Black_Hole.jpg",
        year: "1974",
        type: { en: "Supermassive Black Hole", es: "Agujero Negro Supermasivo" },
        dist: "26,680 Light Years / Años Luz",
        desc: {
          en: "The supermassive black hole located at the Galactic Center of the Milky Way.",
          es: "El agujero negro supermasivo ubicado en el Centro Galáctico de la Vía Láctea."
        }
      },
      {
        name: { en: "M87*", es: "M87*" },
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Black_hole_-_Orange_ring_%28FINAL%29.png/600px-Black_hole_-_Orange_ring_%28FINAL%29.png",
        year: "1918 (Image: 2019)",
        type: { en: "Supermassive Black Hole", es: "Agujero Negro Supermasivo" },
        dist: "53.5 Million Light Years / Millones de Años Luz",
        desc: {
          en: "The first black hole ever directly imaged by humanity using the Event Horizon Telescope.",
          es: "El primer agujero negro fotografiado directamente por la humanidad usando el Event Horizon Telescope."
        }
      },
      {
        name: { en: "TON 618", es: "TON 618" },
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Artist%27s_impression_of_a_supermassive_black_hole_in_a_quasar.jpg/600px-Artist%27s_impression_of_a_supermassive_black_hole_in_a_quasar.jpg",
        year: "1957",
        type: { en: "Ultramassive Black Hole", es: "Agujero Negro Ultramasivo" },
        dist: "18.2 Billion Light Years / Miles de Millones de Años Luz",
        desc: {
          en: "One of the most massive black holes ever found, with a mass of 66 billion Suns.",
          es: "Uno de los agujeros negros más masivos jamás encontrados, con una masa de 66 mil millones de Soles."
        }
      }
    ]
  },
  {
    id: "galaxies",
    name: { en: "Galaxies", es: "Galaxias" },
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Milky_Way_Night_Sky_Reflection_in_Altiplano_Bolivia.jpg/600px-Milky_Way_Night_Sky_Reflection_in_Altiplano_Bolivia.jpg",
    subtext: { en: "Spiral, Elliptical, Irregular, Galaxy Clusters", es: "Espiral, Elíptica, Irregular, Cúmulos Galácticos" },
    items: [
      {
        name: { en: "Andromeda Galaxy (M31)", es: "Galaxia de Andrómeda (M31)" },
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/M31_Andromeda_Galaxy_head.jpg/600px-M31_Andromeda_Galaxy_head.jpg",
        year: "964 AD",
        type: { en: "Barred Spiral Galaxy", es: "Galaxia Espiral Barrada" },
        dist: "2.5 Million Light Years / Millones de Años Luz",
        desc: {
          en: "The nearest major galaxy to the Milky Way, expected to collide with our galaxy in 4.5 billion years.",
          es: "La galaxia grande más cercana a la Vía Láctea. Se espera que colisione con nosotros en 4,500 millones de años."
        }
      },
      {
        name: { en: "Sombrero Galaxy (M104)", es: "Galaxia del Sombrero (M104)" },
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/M104_ngc4594_sombrero_galaxy_hubble_ultraviolet_submillimeter_eso_1200.jpg/600px-M104_ngc4594_sombrero_galaxy_hubble_ultraviolet_submillimeter_eso_1200.jpg",
        year: "1781",
        type: { en: "Unbarred Spiral / Elliptical", es: "Espiral No Barrada / Elíptica" },
        dist: "31.1 Million Light Years / Millones de Años Luz",
        desc: {
          en: "Famous for its bright white core encircled by thick dust lanes, resembling a Mexican hat.",
          es: "Famosa por su núcleo blanco brillante rodeado de oscuras franjas de polvo, similar a un sombrero."
        }
      }
    ]
  },
  {
    id: "nebulae",
    name: { en: "Nebulae", es: "Nebulosas" },
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Eagle_nebula_pillars.jpg/600px-Eagle_nebula_pillars.jpg",
    subtext: { en: "Emission, Reflection, Planetary, Supernova Remnants", es: "Emisión, Reflexión, Planetarias, Remanentes de Supernova" },
    items: [
      {
        name: { en: "Pillars of Creation (M16)", es: "Pilares de la Creación (M16)" },
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Pillars_of_creation_2014_HST_0.jpg/600px-Pillars_of_creation_2014_HST_0.jpg",
        year: "1995 (Hubble Image)",
        type: { en: "H II Region / Star-forming region", es: "Región H II / Criadero Estelar" },
        dist: "7,000 Light Years / Años Luz",
        desc: {
          en: "Elephants' trunks of interstellar gas and dust in the Eagle Nebula, capturing star formation.",
          es: "Trompas de elefante de gas y polvo interestelar en la Nebulosa del Águila formando nuevas estrellas."
        }
      },
      {
        name: { en: "Carina Nebula", es: "Nebulosa de Karina" },
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/JWST_2022-07-12_Cosmic_Cliffs.png/600px-JWST_2022-07-12_Cosmic_Cliffs.png",
        year: "1752",
        type: { en: "Emission Nebula", es: "Nebulosa de Emisión" },
        dist: "8,500 Light Years / Años Luz",
        desc: {
          en: "A massive bright nebula imaged by the James Webb Space Telescope revealing 'Cosmic Cliffs'.",
          es: "Una enorme nebulosa fotografiada por el Telescopio James Webb mostrando sus 'Acantilados Cósmicos'."
        }
      }
    ]
  },
  {
    id: "neutron-stars",
    name: { en: "Neutron Stars & Pulsars", es: "Estrellas de Neutrones y Púlsares" },
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Neutron_star_illustration.jpg/600px-Neutron_star_illustration.jpg",
    subtext: { en: "Magnetars, Pulsars", es: "Magnetares, Púlsares" },
    items: [
      {
        name: { en: "Crab Pulsar", es: "Púlsar del Cangrejo" },
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Crab_Nebula.jpg/600px-Crab_Nebula.jpg",
        year: "1968",
        type: { en: "Pulsar (Neutron Star)", es: "Púlsar (Estrella de Neutrones)" },
        dist: "6,500 Light Years / Años Luz",
        desc: {
          en: "A young neutron star spinning 30 times per second at the center of the Crab Nebula.",
          es: "Una joven estrella de neutrones que gira 30 veces por segundo en el centro de la Nebulosa del Cangrejo."
        }
      }
    ]
  },
  {
    id: "white-dwarfs",
    name: { en: "White Dwarfs", es: "Enanas Blancas" },
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/White_dwarf_comparison.png/600px-White_dwarf_comparison.png",
    subtext: { en: "Stellar Remnants", es: "Remanentes Estelares" },
    items: [
      {
        name: { en: "Sirius B ('The Pup')", es: "Sirio B ('El Cachorro')" },
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Sirius_A_and_B_art_concept.jpg/600px-Sirius_A_and_B_art_concept.jpg",
        year: "1862",
        type: { en: "White Dwarf", es: "Enana Blanca" },
        dist: "8.6 Light Years / Años Luz",
        desc: {
          en: "The closest white dwarf star to Earth, orbiting its companion Sirius A.",
          es: "La estrella enana blanca más cercana a la Tierra, orbitando a su compañera Sirio A."
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
      <img src="${cat.img}" alt="${cat.name[currentLang]}" loading="lazy">
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
      <img src="${item.img}" alt="${item.name[currentLang]}" loading="lazy">
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

updateTexts();
