"use strict";

/*****************

CHAPTER 3
MADELINE ZAYTSOFF

THIS TECH-DEMO AND ENGINE IS DESIGNED TO SHOW OFF THE TECHNOLOGIES OF THE RAINEBOW
ENGINE. THE ENGINE IS BEING BUILT WITH P5, P5 PLAY, AND JSON TO ALLOW FOR A SIDE-SCROLLING,
INTERACTIVE NARRATIVE. STILL CURRENTLY BEING BUILT, THE ENGINE IS BUILT TO BE REUSABLE AS WELL AS
SIMILAR TO THE GAME OBJECT SYSTEM USED BY UNITY AND OTHER GAME ENGINES.

******************/

let gameState = new GameState();

//TESTING AND TEMPORARY ASSETS//
let barkTestSFX;
let testSong;
let badMad;
let dialogTest;
let openingDialog263;
let restaurantDialog263;
let jsonExampleImage;
let jsonErrorImage;
let outsideDialog263_0;
let outsideDialog263_1;
let outsideDialog263_2;
let outsideDialog263_3;
let boatDialog263_0;
let goExample0Image;
let goExample1Image;
let goExample2Image;
let goExample3Image;
let paralaxExampleImage;
let watershedImage;
let panoExampleImage;
let animationExampleImage;
let pippinProfileImage;
let stephProfileImage;

//DIALOG VARIABLES//
let dialogFont;

//USED TO ALLOW STATE MACHINE TO OPERATE GLOBALLY//
let rootStateMachine;

//STILL IMAGES FOR GLOBAL VARIABLE//
let roundedCornerOverlay;
let controlsDirectionAnimation;
let controlsEAnimation;

//INTERACTIVE ANIMATIONS//
let eInteractImage;
let eInteractAnimation;
let eInteractSilhouetteImage;
let speechBubbleIcon;
let speechBubbleIconAnimation;

//USED FOR TEXTBOX ASSEMBLY//
let textBoxBKG;
let dialogBlackShade;

//SOUND AND MUSIC//
let forestAmbientSFX;
let glassBreakSFX;
let pageTurnSFX;
let boatMusic;
let introMusic;
let restaurantMusic;
let negativeMusic;

//ARRAY TO STORE PORTRAIT STRINGS//
let portraits = [];

//PORTRAITS FOR DIALOG//
let chloePortraitEmbarassed;
let chloePortraitNormal;
let chloePortraitShock;
let chloePortraitEmbarassedFlip;
let chloePortraitNormalFlip;
let chloePortraitShockFlip;

let virgilPortraitNormal;
let virgilPortraitShock;
let virgilPortraitUnimpresssed;
let virgilPortraitNormalFlip;
let virgilPortraitShockFlip;
let virgilPortraitUnimpresssedFlip;

let outsideComeBackSignPortrait;
let blueCatPortrait;
let oujiaPhonePortrait;
let meltChickenPortrait;

//CHARACTER ANIMATION FOR WALK CYCLE//
let chloeLeftAnimation;
let chloeLeftStationary;
let chloeRightAnimation;
let chloeRightStationary;

let chloeSilhouetteLeftAnimation;
let chloeSilhouetteLeftStationary;
let chloeSilhouetteRightAnimation;
let chloeSilhouetteRightStationary;

//OPENING ANIMATION//
let chloeOpeningFallAnimation;

//OUTSIDE IMAGERY//
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

//ASSORTED CHARACTERS//
let characterBlueCat;
let characterMeltChicken;
let ghost = [];
let ghostBKG = [];

//INSIDE RESTAURANT ASSETS//
let ramenBKG;
let ramenBathroomBKG;
let ramenBathroomStall;
let ramenOutside;
let ramenBathroomNegativeBlink;
let ramenBathroomNegativeEye = [];
let ramenBathroomNegativeBodyBag;

//FOR BOAT SCENE//
let mapBackground;
let boatTopSprite;

//JSON FILES//
let openingDialog0;

let ramenBKGSpecs = {
  x: -1300,
  y: -40,
  w: 2304,
  h: 648
}

let globalRenderer = new Renderer();

