class KeyboardEventComponent extends Component {

  constructor(key, listener = null) {

    super();

    this.key = key;
    this.onPress = new Event();

    if (listener != null) {
      this.onPress.addListener(listener);
    }
    this.isPressed = false;
  }

  update() {

    if (keyIsDown(this.key)) {
      if (!this.isPressed) {
        this.isPressed = true;
        this.onPress.raise();
      }
    } else {
      this.isPressed = false;
    }
  }

}
