"use strict";

/*****************

PROJECT 1 - THE STRANGERS: AFTERPARTY

KILL THEM ALL, AND DON'T GET CAUGHT

******************/

//GLOBAL VARIABLE FOR MENU NAVGIATION//
let menu = 'intro';
let menuOnEnter;

//ARRAY INFO FOR VICTIMS//
let victims = [];
let VICTIMCOUNTDOWNSTAIRS = 5;
let VICTIMCOUNTUPSTAIRS = 5;

//CLASS VARIABLES//
let floorplan;
let player;

//RAIN EFFECT VARIABLES//
let rainGenerator;
let drop = [];
let rainAmount = 150;
let rainSFX;
let isOutside = true;

//ASSORTED SFX//
let killSFX;
let walkInsideSFX;

//LIGHTNING GENERATOR VARIABLES//
let lightning = {
  alpha: 255,
  speed: 5,
  color: 255
};

//IMAGE VARIABLES//
let floorplan1BKG;
let floorplan2BKG;
let floorplan1Blackout;
let killIndicatorOverlay;
let grassOverlay;
let blackOutOverlay;
let introScreenOverlay;
let introScreenBackground;

//INTRO SCREEN DIMENSIONS//
let introScreenOverlaySpec = {
  x:0,
  y:0,
  w:900,
  h:506
};
let introScreenBackgroundSpec = {
  x:0,
  y:0,
  w:900,
  h:506
};

//IMAGE SIZE BEYOND CANVAS AND OFFSET VARIABLES//
let worldLimit = {
  h: 2200,
  w: 3500
}
let offsetX;
let offsetY;

//ANIMATION VARIABLE NAMES//
let playerSprite;
let playerSpriteRest;
let playerSpriteUp;
let playerSpriteDown;
let playerSpriteLeft;
let playerSpriteRight;

let enemySpriteUp = [];
let enemySpriteDown = [];
let enemySpriteLeft = [];
let enemySpriteRight = [];

