"use strict";

/*****************

EXERCISE 6: HAIKU GENERATOR++
MADELINE ZAYTSOFF

IMPROVEMENTS MADE TO ORIGINAL ACTIVITY:

1. ANIMATED BACKGROUND WITH CSS AND HTML
2. ANIMATED TEXT WITH KEYFRAMES

******************/

let fiveSyllableLines = [
  `drenched in others sweat`,
  `my ears ring with joy`,
  `opening band sucked`,
  `dancing in the pit`,
  `weed smoke fills the air`,
  `all my friends are here`,
  `i kiss the night sky`
];

let sevenSyllableLines = [
  `one of my favourite bands`,
  `we snuck in through the back door`,
  `my lip is busted open`,
  `i used to date the bassist`,
  `here in the shittiest bar`,
  `the smell of cheap beer hits me`
];

let line1 = random(fiveSyllableLines);
let line2 = random(sevenSyllableLines);
let line3 = random(fiveSyllableLines);

let line1P = document.getElementById('line-1');
let line2P = document.getElementById('line-2');
let line3P = document.getElementById('line-3');

line1P.innerText = line1;
line2P.innerText = line2;
line3P.innerText = line3;

line1P.addEventListener(`click`, lineClicked);
line2P.addEventListener(`click`, lineClicked);
line3P.addEventListener(`click`, lineClicked);

function random(array) {
  let index = Math.floor(Math.random() * array.length);
  return array[index];
}

function lineClicked(event) {
  fadeOut(event.target, 1);
}

function setNewLine(element) {
  if (element === line1P || element === line3P) {
    element.innerText = random(fiveSyllableLines);
  } else if (element == line2P) {
    element.innerText = random(sevenSyllableLines);
  }
}

function fadeOut(element, opacity) {
  opacity -= 0.05;
  element.style['opacity'] = opacity;
  if (opacity > 0) {
    requestAnimationFrame(function() {
      fadeOut(element, opacity);
    });
  } else {
    setNewLine(element);
    fadeIn(element, 0);
  }
}

function fadeIn(element, opacity) {
  opacity += 0.05;
  element.style['opacity'] = opacity;

  if (opacity < 1) {
    requestAnimationFrame(function() {
      fadeIn(element, opacity);
    });
  }
}

function printContent(words) {
  let restorePage = document.body.innerHTML;
  let printContent = document.getElementById(words).innerHTML;

  document.body.innerHTML = printContent;
  window.print();
  document.body.innerHTML = restorePage;
}
