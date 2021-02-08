class Player {
  constructor() {
    this.x = 100;
    this.y = 2000;
    this.radius = 50 / 2;
    this.speed = 5;

    //USED FOR E KEY INSTRUCTION//
    this.overheadInstructionOffestX = 50;
    this.overheadInstructionOffestY = 100;
  }

  update(offsetX, offsetY) {
    this.run();
    this.draw(offsetX, offsetY);
  }

  run() {

    let newPositionX = this.x;
    let newPositionY = this.y;

    //STANDARD WASD MOVEMENT CONTROLS//
    if (keyIsDown(65)) {
      newPositionX = this.x - this.speed;
      animation(playerSpriteLeft,this.x + offsetX, this.y + offsetY);
    }

    if (keyIsDown(68)) {
      newPositionX = this.x + this.speed;
      animation(playerSpriteRight,this.x + offsetX, this.y + offsetY);
    }

    if (keyIsDown(83)) {
      newPositionY = this.y + this.speed;
      animation(playerSpriteDown,this.x + offsetX, this.y + offsetY);
    }

    if (keyIsDown(87)) {
      newPositionY = this.y - this.speed;
      animation(playerSpriteUp,this.x + offsetX, this.y + offsetY);
    }

    //ADDITIONAL PARAMETERS ADDED TO MOVEMENT CONTROLS TO PREVENT PLAYER FROM STICKING TO WALLS IF 2 DIRECTION KEYS ARE HELD//
    let collision = false;

    for (let i = 0; i < floorplan.walls.length; i++) {
      let d = distanceFromWallToPoint(floorplan.walls[i], newPositionX, newPositionY);
      if (d <= this.radius) {
        collision = true;
        break;
      }
    }

    if (collision) {

      collision = false;

      for (let i = 0; i < floorplan.walls.length; i++) {
        let d = distanceFromWallToPoint(floorplan.walls[i], this.x, newPositionY);
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

      for (let i = 0; i < floorplan.walls.length; i++) {
        let d = distanceFromWallToPoint(floorplan.walls[i], newPositionX, this.y);
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
    push();
    noStroke();
    noFill();
    circle(this.x + offsetX, this.y + offsetY, this.radius * 2);
    pop();
  }

}
