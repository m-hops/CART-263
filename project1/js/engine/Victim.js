class Victim extends Player{

  constructor() {
    super();

    this.x = width / 2;
    this.y = height / 2;
    this.radius = 25;
    this.attackZone = 150;

    this.speed = 1;

    this.dead = false;
    this.detect = false;

    this.triangleXOffset = 250;
    this.triangleYOffset = 100;

    this.triangleX = this.x + this.triangleXOffset;
    this.triangleY1 = this.y + this.triangleYOffset;
    this.triangleY2 = this.y - this.triangleYOffset
  }

  update(offsetX, offsetY) {
    super.update();
    this.run();
    this.draw(offsetX, offsetY);
  }

  movement() {

  }

  run() {

    this.movement();

    //JUNK CODE: DELETE BEFORE FINAL PROJECT SUBMISSION//
    // if (isPointInTriangle(player.x, player.y, this.x,this.y,this.triangleX, this.triangleY1, this.triangleX, this.triangleY2)) {
    //   this.detect = true;
    //   console.log('Hit');
    // }
  }

  draw(offsetX, offsetY) {

    if (this.dead != true) {

      push();
      circle(this.x + offsetX, this.y + offsetY, this.radius * 2);
      pop();

      if (meleeRange(this.x,this.y,this.attackZone)) {
        this.dead = true;
      }

    } else {

    }
  }

}
