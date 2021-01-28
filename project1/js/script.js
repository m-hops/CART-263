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
        return true
      }
}


function setup() {

  createCanvas(1000,500);

  player = new Player();

  victim = new Victim();

}


function draw() {

  background(0);

  player.run();

  player.draw();

  victim.draw();

  victim.run();

}
