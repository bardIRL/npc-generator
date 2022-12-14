"use strict";

//make surnames based on race
//create religion/deity section based on alignment

//arrays
const sex = ["female", "male"];

let firstName = "";

let lastName = "";

let confirmedSex = "";

let confirmedAlignment = "";

let confirmedRace = "";

import {
  femaleNames,
  maleNames,
  humanNames,
  elfNames,
  dwarfNames,
  gnomeNames,
  halflingNames,
  orcNames,
  tieflingNames,
  dragonbornNames,
  dragonbornClans,
} from "./names.js";

import {
  ages,
  races,
  jobs,
  sexualOrientation,
  relationshipStatus,
  children,
  appearanceOverall,
  eyeColor,
  hairColor,
  hairStyle,
  body,
  clothing,
  alignments,
  skins,
  beliefsLG,
  beliefsLN,
  beliefsLE,
  beliefsNG,
  beliefsNN,
  beliefsNE,
  beliefsCG,
  beliefsCN,
  beliefsCE,
  personalityTraits,
  plotHooks,
} from "./arrays.js";

//function for getting randomized sex
function getRandomSex() {
  confirmedSex = sex[Math.floor(Math.random() * sex.length)];
  return confirmedSex;
}

//function for getting randomized first name based on sex
function getRandomFirstName() {
  getRandomSex();
  setRandomSex();
  if (confirmedSex == "female") {
    firstName = `${
      femaleNames[Math.floor(Math.random() * femaleNames.length)]
    }`;
  } else if (confirmedSex == "male") {
    firstName = `${maleNames[Math.floor(Math.random() * maleNames.length)]}`;
  }
  return firstName;
}

function setRandomSex() {
  if (confirmedSex == "female") {
    return (document.getElementById("sex").innerText = "Female");
  } else {
    return (document.getElementById("sex").innerText = "Male");
  }
}

function setRandomFirstName() {
  getRandomFirstName();
  document.getElementById("firstName").innerText = firstName;
}

//function for getting randomized age
function getRandomAge() {
  return ages[Math.floor(Math.random() * ages.length)];
}

function setRandomAge() {
  return (document.getElementById("age").innerText = getRandomAge());
}

//function for getting randomized race and
//last name based on race

function getRandomRace() {
  confirmedRace = races[Math.floor(Math.random() * races.length)];
  return confirmedRace;
}

function setRandomRace() {
  document.getElementById("race").innerText = confirmedRace;
}

function getRandomLastName() {
  getRandomRace();
  setRandomRace();
  if (
    confirmedRace == "Elf" ||
    confirmedRace == "Half-Elf" ||
    confirmedRace == "High Elf" ||
    confirmedRace == "Wood Elf" ||
    confirmedRace == "Eladrin Elf"
  ) {
    lastName = `${elfNames[Math.floor(Math.random() * elfNames.length)]}`;
  } else if (confirmedRace == "Human") {
    lastName = `${humanNames[Math.floor(Math.random() * humanNames.length)]}`;
  } else if (
    confirmedRace == "Dwarf" ||
    confirmedRace == "Hill Dwarf" ||
    confirmedRace == "Mountain Dwarf"
  ) {
    lastName = `${dwarfNames[Math.floor(Math.random() * dwarfNames.length)]}`;
  } else if (
    confirmedRace == "Gnome" ||
    confirmedRace == "Deep Gnome" ||
    confirmedRace == "Rock Gnome"
  ) {
    lastName = `${gnomeNames[Math.floor(Math.random() * gnomeNames.length)]}`;
  } else if (
    confirmedRace == "Halfling" ||
    confirmedRace == "Lightfoot Halfling" ||
    confirmedRace == "StoutHalfling"
  ) {
    lastName = `${
      halflingNames[Math.floor(Math.random() * halflingNames.length)]
    }`;
  } else if (confirmedRace == "Orc" || confirmedRace == "Half-Orc") {
    lastName = `${orcNames[Math.floor(Math.random() * orcNames.length)]}`;
  } else if (confirmedRace == "Tiefling") {
    lastName = `${
      tieflingNames[Math.floor(Math.random() * tieflingNames.length)]
    }`;
  } else if (confirmedRace == "Dragonborn") {
    lastName = `${
      dragonbornNames[Math.floor(Math.random() * dragonbornNames.length)]
    }
     of the Clan ${
       dragonbornClans[Math.floor(Math.random() * dragonbornClans.length)]
     }`;
  }
  return lastName;
}

