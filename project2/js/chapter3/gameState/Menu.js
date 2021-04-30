//MANAGES DIALOG START ON E KEY ACTION//
class Menu extends IState {

  onEnter(sm) {
    console.log(`Menu onEnter`);

  }

  onLeave(sm) {
    console.log(`Menu onLeave`);

  }

  update(sm) {
    if (keyIsDown(69)) {
      sm.transit(new Dialog());
    }

  }

  draw(sm) {
    push();
    fill(255);
    text(`This is the menu state.\nPress E to continue`, width/2, height/2);
    pop();

  }

}
