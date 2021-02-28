class Victim extends Player {

  constructor() {
    super();

    this.path = [];

    this.x = width / 2;
    this.y = height / 2;
    this.radius = 25;
    this.attackZone = 150;
    this.visionRange = 100;
    this.speed = 10;
    this.angle = 0;
    this.fov = Math.PI / 4;

    this.dead = false;
    this.detection = false;

    this.currentDirection = 0;

    this.pathingState = 0;
    this.pathingTargetIndex = 0;
    this.pathingSourceIndex = 0;

    //DIRECTION FOR THE PATH; 0 IS FORWARD & 1 IS BACK//
    this.pathingDirection = 0;
  }

  update(offsetX, offsetY) {
    super.update();
    this.pathing();
    this.run();
    this.draw(offsetX, offsetY);
  }

  pathing() {

    if (this.pathingState == 0) {

      //THIS IS FOR TURNING STATE//

      //SELECT THE NEXT TARGETINDEX//
      if (this.pathingDirection == 0){

        this.pathingSourceIndex = this.pathingTargetIndex;

        //SELECT TARGET INDEX FORWARD//
        this.pathingTargetIndex++;

        //IF WE REACH THE END OF THE FORWARD PATH//
        if (this.pathingTargetIndex == this.path.length - 1) {

          this.pathingSourceIndex = this.pathingTargetIndex;

          //CHANGES DIRECTION TO BACKWARD//
          this.pathingDirection = 1;
        }

      } else if (this.pathingDirection == 1) {

        //SELECT TARGET INDEX BACKWARD//
        this.pathingTargetIndex--;

        //IF WE REACH THE END OF THE BACKWARD PATH//
        if (this.pathingTargetIndex == 0){

          //CHANGES DIRECTION TO FORWARD//
          this.pathingDirection = 0;
        }
      }

      //TRANSITION TO MOVE STATE//
      this.pathingState = 1;

      //THIS IS WHERE ANIMATION STATE IS SWITCHED TO THE NEW DIRECTION//

    } else if (this.pathingState == 1){

      //THIS IS FOR MOVING STATE//
      let tX = this.path[this.pathingTargetIndex].x;
      let tY = this.path[this.pathingTargetIndex].y;
      let segmentVector = {
        x:tX - this.x,
        y:tY - this.y
      };

      //WHY MUST MATH EXIST!??!@?!?!//
      let segmentVectorLength = Math.sqrt(segmentVector.x * segmentVector.x + segmentVector.y * segmentVector.y);
      let frameSpeed = this.speed * deltaTime / 1000;

        // console.log('this.pathingTargetIndex: ' + this.pathingTargetIndex + ' segmentVectorLength: ' + segmentVectorLength + ' frameSpeed: ' + frameSpeed);

      if (frameSpeed >= segmentVectorLength) {

        this.x = tX;
        this.y = tY;

        this.pathingState = 0;

      } else {

        segmentVector.x = segmentVector.x / segmentVectorLength * frameSpeed;
        segmentVector.y = segmentVector.y / segmentVectorLength * frameSpeed;

        // console.log('segmentVector.x: ' + segmentVector.x + ' segmentVector.y: ' + segmentVector.y);

        this.x += segmentVector.x;
        this.y += segmentVector.y;

      }


      //THIS IS WHERE ANIMATION STATE IS SWITCHED TO THE NEW DIRECTION//

    }
  }

  run() {

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

      let x = this.x + offsetX;
      let y = this.y + offsetY;

      push();

      if (this.currentDirection == 0) {
        animation(enemySprite0Right, x, y);
      } else if (this.currentDirection == 1) {
        animation(enemySprite0Right, x, y);
      } else if (this.currentDirection == 2) {
        animation(enemySprite0Right, x, y);
      } else if (this.currentDirection == 3) {
        animation(enemySprite0Right, x, y);
      }

      // //CHANGES COLOR IF PLAYER HAS BEEN DETECTED; ONLY FOR TESTING PURPOSES//
      // if (this.detection) {
      //   fill(255, 0, 0);
      // } else {
      //   fill(255);
      // }
      // circle(this.x + offsetX, this.y + offsetY, this.radius * 2);
      // if (this.detection) {
      //   stroke(255, 0, 0);
      // } else {
      //   stroke(255);
      // }

      // //LINE OF SIGHT FROM ENEMY TO PLAYERS; ONLY FOR TESTING PURPOSES//
      // line(this.x + offsetX, this.y + offsetY, player.x + offsetX, player.y + offsetY);
      // noFill();
      // circle(this.x + offsetX, this.y + offsetY, this.visionRange * 2);
      // pop();

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
    }
  }
}
