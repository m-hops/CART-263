//ALLOWS FOR USE OF AFFINETRANSFORM WITH GAMEOBJECT; SEE AFFINETRANSFORM FOR MORE INFORMATION//

class Transform extends Component{

  constructor(x=0, y=0, z=0) {

    super();

    this.local = new AffineTransform();
    this.world = null;
    this.local.position = createVector(x, y, z);
  }

  //CHECKS EVERY FRAME FOR CURRENT TRANSFORM REQUIREMENTS//
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
