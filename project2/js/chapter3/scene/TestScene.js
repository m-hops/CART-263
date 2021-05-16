class TestScene extends Scene {

  constructor() {
    super();

    this.ghosts = [];

    this.cameraOBJ();
    this.ghostTest();
    this.rainTest();

  }

  cameraOBJ() {
    //CAMERA SETUP//
    this.camera = new GameObject();

    this.camera.addComponent(new CameraComponent());
    this.camera.addComponent(new Transform());

    this.addGameObject(this.camera);
  }

  ghostTest() {

    let ghostPopulation = 40;

    this.ghostPop = new GameObject();

    this.ghostPop.addComponent(new Transform());

    let limit = AABB.MakeTopLeftSize(-700,0,1700,300);

    for (let i = 0; i < ghostPopulation; i++) {

      this.ghosts[i] = new GameObject();

      this.ghosts[i].addComponent(new Transform());
      this.ghosts[i].addComponent(new ImageComponent(ghostBKG[Math.floor(random(0,ghost.length))], 1, 1));
      this.ghosts[i].addComponent(new GhostLoopComponent(limit));

      this.ghostPop.addChild(this.ghosts[i]);

    }

    this.addGameObject(this.ghostPop);
  }

  rainTest() {

    let limit = AABB.MakeTopLeftSize(0,0,1000,700);

    this.storm = new GameObject();

    this.storm.addComponent(new Transform());
    this.storm.addComponent(new RainGeneratorComponent(limit, 10, -10, -5, 10));

    this.addGameObject(this.storm);

  }

}
