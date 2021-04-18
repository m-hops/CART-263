class SceneState extends IState {

  constructor(renderer,scene) {

    super();

    this.sceneToRun = scene;
    this.renderer = renderer;

  }

  onEnter(sm) {
    console.log(`Dialog onEnter`);

    if (this.sceneToRun != null) {
      this.sceneToRun.start();
    }
  }

  onLeave(sm) {
    console.log(`Dialog onLeave`);

    if (this.sceneToRun != null) {
      this.sceneToRun.end();
    }

  }

  update(sm) {
    //console.log(`Dialog update`);

    if (this.sceneToRun != null) {
      this.sceneToRun.update();
    }
  }

  draw(sm) {
    //console.log(`Dialog draw`);

    if (this.sceneToRun != null) {
      this.renderer.render(this.sceneToRun);
    }
  }

}
