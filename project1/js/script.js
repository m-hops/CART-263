"use strict";

/*****************

PROJECT 1 - THE STRANGERS: AFTERPARTY

KILL THEM ALL, AND DON'T GET CAUGHT

******************/

let player;

let victims = [];

let VICTIMCOUNT = 5;

let floorplan;

let floorplan1BKG;
let killIndicatorOverlay;
let grassOverlay;

let worldLimit = {
  h: 2200,
  w: 3500
}

let offsetX;
let offsetY;

function preload() {

  floorplan1BKG = loadImage('assets/images/level1.png');
  killIndicatorOverlay = loadImage('assets/images/eOverlay.png');
  grassOverlay = loadImage('assets/images/grass.png');

}

function meleeRange(x, y, r) {
  if (player.x >= x - r / 2 &&
    player.x <= x + r / 2 &&
    player.y >= y - r / 2 &&
    player.y <= y + r / 2) {
    push();
    image(killIndicatorOverlay, player.x + offsetX - 25, player.y + offsetY - 100, 50, 50);
    pop();
    if (keyIsDown(69)) {
      return true;
    }
  }
  return false
}

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

function victimSpawn() {
  for (let i = 0; i < VICTIMCOUNT; i++){
    victims[i] = new Victim();
    victims[i].x = random(0,worldLimit.w);
    victims[i].y = random(0,worldLimit.h);
  }
}

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

function setup() {

  createCanvas(900, 500);

  player = new Player();

  floorplan = new Floorplan();

  victimSpawn();

}

function draw() {

  background(0);

  movementControlAndLock();

  floorplan.update(offsetX, offsetY);

  for (let i = 0; i < VICTIMCOUNT; i++) {
    victims[i].update(offsetX, offsetY);
  }

  player.update(offsetX, offsetY);

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
