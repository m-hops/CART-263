class SetGameVariableAction extends EventListener {

  constructor(varName, value, nextAction = null) {

    super();

    this.varName = varName;
    this.value = value;
    this.nextAction = nextAction;
  }

  begin() {
    gameState.setGameVariable(this.varName, this.value);
  }

  end() {

    if (this.nextAction != null) {
      this.nextAction.raise();
    }
  }
}
