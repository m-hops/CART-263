class StateMachine {

  constructor() {
    this.currentState = null;
  }

  update() {
    if (this.currentState != null) {
      this.currentState.update(this);
    }
  }

  draw() {
    if (this.currentState != null) {
      this.currentState.draw(this);
    }
  }

  transit(state) {
    if (this.currentState != null) {
      this.currentState.onLeave(this);
    }

    this.currentState = state;

    if (this.currentState != null) {
      this.currentState.onEnter(this);
    }
  }


}
