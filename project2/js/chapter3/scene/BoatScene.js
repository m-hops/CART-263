class BoatScene extends Scene {

  constructor() {

    super();

    this.playerSetupOBJ();
    this.cameraOBJ();
    this.backgroundOBJ();

  }

  playerSetupOBJ() {
    //PLAYER SETUP//
    this.player = new GameObject("player");

    this.player.addComponent(new Physics2D());
    this.player.addComponent(new PlayerInputComponent());
    this.player.addComponent(new Transform(0,0));
    this.player.addComponent(new ImageComponent(boatTopSprite));
    this.player.addComponent(new RectColliderComponent(AABB.MakeTopLeftSize(0,0,boatTopSprite.width, boatTopSprite.height)));
    this.player.addComponent(new RenderDebugComponent());

    this.player.getTransform().local.position.z = 0;

    this.addGameObject(this.player);

  }

  cameraOBJ() {
    //CAMERA SETUP//
    this.camera = new GameObject();

    this.camera.addComponent(new CameraComponent());
    this.camera.addComponent(new Transform());
    this.camera.addComponent(new AttachToComponent(this.player, true, true, false,
      new p5.Vector(-width / 2, 0, 0),
      new p5.Vector(0,0,0),
      new p5.Vector(width * 9, height, 100000000)));

    this.addGameObject(this.camera);
  }

  backgroundOBJ() {
    //BACKGROUND SETUP//
    this.background = new GameObject();

    this.background.addComponent(new Transform());
    this.background.addComponent(new AttachToComponent(this.camera, true, false, false,
      new p5.Vector(0, 0, 0),
      new p5.Vector(0,0,0),
      new p5.Vector(10000000, height, 100000000)));

    this.addGameObject(this.background);

    //BACKGROUND OVERLAY OBJECT//
    this.backgroundOverlay = new GameObject();

    this.backgroundOverlay.addComponent(new Transform(0,0));
    this.backgroundOverlay.addComponent(new ImageComponent(mapBackground, 1, 1));

    this.background.addChild(this.backgroundOverlay);

    this.backgroundOverlay.getTransform().local.position.z = 1;
    this.backgroundOverlay.getTransform().local.setScale(0.85,0.8);

    this.addGameObject(this.background);
  }

}
