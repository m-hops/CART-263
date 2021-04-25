class ChangeSceneAction extends EventListener {

  constructor(sceneName) {

    super();

    this.sceneName = sceneName;
  }

  end() {
    
    if (this.sceneName == "Outside"){
      rootStateMachine.transit(new SceneState(globalRenderer, new OutsideScene()));
    }

  }

}
