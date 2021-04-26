class ChangeSceneAction extends EventListener {

  constructor(sceneName) {

    super();

    this.sceneName = sceneName;
  }

  end() {

    if (this.sceneName == "Bathroom") {
        rootStateMachine.transit(new SceneState(globalRenderer, new BathroomScene()));
    }

    if (this.sceneName == "Restaurant") {
        rootStateMachine.transit(new SceneState(globalRenderer, new RestaurantScene()));
    }

    if (this.sceneName == "OutsidePath") {
        rootStateMachine.transit(new SceneState(globalRenderer, new OutsideScene()));
    }

    if (this.sceneName == "Outside"){
      rootStateMachine.transit(new SceneState(globalRenderer, new OutsideScene()));
    }

  }

}
