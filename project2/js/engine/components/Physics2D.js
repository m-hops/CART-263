class Physics2D extends Component {

  constructor() {
    super();

    this.acceleration = 0;
    this.speed = 0;
    this.direction = new p5.Vector(0,0,0);
  }

  update() {
    this.speed += this.acceleration * deltaTime / 1000;

    if (this.speed < 0) {
      this.speed = 0;
    }

    let velocity = p5.Vector.mult(this.direction, this.speed * deltaTime / 1000);

    let t = this.gameObject.getTransform();

    if (t != null) {
      t.local.moveByVector(velocity);
    } else {
      console.log('Physics2D requires transform component to work');
    }
  }

}
