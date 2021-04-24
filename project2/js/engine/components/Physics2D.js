//2D MOVEMENT PHYSICS FOR GAMEOBJECT//

class Physics2D extends Component {

  constructor() {
    super();

    this.acceleration = 0;
    this.speed = 0;
    this.direction = new p5.Vector(0,0,0);
    this.nextFrameLocal = null;
  }


  start() {
    this.nextFrameLocal = this.gameObject.getTransform().local;
  }

  //SPEED CHECK EVERY FRAME; TIED TO DELTATIME//
  update() {
    this.speed += this.acceleration * deltaTime / 1000;

    if (this.speed < 0) {
      this.speed = 0;
    }

    let velocity = p5.Vector.mult(this.direction, this.speed * deltaTime / 1000);
    let t = this.gameObject.getTransform();

    //APPLIES PHYSICS PARAMETERS TO EACH NECESSARY FRAME//
    if (t != null) {
      this.nextFrameLocal = t.local.copy();
      this.nextFrameLocal.moveByVector(velocity);
    } else {
      console.log('Physics2D requires transform component to work');
    }
  }

}
