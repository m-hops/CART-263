//USED TO CREATE ONE OFF EVENTS//

class Event {

  constructor(listener=null) {

    this.listeners = [];
    if(listener != null){
      this.listeners.push(listener);
    }
  }

  //IF LISTENER FOUND, START//
  begin() {

    for (let i = 0; i < this.listeners.length; i++) {
      this.listeners[i].begin(this);
    }
  }
  //IF LISTENER FOUND, END//
  end() {

    for (let i = 0; i < this.listeners.length; i++) {
      this.listeners[i].end(this);
    }
  }

  //ADD LISTENER TO GAME OBJECT//
  addListener(listener) {
    this.listeners.push(listener);
  }

  //REMOVE LISTENER TO GAME OBJECT//
  removeListener(listener) {
    let index = this.listners.findIndex(x => x === listener);
    if (index >= 0) {
      this.listeners.splice(index,1);
      return;
    }
  }

  raise() {
    for (let i = 0; i < this.listeners.length; i++) {
      this.listeners[i].raise(this);
    }
  }

}
