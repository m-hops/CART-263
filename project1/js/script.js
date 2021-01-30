"use strict";

/*****************

PROJECT 1 - THE STRANGERS: AFTERPARTY

KILL THEM ALL, AND DON'T GET CAUGHT

******************/

let player;

let victim;

function preload() {

}

function meleeRange(x, y, r) {
  if (player.x >= x - r/2 &&
      player.x <= x + r/2 &&
      player.y >= y - r/2 &&
      player.y <= y + r/2 &&
      keyIsDown(69)) {
        return true;
      }
}

function getOrientationToEdge(playerX1, playerY1, triangleX1, triangleY1, triangleX2, triangleY2) {
  let aX0 = (playerX1 - triangleX1);
  let aY0 = (playerY1 - triangleY1);

  let aX1 = (triangleX2 - triangleX1);
  let aY1 = (triangleY2 - triangleY1)

  let cProdX = - aY0;
  let cProdY = aX0;

  let dProd = (cProdX * aX1) + (cProdY * aY1);

  return dProd;
}

function isPointInTriangle(pX, pY, t0x, t0y, t1x, t1y, t2x, t2y) {

  let point0 = getOrientationToEdge(pX, pY, t0x, t0y, t1x, t1y);
  let point1 = getOrientationToEdge(pX, pY, t1x, t1y, t2x, t2y);
  let point2 = getOrientationToEdge(pX, pY, t2x, t2y, t0x, t0y);

  if (point0 >= 0 && point1 >= 0 && point2 >= 0) {
    return true;
  } else if (point0 <= 0 && point1 <= 0 && point2 <= 0) {
    return true;
  } else {
    return false;
  }

}


function setup() {

  createCanvas(1000,500);

  player = new Player();

  victim = new Victim();

}


function draw() {

  background(0);

  victim.update();

  player.update();

}
