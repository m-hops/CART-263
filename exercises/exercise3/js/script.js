"use strict";

/*****************

SPY PROFILE GENERATOR PLUS
MADELINE ZAYTSOFF

GENERATES A RANDOMIZED SPY PROFILE FOR THE USER, AND PASSWORD PROTECTS IT
ADDITIONAL FEATURES ADDED TO ORIGINAL ACTIVITY:
- IMPROVED VISUAL DISPLAY OF PROFILE
- ABILITY TO REST THE CURRENT PROFILE DATA (IF PLAYER GUESSES WRONG)
- A GREETING BASED ON THE PLAYER'S NAME IS GIVEN UPON SUCCESSFUL LOGIN

******************/

//GLOBAL VARIABLE FOR SPY INFO OUTPUT//
let spyProfile = {
  name: '**REDACTED**',
  alias: '**REDACTED**',
  secretWeapon: '**REDACTED**',
  password: '**REDACTED**',
  color: {
    r:44,
    g:240,
    b:0
  }
}
let tarotData = undefined;
let objectData = undefined;
let instrumentData = undefined;

//GLOBAL VARIABLE FOR IMAGES//
let scanLineBKG = undefined;

//GLOBAL VARIABLE FOR FONT//
let compFont = undefined;

function preload() {

  //FONT PRELOAD//
  compFont = loadFont('assets/font/VCR_OSD_MONO.ttf');

  //IMAGE PRELOADS//
  scanLineBKG = loadImage('assets/images/scanlineGreen.png');

  //JSON PRELOADS//
  tarotData = loadJSON('https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json');
  instrumentData = loadJSON('https://raw.githubusercontent.com/dariusk/corpora/master/data/music/instruments.json');
  objectData = loadJSON('https://raw.githubusercontent.com/dariusk/corpora/master/data/objects/objects.json');

}

//RUNS AT STARTUP TO CONFIRM INFO STATE//
function logInCheck() {

    //CHECKS STORED DATA//
    let data = JSON.parse(localStorage.getItem('spy-profile-data'));

      //IF STORED DATA IS PRESENT, PROMPT FOR PASSWORD//
      if (data !== null) {

        let password = prompt(`AGENT. WHAT IS YOUR PASSWORD.\nWARNING: INCORRECT INPUT WILL RESULT IN FILE BEING DELETED AND FED TO THE QUEEN MOTHER.`);
        if (password === data.password){

          spyProfile.name = data.name;
          spyProfile.alias = data.alias;
          spyProfile.secretWeapon = data.secretWeapon;
          spyProfile.password = data.password;

        //DELETS EXISTING USER DATA IF INCORRECT PASSWORD IS GUESSED//
        } if (password !== data.password){

          localStorage.removeItem('spy-profile-data');

          generateSpyProfile('INCORRECT.\nFILES HAVE BEEN DELETED TO SECURE AGENT IDENTITY\nPLEASE ENTER A NEW NAME!');
        }
      }
      else {
        generateSpyProfile('AGENT. WHAT IS YOUR NAME?');

      }
}

//PUTS DATA FROM JSON AND USER INPUT INTO STORE DATA FILES//
function generateSpyProfile(text) {
  spyProfile.name = prompt(text);

  let instrument = random(instrumentData.instruments);
  spyProfile.alias = `THE ${instrument}`;

  spyProfile.secretWeapon = random(objectData.objects);

  let card = random(tarotData.tarot_interpretations);
  spyProfile.password = random(card.keywords);

  localStorage.setItem(`spy-profile-data`,JSON.stringify(spyProfile));
}

//DISPLAYS OUTPUT ON THE SCREEN//
function outputGenerator() {

  let profile = `** SPY PROFILE! DO NOT DISTRIBUTE! **

NAME: ${spyProfile.name}
ALIAS: ${spyProfile.alias}
SECRET WEAPON: ${spyProfile.secretWeapon}
PASSWORD: ${spyProfile.password}`;

  profile = profile.toUpperCase();

  push();
  textFont(compFont);
  textSize(24);
  textAlign(CENTER, CENTER);
  fill(spyProfile.color.r, spyProfile.color.g, spyProfile.color.b);
  text(profile, width/2, height/2);
  pop();
}

function welcomeMessage() {
  responsiveVoice.speak('Good morning, Agent' + spyProfile.name);
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  logInCheck();

  welcomeMessage();
}

function draw() {
  background(255);

  push();
  image(scanLineBKG, 0, 0, width, height);
  pop();

  outputGenerator();
}
