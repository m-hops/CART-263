"use strict";

/*****************

ACTIVITY 1: WHERES THE SAUSAGEDOG
MADELINE ZAYTSOFF

******************/

const NUM_ANIMAL_IMAGES = 10;
const NUM_ANIMALS = 100;

let animalImages = [];
let animals = [];

let sausageDogImage;
let sausageDog;

function preload() {
  for (let i = 0; i< NUM_ANIMAL_IMAGES; i++){
    let animalImage = loadImage(`assets/images/animal${i}.png`);
    animalImages.push(animalImage);
  }

  sausageDogImage = loadImage('assets/images/sausage-dog.png');
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  //CREATE THE ANIMALS//
  for (let i = 0; i < NUM_ANIMALS; i++) {
    let x = random(0,width);
    let y = random(0,height);
    let animalImage = random(animalImages);
    let animal = new Animal(x, y, animalImage);
    animals.push(animal);
  }

  let x = random(0,width);
  let y = random(0,height);
  sausageDog = new SausageDog(x, y, sausageDogImage);
}

function draw() {
  background(255,255,0);

  for (let i = 0; i < animals.length; i++) {
    animals[i].update();
  }

  sausageDog.update();

}

function mousePressed() {
  sausageDog.mousePressed();
}
