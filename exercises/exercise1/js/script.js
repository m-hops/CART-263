"use strict";

/*****************

EXERCISE 1: WHERES THE SAUSAGEDOG NEW GAME PLUS
MADELINE ZAYTSOFF

******************/

//CONSTANTS FOR SPIDER NUMBERS//
const NUM_FAKESPIDER_IMAGES = 9;
const NUM_FAKESPIDER = 100;

//ARRAY NAMES FOR SPIDERS//
let spiderImages = [];
let spiders = [];

//GLOBAL VARIABLES FOR IMAGE NAMES//
let fakeSpiderImage;
let backgroundImage;
let realSpiderImage;
let startSplashImage;
let endSplashImage;

let menu = 'startScreen';

let menuOnEnter;

//PRELOAD EXTERNAL ASSETS//
function preload() {

  //TO PUSH SPIDER IMAGES INTO ARRAY//
  for (let i = 0; i< NUM_FAKESPIDER_IMAGES; i++){
    let spiderImage = loadImage(`assets/images/spider${i}.png`);
    spiderImages.push(spiderImage);
  }

  //PRELOAD OF BACKGROUND IMAGE AND REAL SPIDER IMAGE//
  realSpiderImage = loadImage('assets/images/badSpider.png');
  backgroundImage = loadImage('assets/images/backgroundImage.png');
  startSplashImage = loadImage('assets/images/title.png');
  endSplashImage = loadImage('assets/images/ending screen.png');
}

//MENU NAVIGATION//
function menuNav() {
  if (menu == 'startScreen') {
    startScreenContent();

  } else if (menu == 'playScreen') {
    playScreenContent();

  } else if (menu == 'endScreen'){
    endScreenContent();
  }
}

function goToMenu(menuID) {
  menu = menuID;
  menuOnEnter = true;
}

//ACTIVATES CONDITION AFTER REAL SPIDER IS CLICKED//
function mousePressed() {
  if (menu == 'startScreen') {
    goToMenu('playScreen');

  } else if (menu == 'playScreen') {
    realSpiderImage.mousePressed();

  }else if (menu == 'endScreen') {
    goToMenu('startScreen');
  }
}

function startScreenContent() {
  image(startSplashImage,0,0,width,height);
}

function endScreenContent() {
  image(endSplashImage,0,0,width,height);
}

function playScreenContent() {

  image(backgroundImage,0,0,width,height);

  //CALL TO GENERATE FAKE SPIDERS UPON LAUNCH OF PROGRAM//
  for (let i = 0; i < spiders.length; i++) {
    spiders[i].update();
  }

  //CALL TO GENERATE REAL SPIDER UPON LAUNCH OF PROGRAM//
  realSpiderImage.update();

}

function fakeSpiderSetup() {

  //RANDOM COORDINATE GENERATOR FOR FAKE SPIDERS//
  for (let i = 0; i < NUM_FAKESPIDER; i++) {
    let x = random(0,width);
    let y = random(0,height);
    let spiderImage = random(spiderImages);
    let animal = new FakeSpider(x, y, spiderImage);
    spiders.push(animal);
  }
}

function realSpiderSetup() {

  //RANDOM COORDINATE GENERATOR FOR REAL SPIDERS//
  let x = random(0,width);
  let y = random(0,height);
  realSpiderImage = new RealSpider(x, y, realSpiderImage);
}

//ONE TIME CALLS//
function setup() {

  //CANVAS DIMENSIONS//
  createCanvas(windowWidth,windowHeight);

  fakeSpiderSetup();

  realSpiderSetup();
}

//CALLS EVERY FRAME//
function draw() {

  background(0,0,0);

  menuNav();

}
