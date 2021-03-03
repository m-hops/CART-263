class Player {
  constructor() {
    this.x = 100;
    this.y = 2000;
    this.radius = 50 / 2;
    this.speed = 4;
    this.inside = false;

    //USED FOR E KEY INSTRUCTION//
    this.overheadInstructionOffestX = 50;
    this.overheadInstructionOffestY = 100;
    this.currentAnimationIndex = 0;
  }

  update(offsetX, offsetY) {
    this.run();
    this.draw(offsetX, offsetY);
  }

  run() {

    let newPositionX = this.x;
    let newPositionY = this.y;

    this.currentAnimationIndex = 0;

    //STANDARD WASD MOVEMENT CONTROLS//
    if (keyIsDown(65)) {
      newPositionX = this.x - this.speed;
      this.currentAnimationIndex = 3;
    }

    if (keyIsDown(68)) {
      newPositionX = this.x + this.speed;
      this.currentAnimationIndex = 1;
    }

    if (keyIsDown(83)) {
      newPositionY = this.y + this.speed;
      this.currentAnimationIndex = 2;
    }

    if (keyIsDown(87)) {
      newPositionY = this.y - this.speed;
      this.currentAnimationIndex = 4;
    }

    //ADDITIONAL PARAMETERS ADDED TO MOVEMENT CONTROLS TO PREVENT PLAYER FROM STICKING TO WALLS IF 2 DIRECTION KEYS ARE HELD//
    let collision = false;
    let curWalls = floorplan.getCurrentWalls();

    for (let i = 0; i < curWalls.length; i++) {
      let d = distanceFromWallToPoint(curWalls[i], newPositionX, newPositionY);
      if (d <= this.radius) {
        collision = true;
        break;
      }
    }

    if (collision) {

      collision = false;

      for (let i = 0; i < curWalls.length; i++) {
        let d = distanceFromWallToPoint(curWalls[i], this.x, newPositionY);
        if (d <= this.radius) {
          collision = true;
          break;
        }
      }

      if (!collision) {
        newPositionX = this.x;
      }

    }

    if (collision) {

      collision = false;

      for (let i = 0; i < curWalls.length; i++) {
        let d = distanceFromWallToPoint(curWalls[i], newPositionX, this.y);
        if (d <= this.radius) {
          collision = true;
          break;
        }
      }

      if (!collision) {
        newPositionY = this.y;
      }

    }

    if (!collision) {
      this.x = newPositionX;
      this.y = newPositionY;
    }

    //CANVAS BORDER CONSTRAINTS//
    this.x = constrain(this.x, 0, worldLimit.w);
    this.y = constrain(this.y, 0, worldLimit.h);
  }

  draw(offsetX, offsetY) {

    //ENSURES CORRECT SPRITE WALK CYCLES USAGE BASED ON DIRECTION//
    if (this.currentAnimationIndex == 0) {
      animation(playerSpriteRest, this.x + offsetX, this.y + offsetY);
    } else if (this.currentAnimationIndex == 1) {
      animation(playerSpriteRight,this.x + offsetX, this.y + offsetY);
    } else if (this.currentAnimationIndex == 2) {
      animation(playerSpriteDown,this.x + offsetX, this.y + offsetY);
    } else if (this.currentAnimationIndex == 3) {
      animation(playerSpriteLeft,this.x + offsetX, this.y + offsetY);
    } else if (this.currentAnimationIndex == 4) {
      animation(playerSpriteUp,this.x + offsetX, this.y + offsetY);
    }

    push();
    noStroke();
    noFill();
    circle(this.x + offsetX, this.y + offsetY, this.radius * 2);
    pop();

    if (!floorplan.outside){

      if (lightingInside.alpha <= 50){
        image(blackOutOverlay, this.x + offsetX - 960, this.y + offsetY - 540);
      } else {
        push();
        fill(255, lightingInside.alpha);
        rect(0,0,width,height);
        pop();
      }

    }
  }

}