function setRandomLastName() {
  getRandomLastName();
  document.getElementById("surname").innerText = lastName;
}

//function for getting randomized job
function getRandomJob() {
  return jobs[Math.floor(Math.random() * jobs.length)];
}

function setRandomJob() {
  return (document.getElementById("job").innerText = getRandomJob());
}

//function for getting randomized orientation
function getRandomOrientation() {
  return sexualOrientation[
    Math.floor(Math.random() * sexualOrientation.length)
  ];
}

function setRandomOrientation() {
  return (document.getElementById("orientation").innerText =
    getRandomOrientation());
}

//function for getting randomized relationship status
function getRandomRelationship() {
  return relationshipStatus[
    Math.floor(Math.random() * relationshipStatus.length)
  ];
}

function setRandomRelationship() {
  return (document.getElementById("relationship").innerText =
    getRandomRelationship());
}

//function for getting randomized # of children
function getRandomChildren() {
  return children[Math.floor(Math.random() * children.length)];
}

function setRandomChildren() {
  return (document.getElementById("children").innerText = getRandomChildren());
}

//function for changing pronouns from she/he
function setPronoun() {
  let pronoun = document.getElementsByClassName("pronoun");
  for (let i = 0; i < pronoun.length; i++) {
    if (confirmedSex == "female") {
      pronoun[i].innerText = "She";
    } else {
      pronoun[i].innerText = "He";
    }
  }
}

//functions for updating appearance descriptions
//overall description
function getOverallDescription() {
  return appearanceOverall[
    Math.floor(Math.random() * appearanceOverall.length)
  ];
}

function setOverallDescription() {
  return (document.getElementById("overallDescription").innerText =
    getOverallDescription());
}

//eyes description
function getEyes() {
  return eyeColor[Math.floor(Math.random() * eyeColor.length)];
}

function setEyes() {
  return (document.getElementById("eyeColor").innerText = getEyes());
}

//hair description
function getHair() {
  return hairColor[Math.floor(Math.random() * hairColor.length)];
}

function setHair() {
  return (document.getElementById("hairColor").innerText = getHair());
}

//hair style description
function getStyle() {
  return hairStyle[Math.floor(Math.random() * hairStyle.length)];
}

function setStyle() {
  return (document.getElementById("hairStyle").innerText = getStyle());
}

//body description
function getBodyDescription() {
  return body[Math.floor(Math.random() * body.length)];
}

function setBodyDescription() {
  return (document.getElementById("bodyDescription").innerText =
    getBodyDescription());
}

//skintone description
function getSkinTone() {
  return skins[Math.floor(Math.random() * skins.length)];
}

function setSkinTone() {
  return (document.getElementById("skinToneDescription").innerText =
    getSkinTone());
}

//clothing description
function getClothing() {
  return clothing[Math.floor(Math.random() * clothing.length)];
}

function setClothing() {
  return (document.getElementById("clothing").innerText = getClothing());
}

//function for rolling dice w/ ability score modifiers
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function rollThreeDice() {
  return rollDice() + rollDice() + rollDice();
}