//EXTERNAL ASSET PRELOADS//
function preload() {

  //AUDIO PRELOADS//
  rainSFX = loadSound('assets/sounds/rainSFX.mp3');
  killSFX = loadSound('assets/sounds/hit.mp3');
  walkInsideSFX = loadSound('assets/sounds/walkInside.mp3');

  //IMAGE PRELOADS//
  floorplan1BKG = loadImage('assets/images/level1.png');
  floorplan2BKG = loadImage('assets/images/level2.png');
  killIndicatorOverlay = loadImage('assets/images/eOverlay.png');
  grassOverlay = loadImage('assets/images/grass.png');
  floorplan1Blackout = loadImage('assets/images/level1Blackout.png');
  blackOutOverlay = loadImage('assets/images/lightOut.png');
  introScreenOverlay = loadImage('assets/images/introScreenForeground.png');
  introScreenBackground = loadImage('assets/images/introScreenBackground.png');

  //ANIMATION PRELOADS//
  playerSpriteRest = loadAnimation('assets/images/player/images/playerRestDown.png');
  playerSpriteUp = loadAnimation('assets/images/player/images/up/playerUp0.png', 'assets/images/player/images/up/playerUp7.png');
  playerSpriteDown = loadAnimation('assets/images/player/images/down/playerDown0.png', 'assets/images/player/images/down/playerDown7.png');
  playerSpriteLeft = loadAnimation('assets/images/player/images/left/playerLeft0.png', 'assets/images/player/images/left/playerLeft7.png');
  playerSpriteRight = loadAnimation('assets/images/player/images/right/playerRight0.png', 'assets/images/player/images/right/playerRight7.png');

  enemySpriteUp[0] = loadAnimation('assets/images/enemyA/walkCycle/images/Up/enemyAUp0.png', 'assets/images/enemyA/walkCycle/images/Up/enemyAUp8.png');
  enemySpriteDown[0] = loadAnimation('assets/images/enemyA/walkCycle/images/Down/enemyADown0.png', 'assets/images/enemyA/walkCycle/images/Down/enemyADown8.png');
  enemySpriteLeft[0] = loadAnimation('assets/images/enemyA/walkCycle/images/Left/enemyALeft0.png', 'assets/images/enemyA/walkCycle/images/Left/enemyALeft8.png');
  enemySpriteRight[0] = loadAnimation('assets/images/enemyA/walkCycle/images/Right/enemyARight0.png', 'assets/images/enemyA/walkCycle/images/Right/enemyARight8.png');

  enemySpriteUp[1] = loadAnimation('assets/images/enemyB/walkCycle/images/Up/enemyBUp0.png', 'assets/images/enemyB/walkCycle/images/Up/enemyBUp8.png');
  enemySpriteDown[1] = loadAnimation('assets/images/enemyB/walkCycle/images/Down/enemyBDown0.png', 'assets/images/enemyB/walkCycle/images/Down/enemyBDown8.png');
  enemySpriteLeft[1] = loadAnimation('assets/images/enemyB/walkCycle/images/Left/enemyBLeft0.png', 'assets/images/enemyB/walkCycle/images/Left/enemyBLeft8.png');
  enemySpriteRight[1] = loadAnimation('assets/images/enemyB/walkCycle/images/Right/enemyBRight0.png', 'assets/images/enemyB/walkCycle/images/Right/enemyBRight8.png');

  enemySpriteUp[2] = loadAnimation('assets/images/enemyC/walkCycle/images/Up/enemyCUp0.png', 'assets/images/enemyC/walkCycle/images/Up/enemyCUp8.png');
  enemySpriteDown[2] = loadAnimation('assets/images/enemyC/walkCycle/images/Down/enemyCDown0.png', 'assets/images/enemyC/walkCycle/images/Down/enemyCDown8.png');
  enemySpriteLeft[2] = loadAnimation('assets/images/enemyC/walkCycle/images/Left/enemyCLeft0.png', 'assets/images/enemyC/walkCycle/images/Left/enemyCLeft8.png');
  enemySpriteRight[2] = loadAnimation('assets/images/enemyC/walkCycle/images/Right/enemyCRight0.png', 'assets/images/enemyC/walkCycle/images/Right/enemyCRight8.png');

  enemySpriteUp[3] = loadAnimation('assets/images/enemyD/walkCycle/images/Up/enemyDUp0.png', 'assets/images/enemyD/walkCycle/images/Up/enemyDUp8.png');
  enemySpriteDown[3] = loadAnimation('assets/images/enemyD/walkCycle/images/Down/enemyDDown0.png', 'assets/images/enemyD/walkCycle/images/Down/enemyDDown8.png');
  enemySpriteLeft[3] = loadAnimation('assets/images/enemyD/walkCycle/images/Left/enemyDLeft0.png', 'assets/images/enemyD/walkCycle/images/Left/enemyDLeft8.png');
  enemySpriteRight[3] = loadAnimation('assets/images/enemyD/walkCycle/images/Right/enemyDRight0.png', 'assets/images/enemyD/walkCycle/images/Right/enemyDRight8.png');

  enemySpriteUp[4] = loadAnimation('assets/images/enemyE/walkCycle/images/Up/enemyEUp0.png', 'assets/images/enemyE/walkCycle/images/Up/enemyEUp8.png');
  enemySpriteDown[4] = loadAnimation('assets/images/enemyE/walkCycle/images/Down/enemyEDown0.png', 'assets/images/enemyE/walkCycle/images/Down/enemyEDown8.png');
  enemySpriteLeft[4] = loadAnimation('assets/images/enemyE/walkCycle/images/Left/enemyELeft0.png', 'assets/images/enemyE/walkCycle/images/Left/enemyELeft8.png');
  enemySpriteRight[4] = loadAnimation('assets/images/enemyE/walkCycle/images/Right/enemyERight0.png', 'assets/images/enemyE/walkCycle/images/Right/enemyERight8.png');

}

//MENU NAVIGATION//
function goToMenu(menuID) {
  menu = menuID;
  menuOnEnter = true;
}

function menuNav() {

  if (menu == 'intro') {
    startScreen();
  }

  if (menu == 'play') {
      playScreen();
  }
}

function mouseClicked() {

  if (menu == 'intro'){
    goToMenu('play');
  }
}

//AUDIO QUEUE STATE MACHINES//
function audioQStateMachine() {

    if (floorplan.outside) {
      if (!isOutside) {
        isOutside = true;
        audioQ();
      }
    } else {
      if (isOutside) {
        isOutside = false;
        audioQ();
      }
    }

}

//AUDIO QUEUE PARAMETERS//
function audioQ() {

    if (isOutside) {
        rainSFX.setVolume(0.3);
        rainSFX.loop();
    } else {
        rainSFX.setVolume(0.1);
        rainSFX.loop();
    }
  }

//PULLS PREDETERMINED AMOUNT OF INSTANCES OF RAIN FROM RAIN GENERATOR FOR SETUP//
function rainSetup() {
  for (let i = 0; i < rainAmount; i++) {
    drop[i] = new RainGenerator();
  }
}

//RUNS RAIN SIMULATION//
function rainRun() {
  for (let i = 0; i < rainAmount; i++) {
    drop[i].update();
  }
}

//RANDOM LIGHTNING GENERATOR CREATES WHITE FLASH OUTSIDE//
function lightningGenerator() {

  let odds = random(0,1);

  lightning.alpha = lightning.alpha - lightning.speed;

  if (odds > 0.999){

   lightning.alpha = 255;

  }

  push();
  fill(lightning.color, lightning.alpha);
  rect(0, 0, width, height);
  pop();
}

