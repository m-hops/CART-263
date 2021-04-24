class SceneState extends IState {

  constructor(renderer,scene) {

    super();

    this.sceneToRun = scene;
    this.renderer = renderer;

  }

  //LOADS AND RUNS COMPONENTS FOR SCENE THAT HAS BEEN ENTERED INTO//
  onEnter(sm) {
    if (this.sceneToRun != null) {
      this.sceneToRun.start();
    }
  }

  //REMOVES COMPONENTS FOR SCENE THAT HAS BEEN LEFT//
  onLeave(sm) {
    if (this.sceneToRun != null) {
      this.sceneToRun.end();
    }

  }

  //SCENE FUNCTIONS THAT NEED TO BE UPDATED EVERY FRAME//
  update(sm) {
    if (this.sceneToRun != null) {
      this.sceneToRun.update();
    }
  }

  //SCENE VISUALS THAT NEED TO BE UPDATED EVERY FRAME//
  draw(sm) {
    if (this.sceneToRun != null) {
      this.renderer.render(this.sceneToRun);
    }
  }

}
