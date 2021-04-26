class Event {

  constructor() {

    this.listeners = [];
  }

  begin() {

    for (let i = 0; i < this.listeners.length; i++) {
      this.listeners[i].begin(this);
    }
  }

  end() {

    for (let i = 0; i < this.listeners.length; i++) {
      this.listeners[i].end(this);
    }
  }

  addListener(listener) {
    this.listeners.push(listener);
  }

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
