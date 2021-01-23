"use strict";

/*****************

EXERCISE 1: WHERES THE SAUSAGEDOG NEW GAME PLUS
MADELINE ZAYTSOFF

ADDITIONS ADDED TO PROGRAM FROM ORIGINAL ACTIVITY:
1. MENU NAVIGATION
2. UPDATE IMAGE ASSETS
3. MASKED SPIDERS TO BE INVISIBLE UNLESS HOVERED OVER BY MOUSE

ASSETS USED THAT WERE NOT PUBLIC DOMAIN, PURCHASED, OR PERSONAL:

FLAME THROWER IMAGE - https://blogs.icrc.org/law-and-policy/2018/02/22/the-legality-of-flamethrowers-taking-unnecessary-suffering-seriously/
******************/

//CONSTANTS FOR SPIDER NUMBERS//
const NUM_FAKESPIDER_IMAGES = 9;
const NUM_FAKESPIDER = 100;

//ARRAY NAMES FOR SPIDERS//
let spiderImages = [];
let spiderImageMasks = [];
let spiders = [];

//GLOBAL VARIABLES FOR IMAGE NAMES//
let fakeSpiderImage;
let backgroundImage;
let realSpiderImage;
let startSplashImage;
let endSplashImage;
let realSpider;

//VARIABLES FOR MOUSE POINT//
let spotlightX;
let spotlightY;

//MENU BEGINNING ON LOGIN//
let menu = 'startScreen';
let menuOnEnter;

//PRELOAD EXTERNAL ASSETS//
function preload() {

  //TO PUSH SPIDER IMAGES INTO ARRAY//
  for (let i = 0; i < NUM_FAKESPIDER_IMAGES; i++) {
    let spiderImage = loadImage(`assets/images/spider${i}.png`);
    spiderImages.push(spiderImage);
  }

  //PRELOAD OF BACKGROUND IMAGE AND REAL SPIDER IMAGE//
  realSpiderImage = loadImage('assets/images/badSpider.png');
  backgroundImage = loadImage('assets/images/backgroundImage.png');
  startSplashImage = loadImage('assets/images/title.png');
  endSplashImage = loadImage('assets/images/ending screen.png');
}

//MENU NAVIGATION TREE//
function menuNav() {
  if (menu == 'startScreen') {
    startScreenContent();

  } else if (menu == 'playScreen') {
    playScreenContent();

  } else if (menu == 'endScreen') {
    endScreenContent();
  }
}

//MENU NAVIGATION COMMAND//
function goToMenu(menuID) {
  menu = menuID;
  menuOnEnter = true;

  //ALLOWS FOR SPIDER LOCATION TO BE RANDOMIZED EVERY LOOP OF GAME//
  if (menu == 'playScreen') {
    randomize();

    fakeSpiderSetup();

    realSpiderSetup();
  }
}

//ACTIVATES CONDITION AFTER REAL SPIDER IS CLICKED//
function mousePressed() {
  if (menu == 'startScreen') {
    goToMenu('playScreen');

  } else if (menu == 'playScreen') {
    realSpider.mousePressed();

  } else if (menu == 'endScreen') {
    goToMenu('startScreen');
  }
}

//START SCREEN IMAGE//
function startScreenContent() {
  image(startSplashImage, 0, 0, width, height);
}

//PLAY SCREEN BACKGROUND IMAGE AND SPIDER RADOMIZATION GENERATOR LAUNCH//
function playScreenContent() {

  image(backgroundImage, 0, 0, width, height);

  //CALL TO GENERATE FAKE SPIDERS UPON LAUNCH OF PROGRAM//
  for (let i = 0; i < spiders.length; i++) {
    spiders[i].update();
  }

  //CALL TO GENERATE REAL SPIDER UPON LAUNCH OF PROGRAM//
  realSpider.update();

}

//END SCREEN IMAGE//
function endScreenContent() {
  image(endSplashImage, 0, 0, width, height);
}

//CREATING SPIDER ARRAYS FOR FAKE SPIDERS//
function fakeSpiderSetup() {

  //CLEARS ARRAY AFTER GAME LOOP//
  spiders = [];

  //RANDOM COORDINATE GENERATOR FOR FAKE SPIDERS//
  for (let i = 0; i < NUM_FAKESPIDER; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let spiderImageIndex = Math.floor(random(0, spiderImages.length));
    let animal = new FakeSpider(x, y, spiderImages[spiderImageIndex]);
    spiders.push(animal);
  }
}

//CREATING SINGLE INSTANCE OF REAL SPIDER//
function realSpiderSetup() {

  //RANDOM COORDINATE GENERATOR FOR REAL SPIDERS//
  let x = random(0, width);
  let y = random(0, height);
  realSpider = new RealSpider(x, y, realSpiderImage);
}

//RANDOMIZER USING COMPUTER TIME TO CHANGE LOCATION OF SPIDERS EVERY PLAY THROUGH//
function randomize() {

  let t = second() + hour() * 60;
  randomSeed(second() + hour() * 60);
}

//ONE TIME CALLS//
function setup() {

  //CANVAS DIMENSIONS//
  createCanvas(windowWidth, windowHeight);

}

//CALLS EVERY FRAME//
function draw() {

  //USED IN FAKESPIDER.JS FOR MAPPING OF MASK TO MOUSE//
  spotlightX = mouseX;
  spotlightY = mouseY;

  background(0, 0, 0);

  menuNav();

}
