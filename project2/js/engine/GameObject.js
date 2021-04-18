class GameObject {

  constructor() {

    this.parent = null;
    this.components = new AsyncArray();
    this.children = new AsyncArray();
    this.name = null;
  }

  //CALL THIS TO UPDATE THE COMPONENET AND CHILDREN ASYNC ARRAY//
  updateAsyn() {
    this.components.update();
    this.children.update();
  }
  
  //STARTS AFFILIATED COMPONENT AND CHILDREN//
  start() {
    this.components.start();
    this.children.start();
  }

  //UPDATES EVERY FRAME AFFILIATED COMPONENT AND CHILDREN//
  update() {
    this.components.update();
    this.children.update();
  }

  //TERMINATES AFFILIATED COMPONENT AND CHILDREN//
  end() {
    this.children.end();
    this.components.end();
  }

  //ADDS CHILD OBJECT TO GAME OBJECT//
  addChild(obj) {
    this.children.add(obj);

    obj.parent = this;
  }

  //REMOVES CHILD OBJECT FROM GAME OBJECT//
  removeChild(obj) {
    this.children.remove(obj);
  }

  //ADD COMPONENT TO GAME OBJECT//
  addComponent(comp) {
    this.components.add(comp);

    comp.gameObject = this;
  }

  //REMOVE COMPONENT FROM GAME OBJECT//
  removeComponent(comp) {
    this.components.remove(comp);
  }


  getTransform() {
    return this.components.getFirstElementOfType(Transform);
  }
}
