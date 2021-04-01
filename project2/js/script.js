"use strict";

/*****************

CHAPTER 3
MADELINE ZAYTSOFF

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

let rootStateMachine;

let ramenBKG;
let ramenBKGSpecs = {
  x: -1300,
  y: -40,
  w: 2304,
  h: 648
}

function preload() {

  ramenBKG = loadImage(`assets/images/backgrounds/ramenBKG.png`);

}

function setup() {

  createCanvas(1000,600);

  noStroke();

  rootStateMachine = new StateMachine();

  rootStateMachine.transit(new Menu());

}

function draw() {
  rootStateMachine.update();

  background(0);

  rootStateMachine.draw();



}
