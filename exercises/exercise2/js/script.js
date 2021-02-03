"use strict";

/*****************

EXERCISE 2: SLAMINA
MADELINE ZAYTSOFF

ADDITIONS ADDED TO ORIGINAL ACTIVITY:

1. SCORE STREAK SYSTEM WITH RESET BACK TO 0 UPON FAILURE
2. ADDED SOUND AND SPEECH EFFECTS WHEN GETTING RIGHT OR WRONG ANSWER
3. UPON WINNING CONDITION, SITE WILL REDIRECT TO EXTERNAL SITE

******************/

//LIST OF ANIMAL NAMES//
const animals = [
  "aardvark",
  "alligator",
  "alpaca",
  "antelope",
  "ape",
  "armadillo",
  "baboon",
  "badger",
  "bat",
  "bear",
  "beaver",
  "bison",
  "boar",
  "buffalo",
  "bull",
  "camel",
  "canary",
  "capybara",
  "cat",
  "chameleon",
  "cheetah",
  "chimpanzee",
  "chinchilla",
  "chipmunk",
  "cougar",
  "cow",
  "coyote",
  "crocodile",
  "crow",
  "deer",
  "dingo",
  "dog",
  "donkey",
  "dromedary",
  "elephant",
  "elk",
  "ewe",
  "ferret",
  "finch",
  "fish",
  "fox",
  "frog",
  "gazelle",
  "gila monster",
  "giraffe",
  "gnu",
  "goat",
  "gopher",
  "gorilla",
  "grizzly bear",
  "ground hog",
  "guinea pig",
  "hamster",
  "hedgehog",
  "hippopotamus",
  "hog",
  "horse",
  "hyena",
  "ibex",
  "iguana",
  "impala",
  "jackal",
  "jaguar",
  "kangaroo",
  "koala",
  "lamb",
  "lemur",
  "leopard",
  "lion",
  "lizard",
  "llama",
  "lynx",
  "mandrill",
  "marmoset",
  "mink",
  "mole",
  "mongoose",
  "monkey",
  "moose",
  "mountain goat",
  "mouse",
  "mule",
  "muskrat",
  "mustang",
  "mynah bird",
  "newt",
  "ocelot",
  "opossum",
  "orangutan",
  "oryx",
  "otter",
  "ox",
  "panda",
  "panther",
  "parakeet",
  "parrot",
  "pig",
  "platypus",
  "polar bear",
  "porcupine",
  "porpoise",
  "prairie dog",
  "puma",
  "rabbit",
  "raccoon",
  "ram",
  "rat",
  "reindeer",
  "reptile",
  "rhinoceros",
  "salamander",
  "seal",
  "sheep",
  "shrew",
  "silver fox",
  "skunk",
  "sloth",
  "snake",
  "squirrel",
  "tapir",
  "tiger",
  "toad",
  "turtle",
  "walrus",
  "warthog",
  "weasel",
  "whale",
  "wildcat",
  "wolf",
  "wolverine",
  "wombat",
  "woodchuck",
  "yak",
  "zebra"
];

//GLOBAL VARIABLES FOR STORAGE OF SELECTED ANIMAL AND GIVEN GUESS//
let currentAnimal = '';
let currentAnswer = 'CLICK TO START';

//VARIABLE FOR SCORE KEEPING//
var score = 0;

//AUDIO ASSET VARIABLE NAMES//
let rightSound;
let wrongSound;

//IMAGE ASSET VARIABLE NAMES//
let bkg;

//FONT ASSET VARIABLE NAME//
let impactLabelFont;

//VARIABLE TEXT ATTRIBUTES//
let colorChangeSpes = {
  rGood: 111,
  gGood: 196,
  bGood: 82,
  rBad: 230,
  gBad: 69,
  bBad: 69
};
let ayOutPutSpecs = {
  size: 32
};
let scoreKeepSpecs = {
  r: 0,
  g: 0,
  b: 0,
  size:72
};

let displayScore = false;

//PRELOAD EXTERNAL CONTENT//
function preload() {
  rightSound = loadSound('assets/sounds/right.mp3');
  wrongSound = loadSound('assets/sounds/wrong.mp3');

  bkg = loadImage('assets/images/background.png');

  impactLabelFont = loadFont('assets/font/ImpactLabel.ttf');
}

//COLLECTS ANIMAL FROM LIST AND REVERSES//
function reverseString(string) {

  let characters = string.split('');

  let reverseCharacters = characters.reverse();

  let result = reverseCharacters.join('');

  return result;
}

function mousePressed() {

  //RESETS TEXT UPON GENERATING NEW GUESS//
  currentAnswer = '';

  //CALLS ANNYANG TO SPEAK OUT WHEN MOUSE CLICKED//
  currentAnimal = random(animals);
  let reverseAnimal = reverseString(currentAnimal);
  responsiveVoice.speak(reverseAnimal);
}

//REDIRECTS PAGE TO EXTERNAL SOURCE UPON GUESSING 10 CORRECT ANSWERS//
function prize() {
  if (score == 1){
    window.location.assign('https://www.youtube.com/watch?v=ExukCRD7gN0')
  }
}

//CHECKS TO SEE IF ANSWER IS CORRECT OR FALSE//
function guessAnimal(animal) {
  currentAnswer = animal.toLowerCase();
  console.log(currentAnswer);

  //IN EACH STATE, AN EXTERNAL SOUND IS PLAYED, ANNYANG SPEAKS, AND SCORE IS INCREASED OR RESET//
  if (currentAnswer === currentAnimal) {
    displayScore = true;
    rightSound.play();
    score++;
    responsiveVoice.speak('Oh, look who the smarty pants is.')
  } else {
    displayScore = true;
    wrongSound.play();
    score = 0;
    responsiveVoice.speak('Ha! I knew I was smarter than you.')
  }

  prize(); 
}

//ANNYANG COMMANDS AND TEXT OUTPUT//
function annyangInputOutput() {
  if (annyang) {
    let commands = {
      'I think it is *animal': guessAnimal
    };
    annyang.addCommands(commands);
    annyang.start();

    textSize(ayOutPutSpecs.size);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);

  }
}

//CHANGES COLOR OF TEXT DEPENDING ON GOOD OR BAD ANSWER//
function colorChangeOnGuess() {
  if (currentAnswer === currentAnimal) {
    fill(colorChangeSpes.rGood, colorChangeSpes.gGood, colorChangeSpes.bGood);
  } else {
    fill(colorChangeSpes.rBad, colorChangeSpes.gBad, colorChangeSpes.bBad);
  }
  text(currentAnswer, width / 2, height / 2);
}

//SCORE KEEPING TEXT//
function scoreKeeping () {

  if (displayScore){
    push();
    fill(scoreKeepSpecs.r,scoreKeepSpecs.g,scoreKeepSpecs.b);
    textSize(scoreKeepSpecs.size);
    textFont(impactLabelFont);
    text(score, width / 8, height / 1.1);
    pop();
  } else {

  }

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  annyangInputOutput();

}

function draw() {

  background(0);

  image(bkg,0,0,width,height);

  colorChangeOnGuess();

  scoreKeeping ();
}
