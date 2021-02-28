"use strict";

/*****************

PROJECT 1 - THE STRANGERS: AFTERPARTY

KILL THEM ALL, AND DON'T GET CAUGHT

******************/

let player;

//ARRAY INFO FOR VICTIMS//
let victims = [];
let VICTIMCOUNTDOWNSTAIRS = 2;
let VICTIMCOUNTUPSTAIRS = 1;

//CLASS VARIABLES//
let floorplan;

//RAIN EFFECT VARIABLES//
let rainGenerator;
let drop = [];
let rainAmount = 150;
let rainSFX;
let isOutside = true;

//LIGHTNING GENERATOR VARIABLES//
let lightning = {
  alpha: 235,
  speed: 1
};

//IMAGE VARIABLES//
let floorplan1BKG;
let floorplan2BKG;
let floorplan1Blackout;
let killIndicatorOverlay;
let grassOverlay;
let blackOutOverlay;

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

let enemySprite0Up;
let enemySprite0Down;
let enemySprite0Left;
let enemySprite0Right;

let enemySprite1Up;
let enemySprite1Down;
let enemySprite1Left;
let enemySprite1Right;

let enemySprite2Up;
let enemySprite2Down;
let enemySprite2Left;
let enemySprite2Right;

let enemySprite3Up;
let enemySprite3Down;
let enemySprite3Left;
let enemySprite3Right;

let enemySprite4Up;
let enemySprite4Down;
let enemySprite4Left;
let enemySprite4Right;

//EXTERNAL ASSET PRELOADS//
function preload() {

  //AUDIO PRELOADS//
  rainSFX = loadSound('assets/sounds/rainSFX.mp3');

  //IMAGE PRELOADS//
  floorplan1BKG = loadImage('assets/images/level1.png');
  floorplan2BKG = loadImage('assets/images/level2.png');
  killIndicatorOverlay = loadImage('assets/images/eOverlay.png');
  grassOverlay = loadImage('assets/images/grass.png');
  floorplan1Blackout = loadImage('assets/images/level1Blackout.png');
  blackOutOverlay = loadImage('assets/images/lightOut.png');

  //ANIMATION PRELOADS//
  playerSpriteRest = loadAnimation('assets/images/player/images/playerRestDown.png');
  playerSpriteUp = loadAnimation('assets/images/player/images/up/playerUp0.png', 'assets/images/player/images/up/playerUp7.png');
  playerSpriteDown = loadAnimation('assets/images/player/images/down/playerDown0.png', 'assets/images/player/images/down/playerDown7.png');
  playerSpriteLeft = loadAnimation('assets/images/player/images/left/playerLeft0.png', 'assets/images/player/images/left/playerLeft7.png');
  playerSpriteRight = loadAnimation('assets/images/player/images/right/playerRight0.png', 'assets/images/player/images/right/playerRight7.png');

  enemySprite0Up = loadAnimation('assets/images/enemyA/walkCycle/images/Up/enemyAUp0.png', 'assets/images/enemyA/walkCycle/images/Up/enemyAUp8.png');
  enemySprite0Down = loadAnimation('assets/images/enemyA/walkCycle/images/Down/enemyADown0.png', 'assets/images/enemyA/walkCycle/images/Down/enemyADown8.png');
  enemySprite0Left = loadAnimation('assets/images/enemyA/walkCycle/images/Left/enemyALeft0.png', 'assets/images/enemyA/walkCycle/images/Left/enemyALeft8.png');
  enemySprite0Right = loadAnimation('assets/images/enemyA/walkCycle/images/Right/enemyARight0.png', 'assets/images/enemyA/walkCycle/images/Right/enemyARight8.png');

  enemySprite1Up = loadAnimation('assets/images/enemyB/walkCycle/images/Up/enemyBUp0.png', 'assets/images/enemyB/walkCycle/images/Up/enemyBUp8.png');
  enemySprite1Down = loadAnimation('assets/images/enemyB/walkCycle/images/Down/enemyBDown0.png', 'assets/images/enemyB/walkCycle/images/Down/enemyBDown8.png');
  enemySprite1Left = loadAnimation('assets/images/enemyB/walkCycle/images/Left/enemyBLeft0.png', 'assets/images/enemyB/walkCycle/images/Left/enemyBLeft8.png');
  enemySprite1Right = loadAnimation('assets/images/enemyB/walkCycle/images/Right/enemyBRight0.png', 'assets/images/enemyB/walkCycle/images/Right/enemyBRight8.png');

  enemySprite2Up = loadAnimation('assets/images/enemyC/walkCycle/images/Up/enemyCUp0.png', 'assets/images/enemyC/walkCycle/images/Up/enemyCUp8.png');
  enemySprite2Down = loadAnimation('assets/images/enemyC/walkCycle/images/Down/enemyCDown0.png', 'assets/images/enemyC/walkCycle/images/Down/enemyCDown8.png');
  enemySprite2Left = loadAnimation('assets/images/enemyC/walkCycle/images/Left/enemyCLeft0.png', 'assets/images/enemyC/walkCycle/images/Left/enemyCLeft8.png');
  enemySprite2Right = loadAnimation('assets/images/enemyC/walkCycle/images/Right/enemyCRight0.png', 'assets/images/enemyC/walkCycle/images/Right/enemyCRight8.png');

  enemySprite3Up = loadAnimation('assets/images/enemyD/walkCycle/images/Up/enemyDUp0.png', 'assets/images/enemyD/walkCycle/images/Up/enemyDUp8.png');
  enemySprite3Down = loadAnimation('assets/images/enemyD/walkCycle/images/Down/enemyDDown0.png', 'assets/images/enemyD/walkCycle/images/Down/enemyDDown8.png');
  enemySprite3Left = loadAnimation('assets/images/enemyD/walkCycle/images/Left/enemyDLeft0.png', 'assets/images/enemyD/walkCycle/images/Left/enemyDLeft8.png');
  enemySprite3Right = loadAnimation('assets/images/enemyD/walkCycle/images/Right/enemyDRight0.png', 'assets/images/enemyD/walkCycle/images/Right/enemyDRight8.png');

  enemySprite4Up = loadAnimation('assets/images/enemyE/walkCycle/images/Up/enemyEUp0.png', 'assets/images/enemyE/walkCycle/images/Up/enemyEUp8.png');
  enemySprite4Down = loadAnimation('assets/images/enemyE/walkCycle/images/Down/enemyEDown0.png', 'assets/images/enemyE/walkCycle/images/Down/enemyEDown8.png');
  enemySprite4Left = loadAnimation('assets/images/enemyE/walkCycle/images/Left/enemyELeft0.png', 'assets/images/enemyE/walkCycle/images/Left/enemyELeft8.png');
  enemySprite4Right = loadAnimation('assets/images/enemyE/walkCycle/images/Right/enemyERight0.png', 'assets/images/enemyE/walkCycle/images/Right/enemyERight8.png');

}

