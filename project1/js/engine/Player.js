class Player {
  constructor() {
    this.x = 100;
    this.y = 400;
    this.radius = 50 / 2;
    this.speed = 5;

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
    }

    if (keyIsDown(68)) {
      newPositionX = this.x + this.speed;
    }

    if (keyIsDown(83)) {
      newPositionY = this.y + this.speed;
    }

    if (keyIsDown(87)) {
      newPositionY = this.y - this.speed;
    }

    let collision = false;

    for (let i = 0; i < floorplan.walls.length; i++){
      let d = distanceFromWallToPoint(floorplan.walls[i],newPositionX,newPositionY);
      if (d <= this.radius) {
        collision = true;
        break;
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
    circle(this.x + offsetX, this.y + offsetY, this.radius * 2);
    pop();
  }

}
