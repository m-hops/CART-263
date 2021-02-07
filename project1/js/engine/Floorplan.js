class Floorplan {

  constructor() {
    this.x = 800;
    this.y = 400;
    this.w = 2112;
    this.h = 1188;

    this.speed = 5;
    this.upstairs = false;

    this.grassOffsetX = 850;
    this.grassOffsetY = 500;

    this.walls = [];
    this.setupWall();
  }

  update(offsetX, offsetY) {
    this.draw(offsetX, offsetY);
    this.run();
  }

  run() {

  }

  setupWall() {
    this.walls.push({x:47,y:78,w:400,h:31})

    for (let i = 0; i < this.walls.length; i++) {
      this.walls[i].x += this.x;
      this.walls[i].y += this.y;
    }
  }

  draw(offsetX, offsetY) {
    if (this.upstairs){

    } else {
    image(grassOverlay, offsetX, offsetY);
    image(floorplan1BKG, this.x + offsetX, this.y + offsetY, this.w, this.h);

    for (let i = 0; i < this.walls.length; i++) {
      push();
      fill(255,0,0,125);
      rect(this.walls[i].x + offsetX, this.walls[i].y + offsetY, this.walls[i].w, this.walls[i].h)
      pop();
    }
    }
  }
}
