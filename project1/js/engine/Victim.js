class Victim extends Player{

  constructor() {
    super();

    this.x = width / 2;
    this.y = height / 2;
    this.xaz = width / 2;
    this.yaz = height / 2;
    this.radius = 50;
    this.attackZone = 150;
    this.dead = false;
  }

  run() {
    if (meleeRange(this.xaz,this.yaz,this.attackZone)) {
      this.dead = true;
    }
  }

  draw() {

    if (this.dead != true) {

      push();
      fill(255, 126);
      circle(this.xaz, this.yaz, this.attackZone);
      pop();
      push();
      circle(this.x, this.y, this.radius);
      pop();
    } else {

    }
  }

}
