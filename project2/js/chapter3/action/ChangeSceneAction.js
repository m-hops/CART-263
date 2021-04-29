class ChangeSceneAction extends EventListener {

  constructor(toScene) {

    super();

    this.toScene = toScene;
  }

  end() {

    gameState.previousScene = gameState.currentScene;

    gameState.currentScene = this.toScene;

    if (this.toScene == "Opening") {
        rootStateMachine.transit(new SceneState(globalRenderer, new OpeningScene()));
    }

    if (this.toScene == "Negative Space") {
        rootStateMachine.transit(new SceneState(globalRenderer, new BathroomNegativeScene()));
    }

    if (this.toScene == "Bathroom") {
        rootStateMachine.transit(new SceneState(globalRenderer, new BathroomScene()));
    }

    if (this.toScene == "Restaurant") {
        rootStateMachine.transit(new SceneState(globalRenderer, new RestaurantScene()));
    }

    if (this.toScene == "Outside"){
      rootStateMachine.transit(new SceneState(globalRenderer, new OutsideScene()));
    }

    if (this.toScene == "Boat"){
      rootStateMachine.transit(new SceneState(globalRenderer, new BoatScene()));
    }

  }

}
