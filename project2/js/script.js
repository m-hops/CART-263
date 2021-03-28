"use strict";

/*****************

CHAPTER 3
MADELINE ZAYTSOFF

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

let myStateMachine;

class State1 extends IState{

    onEnter(sm) {
      console.log(`state1 onEnter`);
    }

    onLeave(sm) {
      console.log(`state1 onLeave`);
    }

    update(sm) {
      console.log(`state1 update`);

      sm.transit(new State2());
    }

    draw(sm) {
      console.log(`state1 draw`);
    }

}

class State2 extends IState{

    onEnter(sm) {
      console.log(`state2 onEnter`);
    }

    onLeave(sm) {
      console.log(`state2 onLeave`);
    }

    update(sm) {
      console.log(`state2 update`);
    }

    draw(sm) {
      console.log(`state2 draw`);
    }

}

function preload() {

}

function setup() {
  myStateMachine = new StateMachine();

  myStateMachine.transit(new State1());
}

function draw() {
  myStateMachine.update();

  myStateMachine.draw();

}
