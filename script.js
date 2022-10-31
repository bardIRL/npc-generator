"use strict";

//arrays
const sex = ["female", "male"];

let confirmedSex = "";

const femaleNames = [
  "Vera",
  "Penelope",
  "Ikara",
  "Saskia",
  "Pantera",
  "Abigail",
  "Ada",
  "Abbie",
  "Abbey",
  "Adaline",
  "Adara",
  "Adelina",
  "Adelice",
  "Adele",
  "Adella",
  "Adena",
  "Adora",
  "Adriana",
  "Adrienne",
  "Aeriel",
  "Agatha",
  "Aggie",
  "Agnes",
  "Ailee",
  "Aileen",
  "Ailene",
  "Aimee",
  "Ainslee",
  "Ainsley",
  "Alaine",
  "Alana",
  "Alberta",
  "Albertine",
  "Alejandra",
  "Alessandra",
  "Alethea",
  "Alex",
  "Alexa",
  "Alexandra",
  "Alexandria",
  "Alexia",
  "Alexis",
  "Alice",
  "Alison",
  "Aline",
  "Alisun",
  "Aliza",
  "Allegra",
  "Alma",
  "Allyson",
  "Alta",
  "Alvina",
  "Alysia",
  "Alyse",
  "Amalee",
  "Alyss",
  "Alyssa",
  "Amalee",
  "Amaleta",
  "Amalie",
  "Amelie",
  "Amara",
  "Amber",
  "Amberly",
  "Amity",
  "Annamaria",
  "Ana",
  "Anabel",
  "Annabelle",
  "Analiese",
  "Analise",
  "Anastasia",
  "Anastassia",
  "Anatola",
  "Andra",
  "Andrea",
  "Anetta",
  "Annette",
  "Angele",
  "Angelia",
  "Angelica",
  "Angelique",
  "Angelina",
  "Anissa",
  "Anne",
  "Annalee",
  "Annette",
  "Annie",
  "Anselma",
  "Ainsley",
  "Antoinette",
  "Antonia",
  "Anatola",
  "Antonina",
  "Anya",
  "Aria",
  "Arya",
  "Arabelle",
  "Arabethe",
  "Arabeth",
  "Artemis",
  "Arlette",
  "Aeris",
  "Aerys",
  "Astra",
  "Astrid",
  "Astrix",
  "Athena",
  "Athene",
  "Aubere",
  "Audie",
  "Audra",
  "Ashil",
  "Augusta",
  "Augustine",
  "Aura",
  "Aurelie",
  "Austine",
  "Aveline",
  "Averyl",
  "Avie",
  "Azusa",
  "Azora",
  "Bambie",
  "Bambi",
  "Bethesda",
  "Breatrix",
  "Beatrice",
  "Beatriz",
  "Basia",
  "Belle",
  "Bellina",
  "Benedetta",
  "Benetta",
  "Benita",
  "Benoitte",
  "Bernadette",
  "Bernice",
  "Berti",
  "Bertina",
  "Berry",
  "Berryessa",
  "Beryl",
  "Bessie",
  "Bethany",
  "Bethanie",
  "Bethina",
  "Bettina",
  "Bettine",
  "Beverly",
  "Bibby",
  "Binni",
  "Binnie",
  "Birdie",
  "Blanche",
  "Blisse",
  "Blithe",
  "Blondette",
  "Blythe",
  "Blaire",
  "Bria",
  "Bridgette",
  "Bridgitte",
  "Brita",
  "Brittania",
  "Brynne",
  "Bunny",
  "Cecilie",
  "Cecile",
  "Cecilia",
  "Cara",
  "Callista",
  "Callida",
  "Callie",
  "Calia",
  "Calypso",
  "Cammie",
  "Camila",
  "Camella",
  "Camilla",
  "Camille",
  "Cammi",
  "Candace",
  "Candice",
  "Coralie",
  "Corinthe",
  "Corinthia",
  "Caresa",
  "Carena",
  "Caprise",
  "Caressa",
  "Caretta",
  "Carlotta",
  "Carmella",
  "Carma",
  "Carmelice",
  "Carmen",
  "Carmina",
  "Carryth",
  "Corynth",
  "Cass",
  "Cassandra",
  "Casandra",
  "Catarina",
  "Catina",
  "Catriona",
  "Cat",
  "Cecelia",
  "Cecilia",
  "Cecilie",
  "Celeste",
  "Celestia",
  "Celestine",
  "Celia",
  "Celie",
  "Celestina",
  "Celina",
  "Celine",
  "Celisse",
  "Charis",
  "Charys",
];

const maleNames = [
  "Gideon",
  "Fabian",
  "Grich",
  "Icarus",
  "Gladeus",
  "Ajax",
  "Pascal",
  "",
];

const lastNames = ["Stormborn", "Emerson", "Jensen", "Holloway"];

const ages = [
  "Child",
  "Juvenile",
  "Young Adult",
  "Young Adult",
  "Adult",
  "Adult",
  "Adult",
  "Adult",
  "Middle-Aged",
  "Middle-Aged",
  "Middle-Aged",
  "Elderly",
];

const races = [
  "Dragonborn",
  "Dwarf",
  "Elf",
  "Gnome",
  "Half-Elf",
  "Halfling",
  "Half-Orc",
  "Human",
  "Tiefling",
  "Orc",
  "Leonin",
  "Satyr",
  "Owlin",
  "Aarakocra",
  "Air Genasi",
  "Bugbear",
  "Centaur",
  "Changeling",
  "Deep Gnome",
  "Duergar",
  "Earth Genasi",
  "Eladrin",
  "Fairy",
  "Firbolg",
  "Fire Genasi",
  "Githyanki",
  "Githzerai",
  "Goblin",
  "Goliath",
  "Harengon",
  "Hobgoblin",
  "Kenku",
  "Kobold",
  "Lizardfolk",
  "Minotaur",
  "Sea Elf",
  "Shadar-kai",
  "Shifter",
  "Tabaxi",
  "Tortle",
  "Triton",
  "Water Genasi",
  "Yuan-ti",
  "Aasimar",
  "Kalashtar",
  "Warforged",
];

