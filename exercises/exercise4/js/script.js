"use strict";

/*****************

EXERCISE 4: BUBBLE POPPER PLUS

ELEMENTS ADDED TO ORIGINAL EXERCISE:

1. UPON POPPING BUBBLE, PRIZE WILL FALL OUT
2. POPPED SOUND MADE UPON TOUCHING BUBBLES
3. ARRAY CREATED TO RANDOMIZE BUBBLE SIZE

******************/

//GLOBAL VARIABLE FOR WEBCAM//
let video = undefined;

//GLOBAL BUBBLE VARIABLE//
let bubble = undefined;
let bubblePop = undefined;
let bubbleArray = [];
let HOWMANYBUBBLE = 3;

//GLOBAL VAIRABLE FOR HANDPOSE//
let handpose = undefined;
let predictions = [];

//GLOBAL POGGERS VARIABLE//
let poggersImg = undefined;
let poggersArray = [];

function preload() {

  //IMAGE PRELOAD//
  poggersImg = loadImage('assets/images/poggers.png');

  //SOUND PRELOAD//
  bubblePop = loadSound('assets/sounds/pop.mp3');
}

function poggersSpin() {

  //GENERATES POGGER FACE WHEN NEEDED//
  for (let i = 0; i < poggersArray.length;){

  //MOVEMENT CONTROLS ONCE ACTIVATED//
  poggersArray[i].rotation += poggersArray[i].speed;
  poggersArray[i].y += poggersArray[i].vy;

  //IMAGE DETAILS FOR POGGERS//
  push();
  angleMode(DEGREES);
  imageMode(CENTER);
  translate(poggersArray[i].x, poggersArray[i].y)
  rotate(poggersArray[i].rotation);
  image(poggersImg, 0, 0, poggersArray[i].size, poggersArray[i].size);
  pop();

  //REMOVES POGGER ONCE IT HIT'S THE BOTTOM OF THE SCREEN//
  if (poggersArray[i].y >= height + 200) {
    poggersArray.splice(i, 1);
  } else {
    i++;
  }
}

}

function pinDraw() {

  //LOAD IN ML5 LIBRARY AND CONNECT IT TO APPROPRIATE HAND POSITIONS//
  if (predictions.length > 0) {
    let hand = predictions[0];
    let index = hand.annotations.indexFinger;
    let tip = index[3];
    let base = index[0];
    let tipX = tip[0];
    let tipY = tip[1];
    let baseX = base[0];
    let baseY = base[1];

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
    fill(255, 0, 0);
    ellipse(baseX, baseY, 20);
    pop();

    for (let i = 0; i < HOWMANYBUBBLE; i++) {

      //CHECK FOR BUBBLE POP//
      let d = dist(tipX, tipY, bubbleArray[i].x, bubbleArray[i].y);

      //RESETS BUBBLE ONCE POPPED, PLAYS SOUND, AND CREATES A NEW POGGERS FACE//
      if (d <= bubbleArray[i].size / 2) {
        bubblePop.play();
        poggersArray.push({
          x: bubbleArray[i].x,
          y: bubbleArray[i].y,
          vx: 0,
          vy: 5,
          rotation: 0,
          speed: 5,
          size: 100});
        bubbleArray[i].x = random(width);
        bubbleArray[i].y = height;
      }
    }
  }
}

function bubbleDraw() {

  for (let i = 0; i < HOWMANYBUBBLE; i++) {

    //MOVES THE BUBBLE//
    bubbleArray[i].x += bubbleArray[i].vx;
    bubbleArray[i].y += bubbleArray[i].vy;

    if (bubbleArray[i].y <= 0) {
      bubbleArray[i].x = random(width);
      bubbleArray[i].y = height;
    }

    push();
    fill(0, 100, 200);
    noStroke();
    ellipse(bubbleArray[i].x, bubbleArray[i].y, bubbleArray[i].size);
    pop();

  }

}

function camSetup() {

  //CAPTURES USERS WEBCAM//
  video = createCapture(VIDEO);
  video.hide();

}

function handposeSetup() {

  //LOAD HANDPOSE MODEL//
  handpose = ml5.handpose(video, {
    flipHorizontal: true
  }, function() {
    console.log('Model Loaded')
  });

  //LISTENS FOR PREDICTIONS//
  handpose.on('predict', function(results) {
    console.log(results);
    predictions = results;
  })
}

function bubbleSetup() {

  for (let i = 0; i < HOWMANYBUBBLE; i++) {
    bubbleArray.push({
      x: random(width),
      y: height,
      size: random(50, 100),
      vx: 0,
      vy: -2
    });
  }

}

function setup() {

  createCanvas(640, 480);

  camSetup();

  handposeSetup();

  bubbleSetup();

}

function draw() {

  background(0);

  pinDraw();

  bubbleDraw();

  poggersSpin();

}
