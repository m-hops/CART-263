class GameObject {

  constructor(name = null) {

    this.parent = null;
    this.scene = null;
    this.components = new AsyncArray();
    this.children = new AsyncArray();
    this.name = name;
    this.enabled = true;
    this.enabledInHierarchy = true;
  }
  setName(name){
    this.name = name;
  }
  visitEnabledGameObjects(func){
    if(this.enabledInHierarchy){
      func(this);
      for(let i = 0; i < this.children.active.length; ++i){
        this.children.active[i].visitEnabledGameObjects(func);
      }
    }
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
  enable(){
    if(!this.enabled){
      this.enabled = true;
      if(this.parent == null || this.parent.enabledInHierarchy) this.enableHierarchy();
    }
  }
  disable(){
    if(this.enabled){
      if(this.enabledInHierarchy) this.disableHierarchy();
      this.enabled = false;
    }
  }
  enableHierarchy(){
    if(this.enabled){
      this.enabledInHierarchy = true;
      this.components.visit(x => x.onDisable());
      this.children.visit(x => x.enableHierarchy());
      this.onEnable();
    }
  }
  disableHierarchy(){
    if(this.enabled){
      this.enabledInHierarchy = false;
      this.components.visit(x => x.onDisable());
      this.children.visit(x => x.disableHierarchy());
      this.onDesable();
    }
  }

  onEnable(){

  }
  onDesable(){

  }
  //UPDATES EVERY FRAME AFFILIATED COMPONENT AND CHILDREN//
  update() {
    if(this.enabledInHierarchy){
      this.components.update();
      this.children.update();
    }
  }

  //TERMINATES AFFILIATED COMPONENT AND CHILDREN//
  end() {
    this.children.end();
    this.components.end();
  }

  //ADDS CHILD OBJECT TO GAME OBJECT//
  addChild(obj) {

    if(!(obj instanceof GameObject)){
      throw "Object is not a GameObject";
    }

    this.children.add(obj);

    obj.parent = this;
  }

  //REMOVES CHILD OBJECT FROM GAME OBJECT//
  removeChild(obj) {
    this.children.remove(obj);
    obj.parent = null;
  }

  //ADD COMPONENT TO GAME OBJECT//
  addComponent(comp) {
    this.components.add(comp);

    comp.gameObject = this;
    return comp;
  }

  //REMOVE COMPONENT FROM GAME OBJECT//
  removeComponent(comp) {
    this.components.remove(comp);
    comp.gameObject = null;
  }


  getTransform() {
    return this.components.getFirstElementOfType(Transform);
  }

  getScene(){
    if(this.parent != null) return this.parent.getScene();
    return this.scene;
  }
}
