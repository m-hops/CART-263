class AttachToComponent extends Component {

  constructor(targetGameOBJ, attachPositionX, attachPositionY, attachPositionZ, offset, min, max) {
    super();

    this.attachPositionX = attachPositionX;
    this.attachPositionY = attachPositionY;
    this.attachPositionZ = attachPositionZ;
    this.targetGameOBJ = targetGameOBJ;
    this.offset = offset;
    this.min = min;
    this.max = max;
  }

  update() {

    let targetTransform = this.targetGameOBJ.getTransform();
    let myTransform = this.gameObject.getTransform();

    if (this.attachPositionX) {
      myTransform.local.position.x = constrain(targetTransform.local.position.x + this.offset.x, this.min.x, this.max.x);

    }

    if (this.attachPositionY) {
      myTransform.local.position.y = constrain(targetTransform.local.position.y + this.offset.y, this.min.y, this.max.y);
    }

    if (this.attachPositionZ) {
      myTransform.local.position.z = constrain(targetTransform.local.position.z + this.offset.z, this.min.z, this.max.z);
    }
  }
}