//HANDLES MOVEMENT BETWEEN UPPER AND LOWER FLOORS//
function stairs() {

  let stairX = 1755 + offsetX;
  let stairY = 870 + offsetY;
  let stairD = 170;

  let stairXU = 1800 + offsetX;
  let stairYU = 600 + offsetY;
  let stairDU = 150;

  //HIT ZONES FOR MOVEMENT//
  if (!floorplan.upstairs) {
    push();
    noFill();
    noStroke();
    circle(stairX, stairY, stairD);
    pop();
  } else {
    push();
    noFill();
    noStroke();
    circle(stairXU, stairYU, stairDU);
    pop();
  }

  //DETERMINES IF PLAYER IS WITHIN ZONE AND MOVES THEM TO APPROPRIATE SPOT ON MAP UPSTAIRS//
  if (player.x + offsetX >= stairX - stairD / 2 &&
    player.x + offsetX <= stairX + stairD / 2 &&
    player.y + offsetY >= stairY - stairD / 2 &&
    player.y + offsetY <= stairY + stairD / 2 &&
    floorplan.upstairs === false) {

    //DISPLAYS MOVEMENT INSTRUCTIONS//
    push();
    image(killIndicatorOverlay, player.x + offsetX - 25, player.y + offsetY - 100, 50, 50);
    pop();

    //INITIATES MOVEMENT THROUGH FLOORS//
    if (keyIsDown(69)) {
      floorplan.upstairs = true;
      player.x = 1795;
      player.y = 700;
    }
  }

  //DETERMINES IF PLAYER IS WITHIN ZONE AND MOVES THEM TO APPROPRIATE SPOT ON MAP dOWNSTAIRS//
  if (player.x + offsetX >= stairXU - stairDU / 2 &&
    player.x + offsetX <= stairXU + stairDU / 2 &&
    player.y + offsetY >= stairYU - stairDU / 2 &&
    player.y + offsetY <= stairYU + stairDU / 2 &&
    floorplan.upstairs === true) {

    //DISPLAYS MOVEMENT INSTRUCTIONS//
    push();
    image(killIndicatorOverlay, player.x + offsetX - 25, player.y + offsetY - 100, 50, 50);
    pop();

    //INITIATES MOVEMENT THROUGH FLOORS//
    if (keyIsDown(69)) {
      floorplan.upstairs = false;
      player.x = 1750;
      player.y = 975;
    }
  }

}

//CHECKS IF PLAYER IS WITHING THE THIS.ATTACKZONE OF VICTIM//
function meleeRange(x, y, r) {
  if (player.x >= x - r / 2 &&
    player.x <= x + r / 2 &&
    player.y >= y - r / 2 &&
    player.y <= y + r / 2) {

    //DISPLAYS KILL INSTRUCTIONS//
    push();
    image(killIndicatorOverlay, player.x + offsetX - 25, player.y + offsetY - 100, 50, 50);
    pop();

    //INITIATES KILL//
    if (keyIsDown(69)) {

            killSFX.play();

      return true;
    }
  }

  //PREVENTS ALL ENEMIES FROM DISAPPEARING AFTER 1 KILL//
  return false
}

//KEEPS PLAYER AND ALL CONTENT LOCKED IN THE SAME PLACE DESPITE MOVEMENT//
function movementControlAndLock() {
  offsetX = -player.x + width / 2;
  offsetY = -player.y + height / 2;


  if (player.x >= worldLimit.w - width / 2) {
    offsetX = -(worldLimit.w - width);
  }

  if (player.x <= width / 2) {
    offsetX = 0;
  }

  if (player.y >= worldLimit.h - height / 2) {
    offsetY = -(worldLimit.h - height);
  }

  if (player.y <= height / 2) {
    offsetY = 0;
  }

}

