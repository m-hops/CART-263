"use strict";

/*****************

CHAPTER 3
MADELINE ZAYTSOFF

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

let rootStateMachine;

let textBoxBKG;

let chloePortraitEmbarassed;

let virgilPortraitNormal;

let testLevelSizing;
let testAnimation;
let testCharacterSprite;

let ramenBKG;
let ramenBKGSpecs = {
  x: -1300,
  y: -40,
  w: 2304,
  h: 648
}

let globalRenderer = new Renderer();

// 1 2 1 2, THIS IS JUST A TEST //
let time = 0;
function Testing(){
  time += deltaTime *0.001;
  let carGO = new GameObject();
  let carGOTransform = new Transform();
  carGO.addComponent(carGOTransform);
  carGOTransform.local.setPosition(100,100);
  carGOTransform.local.setScale(0.1,0.1);
  carGOTransform.local.setRotation(time);
  carGO.addComponent(new ImageComponent(virgilPortraitNormal));

  let wheelGO = new GameObject();
  let wheelGOTransform = new Transform();
  wheelGO.addComponent(wheelGOTransform);
  wheelGOTransform.local.setPosition(1000,0);
  wheelGO.addComponent(new ImageComponent(chloePortraitEmbarassed));

  carGO.addChild(wheelGO);


  let myScene = new Scene();
  myScene.addGameObject(carGO);
  myScene.update();
  let renderer = new Renderer();
  renderer.render(myScene);

  console.log(`transform update ` + wheelGO.components.getFirstElementOfType(Transform).world.position);
}

function preload() {

  ramenBKG = loadImage(`assets/images/backgrounds/ramenBKG.png`);
  textBoxBKG = loadImage(`assets/images/textBox.png`);

  chloePortraitEmbarassed = loadImage(`assets/images/sprites/player/portrait/chloeEmbarassed.png`);

  virgilPortraitNormal = loadImage(`assets/images/sprites/virgil/virgilNormal.png`);

  testLevelSizing = loadImage(`assets/images/landscapeTesting.png`);
  testAnimation = loadAnimation(`assets/images/sprites/player/leftWalkCycle/walkCycleLeft0.png`, `assets/images/sprites/player/leftWalkCycle/walkCycleLeft3.png`);

}

function setup() {

  createCanvas(1000,700);

  noStroke();

  rootStateMachine = new StateMachine();

  rootStateMachine.transit(new Dialog(globalRenderer));

  imageTestingSetup();

}

//DELETE THESE TWO BEFORE COMPLETION//
function imageTesting() {

  push();
  image(testLevelSizing,-410,-110,1440,810);
  // filter(THRESHOLD);
  // filter(BLUR, 3);
  pop();

  // push();
  // fill(0,225);
  // rect(0,0,width,height)
  // pop();

  // image(chloePortraitEmbarassed, 0, 20, 401, 623);
  //
  // image(virgilPortraitNormal, 600, 50, 354, 484);
  //
  // image(textBoxBKG, 0, 475);

  drawSprites();

}
function imageTestingSetup() {

  testCharacterSprite = createSprite(550,425,150,250);

  testCharacterSprite.scale = 0.7;
  testAnimation.frameDelay = 8;
  testCharacterSprite.addAnimation('left', testAnimation);

  testCharacterSprite.changeAnimation('left');


}

function draw() {
  rootStateMachine.update();

  background(0);

  imageTesting();

  rootStateMachine.draw();


    // //TEST LINE; DELETE AFTER USE//
    // Testing();

}
