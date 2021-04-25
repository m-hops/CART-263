"use strict";

/*****************

CHAPTER 3
MADELINE ZAYTSOFF

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

let barkTestSFX;

let dialogFont;

let rootStateMachine;

let roundedCornerOverlay;

let eInteractImage;

let textBoxBKG;

let forestAmbientSFX;
let forestMusic;

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
let outsideForegroundLoop;
let outsideForegroundFogLoop;
let outsidePhoneBooth;
let outsideSky;
let outsideTrees;
let outsideComeBackSign;
let outsideBarbedFence = [];
let outsideChainlinkFence = [];
let outsideForegroundOBJ = [];
let outsideStoneWalkway = [];
let outsideStreetlight = [];

let characterBlueCat;
let characterMeltChicken;
let ghost = [];

let ramenBKG;
let ramenOutside;

let boatTopSprite;

let ramenBKGSpecs = {
  x: -1300,
  y: -40,
  w: 2304,
  h: 648
}

let globalRenderer = new Renderer();

function preload() {

  barkTestSFX = loadSound(`assets/sounds/bark.wav`);

  roundedCornerOverlay = loadImage(`assets/images/roundedCorners.png`);
  eInteractImage = loadImage(`assets/images/eSelect.png`);

  dialogFont = loadFont(`assets/font/Early GameBoy.ttf`);
  textBoxBKG = loadImage(`assets/images/textBox.png`);

  speechBubbleIcon = loadImage(`assets/images/speechBubble.png`);

  characterBlueCat = loadImage(`assets/images/assortedCharacters/blueCat.png`);
  characterMeltChicken = loadImage(`assets/images/assortedCharacters/meltChicken.png`);
  ghost[0] = loadImage(`assets/images/assortedCharacters/ghost/ghost0.png`);
  ghost[1] = loadImage(`assets/images/assortedCharacters/ghost/ghost1.png`);
  ghost[2] = loadImage(`assets/images/assortedCharacters/ghost/ghost2.png`);
  ghost[3] = loadImage(`assets/images/assortedCharacters/ghost/ghost3.png`);
  ghost[4] = loadImage(`assets/images/assortedCharacters/ghost/ghost4.png`);
  ghost[5] = loadImage(`assets/images/assortedCharacters/ghost/ghost5.png`);

  outsideBKGMountains0 = loadImage(`assets/images/landscape/background/mountain0.png`);
  outsideBKGMountains1 = loadImage(`assets/images/landscape/background/mountain1.png`);
  outsideGroundLoop = loadImage(`assets/images/landscape/groundLoop.png`);
  outsideForegroundLoop = loadImage(`assets/images/landscape/foreground/foregroundLoop.png`);
  outsideForegroundFogLoop = loadImage(`assets/images/landscape/foreground/foregroundFog.png`);
  outsidePhoneBooth = loadAnimation(`assets/images/landscape/phoneBooth/phoneBooth0.png`, `assets/images/landscape/phoneBooth/phoneBooth12.png`);
  outsideSky = loadImage(`assets/images/landscape/sky.png`);
  outsideTrees = loadImage(`assets/images/landscape/trees.png`);
  outsideComeBackSign = loadImage(`assets/images/landscape/comeBackSign.png`);
  outsideBarbedFence[0] = loadImage(`assets/images/landscape/barbedFence/barbedFence0.png`);
  outsideBarbedFence[1] = loadImage(`assets/images/landscape/barbedFence/barbedFence1.png`);
  outsideBarbedFence[2] = loadImage(`assets/images/landscape/barbedFence/barbedFence2.png`);
  outsideBarbedFence[3] = loadImage(`assets/images/landscape/barbedFence/barbedFence3.png`);
  outsideForegroundOBJ[0] = loadImage(`assets/images/landscape/foreground/foreground0.png`);
  outsideForegroundOBJ[1] = loadImage(`assets/images/landscape/foreground/foreground1.png`);
  outsideStoneWalkway[0] = loadImage(`assets/images/landscape/stoneWalkway/stoneWalk0.png`);
  outsideStoneWalkway[1] = loadImage(`assets/images/landscape/stoneWalkway/stoneWalk1.png`);
  outsideStoneWalkway[2] = loadImage(`assets/images/landscape/stoneWalkway/stoneWalk2.png`);
  outsideStoneWalkway[3] = loadImage(`assets/images/landscape/stoneWalkway/stoneWalk3.png`);
  outsideStoneWalkway[4] = loadImage(`assets/images/landscape/stoneWalkway/stoneWalk4.png`);
  outsideStreetlight[0] = loadAnimation(`assets/images/streetLamps/streetlightA/streetlightA0.png`, `assets/images/streetLamps/streetlightA/streetlightA1.png`);
  outsideStreetlight[1] = loadAnimation(`assets/images/streetLamps/streetlightB/streetlightB0.png`, `assets/images/streetLamps/streetlightB/streetlightB1.png`);
  outsideStreetlight[2] = loadAnimation(`assets/images/streetLamps/streetlightC/streetlightC0.png`, `assets/images/streetLamps/streetlightC/streetlightC1.png`);
  outsideStreetlight[3] = loadAnimation(`assets/images/streetLamps/streetlightD/streetlightD0.png`, `assets/images/streetLamps/streetlightD/streetlightD1.png`);
  outsideStreetlight[4] = loadAnimation(`assets/images/streetLamps/streetlightE/streetlightE0.png`, `assets/images/streetLamps/streetlightE/streetlightE1.png`);
  outsideStreetlight[5] = loadAnimation(`assets/images/streetLamps/streetlightF/streetlightF0.png`, `assets/images/streetLamps/streetlightF/streetlightF1.png`);
  outsideStreetlight[6] = loadImage(`assets/images/streetLamps/streetlightG/streetlight6.png`);
  outsideStreetlight[7] = loadImage(`assets/images/streetLamps/streetlightH/streetlight7.png`);
  outsideChainlinkFence[0] = loadImage(`assets/images/landscape/chainlinkFence/chainlinkFence0.png`);
  outsideChainlinkFence[1] = loadImage(`assets/images/landscape/chainlinkFence/chainlinkFence1.png`);

  ramenBKG = loadImage(`assets/images/backgrounds/ramenBKG.png`);
  ramenOutside = loadImage(`assets/images/outsideZenNoodles.png`);

  boatTopSprite = loadImage(`assets/images/boatSection/boatTop.png`);

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
  forestMusic = loadSound(`assets/sounds/forestMusic.mp3`);
}

function setup() {

  createCanvas(1000,700);

  rootStateMachine = new StateMachine();

  rootStateMachine.transit(new SceneState(globalRenderer, new OutsideScene()));

  forestAmbientSFX.loop();
  forestMusic.loop();

}


function draw() {
  rootStateMachine.update();

  background(0);

  rootStateMachine.draw();

  image(roundedCornerOverlay,0,0);

}
