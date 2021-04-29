//2D MOVEMENT PHYSICS FOR GAMEOBJECT//

class Physics2D extends Component {

  constructor() {
    super();

    this.acceleration = 0;
    this.speed = 0;
    this.direction = new p5.Vector(0,0,0);
    this.velocity  = new p5.Vector(0,0,0);
    this.deltaTime = 0;
    this.nextFrameLocal = null;
    this.dragPercent = 0.95;
  }


  start() {
    this.nextFrameLocal = this.gameObject.getTransform().local;
  }

  //SPEED CHECK EVERY FRAME; TIED TO DELTATIME//
  update() {
    this.deltaTime += deltaTime;
  }

  stepPhysics(){

    this.speed += this.acceleration * this.deltaTime / 1000;
    this.speed *= this.dragPercent;
    if (this.speed < 0) {
      this.speed = -this.speed;
        this.acceleration = -this.acceleration;
      this.velocity.x = -this.velocity.x;
      this.velocity.y = -this.velocity.y;
      this.velocity.z = -this.velocity.z;
    }

    this.velocity = p5.Vector.mult(this.direction, this.speed * this.deltaTime / 1000);
    let t = this.gameObject.getTransform();

    //APPLIES PHYSICS PARAMETERS TO EACH NECESSARY FRAME//
    if (t != null) {
      this.nextFrameLocal = t.local.copy();
      this.nextFrameLocal.moveByVector(this.velocity);
    } else {
      console.log('Physics2D requires transform component to work');
    }

    this.deltaTime = 0;
  }
}
