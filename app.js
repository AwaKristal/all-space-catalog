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
    img: "https://i.postimg.cc/fbGBwfJJ/Solar-System.png",
    subtext: { en: "Planets, Moons, Dwarf Planets, Asteroids & Comets", es: "Planetas, Lunas, Planetas Enanos, Asteroides y Cometas" },
    items: [
      {
        name: { en: "The Sun", es: "El Sol" },
        img: "https://i.postimg.cc/Pfz2jZHK/Sun.png",
        year: { en: "Prehistoric", es: "Prehistórico" },
        type: { en: "Yellow Dwarf Star (G2V)", es: "Estrella Enana Amarilla (G2V)" },
        dist: { en: "0.0000158 AU (149.6M km)", es: "0.0000158 UA (149.6M km)" },
        desc: {
          en: "The star at the center of our Solar System, holding 99.86% of the system's total mass.",
          es: "La estrella en el centro de nuestro Sistema Solar, que contiene el 99.86% de la masa total del sistema."
        }
      },
      {
        name: { en: "Mercury", es: "Mercurio" },
        img: "https://i.postimg.cc/Hkj2XhMc/mercury.png",
        year: { en: "Prehistoric", es: "Prehistórico" },
        type: { en: "Terrestrial Planet", es: "Planeta Terrestre" },
        dist: { en: "0.39 AU", es: "0.39 UA" },
        desc: {
          en: "The smallest planet in the Solar System and the closest to the Sun.",
          es: "El planeta más pequeño del Sistema Solar y el más cercano al Sol."
        }
      },
      {
        name: { en: "Venus", es: "Venus" },
        img: "https://i.postimg.cc/TwjqT8zg/venus.png",
        year: { en: "Prehistoric", es: "Prehistórico" },
        type: { en: "Terrestrial Planet", es: "Planeta Terrestre" },
        dist: { en: "0.72 AU", es: "0.72 UA" },
        desc: {
          en: "The hottest planet in our solar system due to a runaway greenhouse effect.",
          es: "El planeta más caliente de nuestro sistema solar debido a un efecto invernadero extremo."
        }
      },
      {
        name: { en: "Earth", es: "Tierra" },
        img: "https://i.postimg.cc/D0BrbryQ/earth.png",
        year: { en: "Prehistoric", es: "Prehistórico" },
        type: { en: "Terrestrial Planet", es: "Planeta Terrestre" },
        dist: { en: "0 AU", es: "0 UA" },
        desc: {
          en: "Our home world, the third planet from the Sun and the only place known to harbor life.",
          es: "Nuestro planeta hogar, el tercer planeta desde el Sol y el único conocido que alberga vida."
        }
      },
      {
        name: { en: "The Moon", es: "La Luna" },
        img: "https://i.postimg.cc/MK306mFF/moon.png",
        year: { en: "Prehistoric", es: "Prehistórico" },
        type: { en: "Natural Satellite", es: "Satélite Natural" },
        dist: { en: "0.00257 AU (384,400 km)", es: "0.00257 UA (384,400 km)" },
        desc: {
          en: "Earth's only natural satellite and the fifth largest moon in the Solar System.",
          es: "El único satélite natural de la Tierra y la quinta luna más grande del Sistema Solar."
        }
      },
      {
        name: { en: "Mars", es: "Marte" },
        img: "https://i.postimg.cc/nz1764mK/mars.png",
        year: { en: "Prehistoric", es: "Prehistórico" },
        type: { en: "Terrestrial Planet", es: "Planeta Terrestre" },
        dist: { en: "1.52 AU", es: "1.52 UA" },
        desc: {
          en: "The Red Planet, home to Olympus Mons, the largest volcano in the Solar System.",
          es: "El Planeta Rojo, hogar del Monte Olimpo, el volcán más grande del Sistema Solar."
        }
      },
      {
        name: { en: "Europa", es: "Europa" },
        img: "https://i.postimg.cc/RCXKdT4F/europa.png",
        year: "1610",
        type: { en: "Galilean Moon", es: "Luna Galileana" },
        dist: { en: "5.20 AU", es: "5.20 UA" },
        desc: {
          en: "Jupiter's icy moon with a liquid water ocean beneath its crust.",
          es: "Luna helada de Júpiter con un océano de agua líquida bajo su corteza."
        }
      },
      {
        name: { en: "Jupiter", es: "Júpiter" },
        img: "https://i.postimg.cc/Z5yNTt33/jupiter.png",
        year: { en: "Prehistoric", es: "Prehistórico" },
        type: { en: "Gas Giant", es: "Gigante Gaseoso" },
        dist: { en: "5.20 AU", es: "5.20 UA" },
        desc: {
          en: "The largest planet in the Solar System, famous for its Great Red Spot.",
          es: "El planeta más grande del Sistema Solar, famoso por su Gran Mancha Roja."
        }
      },
      {
        name: { en: "Saturn", es: "Saturno" },
        img: "https://i.postimg.cc/FRhkgY6k/saturn.png",
        year: { en: "Prehistoric", es: "Prehistórico" },
        type: { en: "Gas Giant", es: "Gigante Gaseoso" },
        dist: { en: "9.58 AU", es: "9.58 UA" },
        desc: {
          en: "Famous for its stunning ring system composed primarily of ice particles.",
          es: "Famoso por su impresionante sistema de anillos compuesto principalmente de hielo."
        }
      },
      {
        name: { en: "Titan", es: "Titán" },
        img: "https://i.postimg.cc/7h6Cdpw6/titan.png",
        year: "1655",
        type: { en: "Natural Satellite", es: "Satélite Natural" },
        dist: { en: "9.58 AU", es: "9.58 UA" },
        desc: {
          en: "Saturn's largest moon, having a dense atmosphere and liquid methane lakes.",
          es: "La luna más grande de Saturno, con una atmósfera densa y lagos de metano líquido."
        }
      },
      {
        name: { en: "Uranus", es: "Urano" },
        img: "https://i.postimg.cc/WbxDYWyf/uranus.png",
        year: "1781",
        type: { en: "Ice Giant", es: "Gigante Helado" },
        dist: { en: "19.22 AU", es: "19.22 UA" },
        desc: {
          en: "An ice giant that rotates on its side with an axial tilt of 98 degrees.",
          es: "Un gigante helado que rota de lado con una inclinación axial de 98 grados."
        }
      },
      {
        name: { en: "Neptune", es: "Neptuno" },
        img: "https://i.postimg.cc/Qd5F2gGY/neptune.png",
        year: "1846",
        type: { en: "Ice Giant", es: "Gigante Helado" },
        dist: { en: "30.05 AU", es: "30.05 UA" },
        desc: {
          en: "The outermost planet in the Solar System with the strongest recorded winds.",
          es: "El planeta más distante del Sistema Solar con los vientos más fuertes registrados."
        }
      },
      {
        name: { en: "Pluto", es: "Plutón" },
        img: "https://i.postimg.cc/V6s503Sj/pluto.png",
        year: "1930",
        type: { en: "Dwarf Planet", es: "Planeta Enano" },
        dist: { en: "39.5 AU", es: "39.5 UA" },
        desc: {
          en: "Famous dwarf planet located in the Kuiper Belt with a heart-shaped glacier.",
          es: "Famoso planeta enano ubicado en el Cinturón de Kuiper con un glaciar en forma de corazón."
        }
      },
      {
        name: { en: "Halley's Comet", es: "Cometa Halley" },
        img: "https://i.postimg.cc/MTsH7dVx/halley.png",
        year: "240 BC",
        type: { en: "Periodic Comet", es: "Cometa Periódico" },
        dist: { en: "0.59 to 35 AU", es: "0.59 a 35 UA" },
        desc: {
          en: "A short-period comet visible from Earth every 75–76 years.",
          es: "Un cometa de período corto visible desde la Tierra cada 75-76 años."
        }
      }
    ]
  },
  {
    id: "stars",
    name: { en: "Stars", es: "Estrellas" },
    img: "https://i.postimg.cc/c1b66kdH/betelgeuse-alma.png",
    subtext: { en: "Main Sequence, Red Giants, Supergiants, Brown Dwarfs", es: "Secuencia Principal, Gigantes Rojas, Supergigantes, Enanas Marrones" },
    items: [
      {
        name: { en: "Sirius A", es: "Sirio A" },
        img: "https://i.postimg.cc/Dwqzj2L4/sirius-a.png",
        year: { en: "Prehistoric", es: "Prehistórico" },
        type: { en: "Main Sequence (A1V)", es: "Secuencia Principal (A1V)" },
        dist: { en: "8.6 Light Years", es: "8.6 Años Luz" },
        desc: {
          en: "The brightest star in Earth's night sky, located in Canis Major.",
          es: "La estrella más brillante del cielo nocturno de la Tierra, ubicada en Canis Major."
        }
      },
      {
        name: { en: "Betelgeuse", es: "Betelgeuse" },
        img: "https://i.postimg.cc/c1b66kdH/betelgeuse-alma.png",
        year: { en: "Prehistoric", es: "Prehistórico" },
        type: { en: "Red Supergiant", es: "Supergigante Roja" },
        dist: { en: "642.5 Light Years", es: "642.5 Años Luz" },
        desc: {
          en: "A massive red supergiant star in Orion expected to explode in a supernova.",
          es: "Una enorme estrella supergigante roja en Orión que explotará como supernova."
        }
      },
      {
        name: { en: "UY Scuti", es: "UY Scuti" },
        img: "https://i.postimg.cc/qvXkc1HZ/uy-scuti.png",
        year: "1860",
        type: { en: "Red Hypergiant", es: "Hipergigante Roja" },
        dist: { en: "9,500 Light Years", es: "9,500 Años Luz" },
        desc: {
          en: "One of the largest known stars by volume, with a radius ~1,700 times larger than the Sun.",
          es: "Una de las estrellas más grandes conocidas por volumen, con un radio ~1,700 veces mayor que el Sol."
        }
      },
      {
        name: { en: "Stephenson 2-18", es: "Stephenson 2-18" },
        img: "https://i.postimg.cc/qM2tYXd1/stephenson-2-18.png",
        year: "1990",
        type: { en: "Red Supergiant", es: "Supergigante Roja" },
        dist: { en: "18,900 Light Years", es: "18,900 Años Luz" },
        desc: {
          en: "Candidate for the largest known star, with a radius over 2,100 times the Sun's.",
          es: "Candidata a ser la estrella más grande conocida, con un radio de más de 2,100 veces el del Sol."
        }
      },
      {
        name: { en: "Alpha Centauri System", es: "Sistema Alfa Centauri" },
        img: "https://i.postimg.cc/T39K2d1T/alpha-centauri.png",
        year: "1689",
        type: { en: "Triple Star System", es: "Sistema Estelar Triple" },
        dist: { en: "4.37 Light Years", es: "4.37 Años Luz" },
        desc: {
          en: "The closest star system to our Solar System, containing Alpha Centauri A, B, and Proxima Centauri.",
          es: "El sistema estelar más cercano a nuestro Sistema Solar, compuesto por Alfa Centauri A, B y Próxima Centauri."
        }
      }
    ]
  },
  {
    id: "exoplanets",
    name: { en: "Exoplanets", es: "Exoplanetas" },
    img: "https://i.postimg.cc/RV1FGSc3/trappist-1e.png",
    subtext: { en: "Hot Jupiters, Super-Earths, Habitable Zone Worlds", es: "Júpiteres Calientes, Supertierras, Mundos Habitables" },
    items: [
      {
        name: { en: "TRAPPIST-1e", es: "TRAPPIST-1e" },
        img: "https://i.postimg.cc/RV1FGSc3/trappist-1e.png",
        year: "2017",
        type: { en: "Terrestrial Super-Earth", es: "Supertierra Terrestre" },
        dist: { en: "40 Light Years", es: "40 Años Luz" },
        desc: {
          en: "An Earth-sized exoplanet orbiting in the habitable zone of TRAPPIST-1.",
          es: "Un exoplaneta del tamaño de la Tierra en la zona habitable de TRAPPIST-1."
        }
      },
      {
        name: { en: "Kepler-452b", es: "Kepler-452b" },
        img: "https://i.postimg.cc/bv5Ndsj5/kepler-452b.png",
        year: "2015",
        type: { en: "Super-Earth", es: "Supertierra" },
        dist: { en: "1,800 Light Years", es: "1,800 Años Luz" },
        desc: {
          en: "Often called 'Earth's Cousin', orbiting a Sun-like star in its habitable zone.",
          es: "A menudo llamado 'Primo de la Tierra', orbita una estrella similar al Sol en su zona habitable."
        }
      },
      {
        name: { en: "HD 189733b", es: "HD 189733b" },
        img: "https://i.postimg.cc/bNRyk6hx/HD-189733b.png",
        year: "2005",
        type: { en: "Hot Jupiter", es: "Júpiter Caliente" },
        dist: { en: "64.5 Light Years", es: "64.5 Años Luz" },
        desc: {
          en: "A deep blue exoplanet where it rains molten glass sideways at 8,700 km/h.",
          es: "Un exoplaneta azul donde llueve cristal fundido de lado a 8,700 km/h."
        }
      },
      {
        name: { en: "Proxima Centauri b", es: "Próxima Centauri b" },
        img: "https://i.postimg.cc/7L5qvw2P/proxima-centauri-b.png",
        year: "2016",
        type: { en: "Super-Earth", es: "Supertierra" },
        dist: { en: "4.24 Light Years", es: "4.24 Años Luz" },
        desc: {
          en: "The closest exoplanet to Earth, located in the habitable zone of Proxima Centauri.",
          es: "El exoplaneta más cercano a la Tierra, ubicado en la zona habitable de Próxima Centauri."
        }
      }
    ]
  },
  {
    id: "black-holes",
    name: { en: "Black Holes", es: "Agujeros Negros" },
    img: "https://i.postimg.cc/RFf9Fdd3/saggitarius-a.png",
    subtext: { en: "Stellar-mass, Intermediate, Supermassive", es: "Masa Estelar, Intermedios, Supermasivos" },
    items: [
      {
        name: { en: "Sagittarius A*", es: "Sagitario A*" },
        img: "https://i.postimg.cc/RFf9Fdd3/saggitarius-a.png",
        year: "1974",
        type: { en: "Supermassive Black Hole", es: "Agujero Negro Supermasivo" },
        dist: { en: "26,680 Light Years", es: "26,680 Años Luz" },
        desc: {
          en: "The supermassive black hole located at the Galactic Center of the Milky Way.",
          es: "El agujero negro supermasivo ubicado en el Centro Galáctico de la Vía Láctea."
        }
      },
      {
        name: { en: "M87*", es: "M87*" },
        img: "https://i.postimg.cc/TP5v70Z4/m87blackhole.png",
        year: "1918 (Image: 2019)",
        type: { en: "Supermassive Black Hole", es: "Agujero Negro Supermasivo" },
        dist: { en: "53.5 Million Light Years", es: "53.5 Millones de Años Luz" },
        desc: {
          en: "The first black hole ever imaged by humanity using the Event Horizon Telescope.",
          es: "El primer agujero negro fotografiado por la humanidad usando el Event Horizon Telescope."
        }
      },
      {
        name: { en: "TON 618", es: "TON 618" },
        img: "https://i.postimg.cc/T2JM4p4d/ton-618.png",
        year: "1957",
        type: { en: "Ultramassive Black Hole", es: "Agujero Negro Ultramasivo" },
        dist: { en: "18.2 Billion Light Years", es: "18.2 Miles de Millones de Años Luz" },
        desc: {
          en: "One of the largest black holes ever discovered, with a mass of 66 billion Suns.",
          es: "Uno de los agujeros negros más masivos descubiertos, con 66 mil millones de Soles de masa."
        }
      },
      {
        name: { en: "Cygnus X-1", es: "Cygnus X-1" },
        img: "https://i.postimg.cc/htwHdxfs/cygnus-x-1.png",
        year: "1964",
        type: { en: "Stellar-mass Black Hole", es: "Agujero Negro de Masa Estelar" },
        dist: { en: "6,070 Light Years", es: "6,070 Años Luz" },
        desc: {
          en: "The first astronomical X-ray source widely accepted to be a black hole.",
          es: "La primera fuente de rayos X astronómica aceptada como un agujero negro."
        }
      }
    ]
  },
  {
    id: "galaxies",
    name: { en: "Galaxies", es: "Galaxias" },
    img: "https://i.postimg.cc/kGfHXR0R/andromeda.png",
    subtext: { en: "Spiral, Elliptical, Irregular, Galaxy Clusters", es: "Espiral, Elíptica, Irregular, Cúmulos Galácticos" },
    items: [
      {
        name: { en: "Milky Way", es: "Vía Láctea" },
        img: "https://i.postimg.cc/Y23ZxTvQ/milky-way.png",
        year: { en: "Prehistoric", es: "Prehistórico" },
        type: { en: "Barred Spiral Galaxy", es: "Galaxia Espiral Barrada" },
        dist: { en: "0 Light Years (We are inside)", es: "0 Años Luz (Estamos dentro)" },
        desc: {
          en: "Our home galaxy containing between 100 to 400 billion stars.",
          es: "Nuestra galaxia hogar que contiene entre 100 y 400 mil millones de estrellas."
        }
      },
      {
        name: { en: "Andromeda Galaxy (M31)", es: "Galaxia de Andrómeda (M31)" },
        img: "https://i.postimg.cc/kGfHXR0R/andromeda.png",
        year: "964 AD",
        type: { en: "Barred Spiral Galaxy", es: "Galaxia Espiral Barrada" },
        dist: { en: "2.5 Million Light Years", es: "2.5 Millones de Años Luz" },
        desc: {
          en: "The nearest major galaxy to the Milky Way, heading for a future collision.",
          es: "La galaxia grande más cercana a la Vía Láctea, camino a una colisión futura."
        }
      },
      {
        name: { en: "Sombrero Galaxy (M104)", es: "Galaxia del Sombrero (M104)" },
        img: "https://i.postimg.cc/13gdstJV/sombrero.png",
        year: "1781",
        type: { en: "Spiral Galaxy", es: "Galaxia Espiral" },
        dist: { en: "31.1 Million Light Years", es: "31.1 Millones de Años Luz" },
        desc: {
          en: "Has a prominent dust lane surrounding a large bright central bulge.",
          es: "Tiene una prominente banda de polvo rodeando un gran núcleo brillante."
        }
      },
      {
        name: { en: "Triangulum Galaxy (M33)", es: "Galaxia del Triángulo (M33)" },
        img: "https://i.postimg.cc/BndV60zJ/triangulum.png",
        year: "1654",
        type: { en: "Spiral Galaxy", es: "Galaxia Espiral" },
        dist: { en: "2.73 Million Light Years", es: "2.73 Millones de Años Luz" },
        desc: {
          en: "The third-largest member of the Local Group of galaxies.",
          es: "El tercer miembro más grande del Grupo Local de galaxias."
        }
      }
    ]
  },
  {
    id: "nebulae",
    name: { en: "Nebulae", es: "Nebulosas" },
    img: "https://i.postimg.cc/KYS0b5KZ/pillars-of-creation.png",
    subtext: { en: "Emission, Reflection, Planetary, Supernova Remnants", es: "Emisión, Reflexión, Planetarias, Remanentes de Supernova" },
    items: [
      {
        name: { en: "Pillars of Creation (M16)", es: "Pilares de la Creación (M16)" },
        img: "https://i.postimg.cc/KYS0b5KZ/pillars-of-creation.png",
        year: "1995",
        type: { en: "H II Region / Star-forming region", es: "Región H II / Criadero Estelar" },
        dist: { en: "7,000 Light Years", es: "7,000 Años Luz" },
        desc: {
          en: "Iconic interstellar gas and dust pillars in the Eagle Nebula forming new stars.",
          es: "Icónicas columnas de gas y polvo en la Nebulosa del Águila formando estrellas."
        }
      },
      {
        name: { en: "Carina Nebula (Cosmic Cliffs)", es: "Nebulosa de Karina" },
        img: "https://i.postimg.cc/0NYcyJm7/carina.png",
        year: "1752",
        type: { en: "Emission Nebula", es: "Nebulosa de Emisión" },
        dist: { en: "8,500 Light Years", es: "8,500 Años Luz" },
        desc: {
          en: "Famed JWST image showing young star-forming regions dubbed 'Cosmic Cliffs'.",
          es: "Famosa imagen del JWST mostrando regiones de formación estelar llamadas 'Acantilados Cósmicos'."
        }
      },
      {
        name: { en: "Orion Nebula (M42)", es: "Nebulosa de Orión (M42)" },
        img: "https://i.postimg.cc/xC9gJTy7/orion.png",
        year: "1610",
        type: { en: "Diffuse Nebula", es: "Nebulosa Difusa" },
        dist: { en: "1,344 Light Years", es: "1,344 Años Luz" },
        desc: {
          en: "The closest region of massive star formation to Earth, visible to the naked eye.",
          es: "La región de formación de estrellas masivas más cercana a la Tierra, visible a simple vista."
        }
      },
      {
        name: { en: "Ring Nebula (M57)", es: "Nebulosa del Anillo (M57)" },
        img: "https://i.postimg.cc/j25Xcg1C/ring-nebula.png",
        year: "1779",
        type: { en: "Planetary Nebula", es: "Nebulosa Planetaria" },
        dist: { en: "2,570 Light Years", es: "2,570 Años Luz" },
        desc: {
          en: "A colorful planetary nebula formed when a dying star expelled its outer layers.",
          es: "Una colorida nebulosa planetaria formada al expulsar una estrella moribunda sus capas."
        }
      }
    ]
  },
  {
    id: "neutron-stars",
    name: { en: "Neutron Stars & Pulsars", es: "Estrellas de Neutrones y Púlsares" },
    img: "https://i.postimg.cc/XqpfdZZx/crab-pulsar.png",
    subtext: { en: "Magnetars, Pulsars", es: "Magnetares, Púlsares" },
    items: [
      {
        name: { en: "Crab Pulsar", es: "Púlsar del Cangrejo" },
        img: "https://i.postimg.cc/XqpfdZZx/crab-pulsar.png",
        year: "1968",
        type: { en: "Pulsar (Neutron Star)", es: "Púlsar (Estrella de Neutrones)" },
        dist: { en: "6,500 Light Years", es: "6,500 Años Luz" },
        desc: {
          en: "Spins 30 times per second at the center of the Crab Nebula supernova remnant.",
          es: "Gira 30 veces por segundo en el centro de la remanente de supernova del Cangrejo."
        }
      },
      {
        name: { en: "Vela Pulsar", es: "Púlsar de Vela" },
        img: "https://i.postimg.cc/FRPbYbK5/vela-pulsar.png",
        year: "1968",
        type: { en: "Pulsar", es: "Púlsar" },
        dist: { en: "936 Light Years", es: "936 Años Luz" },
        desc: {
          en: "Associated with the Vela Supernova Remnant, spinning 11 times per second.",
          es: "Asociado a la Remanente de Supernova de Vela, gira 11 veces por segundo."
        }
      }
    ]
  },
  {
    id: "white-dwarfs",
    name: { en: "White Dwarfs", es: "Enanas Blancas" },
    img: "https://i.postimg.cc/RZr7JZvc/sirius-b.png",
    subtext: { en: "Stellar Remnants", es: "Remanentes Estelares" },
    items: [
      {
        name: { en: "Sirius B", es: "Sirio B" },
        img: "https://i.postimg.cc/RZr7JZvc/sirius-b.png",
        year: "1862",
        type: { en: "White Dwarf", es: "Enana Blanca" },
        dist: { en: "8.6 Light Years", es: "8.6 Años Luz" },
        desc: {
          en: "The closest white dwarf to Earth, orbiting Sirius A.",
          es: "La enana blanca más cercana a la Tierra, orbitando a Sirio A."
        }
      },
      {
        name: { en: "Procyon B", es: "Proción B" },
        img: "https://i.postimg.cc/YC116B9r/procyon-b.png",
        year: "1896",
        type: { en: "White Dwarf", es: "Enana Blanca" },
        dist: { en: "11.46 Light Years", es: "11.46 Años Luz" },
        desc: {
          en: "A faint white dwarf companion orbiting the bright star Procyon A.",
          es: "Una tenue enana blanca que orbita a la brillante estrella Proción A."
        }
      }
    ]
  },
  {
    id: "constellations",
    name: { en: "Constellations", es: "Constelaciones" },
    img: "https://i.postimg.cc/fWmYd0bs/osa-menor.png",
    subtext: { en: "Stellar Patterns, Mythological Figures & Celestial Mapping", es: "Patrones Estelares, Figuras Mitológicas y Mapeo Celestial" },
    items: [
      {
        name: { en: "Ursa Minor (Little Dipper)", es: "Osa Menor" },
        img: "https://i.postimg.cc/fWmYd0bs/osa-menor.png",
        year: { en: "Prehistoric (Cataloged by Ptolemy)", es: "Prehistórico (Catalogado por Ptolomeo)" },
        type: { en: "Northern Constellation", es: "Constelación Boreal" },
        dist: { en: "Variable (Polaris is ~433 Light Years)", es: "Variable (Polaris está a ~433 Años Luz)" },
        desc: {
          en: "Home to Polaris, the current North Star, crucial for celestial navigation in the Northern Hemisphere.",
          es: "Hogar de Polaris, la actual Estrella Polar, fundamental para la navegación en el Hemisferio Norte."
        }
      },
      {
        name: { en: "Orion", es: "Orión" },
        img: "https://i.postimg.cc/Qdx7v4JL/orion-pero-constelacion.png",
        year: { en: "Prehistoric", es: "Prehistórico" },
        type: { en: "Equatorial Constellation", es: "Constelación Ecuatorial" },
        dist: { en: "Variable (Stars range from 240 to 1,300+ Light Years)", es: "Variable (Estrellas entre 240 y 1,300+ Años Luz)" },
        desc: {
          en: "One of the most prominent and recognizable constellations in the night sky, featuring the famous Belt of Orion.",
          es: "Una de las constelaciones más prominentes y reconocibles del cielo nocturno, destacando su famoso Cinturón."
        }
      },
      {
        name: { en: "Cygnus (The Swan)", es: "Cisne (Cygnus)" },
        img: "https://i.postimg.cc/cLHKFK0D/costelacion-cisne.png",
        year: { en: "Prehistoric", es: "Prehistórico" },
        type: { en: "Northern Constellation", es: "Constelación Boreal" },
        dist: { en: "Variable (Deneb is ~2,600 Light Years)", es: "Variable (Deneb está a ~2,600 Años Luz)" },
        desc: {
          en: "A striking northern constellation lying along the plane of the Milky Way, containing the bright star Deneb.",
          es: "Una llamativa constelación boreal situada en el plano de la Vía Láctea, que contiene la brillante estrella Deneb."
        }
      },
      {
        name: { en: "Hydra", es: "Hidra" },
        img: "https://i.postimg.cc/3w0kHPyB/hidra-constelacion.png",
        year: { en: "Prehistoric", es: "Prehistórico" },
        type: { en: "Largest Modern Constellation", es: "La Constelación Moderna Más Grande" },
        dist: { en: "Variable (Alphard is ~177 Light Years)", es: "Variable (Alphard está a ~177 Años Luz)" },
        desc: {
          en: "The largest of the 88 modern constellations, representing a water snake stretching across the celestial sphere.",
          es: "La mayor de las 88 constelaciones modernas, representando una serpiente de agua que se extiende por la esfera celeste."
        }
      },
      {
        name: { en: "Phoenix", es: "Fénix" },
        img: "https://i.postimg.cc/fL4JWBm3/constelacion-fenix.png",
        year: "1603 (Johann Bayer)",
        type: { en: "Southern Constellation", es: "Constelación Austral" },
        dist: { en: "Variable (Ankaa is ~85 Light Years)", es: "Variable (Ankaa está a ~85 Años Luz)" },
        desc: {
          en: "A minor constellation in the southern sky, named after the mythical firebird of ancient legends.",
          es: "Una constelación menor en el cielo austral, nombrada en honor al ave de fuego mitológica de las antiguas leyendas."
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
  document.getElementById('modal-dist').innerText = typeof item.dist === 'object' ? item.dist[currentLang] : item.dist;
  document.getElementById('modal-desc').innerText = item.desc[currentLang];
  
  document.getElementById('object-modal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('object-modal').style.display = 'none';
}

// Inicializar la aplicación
updateTexts();