const jobs = [
  "Academic",
  "Astrologer",
  "Cartographer",
  "Judge",
  "Merchant",
  "Scribe",
  "Scholar",
  "Student",
  "Writer",
  "Poet",
  "Mercenary",
  "Sell-Sword",
  "Bard",
  "Cleric",
  "Fighter",
  "Monk",
  "Wizard",
  "Aristocrat",
  "Duke/Duchess",
  "Count/Countess",
  "Baron/Baroness",
  "Architect",
  "Builder",
  "Carpenter",
  "Stonemason",
  "Glassblower",
  "Artist",
  "Mason",
  "Acolyte",
  "Priest/Priestess",
  "Shaman",
  "Alchemist",
  "Armorer",
  "Baker",
  "Bookkeeper",
  "Pastry Chef",
  "Blacksmith",
  "Brewer",
  "Butcher",
  "Cobbler",
  "Cook",
  "Chef",
  "Dyer",
  "Engraver",
  "Furniture Maker",
  "Goldsmith",
  "Smelter",
  "Jeweler",
  "Instrument Maker",
  "Leatherworker",
  "Locksmith",
  "Criminal",
  "Assassin",
  "Painter",
  "Potter",
  "Skinner",
  "Tanner",
  "Toymaker",
  "Woodcarver",
  "Woodworker",
  "Lumberjack",
  "Weaponsmith",
  "Ship Builder",
  "Weaver",
  "Bandit",
  "Burglar",
  "Pirate",
  "Pickpocket",
  "Jester",
  "Acrobat",
  "Dancer",
  "Thief",
  "Minstrel",
  "Musical Prodigy",
  "Barback/Barmaid",
  "Prostitute",
  "Storyteller",
  "Actor",
  "Playwright",
  "Farmer",
  "Gatherer",
  "Sheep Herder",
  "Horse Trainer",
  "Veterinarian",
  "Hunter",
  "Banker",
  "Tax Collector",
  "Healer",
  "Herbalist",
  "Witch",
  "Midwife",
  "Brothel Keeper",
  "Innkeeper",
  "Tavern Keeper",
  "Beer Merchant",
  "Sommelier",
  "Bookseller",
  "Caravanner",
  "Dairy Seller",
  "Fisher",
  "Florist",
  "Grain Merchant",
  "Grocer",
  "Haberdasher",
  "Livestock Merchant",
  "Horse Breeder",
  "Spice Merchant",
  "Slaver",
  "Clothier",
  "Wine Merchant",
  "Miller",
  "Bounty Hunter",
  "Guard",
  "Soldier",
  "City Guard",
  "Explorer",
  "Sailor",
  "Trapper",
  "Traveler",
  "Diplomat",
  "Politician",
  "Town Crier",
  "Barber",
  "Carriage Driver",
  "Servant",
  "Gardener",
  "Archaeologist",
  "Art Curator",
  "Historian",
  "Sculptor",
  "Slave",
  "Butler",
  "Candlemaker",
  "Beekeeper",
  "Concubine",
  "Gemcutter",
  "Messenger",
  "Knight",
  "Landlord",
  "Singer",
  "Tracker",
  "Lumberjack",
  "Heir/Heiress",
  "Transporter",
  "Outcast",
  "Squire",
  "Guildmaster",
  "Beggar",
  "Looking For Work",
  "Unemployed",
  "Takes Odd Jobs",
];

//function for getting randomized sex
function getRandomSex() {
  confirmedSex = sex[Math.floor(Math.random() * sex.length)];
  return confirmedSex;
}

//function for getting randomized name based on sex
function getRandomName() {
  getRandomSex();
  setRandomSex();
  if (confirmedSex == "female") {
    return `${femaleNames[Math.floor(Math.random() * femaleNames.length)]} ${
      lastNames[Math.floor(Math.random() * lastNames.length)]
    }`;
  } else if (confirmedSex == "male") {
    return `${maleNames[Math.floor(Math.random() * maleNames.length)]} ${
      lastNames[Math.floor(Math.random() * lastNames.length)]
    }`;
  }
}

function setRandomSex() {
  if (confirmedSex == "female") {
    return (document.getElementById("sex").innerText = "Female");
  } else {
    return (document.getElementById("sex").innerText = "Male");
  }
}

function setRandomName() {
  return (document.getElementById("name").innerText = getRandomName());
}

//function for getting randomized age
function getRandomAge() {
  return ages[Math.floor(Math.random() * ages.length)];
}

function setRandomAge() {
  return (document.getElementById("age").innerText = getRandomAge());
}

//function for getting randomized race
function getRandomRace() {
  return races[Math.floor(Math.random() * races.length)];
}

function setRandomRace() {
  return (document.getElementById("race").innerText = getRandomRace());
}

//function for getting randomized job
function getRandomJob() {
  return jobs[Math.floor(Math.random() * jobs.length)];
}

function setRandomJob() {
  return (document.getElementById("job").innerText = getRandomJob());
}

//updates entire page on click of generate button
document.querySelector(".generate").addEventListener("click", setRandomSex);
document.querySelector(".generate").addEventListener("click", setRandomName);
document.querySelector(".generate").addEventListener("click", setRandomAge);
document.querySelector(".generate").addEventListener("click", setRandomRace);
document.querySelector(".generate").addEventListener("click", setRandomJob);

console.log(confirmedSex);