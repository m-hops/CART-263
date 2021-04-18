class PlayerInputComponent extends Component {

  update() {
    let direction = new p5.Vector(0,0,0);

    let moving = false;

    if (keyIsDown(65)) {
      direction.x -= 1;
      moving = true;
    }

    if (keyIsDown(68)) {
      direction.x += 1;
      moving = true;
    }

    if (keyIsDown(87)) {
      direction.y -= 1;
      moving = true;
    }

    if (keyIsDown(83)) {
      direction.y += 1;
      moving = true;
    }

    let physics = this.gameObject.components.getFirstElementOfType(Physics2D);

    physics.speed = 0;
    // physics.acceleration = -0.01;

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
