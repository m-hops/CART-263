//SCENE CREATOR//

class Scene {

  constructor() {
    this.physicsSolver = new PhysicsSolver();
    this.gameObjects = new AsyncArray();

  }

  //WHEN SCENE IS STARTED//
  start() {
    this.gameObjects.start();
  }

  //ADD GAME OBJECT INTO SCENE//
  addGameObject(obj) {
    this.gameObjects.add(obj);
  }

  //QUEUES GAME OBJECT FOR REMOVAL FROM SCENE BUT WILL NOT REMOVE UNLESS TOLD TO OR SCENE IS ENDED//
  removeGameObject(obj) {
    this.gameObjects.remove(obj);
  }

  //UPDATES GAME OBJECT FOR EVERY SCENE//
  update() {
    this.gameObjects.update();
    this.physicsSolver.solve(this);
  }

  //CLOSES OUT SCENE UPON TERMINATION//
  end() {
    this.gameObjects.end();
  }

  createImageGameObject(image, x, y, z, scale, angle, parentGO) {

    let go = new GameObject();
    let goTransform = new Transform();
    go.addComponent(goTransform);
    goTransform.local.setPosition(x,y,z);
    goTransform.local.setScale(scale, scale);
    goTransform.local.setRotation(angle);
    go.addComponent(new ImageComponent(image));

    if (parentGO != null) {

      parentGO.addChild(go);
    } else {
      this.addGameObject(go);
    }
    return go;
  }

  getFirstGameObjectWithComponentType(compType) {

    for (let i = 0; i < this.gameObjects.active.length; i++) {

      let go = this.gameObjects.active[i];
      let comp = go.components.getFirstElementOfType(compType);

      if (comp != null) {
        return go;
      }
    }

    return null;
  }
}