function setRolls() {
  if (confirmedRace == "Dragonborn") {
    document.getElementById("str").innerText = `${rollThreeDice() + 2} (+2)`;
    document.getElementById("dex").innerText = rollThreeDice();
    document.getElementById("con").innerText = rollThreeDice();
    document.getElementById("int").innerText = rollThreeDice();
    document.getElementById("wis").innerText = rollThreeDice();
    document.getElementById("cha").innerText = `${rollThreeDice() + 1} (+1)`;
  } else if (confirmedRace == "Dwarf") {
    document.getElementById("str").innerText = rollThreeDice();
    document.getElementById("dex").innerText = rollThreeDice();
    document.getElementById("con").innerText = `${rollThreeDice() + 2} (+2)`;
    document.getElementById("int").innerText = rollThreeDice();
    document.getElementById("wis").innerText = rollThreeDice();
    document.getElementById("cha").innerText = rollThreeDice();
  } else if (confirmedRace == "Hill Dwarf") {
    document.getElementById("str").innerText = rollThreeDice();
    document.getElementById("dex").innerText = rollThreeDice();
    document.getElementById("con").innerText = `${rollThreeDice() + 2} (+2)`;
    document.getElementById("int").innerText = rollThreeDice();
    document.getElementById("wis").innerText = `${rollThreeDice() + 1} (+1)`;
    document.getElementById("cha").innerText = rollThreeDice();
  } else if (confirmedRace == "Mountain Dwarf") {
    document.getElementById("str").innerText = `${rollThreeDice() + 2} (+2)`;
    document.getElementById("dex").innerText = rollThreeDice();
    document.getElementById("con").innerText = `${rollThreeDice() + 2} (+2)`;
    document.getElementById("int").innerText = rollThreeDice();
    document.getElementById("wis").innerText = rollThreeDice();
    document.getElementById("cha").innerText = rollThreeDice();
  } else if (confirmedRace == "Elf" || confirmedRace == "Halfling") {
    document.getElementById("str").innerText = rollThreeDice();
    document.getElementById("dex").innerText = `${rollThreeDice() + 2} (+2)`;
    document.getElementById("con").innerText = rollThreeDice();
    document.getElementById("int").innerText = rollThreeDice();
    document.getElementById("wis").innerText = rollThreeDice();
    document.getElementById("cha").innerText = rollThreeDice();
  } else if (confirmedRace == "Eladrin Elf" || confirmedRace == "High Elf") {
    document.getElementById("str").innerText = rollThreeDice();
    document.getElementById("dex").innerText = `${rollThreeDice() + 2} (+2)`;
    document.getElementById("con").innerText = rollThreeDice();
    document.getElementById("int").innerText = `${rollThreeDice() + 1} (+1)`;
    document.getElementById("wis").innerText = rollThreeDice();
    document.getElementById("cha").innerText = rollThreeDice();
  } else if (confirmedRace == "Wood Elf") {
    document.getElementById("str").innerText = rollThreeDice();
    document.getElementById("dex").innerText = `${rollThreeDice() + 2} (+2)`;
    document.getElementById("con").innerText = rollThreeDice();
    document.getElementById("int").innerText = `${rollThreeDice() + 1} (+1)`;
    document.getElementById("wis").innerText = rollThreeDice();
    document.getElementById("cha").innerText = rollThreeDice();
  } else if (confirmedRace == "Half-Elf") {
    document.getElementById("str").innerText = rollThreeDice();
    document.getElementById("dex").innerText = `${rollThreeDice() + 1} (+1)`;
    document.getElementById("con").innerText = rollThreeDice();
    document.getElementById("int").innerText = `${rollThreeDice() + 1} (+1)`;
    document.getElementById("wis").innerText = rollThreeDice();
    document.getElementById("cha").innerText = `${rollThreeDice() + 2} (+2)`;
  } else if (confirmedRace == "Gnome") {
    document.getElementById("str").innerText = rollThreeDice();
    document.getElementById("dex").innerText = rollThreeDice();
    document.getElementById("con").innerText = rollThreeDice();
    document.getElementById("int").innerText = `${rollThreeDice() + 2} (+2)`;
    document.getElementById("wis").innerText = rollThreeDice();
    document.getElementById("cha").innerText = rollThreeDice();
  } else if (confirmedRace == "Deep Gnome") {
    document.getElementById("str").innerText = rollThreeDice();
    document.getElementById("dex").innerText = `${rollThreeDice() + 1} (+1)`;
    document.getElementById("con").innerText = rollThreeDice();
    document.getElementById("int").innerText = `${rollThreeDice() + 2} (+2)`;
    document.getElementById("wis").innerText = rollThreeDice();
    document.getElementById("cha").innerText = rollThreeDice();
  } else if (confirmedRace == "Rock Gnome") {
    document.getElementById("str").innerText = rollThreeDice();
    document.getElementById("dex").innerText = rollThreeDice();
    document.getElementById("con").innerText = `${rollThreeDice() + 1} (+1)`;
    document.getElementById("int").innerText = `${rollThreeDice() + 2} (+2)`;
    document.getElementById("wis").innerText = rollThreeDice();
    document.getElementById("cha").innerText = rollThreeDice();
  } else if (confirmedRace == "Lightfoot Halfling") {
    document.getElementById("str").innerText = rollThreeDice();
    document.getElementById("dex").innerText = `${rollThreeDice() + 2} (+2)`;
    document.getElementById("con").innerText = rollThreeDice();
    document.getElementById("int").innerText = rollThreeDice();
    document.getElementById("wis").innerText = rollThreeDice();
    document.getElementById("cha").innerText = `${rollThreeDice() + 1} (+1)`;
  } else if (confirmedRace == "Stout Halfling") {
    document.getElementById("str").innerText = rollThreeDice();
    document.getElementById("dex").innerText = `${rollThreeDice() + 2} (+2)`;
    document.getElementById("con").innerText = `${rollThreeDice() + 1} (+1)`;
    document.getElementById("int").innerText = rollThreeDice();
    document.getElementById("wis").innerText = rollThreeDice();
    document.getElementById("cha").innerText = rollThreeDice();
  } else if (confirmedRace == "Orc" || confirmedRace == "Half-Orc") {
    document.getElementById("str").innerText = `${rollThreeDice() + 2} (+2)`;
    document.getElementById("dex").innerText = rollThreeDice();
    document.getElementById("con").innerText = `${rollThreeDice() + 1} (+1)`;
    document.getElementById("int").innerText = rollThreeDice();
    document.getElementById("wis").innerText = rollThreeDice();
    document.getElementById("cha").innerText = rollThreeDice();
  } else if (confirmedRace == "Human") {
    document.getElementById("str").innerText = `${rollThreeDice() + 1} (+1)`;
    document.getElementById("dex").innerText = `${rollThreeDice() + 1} (+1)`;
    document.getElementById("con").innerText = `${rollThreeDice() + 1} (+1)`;
    document.getElementById("int").innerText = `${rollThreeDice() + 1} (+1)`;
    document.getElementById("wis").innerText = `${rollThreeDice() + 1} (+1)`;
    document.getElementById("cha").innerText = `${rollThreeDice() + 1} (+1)`;
  } else if (confirmedRace == "Tiefling") {
    document.getElementById("str").innerText = rollThreeDice();
    document.getElementById("dex").innerText = rollThreeDice();
    document.getElementById("con").innerText = rollThreeDice();
    document.getElementById("int").innerText = `${rollThreeDice() + 1} (+1)`;
    document.getElementById("wis").innerText = rollThreeDice();
    document.getElementById("cha").innerText = `${rollThreeDice() + 2} (+2)`;
  }
}

