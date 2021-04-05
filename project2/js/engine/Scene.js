class Scene {

  constructor() {

    this.gameObjects = new AsyncArray();

  }

  start() {
    this.gameObjects.start();
  }

  addGameObject(obj) {
    this.gameObjects.add(obj);
  }

  removeGameObject(obj) {
    this.gameObjects.remove(obj);
  }

  update() {
    this.gameObjects.update();
  }

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
}
