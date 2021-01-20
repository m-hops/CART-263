"use strict";

/*****************

EXERCISE 1: WHERES THE SAUSAGEDOG NEW GAME PLUS
MADELINE ZAYTSOFF

******************/

const NUM_FAKESPIDER_IMAGES = 9;
const NUM_FAKESPIDER = 100;

let spiderImages = [];
let spiders = [];

let fakeSpiderImage;
let realSpider;

function preload() {
  for (let i = 0; i< NUM_FAKESPIDER_IMAGES; i++){
    let spiderImage = loadImage(`assets/images/spider${i}.png`);
    spiderImages.push(spiderImage);
  }

  fakeSpiderImage = loadImage('assets/images/badSpider.png');
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  for (let i = 0; i < NUM_FAKESPIDER; i++) {
    let x = random(0,width);
    let y = random(0,height);
    let spiderImage = random(spiderImages);
    let animal = new FakeSpider(x, y, spiderImage);
    spiders.push(animal);
  }

  let x = random(0,width);
  let y = random(0,height);
  realSpider = new RealSpider(x, y, fakeSpiderImage);
}

function draw() {
  background(255,255,0);

  for (let i = 0; i < spiders.length; i++) {
    spiders[i].update();
  }

  realSpider.update();

}

function mousePressed() {
  realSpider.mousePressed();
}