//function for randomizing alignment and setting label
function getRandomAlignment() {
  confirmedAlignment =
    alignments[Math.floor(Math.random() * alignments.length)];
  return confirmedAlignment;
}

function setRandomAlignment() {
  return (document.getElementById("alignment").innerText =
    getRandomAlignment());
}

//function for getting beliefs LAWFUL GOOD
function getRandomBeliefLG() {
  return beliefsLG[Math.floor(Math.random() * beliefsLG.length)];
}

function setBeliefsLG() {
  document.getElementById("firstBelief").innerText = getRandomBeliefLG();
  document.getElementById("secondBelief").innerText = getRandomBeliefLG();
  document.getElementById("thirdBelief").innerText = getRandomBeliefLG();
  document.getElementById("alignment").innerText = "Lawful Good";
}

//function for getting beliefs LAWFUL NEUTRAL
function getRandomBeliefLN() {
  return beliefsLN[Math.floor(Math.random() * beliefsLN.length)];
}

function setBeliefsLN() {
  document.getElementById("firstBelief").innerText = getRandomBeliefLN();
  document.getElementById("secondBelief").innerText = getRandomBeliefLN();
  document.getElementById("thirdBelief").innerText = getRandomBeliefLN();
  document.getElementById("alignment").innerText = "Lawful Neutral";
}

//function for getting beliefs LAWFUL EVIL
function getRandomBeliefLE() {
  let confirmedBeliefLE =
    beliefsLE[Math.floor(Math.random() * beliefsLE.length)];
  return confirmedBeliefLE;
}

function setBeliefsLE() {
  document.getElementById("firstBelief").innerText = getRandomBeliefLE();
  document.getElementById("secondBelief").innerText = getRandomBeliefLE();
  document.getElementById("thirdBelief").innerText = getRandomBeliefLE();
  document.getElementById("alignment").innerText = "Lawful Evil";
}

//function for getting beliefs NEUTRAL GOOD
function getRandomBeliefNG() {
  return beliefsNG[Math.floor(Math.random() * beliefsNG.length)];
}

function setBeliefsNG() {
  document.getElementById("firstBelief").innerText = getRandomBeliefNG();
  document.getElementById("secondBelief").innerText = getRandomBeliefNG();
  document.getElementById("thirdBelief").innerText = getRandomBeliefNG();
  document.getElementById("alignment").innerText = "Neutral Good";
}

//function for getting beliefs NEUTRAL NEUTRAL
function getRandomBeliefNN() {
  return beliefsNN[Math.floor(Math.random() * beliefsNN.length)];
}