//SPAWNER FOR PREDETERMINED SPAWN LOCATIONS//
function victimSpawn() {
  //RANDOM VICTIM SPAWNER UPSTAIRS//
  for (let i = 0; i < VICTIMCOUNTDOWNSTAIRS; i++) {
    victims[i] = new Victim();
    victims[i].path = floorplan.spawnPointsDownstairs[i].path;
    victims[i].x = random(floorplan.spawnPointsDownstairs[i].x, floorplan.spawnPointsDownstairs[i].x + floorplan.spawnPointsDownstairs[i].w);
    victims[i].y = random(floorplan.spawnPointsDownstairs[i].y, floorplan.spawnPointsDownstairs[i].y + floorplan.spawnPointsDownstairs[i].h);
    victims[i].enemyTypeIndex = Math.floor(random(0, enemySpriteRight.length));
  }

  //RANDOM VICTIM SPAWNER DOWNSTAIRS//
  for (let j = 0; j < VICTIMCOUNTUPSTAIRS; j++) {
    victims[j+VICTIMCOUNTDOWNSTAIRS] = new Victim();
    victims[j+VICTIMCOUNTDOWNSTAIRS].path = floorplan.spawnPointsUpstairs[j].path;
    victims[j+VICTIMCOUNTDOWNSTAIRS].x = random(floorplan.spawnPointsUpstairs[j].x, floorplan.spawnPointsUpstairs[j].x + floorplan.spawnPointsUpstairs[j].w);
    victims[j+VICTIMCOUNTDOWNSTAIRS].y = random(floorplan.spawnPointsUpstairs[j].y, floorplan.spawnPointsUpstairs[j].y + floorplan.spawnPointsUpstairs[j].h);
    victims[j+VICTIMCOUNTUPSTAIRS].enemyTypeIndex = Math.floor(random(0, enemySpriteRight.length));
  }
}

//USED IN FLOORPLAN TO PREVENT PLAYER FROM GOING THROUGH WALL//
function distanceFromWallToPoint(wall, pointX, pointY) {
  let centerX = wall.x + wall.w / 2;
  let centerY = wall.y + wall.h / 2;
  let extendX = wall.w / 2;
  let extendY = wall.h / 2;

  if (pointX <= centerX - extendX) {
    //POINT IS WEST//

    if (pointY < wall.y) {
      //POINT IS NORTHWEST//
      return dist(wall.x, wall.y, pointX, pointY);

    } else if (pointY > centerY + extendY) {
      //POINT IS SOUTHWEST//
      return dist(wall.x, wall.y + wall.h, pointX, pointY);

    } else {
      //POINT IS TRUE WEST//
      return centerX - (pointX + extendX);
    }
  } else if (pointX >= centerX + extendX) {
    //POINT IS EAST//
    if (pointY < wall.y) {
      //POINT IT NORTHEAST//
      return dist(wall.x + wall.w, wall.y, pointX, pointY);

    } else if (pointY > centerY + extendY) {
      //POINT IS SOUTHEAST//
      return dist(wall.x + wall.w, wall.y + wall.h, pointX, pointY);
    } else {
      //POINT IS TRUE EAST//
      return pointX - centerX - extendX;
    }
  } else {
    if (pointY > centerY) {
      //POINT IT TRUE NORTH//
      return pointY - (centerY + extendY);

    } else if (pointY < centerY) {
      //POINT IS TRUE SOUTH//
      return centerY - extendY - pointY;
    }
  }

}

function startScreen() {

  image(introScreenBackground, introScreenBackgroundSpec.x, introScreenBackgroundSpec.y, introScreenBackgroundSpec.w, introScreenBackgroundSpec.h);

  rainRun();

  image(introScreenOverlay, introScreenOverlaySpec.x, introScreenOverlaySpec.y, introScreenOverlaySpec.w, introScreenOverlaySpec.h);
}

//TURNS ON MOVEMENT LOCK, SPAWNS VICTIMS, ENABLES PLAYER MOVEMENT, DISPLAYS FLOORPLAN WITH NECESSARY COMPONENETS//
function playScreen() {

  audioQStateMachine();

  movementControlAndLock();
  //MAIN PURPOSE OF THIS IS TO CONTROL SHADOW OVERLAY OVER HOUSE//
  if (floorplan.outside) {

    image(grassOverlay, offsetX, offsetY);

    floorplan.update(offsetX, offsetY);

    player.update(offsetX, offsetY);

    push();
    fill(0,210);
    rect(0,0,width,height);
    pop();

    image(floorplan1Blackout, floorplan.x + offsetX, floorplan.y + offsetY, floorplan.w, floorplan.h);

    rainRun();

    lightningGenerator();

  } else if (floorplan.upstairs) {

    rainRun();

    lightningGenerator();

    floorplan.update(offsetX, offsetY);

    for (let j = 0; j < VICTIMCOUNTUPSTAIRS; j++) {
      victims[j+VICTIMCOUNTDOWNSTAIRS].update(offsetX, offsetY);
    }

    stairs();

    player.update(offsetX, offsetY);

  } else {

    rainRun();

    lightningGenerator();

    floorplan.update(offsetX, offsetY);

    for (let i = 0; i < VICTIMCOUNTDOWNSTAIRS; i++) {
      victims[i].update(offsetX, offsetY);
    }

    stairs();

    player.update(offsetX, offsetY);
  }

}

function setup() {

  createCanvas(900, 500);

  //CREATION OF NEW FROM CLASS//
  player = new Player();
  floorplan = new Floorplan();

  noCursor();

  victimSpawn();

  rainSetup();

  audioQ();

}

function draw() {

  background(0);

  menuNav();
}
