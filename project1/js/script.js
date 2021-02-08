"use strict";

/*****************

PROJECT 1 - THE STRANGERS: AFTERPARTY

KILL THEM ALL, AND DON'T GET CAUGHT

******************/

let player;

//ARRAY INFO FOR VICTIMS//
let victims = [];
let VICTIMCOUNT = 5;

//CLASS VARIABLES//
let floorplan;

//RAIN EFFECT VARIABLES//
let rainGenerator;
let drop = [];
let rainAmount = 150;

//LIGHTNING GENERATOR VARIABLES//
let lightning = {
  alpha: 235,
  speed: 1
};

//IMAGE VARIABLES//
let floorplan1BKG;
let floorplan1Blackout;
let killIndicatorOverlay;
let grassOverlay;

//IMAGE SIZE BEYOND CANVAS AND OFFSET VARIABLES//
let worldLimit = {
  h: 2200,
  w: 3500
}
let offsetX;
let offsetY;



//EXTERNAL ASSET PRELOADS//
function preload() {

  //IMAGE PRELOADS//
  floorplan1BKG = loadImage('assets/images/level1.png');
  killIndicatorOverlay = loadImage('assets/images/eOverlay.png');
  grassOverlay = loadImage('assets/images/grass.png');
  floorplan1Blackout = loadImage('assets/images/level1Blackout.png');

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

//RANDOM VICTIM SPAWNER//
function victimSpawn() {
  for (let i = 0; i < VICTIMCOUNT; i++) {
    victims[i] = new Victim();
    victims[i].x = random(0, worldLimit.w);
    victims[i].y = random(0, worldLimit.h);
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
  movementControlAndLock();

  image(grassOverlay, offsetX, offsetY);

  //MAIN PURPOSE OF THIS IS TO CONTROL SHADOW OVERLAY OVER HOUSE//
  if (floorplan.outside) {

    floorplan.update(offsetX, offsetY);

    for (let i = 0; i < VICTIMCOUNT; i++) {
      victims[i].update(offsetX, offsetY);
    }

    player.update(offsetX, offsetY);

    image(floorplan1Blackout, floorplan.x + offsetX, floorplan.y + offsetY, floorplan.w, floorplan.h);

    rainRun();
  } else {

    rainRun();

    floorplan.update(offsetX, offsetY);

    for (let i = 0; i < VICTIMCOUNT; i++) {
      victims[i].update(offsetX, offsetY);
    }

    player.update(offsetX, offsetY);
  }

}

function setup() {

  createCanvas(900, 500);

  //CREATION OF NEW FROM CLASS//
  player = new Player();
  floorplan = new Floorplan();

  victimSpawn();

  rainSetup();

}

function draw() {

  background(0);

  gameStart();

}

//JUNK CODE: DELETE BEFORE PROJECT SUBMISSION//
// function getOrientationToEdge(playerX1, playerY1, triangleX1, triangleY1, triangleX2, triangleY2) {
//   let aX0 = (playerX1 - triangleX1);
//   let aY0 = (playerY1 - triangleY1);
//
//   let aX1 = (triangleX2 - triangleX1);
//   let aY1 = (triangleY2 - triangleY1)
//
//   let cProdX = -aY0;
//   let cProdY = aX0;
//
//   let dProd = (cProdX * aX1) + (cProdY * aY1);
//
//   return dProd;
// }
//
// function isPointInTriangle(pX, pY, t0x, t0y, t1x, t1y, t2x, t2y) {
//
//   let point0 = getOrientationToEdge(pX, pY, t0x, t0y, t1x, t1y);
//   let point1 = getOrientationToEdge(pX, pY, t1x, t1y, t2x, t2y);
//   let point2 = getOrientationToEdge(pX, pY, t2x, t2y, t0x, t0y);
//
//   if (point0 >= 0 && point1 >= 0 && point2 >= 0) {
//     return true;
//   } else if (point0 <= 0 && point1 <= 0 && point2 <= 0) {
//     return true;
//   } else {
//     return false;
//   }
//
// }
