class Player {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.radius = 50;
    this.speed = 5;
  }

  update() {
    this.run();
    this.draw();
  }

  run() {

    //CANVAS BORDER CONSTRAINTS//
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);

    //STANDARD WASD MOVEMENT CONTROLS//
    if (keyIsDown(65)){
      this.x = this.x - this.speed;
    } else if (keyIsDown(68)){
      this.x = this.x + this.speed;
    } else if (keyIsDown(83)){
      this.y = this.y + this.speed;
    } else if (keyIsDown(87)){
      this.y = this.y - this.speed;
    }

  }

  draw() {
    push();
    circle(this.x, this.y, this.radius);
    pop();
  }

}
