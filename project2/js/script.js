"use strict";

/*****************

CHAPTER 3
MADELINE ZAYTSOFF

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

let barkTestSFX;
let testSong;

let dialogFont;

let rootStateMachine;

let roundedCornerOverlay;
let controlsDirectionAnimation;
let controlsEAnimation;

let eInteractImage;
let eInteractSilhouetteImage;

let textBoxBKG;

let forestAmbientSFX;
let glassBreakSFX;
let pageTurnSFX;
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

let chloeSilhouetteLeftAnimation;
let chloeSilhouetteLeftStationary;
let chloeSilhouetteRightAnimation;
let chloeSilhouetteRightStationary;

let outsideBKGMountains0;
let outsideBKGMountains1;
let outsideGroundLoop;
let outsideForegroundLoop;
let outsideForegroundFogLoop;
let outsidePhoneBooth;
let outsideSky;
let outsideTrees;
let outsideComeBackSign;
let outsideToDockSign;
let outsideBarbedFence = [];
let outsideChainlinkFence = [];
let outsideForegroundOBJ = [];
let outsideStoneWalkway = [];
let outsideStreetlight = [];

let characterBlueCat;
let characterMeltChicken;
let ghost = [];

let ramenBKG;
let ramenBathroomBKG;
let ramenBathroomStall;
let ramenOutside;
let ramenBathroomNegativeBlink;
let ramenBathroomNegativeEye = [];

let mapBackground;
let boatTopSprite;

let dialogTest;

let ramenBKGSpecs = {
  x: -1300,
  y: -40,
  w: 2304,
  h: 648
}

let globalRenderer = new Renderer();

function preload() {

  barkTestSFX = loadSound(`assets/sounds/bark.wav`);
  testSong = loadSound(`assets/sounds/testSong.mp3`);

  dialogFont = loadFont(`assets/font/Early GameBoy.ttf`);
  textBoxBKG = loadImage(`assets/images/textBox.png`);
  roundedCornerOverlay = loadImage(`assets/images/roundedCorners.png`);
  eInteractImage = loadImage(`assets/images/eSelect.png`);
  eInteractSilhouetteImage = loadImage(`assets/images/bathRoomSilhouette/eSilhouetteSelect.png`);
  speechBubbleIcon = loadImage(`assets/images/speechBubble.png`);
  controlsDirectionAnimation = loadAnimation(`assets/images/control/control0.png`, `assets/images/control/control2.png`);
  controlsEAnimation = loadAnimation(`assets/images/eToInteract/pressE_0000.png`, `assets/images/eToInteract/pressE_0002.png`)

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
  outsideToDockSign = loadImage(`assets/images/landscape/toDock.png`);
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
  ramenBathroomBKG = loadImage(`assets/images/backgrounds/bathroomBKG.png`);
  ramenBathroomStall = loadImage(`assets/images/bathroomStall.png`);
  ramenBathroomNegativeBlink = loadAnimation(`assets/images/bathRoomSilhouette/blink/whiteBathroomSilhouette_0000.png`, `assets/images/bathRoomSilhouette/blink/whiteBathroomSilhouette_0029.png`);
  ramenBathroomNegativeEye[0] = loadAnimation(`assets/images/bathRoomSilhouette/ambientEyes/eyeA/eyeA_0000.png`, `assets/images/bathRoomSilhouette/ambientEyes/eyeA/eyeA_0053.png`);
  ramenBathroomNegativeEye[1] = loadAnimation(`assets/images/bathRoomSilhouette/ambientEyes/eyeB/eyeB_0000.png`, `assets/images/bathRoomSilhouette/ambientEyes/eyeB/eyeB_0053.png`);
  ramenBathroomNegativeEye[2] = loadAnimation(`assets/images/bathRoomSilhouette/ambientEyes/eyeC/eyeC_0000.png`, `assets/images/bathRoomSilhouette/ambientEyes/eyeC/eyeC_0053.png`);
  ramenBathroomNegativeEye[3] = loadAnimation(`assets/images/bathRoomSilhouette/ambientEyes/eyeD/eyeD_0000.png`, `assets/images/bathRoomSilhouette/ambientEyes/eyeD/eyeD_0007.png`);

  boatTopSprite = loadImage(`assets/images/boatSection/boatTop.png`);
  mapBackground = loadImage(`assets/images/boatSection/map.png`);

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

  chloeSilhouetteLeftAnimation = loadAnimation(`assets/images/bathRoomSilhouette/silhouette/leftWalkCycle/walkCycleLeft0.png`, `assets/images/bathRoomSilhouette/silhouette/leftWalkCycle/walkCycleLeft3.png`);
  chloeSilhouetteLeftStationary = loadImage(`assets/images/bathRoomSilhouette/silhouette/leftStationary.png`);
  chloeSilhouetteRightAnimation = loadAnimation(`assets/images/bathRoomSilhouette/silhouette/rightWalkCycle/walkCycleRight0.png`, `assets/images/bathRoomSilhouette/silhouette/rightWalkCycle/walkCycleRight3.png`);
  chloeSilhouetteRightStationary = loadImage(`assets/images/bathRoomSilhouette/silhouette/rightStationary.png`);

  forestAmbientSFX = loadSound(`assets/sounds/forestAmbience.mp3`);
  glassBreakSFX = loadSound(`assets/sounds/glassBreak.mp3`);
  pageTurnSFX = loadSound(`assets/sounds/pageTurn.mp3`);
  forestMusic = loadSound(`assets/sounds/forestMusic.mp3`);

   dialogTest = loadJSON(`assets/dialogs/testDialog.json`)
}

function setup() {

  createCanvas(1000,700);

  rootStateMachine = new StateMachine();

  rootStateMachine.transit(new SceneState(globalRenderer, new BathroomNegativeScene()));

}


function draw() {
  rootStateMachine.update();

  background(0);

  rootStateMachine.draw();

  image(roundedCornerOverlay,0,0);

}
