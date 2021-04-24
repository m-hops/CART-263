"use strict";

/*****************

CHAPTER 3
MADELINE ZAYTSOFF

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

let dialogFont;

let rootStateMachine;

let roundedCornerOverlay;

let textBoxBKG;

let forestAmbientSFX;

let speechBubbleIcon;

let chloePortraitEmbarassed;
let chloePortraitNormal;
let chloePortraitShock;

let virgilPortraitNormal;
let virgilPortraitShock;
let virgilPortraitUnimpresssed;

let chloeLeftAnimation;
let chloeLeftStationary;
let chloeRightAnimation;
let chloeRightStationary;

let outsideBKGMountains0;
let outsideBKGMountains1;
let outsideGroundLoop;
let outsidePhoneBooth;
let outsideSky;
let outsideTrees;
let outsideBarbedFence = [];
let outsideForeground = [];
let outsideStoneWalkway = [];
let outsideStreetlight = [];

let characterBlueCat;

let ramenBKG;
let ramenOutside;

let ramenBKGSpecs = {
  x: -1300,
  y: -40,
  w: 2304,
  h: 648
}

let globalRenderer = new Renderer();

function preload() {

  roundedCornerOverlay = loadImage(`assets/images/roundedCorners.png`);

  dialogFont = loadFont(`assets/font/Early GameBoy.ttf`);
  textBoxBKG = loadImage(`assets/images/textBox.png`);

  speechBubbleIcon = loadImage(`assets/images/speechBubble.png`);

  characterBlueCat = loadImage(`assets/images/assortedCharacters/blueCat.png`);

  outsideBKGMountains0 = loadImage(`assets/images/landscape/background/mountain0.png`);
  outsideBKGMountains1 = loadImage(`assets/images/landscape/background/mountain1.png`);
  outsideGroundLoop = loadImage(`assets/images/landscape/groundLoop.png`);
  outsidePhoneBooth = loadImage(`assets/images/landscape/phonebooth.png`);
  outsideSky = loadImage(`assets/images/landscape/sky.png`);
  outsideTrees = loadImage(`assets/images/landscape/trees.png`);
  outsideBarbedFence[0] = loadImage(`assets/images/landscape/barbedFence/barbedFence0.png`);
  outsideBarbedFence[1] = loadImage(`assets/images/landscape/barbedFence/barbedFence1.png`);
  outsideBarbedFence[2] = loadImage(`assets/images/landscape/barbedFence/barbedFence2.png`);
  outsideBarbedFence[3] = loadImage(`assets/images/landscape/barbedFence/barbedFence3.png`);
  outsideForeground[0] = loadImage(`assets/images/landscape/foreground/foreground0.png`);
  outsideForeground[1] = loadImage(`assets/images/landscape/foreground/foreground1.png`);
  outsideStoneWalkway[0] = loadImage(`assets/images/landscape/stoneWalkway/stoneWalk0.png`);
  outsideStoneWalkway[1] = loadImage(`assets/images/landscape/stoneWalkway/stoneWalk1.png`);
  outsideStoneWalkway[2] = loadImage(`assets/images/landscape/stoneWalkway/stoneWalk2.png`);
  outsideStoneWalkway[3] = loadImage(`assets/images/landscape/stoneWalkway/stoneWalk3.png`);
  outsideStoneWalkway[4] = loadImage(`assets/images/landscape/stoneWalkway/stoneWalk4.png`);
  outsideStreetlight[0] = loadImage(`assets/images/streetLamps/streetlight0.png`);
  outsideStreetlight[1] = loadImage(`assets/images/streetLamps/streetlight1.png`);
  outsideStreetlight[2] = loadImage(`assets/images/streetLamps/streetlight2.png`);
  outsideStreetlight[3] = loadImage(`assets/images/streetLamps/streetlight3.png`);
  outsideStreetlight[4] = loadImage(`assets/images/streetLamps/streetlight4.png`);
  outsideStreetlight[5] = loadImage(`assets/images/streetLamps/streetlight5.png`);
  outsideStreetlight[6] = loadImage(`assets/images/streetLamps/streetlight6.png`);
  outsideStreetlight[7] = loadImage(`assets/images/streetLamps/streetlight7.png`);

  ramenBKG = loadImage(`assets/images/backgrounds/ramenBKG.png`);
  ramenOutside = loadImage(`assets/images/outsideZenNoodles.png`);

  chloePortraitEmbarassed = loadImage(`assets/images/sprites/player/portrait/chloeEmbarassed.png`);
  chloePortraitNormal = loadImage(`assets/images/sprites/player/portrait/chloeNormal.png`);
  chloePortraitShock = loadImage(`assets/images/sprites/player/portrait/chloeShock.png`);

  virgilPortraitNormal = loadImage(`assets/images/sprites/virgil/virgilNormal.png`);
  virgilPortraitShock = loadImage(`assets/images/sprites/virgil/virgilShock.png`);
  virgilPortraitUnimpresssed = loadImage(`assets/images/sprites/virgil/virgilUnimpressed.png`);

  chloeLeftAnimation = loadAnimation(`assets/images/sprites/player/leftWalkCycle/walkCycleLeft0.png`, `assets/images/sprites/player/leftWalkCycle/walkCycleLeft3.png`);
  chloeLeftStationary = loadImage(`assets/images/sprites/player/leftStationary.png`);
  chloeRightAnimation = loadAnimation(`assets/images/sprites/player/rightWalkCycle/walkCycleRight0.png`, `assets/images/sprites/player/rightWalkCycle/walkCycleRight3.png`);
  chloeRightStationary = loadImage(`assets/images/sprites/player/rightStationary.png`);

  forestAmbientSFX = loadSound(`assets/sounds/forestAmbience.mp3`);
}

function setup() {

  createCanvas(1000,700);

  //noStroke();

  rootStateMachine = new StateMachine();

  rootStateMachine.transit(new SceneState(globalRenderer, new OutsideScene()));

  forestAmbientSFX.loop();

}


function draw() {
  rootStateMachine.update();

  background(0);

  rootStateMachine.draw();

  image(roundedCornerOverlay,0,0);

}
