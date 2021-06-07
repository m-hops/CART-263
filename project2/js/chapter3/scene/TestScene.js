class TestScene extends Scene {

  constructor() {
    super();

    this.ghosts = [];

    this.cameraOBJ();
    this.ghostTest();
    this.rainTest();
    this.timelineTest();
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


  timelineTest(){

      this.timelineObject0 = this.addGameObject(new GameObject());

      this.timelineObject0.addComponent(new Transform());
      let imgComp = this.timelineObject0.addComponent(new ImageComponent(ghostBKG[0], 1, 1));
      imgComp.centered = true;

      let posTL = this.timelineObject0.addComponent(new PositionTimeline());
      posTL.addKey(0   , 0,0,0);
      posTL.addKey(5000, 500,200,0);

      let rotTL = this.timelineObject0.addComponent(new RotationTimeline());
      rotTL.addKey(0, 0)
      rotTL.addKey(5000, 90);

      let scaleTL = this.timelineObject0.addComponent(new ScaleTimeline());
      scaleTL.addKey(0, 1,1,1)
      scaleTL.addKey(5000, 0.1, 0.1, 0.1);

      this.timelineObject1 = this.addGameObject(new GameObject());
      let mainActionTL = this.timelineObject1.addComponent(new EventTimeline());
      mainActionTL.addAction(0, new LogAction("Wait for it!"));
      mainActionTL.addAction(1000, new StartGOTimelinesAction(this.timelineObject0));
      mainActionTL.addAction(1001, new LogAction("WEEEEEeeeee...."));
      mainActionTL.addAction(6000, new LogAction("oh noooo.."));
      mainActionTL.startTimeline();

  }
}
