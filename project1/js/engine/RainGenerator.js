class RainGenerator {

  constructor() {

    //CREATES RAIN AT RANDOM LOCATIONS AND FACTORS SPEED//
    this.x = random(0,width);
    this.y = random(0.-height);
    this.speed = random (5,10);
    this.gravity = 1.5;
  }

  update() {
    this.run();
    this.draw();
  }

  //GENERATES THE RAIN ALONG THE TOP OF THE SCREEN RANDOMLY//
  run() {
    this.y = this.y + this.speed * this.gravity;

    if (this.y > height) {
      this.y = random(0, -height);
    }

  }

  //DRAWS RAINDROPS AT PULSING DIMENSIONS//
  draw() {
    push();
    noStroke();
    fill(100);
    ellipse(this.x, this.y, random(1, 3), random(1, 10));
    pop();
  }

}