function setBeliefsNN() {
  document.getElementById("firstBelief").innerText = getRandomBeliefNN();
  document.getElementById("secondBelief").innerText = getRandomBeliefNN();
  document.getElementById("thirdBelief").innerText = getRandomBeliefNN();
  document.getElementById("alignment").innerText = "True Neutral";
}

//function for getting beliefs NEUTRAL EVIL
function getRandomBeliefNE() {
  return beliefsNE[Math.floor(Math.random() * beliefsNE.length)];
}

function setBeliefsNE() {
  document.getElementById("firstBelief").innerText = getRandomBeliefNE();
  document.getElementById("secondBelief").innerText = getRandomBeliefNE();
  document.getElementById("thirdBelief").innerText = getRandomBeliefNE();
  document.getElementById("alignment").innerText = "Neutral Evil";
}

//function for getting beliefs CHAOTIC GOOD
function getRandomBeliefCG() {
  return beliefsCG[Math.floor(Math.random() * beliefsCG.length)];
}

function setBeliefsCG() {
  document.getElementById("firstBelief").innerText = getRandomBeliefCG();
  document.getElementById("secondBelief").innerText = getRandomBeliefCG();
  document.getElementById("thirdBelief").innerText = getRandomBeliefCG();
  document.getElementById("alignment").innerText = "Chaotic Good";
}

//function for getting beliefs CHAOTIC NEUTRAL
function getRandomBeliefCN() {
  return beliefsCN[Math.floor(Math.random() * beliefsCN.length)];
}

function setBeliefsCN() {
  document.getElementById("firstBelief").innerText = getRandomBeliefCN();
  document.getElementById("secondBelief").innerText = getRandomBeliefCN();
  document.getElementById("thirdBelief").innerText = getRandomBeliefCN();
  document.getElementById("alignment").innerText = "Chaotic Neutral";
}

//function for getting beliefs CHAOTIC EVIL
function getRandomBeliefCE() {
  return beliefsCE[Math.floor(Math.random() * beliefsCE.length)];
}

function setBeliefsCE() {
  document.getElementById("firstBelief").innerText = getRandomBeliefCE();
  document.getElementById("secondBelief").innerText = getRandomBeliefCE();
  document.getElementById("thirdBelief").innerText = getRandomBeliefCE();
  document.getElementById("alignment").innerText = "Chaotic Evil";
}

//function for randomizing beliefs on push of generate & randomize buttons
function randomizeBeliefs() {
  getRandomAlignment();
  setRandomAlignment();
  if (confirmedAlignment == "Lawful Good") {
    document.getElementById("firstBelief").innerText = getRandomBeliefLG();
    document.getElementById("secondBelief").innerText = getRandomBeliefLG();
    document.getElementById("thirdBelief").innerText = getRandomBeliefLG();
    document.getElementById("alignment").innerText = "Lawful Good";
  } else if (confirmedAlignment == "Lawful Neutral") {
    document.getElementById("firstBelief").innerText = getRandomBeliefLN();
    document.getElementById("secondBelief").innerText = getRandomBeliefLN();
    document.getElementById("thirdBelief").innerText = getRandomBeliefLN();
    document.getElementById("alignment").innerText = "Lawful Neutral";
  } else if (confirmedAlignment == "Lawful Evil") {
    document.getElementById("firstBelief").innerText = getRandomBeliefLE();
    document.getElementById("secondBelief").innerText = getRandomBeliefLE();
    document.getElementById("thirdBelief").innerText = getRandomBeliefLE();
    document.getElementById("alignment").innerText = "Lawful Evil";
  } else if (confirmedAlignment == "Neutral Good") {
    document.getElementById("firstBelief").innerText = getRandomBeliefNG();
    document.getElementById("secondBelief").innerText = getRandomBeliefNG();
    document.getElementById("thirdBelief").innerText = getRandomBeliefNG();
    document.getElementById("alignment").innerText = "Neutral Good";
  } else if (confirmedAlignment == "True Neutral") {
    document.getElementById("firstBelief").innerText = getRandomBeliefNN();
    document.getElementById("secondBelief").innerText = getRandomBeliefNN();
    document.getElementById("thirdBelief").innerText = getRandomBeliefNN();
    document.getElementById("alignment").innerText = "True Neutral";
  } else if (confirmedAlignment == "Neutral Evil") {
    document.getElementById("firstBelief").innerText = getRandomBeliefNE();
    document.getElementById("secondBelief").innerText = getRandomBeliefNE();
    document.getElementById("thirdBelief").innerText = getRandomBeliefNE();
    document.getElementById("alignment").innerText = "Neutral Evil";
  } else if (confirmedAlignment == "Chaotic Good") {
    document.getElementById("firstBelief").innerText = getRandomBeliefCG();
    document.getElementById("secondBelief").innerText = getRandomBeliefCG();
    document.getElementById("thirdBelief").innerText = getRandomBeliefCG();
    document.getElementById("alignment").innerText = "Chaotic Good";
  } else if (confirmedAlignment == "Chaotic Neutral") {
    document.getElementById("firstBelief").innerText = getRandomBeliefCN();
    document.getElementById("secondBelief").innerText = getRandomBeliefCN();
    document.getElementById("thirdBelief").innerText = getRandomBeliefCN();
    document.getElementById("alignment").innerText = "Chaotic Neutral";
  } else if (confirmedAlignment == "Chaotic Evil") {
    document.getElementById("firstBelief").innerText = getRandomBeliefCE();
    document.getElementById("secondBelief").innerText = getRandomBeliefCE();
    document.getElementById("thirdBelief").innerText = getRandomBeliefCE();
    document.getElementById("alignment").innerText = "Chaotic Evil";
  }
}

