class Victim extends Player {

  constructor() {
    super();

    this.x = width / 2;
    this.y = height / 2;
    this.radius = 25;
    this.attackZone = 150;
    this.visionRange = 300;
    this.speed = 1;
    this.angle = 0;
    this.fov = Math.PI / 4;

    this.dead = false;
    this.detection = false;
  }

  update(offsetX, offsetY) {
    super.update();
    this.run();
    this.draw(offsetX, offsetY);
  }

  run() {

    //ANGLE WIDTH FOR FOV//
    this.angle += Math.PI / 60 / 8;

    let linePoint0X = this.x;
    let linePoint0Y = this.y;
    let linePoint1X = player.x;
    let linePoint1Y = player.y;
    let closestWallIndex = -1;
    let closestWallDistance = 99999999999999;

    let curWalls = floorplan.getCurrentWalls();

    //ALLOWS FOR WALLS TO BLOCK ENEMY DETECTION AREA//
    for (let i = 0; i < curWalls.length; i++) {
      let hitInfo = lineRectRaycast(linePoint0X, linePoint0Y, linePoint1X, linePoint1Y, curWalls[i]);
      if (hitInfo.hit) {
        if (hitInfo.t < closestWallDistance) {
          closestWallDistance = hitInfo.t;
          closestWallIndex = i;
        }
      }
    }

    //DETERMINES IF PLAYER HAS BEEN DETECTED//
    if (closestWallIndex >= 0) {
      this.detection = false;
    } else {
      let distanceToPlayer = dist(this.x, this.y, player.x, player.y);

      if (distanceToPlayer <= this.visionRange) {
        this.detection = true;

        let vLookAt = p5.Vector.fromAngle(this.angle, 1);
        let vToPlayer = createVector(player.x - this.x, player.y - this.y);
        let angleBetween = Math.abs(vToPlayer.angleBetween(vLookAt));

        this.detection = angleBetween <= this.fov;

      } else {
        this.detection = false;
      }
    }

  }

  draw(offsetX, offsetY) {

    //DEATH STATE FOR ENEMIES//
    if (this.dead != true) {

      push();

      //CHANGES COLOR IF PLAYER HAS BEEN DETECTED; ONLY FOR TESTING PURPOSES//
      if (this.detection) {
        fill(255, 0, 0);
      } else {
        fill(255);
      }
      circle(this.x + offsetX, this.y + offsetY, this.radius * 2);
      if (this.detection) {
        stroke(255, 0, 0);
      } else {
        stroke(255);
      }

      //LINE OF SIGHT FROM ENEMY TO PLAYERS; ONLY FOR TESTING PURPOSES//
      line(this.x + offsetX, this.y + offsetY, player.x + offsetX, player.y + offsetY);
      noFill();
      circle(this.x + offsetX, this.y + offsetY, this.visionRange * 2);
      pop();

      let x = this.x + offsetX;
      let y = this.y + offsetY;

      if (x >= 0 && y >= 0 && x < width && y < height) {

        //FIELD OF VIEW FROM ENEMY; ONLY FOR TESTING PURPOSES//
        push();
        translate(this.x + offsetX, this.y + offsetY);
        angleMode(RADIANS);
        stroke(0, 0, 255);
        push();
        rotate(this.angle);
        line(0, 0, 30, 0);
        pop();
        push();
        rotate(this.angle + this.fov);
        line(0, 0, this.visionRange, 0);
        pop();
        push();
        rotate(this.angle - this.fov);
        line(0, 0, this.visionRange, 0);
        pop();
        pop();
      }

      //CHECKS IF PLAYER IS IN MELEE RANGE AND ALLOWS FOR KILL//
      if (meleeRange(this.x, this.y, this.attackZone)) {
        this.dead = true;
      }

    } else {
      return;
    }
  }
}
