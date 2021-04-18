class ParalaxComponent extends Component {

  constructor() {

    super();

    this.paralaxCoefficient = 1;
  }

  update() {

    let parentTransform = this.gameObject.getTransform();

    if (parentTransform == null) {
      console.log('ParalaxComponent requires transform component to work');

      return;
    }

    for (let i = 0; i < this.gameObject.children.active.length; i++) {

      let child = this.gameObject.children.active[i];
      let childTransform = child.getTransform();

      if (childTransform != null) {
          let displacement = map(childTransform.local.position.z, 0, 100, -1, 0);
          childTransform.local.position.x = parentTransform.local.position.x * displacement;
      }

    }

  }



}