//function for getting random personality traits
function getRandomTrait() {
  return personalityTraits[
    Math.floor(Math.random() * personalityTraits.length)
  ];
}

function setTraits() {
  document.getElementById("firstTrait").innerText = getRandomTrait();
  document.getElementById("secondTrait").innerText = getRandomTrait();
}

//function for getting random plot hook
function getRandomPlotHook() {
  return plotHooks[Math.floor(Math.random() * plotHooks.length)];
}

function setPlotHook() {
  document.getElementById("plotHook").innerText = getRandomPlotHook();
}

//changes left side information on click of 'generate' button

document.querySelector(".generate").addEventListener("click", setRandomSex);
document
  .querySelector(".generate")
  .addEventListener("click", setRandomFirstName);
document
  .querySelector(".generate")
  .addEventListener("click", setRandomLastName);
document.querySelector(".generate").addEventListener("click", setRandomAge);
document.querySelector(".generate").addEventListener("click", setRandomRace);
document.querySelector(".generate").addEventListener("click", setRandomJob);
document
  .querySelector(".generate")
  .addEventListener("click", setRandomOrientation);
document
  .querySelector(".generate")
  .addEventListener("click", setRandomRelationship);
document
  .querySelector(".generate")
  .addEventListener("click", setRandomChildren);

document.querySelector(".generate").addEventListener("click", setPronoun);
document
  .querySelector(".generate")
  .addEventListener("click", setOverallDescription);
document.querySelector(".generate").addEventListener("click", setEyes);
document.querySelector(".generate").addEventListener("click", setHair);
document.querySelector(".generate").addEventListener("click", setStyle);
document.querySelector(".generate").addEventListener("click", setSkinTone);
document.querySelector(".generate").addEventListener("click", setClothing);

document
  .querySelector(".generate")
  .addEventListener("click", setBodyDescription);

//changes ability scores
document.querySelector(".generate").addEventListener("click", setRolls);

//changes personality traits
document.querySelector(".generate").addEventListener("click", setTraits);

//changes plot hook
document.querySelector(".generate").addEventListener("click", setPlotHook);

//changes beliefs based on individual alignment buttons
document.getElementById("lawGood").addEventListener("click", setBeliefsLG);
document.getElementById("lawNeu").addEventListener("click", setBeliefsLN);
document.getElementById("lawEvil").addEventListener("click", setBeliefsLE);
document.getElementById("neuGood").addEventListener("click", setBeliefsNG);
document.getElementById("neu").addEventListener("click", setBeliefsNN);
document.getElementById("neuEvil").addEventListener("click", setBeliefsNE);
document.getElementById("chaGood").addEventListener("click", setBeliefsCG);
document.getElementById("chaNeu").addEventListener("click", setBeliefsCN);
document.getElementById("chaEvil").addEventListener("click", setBeliefsCE);

//randomizes alignment and beliefs on 'randomize' and 'generate' buttons
document.querySelector(".generate").addEventListener("click", randomizeBeliefs);
document
  .querySelector(".randomize")
  .addEventListener("click", randomizeBeliefs);
