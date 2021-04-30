//PLAYS SOUND ON ACTION//

class PlaySFXAction extends EventListener {

  constructor(sfx) {

    super();

    this.sfx = sfx;
  }

  begin() {
    this.sfx.play();
  }
}
