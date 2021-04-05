class Transform extends Component{

  constructor() {

    super();

    this.local = new AffineTransform();
    this.world = null;
  }

  update() {
    if (this.gameObject != null && this.gameObject.parent != null) {
      let parentTransform = this.gameObject.parent.components.getFirstElementOfType(Transform);
      if (parentTransform != null) {
        this.world = this.local.transformed(parentTransform.world);
      }
    } else {
      this.world = this.local.copy();
    }
    //CALLED EVERY FRAME WHEN OWNER GAME OBJECT IS UPDATED//
  }
}
