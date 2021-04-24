class RenderComponent extends Component {

  constructor() {
    super();
  }

  render(renderer) {

  }
}


//RENDER DEBUG FOR TESTING PURPOSES (REMOVE BEFORE FINALIZING PROJECT)//
class RenderDebugComponent extends RenderComponent {

  constructor() {
    super();
  }

  render(renderer) {
    for (let j = 0; j < this.gameObject.components.active.length; j++) {

      let comp = this.gameObject.components.active[j];
      if (comp instanceof ColliderComponent) {
        comp.debugDraw();
      }
    }
  }
}
