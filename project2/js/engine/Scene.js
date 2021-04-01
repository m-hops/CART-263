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
}
