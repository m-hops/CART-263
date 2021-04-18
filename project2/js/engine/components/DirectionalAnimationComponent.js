class DirectionalAnimationComponenet extends RenderComponent {

  constructor(leftWalk, rightWalk, leftStationary, rightStationary) {

    super();

    this.leftWalk = leftWalk;
    this.rightWalk = rightWalk;
    this.leftStationary = leftStationary;
    this.rightStationary = rightStationary;
  }

  render(renderer) {

    let physic = this.gameObject.components.getFirstElementOfType(Physics2D);

    if (physic != null) {

      if (physic.speed < 0.0001) {
        if (physic.direction.x > 0.2) {
          push();
          imageMode(CENTER);
          image(this.rightStationary,0,0);
          pop();
        } else {
          push();
          imageMode(CENTER);
          image(this.leftStationary,0,0);
          pop();
        }
      }else if (physic.direction.x > 0.2) {
        this.rightWalk.frameDelay = 10;
        animation(this.rightWalk,0,0);
      } else {
        this.leftWalk.frameDelay = 10;
        animation(this.leftWalk,0,0);
      }

    }

  }

}
