//CONTROL SCHEMATIC FOR PLAYER//

class BoatInputComponent extends Component {
  constructor(focus = "") {
    super();
    this.focus = focus;
    this.angle = 0;
  }
  update() {
    if(this.focus == null || this.getScene().getKeyboardFocus() == this.focus){

      let acceleration = 0;

      //A KEY (LEFT MOVE)//
      if (keyIsDown(65)) {
        this.angle -= 0.025;
      }

      //D KEY (RIGHT MOVE)//
      if (keyIsDown(68)) {
        this.angle += 0.025;
      }

      //W KEY (UP MOVE)//
      if (keyIsDown(87)) {
        acceleration += 700;
      }

      //S KEY (DOWN MOVE)//
      if (keyIsDown(83)) {
        acceleration -= 700;
      }

      //DETERMINES SPEED OF PLAYER MOVEMENT//
      let physics = this.gameObject.components.getFirstElementOfType(Physics2D);


      if (physics == null) {
        console.log(`PlayerInputComponent requires Physics2D component to run`);
      } else {
        let direction = p5.Vector.fromAngle(this.angle);

        direction.normalize();
        physics.direction = direction;
        physics.acceleration = acceleration;

      }
      this.gameObject.getTransform().local.rotation = this.angle;
    }

  }

}
