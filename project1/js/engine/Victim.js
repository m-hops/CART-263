class Victim extends Player{

  constructor() {
    super();

    this.x = 0;
    this.y = height / 2;
    this.radius = 50;
    this.attackZone = 150;

    this.speed = 1;

    this.dead = false;
    this.detect = false;
    this.move = true;

    this.triangleXOffset = 250;
    this.triangleYOffset = 100;

    this.triangleX = this.x + this.triangleXOffset;
    this.triangleY1 = this.y + this.triangleYOffset;
    this.triangleY2 = this.y - this.triangleYOffset
  }

  update() {
    super.update();
    this.run();
    this.draw();
  }

  movement() {

    if (this.x <= 0){
      this.move = true;
    } else if (this.x>= width){
      this.move = false;
    }

    if (this.move){
      this.x = this.x + this.speed;
      this.triangleX = this.triangleX + this.speed;
    } else {
      this.x = this.x - this.speed;
      this.triangleX = this.triangleX - this.speed;
    }
  }

  run() {

    this.movement();

    if (meleeRange(this.x,this.y,this.attackZone)) {
      this.dead = true;
    }

    if (isPointInTriangle(player.x, player.y, this.x,this.y,this.triangleX, this.triangleY1, this.triangleX, this.triangleY2)) {
      this.detect = true;
      console.log('Hit');
    }
  }

  draw() {

    if (this.detect != true && this.dead != true) {
      push();
      fill(0,0,255);
      triangle(this.x,this.y,this.triangleX, this.triangleY1, this.triangleX, this.triangleY2);
      pop();

      push();
      fill(255, 126);
      circle(this.x, this.y, this.attackZone);
      pop();

      push();
      circle(this.x, this.y, this.radius);
      pop();

    } else if (this.detect == true && this.dead != true) {
      push();
      fill(255,0,0);
      triangle(this.x,this.y,this.triangleX, this.triangleY1, this.triangleX, this.triangleY2);
      pop();

      push();
      fill(255, 126);
      circle(this.x, this.y, this.attackZone);
      pop();

      push();
      circle(this.x, this.y, this.radius);
      pop();
    } else {

    }
  }

}