//MENU NAVIGATION//
function goToMenu(menuID) {
  menu = menuID;
  menuOnEnter = true;
}

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

function lightningGenerator() {

  // if (lightning.alpha <= 235) {
  //   lightning.alpha = lightning.alpha + lightning.speed;
  // } else {
  //   lightning.alpha = 100;
  // }

  push();
  fill(0, lightning.alpha);
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
  }

  //RANDOM VICTIM SPAWNER DOWNSTAIRS//
  for (let j = 0; j < VICTIMCOUNTUPSTAIRS; j++) {
    victims[j] = new Victim();
    victims[j].path = floorplan.spawnPointsUpstairs[j].path;
    victims[j].x = random(floorplan.spawnPointsUpstairs[j].x, floorplan.spawnPointsUpstairs[j].x + floorplan.spawnPointsUpstairs[j].w);
    victims[j].y = random(floorplan.spawnPointsUpstairs[j].y, floorplan.spawnPointsUpstairs[j].y + floorplan.spawnPointsUpstairs[j].h);
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

//TURNS ON MOVEMENT LOCK, SPAWNS VICTIMS, ENABLES PLAYER MOVEMENT, DISPLAYS FLOORPLAN WITH NECESSARY COMPONENETS//
function gameStart() {

  audioQStateMachine();

  movementControlAndLock();

  //MAIN PURPOSE OF THIS IS TO CONTROL SHADOW OVERLAY OVER HOUSE//
  if (floorplan.outside) {

    image(grassOverlay, offsetX, offsetY);

    floorplan.update(offsetX, offsetY);

    player.update(offsetX, offsetY);

    image(floorplan1Blackout, floorplan.x + offsetX, floorplan.y + offsetY, floorplan.w, floorplan.h);

    rainRun();

  } else if (floorplan.upstairs) {

    rainRun();

    floorplan.update(offsetX, offsetY);

    for (let j = 0; j < VICTIMCOUNTUPSTAIRS; j++) {
      victims[j].update(offsetX, offsetY);
    }

    stairs();

    player.update(offsetX, offsetY);

  } else {

    rainRun();

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

  gameStart();
}
