//CONTROL SCHEMATIC FOR PLAYER//

class PlayerInputComponent extends Component {

  update() {
    let direction = new p5.Vector(0,0,0);
    let moving = false;

    //A KEY (LEFT MOVE)//
    if (keyIsDown(65)) {
      direction.x -= 1;
      moving = true;
    }

    //D KEY (RIGHT MOVE)//
    if (keyIsDown(68)) {
      direction.x += 1;
      moving = true;
    }

    //W KEY (UP MOVE)//
    if (keyIsDown(87)) {
      direction.y -= 1;
      moving = true;
    }

    //S KEY (DOWN MOVE)//
    if (keyIsDown(83)) {
      direction.y += 1;
      moving = true;
    }

    //DETERMINES SPEED OF PLAYER MOVEMENT//
    let physics = this.gameObject.components.getFirstElementOfType(Physics2D);

    physics.speed = 0;

    if (physics == null) {
      console.log(`PlayerInputComponent requires Physics2D component to run`);
    } else if (moving) {
      if (direction.magSq() > 0.001) {
        direction.normalize();
        physics.direction = direction;
        physics.speed = 500;

      }
    }

  }

}
