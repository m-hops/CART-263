//ENABLES PARALAX SCOLLING FROM GAMEOBJECT//

class ParalaxComponent extends Component {

  constructor() {

    super();

    this.paralaxCoefficient = 1;
    // this.layerPositions = null;
  }

  update() {
    // if (this.layerPositions == null || this.layerPositions.length != this.gameObject.children.active.length) {
    //
    //     this.layerPositions = [];
    //     for (let i = 0; i < this.gameObject.children.active.length; i++) {
    //
    //       let child = this.gameObject.children.active[i];
    //       let childTransform = child.getTransform();
    //
    //       if (childTransform != null) {
    //         this.layerPositions[i] = childTransform.local.position;
    //       } else {
    //
    //           this.layerPositions[i] = createVector(0,0,0);
    //       }
    //
    //     }
    // }
    let parentTransform = this.gameObject.getTransform();

    //ERROR CONTROL IN CASE TRANSFORM WAS NOT ADDED TO THE GAME OBJECT//
    if (parentTransform == null) {
      console.log('ParalaxComponent requires transform component to work');
      return;
    }

    //PUSHES ALL SCENE PARALX COMPONENTS INTO ARRAY AND OFFSETS SPEED DEPENDING ON POSITION//
    for (let i = 0; i < this.gameObject.children.active.length; i++) {

      let child = this.gameObject.children.active[i];
      let childTransform = child.getTransform();

      if (childTransform != null) {
          let displacement = map(childTransform.local.position.z, 0, 100, -1, 0);
          childTransform.local.position.x = parentTransform.local.position.x * displacement;// + this.layerPositions[i].x;
      }

    }

  }



}
