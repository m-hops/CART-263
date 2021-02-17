"use strict";

/*****************

EXERCISE 4: BUBBLE POPPER PLUS

ELEMENTS ADDED TO ORIGINAL EXERCISE:

1. BUBBLE COUNTER
2. BUBBLE ARRAY
3. BUBBLE POP SOUND

******************/

//GLOBAL VARIABLE FOR WEBCAM//
let video = undefined;

//GLOBAL BUBBLE VARIABLE//
let bubble = undefined;
let BUBBLENUMBER = 5;

//GLOBAL VAIRABLE FOR HANDPOSE//
let handpose = undefined;

//GLOBAL VARIABLE FOR SET OF PREDICTIONS//
let predictions = [];

function pinDraw() {

  if (predictions.length > 0) {
    let hand = predictions[0];
    let index = hand.annotations.indexFinger;
    let tip = index [3];
    let base = index [0];
    let tipX = tip [0];
    let tipY = tip [1];
    let baseX = base[0];
    let baseY = base [1];

    //DISPLAYS PIN BODY//
    push();
    noFill();
    stroke(255, 255, 255);
    strokeWeight(2);
    line(baseX, baseY, tipX, tipY);
    pop();

    //DISPLAYS PIN HEAD//
    push();
    noStroke();
    fill(255,0,0);
    ellipse(baseX, baseY, 20);
    pop();

    //CHECK FOR BUBBLE POP//
    let d = dist(tipX, tipY, bubble.x, bubble.y);

    if (d <= bubble.size / 2) {
      bubble.x = random(width);
      bubble.y = height;
    }

  }
}

function bubbleDraw() {

  //MOVES THE BUBBLE//
  bubble.x += bubble.vx;
  bubble.y += bubble.vy;

  if (bubble.y <= 0) {
    bubble.x = random(width);
    bubble.y = height;
  }

  push();
  fill(0,100,200);
  noStroke();
  ellipse(bubble.x, bubble.y, bubble.size);
  pop();

}

function camSetup() {

  //CAPTURES USERS WEBCAM//
  video = createCapture (VIDEO);
  video.hide();

}

function handposeSetup() {

  //LOAD HANDPOSE MODEL//
  handpose = ml5.handpose(video, { flipHorizontal: true }, function(){ console. log('Model Loaded')});

  //LISTENS FOR PREDICTIONS//
  handpose.on('predict', function(results){
    console.log(results);
    predictions = results;
  })
}

function bubbleSetup() {

  //SPAWNS BUBBLES//
  bubble = {
    x: random(width),
    y: height,
    size: 100,
    vx: 0,
    vy: -2
  }

}

function setup() {

  createCanvas(640,480);

  camSetup();

  handposeSetup();

  bubbleSetup();

}

function draw() {

  background(0);

  pinDraw();

  bubbleDraw();

}