function preload() {

  //TEMPORARY ASSETS//
  barkTestSFX = loadSound(`assets/sounds/bark.wav`);
  testSong = loadSound(`assets/sounds/testSong.mp3`);
  portraits["badMad"] = badMad = loadImage(`assets/images/263files/badMad.jpg`);
  openingDialog263 = loadJSON(`assets/dialogs/openingDialog/openingDialog263.json`);
  restaurantDialog263 = loadJSON(`assets/dialogs/restaurantDialog/restaurantDialog263.json`);
  outsideDialog263_0 = loadJSON(`assets/dialogs/outsideDialog/outsideDialog263_0.json`);
  outsideDialog263_1 = loadJSON(`assets/dialogs/outsideDialog/outsideDialog263_1.json`);
  outsideDialog263_2 = loadJSON(`assets/dialogs/outsideDialog/outsideDialog263_2.json`);
  outsideDialog263_3 = loadJSON(`assets/dialogs/outsideDialog/outsideDialog263_3.json`);
  boatDialog263_0 = loadJSON(`assets/dialogs/boatDialog/boatDialog263_0.json`);
  dialogTest = loadJSON(`assets/dialogs/testDialog.json`);
  portraits["jsonExample"] = jsonExampleImage = loadImage(`assets/images/263files/jsonCodeExample.PNG`);
  portraits["jsonError"] = jsonErrorImage = loadImage(`assets/images/263files/jsonErrorExample.PNG`);
  portraits["goExample0"] = goExample0Image = loadImage(`assets/images/263files/goExample0.PNG`);
  portraits["goExample1"] = goExample1Image = loadImage(`assets/images/263files/goExample1.PNG`);
  portraits["goExample2"] = goExample2Image = loadImage(`assets/images/263files/goExample2.PNG`);
  portraits["goExample3"] = goExample3Image = loadImage(`assets/images/263files/goExample3.PNG`);
  portraits["paralaxExample"] = paralaxExampleImage = loadImage(`assets/images/263files/palaxExample.PNG`);
  portraits["watershed"] = watershedImage = loadImage(`assets/images/263files/watershed.png`);
  portraits["panoExample"] = panoExampleImage = loadImage(`assets/images/263files/anywherePanoExample.png`);
  portraits["animationExample"] = animationExampleImage = loadImage(`assets/images/263files/animationExample.PNG`);
  portraits["pippinProfile"] = pippinProfileImage = loadImage(`assets/images/263files/pippinProfile.PNG`);
  portraits["stephProfile"] = stephProfileImage = loadImage(`assets/images/263files/stephPortrait.png`);
  //

  dialogBlackShade = loadImage(`assets/images/blackFade.png`);
  dialogFont = loadFont(`assets/font/Early GameBoy.ttf`);
  textBoxBKG = loadImage(`assets/images/textBox.png`);
  roundedCornerOverlay = loadImage(`assets/images/roundedCorners.png`);
  eInteractImage = loadImage(`assets/images/eSelect.png`);
  eInteractAnimation = loadAnimation(`assets/images/eSelectAnimation/eSelectAnimation_0000.png`, `assets/images/eSelectAnimation/eSelectAnimation_0004.png`);
  eInteractSilhouetteImage = loadImage(`assets/images/bathRoomSilhouette/eSilhouetteSelect.png`);
  speechBubbleIcon = loadImage(`assets/images/speechBubble.png`);
  speechBubbleIconAnimation = loadAnimation(`assets/images/speechBubbleAnimation/speechBubbleAnimation_0000.png`, `assets/images/speechBubbleAnimation/speechBubbleAnimation_0004.png`)
  controlsDirectionAnimation = loadAnimation(`assets/images/control/control0.png`, `assets/images/control/control2.png`);
  controlsEAnimation = loadAnimation(`assets/images/eToInteract/pressE_0000.png`, `assets/images/eToInteract/pressE_0002.png`)

  chloeOpeningFallAnimation = loadAnimation(`assets/images/bathRoomSilhouette/chloeNormalFall/chloeNormalFall_0000.png`, `assets/images/bathRoomSilhouette/chloeNormalFall/chloeNormalFall_0015.png`);

  characterBlueCat = loadImage(`assets/images/assortedCharacters/blueCat.png`);
  characterMeltChicken = loadImage(`assets/images/assortedCharacters/meltChicken.png`);
  ghost[0] = loadImage(`assets/images/assortedCharacters/ghost/ghost0.png`);
  ghost[1] = loadImage(`assets/images/assortedCharacters/ghost/ghost1.png`);
  ghost[2] = loadImage(`assets/images/assortedCharacters/ghost/ghost2.png`);
  ghost[3] = loadImage(`assets/images/assortedCharacters/ghost/ghost3.png`);
  ghost[4] = loadImage(`assets/images/assortedCharacters/ghost/ghost4.png`);
  ghost[5] = loadImage(`assets/images/assortedCharacters/ghost/ghost5.png`);
  ghostBKG[0] = loadImage(`assets/images/assortedCharacters/ghost/bkgGhost/ghost0bkg.png`);
  ghostBKG[1] = loadImage(`assets/images/assortedCharacters/ghost/bkgGhost/ghost1bkg.png`);
  ghostBKG[2] = loadImage(`assets/images/assortedCharacters/ghost/bkgGhost/ghost2bkg.png`);
  ghostBKG[3] = loadImage(`assets/images/assortedCharacters/ghost/bkgGhost/ghost3bkg.png`);
  ghostBKG[4] = loadImage(`assets/images/assortedCharacters/ghost/bkgGhost/ghost4bkg.png`);
  ghostBKG[5] = loadImage(`assets/images/assortedCharacters/ghost/bkgGhost/ghost5bkg.png`);

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
  ramenBathroomNegativeBodyBag = loadAnimation(`assets/images/bathRoomSilhouette/bodyBag/bodyBag_0000.png`, `assets/images/bathRoomSilhouette/bodyBag/bodyBag_0011.png`);

  boatTopSprite = loadImage(`assets/images/boatSection/boatTop.png`);
  mapBackground = loadImage(`assets/images/boatSection/map.png`);

  portraits["chloeEmbarassed"] = chloePortraitEmbarassed = loadImage(`assets/images/sprites/player/portrait/chloeEmbarassed.png`);
  portraits["chloeNormal"] = chloePortraitNormal = loadImage(`assets/images/sprites/player/portrait/chloeNormal.png`);
  portraits["chloeShock"] = chloePortraitShock = loadImage(`assets/images/sprites/player/portrait/chloeShock.png`);
  portraits["chloeEmbarassedFlip"] = chloePortraitEmbarassedFlip = loadImage(`assets/images/sprites/player/portrait/chloeEmbarassedFlip.png`);
  portraits["chloeNormalFlip"] = chloePortraitNormalFlip = loadImage(`assets/images/sprites/player/portrait/chloeNormalFlip.png`);
  portraits["chloeShockFlip"] = chloePortraitShockFlip = loadImage(`assets/images/sprites/player/portrait/chloeShockFlip.png`);

  portraits["virgilNormal"] = virgilPortraitNormal = loadImage(`assets/images/sprites/virgil/virgilNormal.png`);
  portraits["virgilShock"] = virgilPortraitShock = loadImage(`assets/images/sprites/virgil/virgilShock.png`);
  portraits["virgilUnimpressed"] = virgilPortraitUnimpresssed = loadImage(`assets/images/sprites/virgil/virgilUnimpressed.png`);
  portraits["virgilNormalFlip"] = virgilPortraitNormalFlip = loadImage(`assets/images/sprites/virgil/virgilNormalFlip.png`);
  portraits["virgilShockFlip"] = virgilPortraitShockFlip = loadImage(`assets/images/sprites/virgil/virgilShockFlip.png`);
  portraits["virgilUnimpressedFlip"] = virgilPortraitUnimpresssedFlip = loadImage(`assets/images/sprites/virgil/virgilUnimpressedFlip.png`);

  portraits["outsideComeBackSign"] = outsideComeBackSignPortrait = loadImage(`assets/images/sprites/assortedPortraits/comeBackSign.png`);
  portraits["blueCatPortrait"] = blueCatPortrait = loadImage(`assets/images/assortedCharacters/blueCat.png`);
  portraits["oujiaPhone"] = oujiaPhonePortrait = loadImage(`assets/images/sprites/assortedPortraits/oujiaPhone.png`);
  portraits["meltChicken"] = meltChickenPortrait = loadImage(`assets/images/sprites/assortedPortraits/meltChicken.png`);

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
  boatMusic = loadSound(`assets/sounds/forestSong.mp3`);
  introMusic = loadSound(`assets/sounds/introMusic.m4a`);
  restaurantMusic = loadSound(`assets/sounds/restaurantMusic.mp3`);
  negativeMusic = loadSound(`assets/sounds/negativeTheme.mp3`);

  openingDialog0 = loadJSON(`assets/dialogs/openingDialog/openingDialog0.json`);
}

function setup() {

  createCanvas(1000,700);

  //SET SCENE TO PROPER DESIGNATION WITH TRANSIT BELOW//
  rootStateMachine = new StateMachine();

  gameState.currentScene = "Opening";

  rootStateMachine.transit(new SceneState(globalRenderer, new OpeningScene()));


}


function draw() {
  rootStateMachine.update();

  background(0);

  rootStateMachine.draw();

  image(roundedCornerOverlay,0,0);

}
