class BathroomScene extends Scene {

  constructor() {

    super();

    this.playerSetupOBJ();
    this.cameraOBJ();
    this.backgroundOBJ();
    this.invisibleBoundaryOBJ();
    this.musicOBJ();
  }

  invisibleBoundaryOBJ() {
    //BACKWALL BOUNDARY OBJ//
    this.backwallBoundary = new GameObject();

    this.backwallBoundary.addComponent(new Transform(1250,600));
    this.backwallBoundary.addComponent(new Physics2D(true));
    this.backwallBoundary.addComponent(new RectColliderComponent(new AABB(0,0,10,100)));
    this.backwallBoundary.addComponent(new RenderDebugComponent());

    this.addGameObject(this.backwallBoundary);

    //UPPER BOUNDARY OBJ//
    this.upperBoundary = new GameObject();

    this.upperBoundary.addComponent(new Transform(0,310));
    this.upperBoundary.addComponent(new Physics2D(true));
    this.upperBoundary.addComponent(new RectColliderComponent(new AABB(0,0,1500,10)));
    this.upperBoundary.addComponent(new RenderDebugComponent());

    this.addGameObject(this.upperBoundary);

    //LOWER BOUNDARY OBJ//
    this.lowerBoundary = new GameObject();

    this.lowerBoundary.addComponent(new Transform(0,715));
    this.lowerBoundary.addComponent(new Physics2D(true));
    this.lowerBoundary.addComponent(new RectColliderComponent(new AABB(0,0,1500,10)));
    this.lowerBoundary.addComponent(new RenderDebugComponent());

    this.addGameObject(this.lowerBoundary);

    //LOWER BOUNDARY OBJ//
    this.doorBoundary = new GameObject();

    this.doorBoundary.addComponent(new Transform(0,500));
    this.doorBoundary.addComponent(new Physics2D(true));
    this.doorBoundary.addComponent(new RectColliderComponent(new AABB(0,0,10,10)));
    this.doorBoundary.addComponent(new RenderDebugComponent());

    this.addGameObject(this.doorBoundary);

    //DOOR BOUNDARY TRIGGER//
    this.doorTrigger = new GameObject();
    this.doorTriggerInteract = new GameObject();

    this.doorTrigger.addComponent(new Transform(0,500));
    this.doorTrigger.addComponent(new TriggerComponent(new EnableGameObjectAction(this.doorTriggerInteract)));
    this.doorTrigger.addComponent(new RectColliderComponent(new AABB(70,0,10,10)));
    this.doorTrigger.addComponent(new RenderDebugComponent());

    this.doorTriggerInteract.addComponent(new Transform(250,-250));
    this.doorTriggerInteract.addComponent(new AnimationComponent(eInteractAnimation,3));
    this.doorTriggerInteract.addComponent(new RectColliderComponent(AABB.MakeTopLeftSize(0,0,eInteractImage.width,eInteractImage.height)));
    this.doorTriggerInteract.addComponent(new KeyboardEventComponent(69, new ChangeSceneAction("Restaurant")));
    this.doorTriggerInteract.addComponent(new KeyboardEventComponent(69, new PlaySFXAction(pageTurnSFX)));
    this.doorTriggerInteract.addComponent(new RenderDebugComponent());

    this.doorTriggerInteract.getTransform().local.setScale(0.7,0.7);
    this.doorTriggerInteract.getTransform().local.position.z = 1;

    this.doorTrigger.addChild(this.doorTriggerInteract);

    this.doorTriggerInteract.disable();

    this.addGameObject(this.doorTrigger);

    //DOOR FRAME BOUNDARY OBJ//
    this.doorFrameBoundary = new GameObject();

    this.doorFrameBoundary.addComponent(new Transform(89,340));
    this.doorFrameBoundary.addComponent(new Physics2D(true));
    this.doorFrameBoundary.addComponent(new RectColliderComponent(new AABB(0,0,10,10)));
    this.doorFrameBoundary.addComponent(new RenderDebugComponent());

    this.addGameObject(this.doorFrameBoundary);
  }

  playerSetupOBJ() {
    //PLAYER SETUP//
    this.player = new GameObject("player");

    this.player.addComponent(new Physics2D());
    this.player.addComponent(new PlayerInputComponent());

    let trf = new Transform();
    let dac = new DirectionalAnimationComponenet(chloeLeftAnimation, chloeRightAnimation, chloeLeftStationary, chloeRightStationary);

    this.player.addComponent(trf);
    this.player.addComponent(dac);
    this.player.addComponent(new RectColliderComponent(new AABB(0,0,chloeLeftStationary.width / 2, chloeLeftStationary.height / 2)));
    this.player.addComponent(new RenderDebugComponent());

    this.player.getTransform().local.position.z = 0;

    if (gameState.previousScene == "Negative Space") {
      trf.local.position = createVector(610,500,0);
      dac.wasLeft = true;
    }

    if (gameState.previousScene == "Restaurant") {
      trf.local.position = createVector(280,530,0);
      dac.wasLeft = false;
    }

    this.addGameObject(this.player);

  }

  cameraOBJ() {
    //CAMERA SETUP//
    this.camera = new GameObject();

    this.camera.addComponent(new CameraComponent());
    this.camera.addComponent(new Transform());
    this.camera.addComponent(new AttachToComponent(this.player, true, false, false,
      new p5.Vector(-width / 2, 0, 0),
      new p5.Vector(0,0,0),
      new p5.Vector(width * 9, height, 100000000)));

    this.addGameObject(this.camera);
  }

  backgroundOBJ() {
    //BACKGROUND SETUP//
    this.background = new GameObject();

    this.background.addComponent(new Transform());
    this.background.addComponent(new ParalaxComponent());
    this.background.addComponent(new AttachToComponent(this.camera, true, false, false,
      new p5.Vector(0, 0, 0),
      new p5.Vector(0,0,0),
      new p5.Vector(10000000, height, 100000000)));


    //BACKGROUND OVERLAY OBJECT//
    this.backgroundOverlay = new GameObject();

    this.backgroundOverlay.addComponent(new Transform(0,-150));
    this.backgroundOverlay.addComponent(new ImageComponent(ramenBathroomBKG, 1, 1));

    this.background.addChild(this.backgroundOverlay);

    this.backgroundOverlay.getTransform().local.position.z = 1;
    this.backgroundOverlay.getTransform().local.setScale(0.85,0.8);

    //BATHROOM STALL OBJ//
    this.bathroomStall = new GameObject();
    this.bathroomStall_0 = new GameObject();
    this.bathroomStall.addChild(this.bathroomStall_0);

    this.bathroomStall.addComponent(new Transform(0,0));
    this.bathroomStall_0.addComponent(new Transform(0,0));
    this.bathroomStall_0.addComponent(new ImageComponent(ramenBathroomStall, 1, 1));

    this.background.addChild(this.bathroomStall);

    this.bathroomStall.getTransform().local.position.z = -15;
    this.bathroomStall_0.getTransform().local.position.y = 300;
    this.bathroomStall_0.getTransform().local.position.x = 800;
    this.bathroomStall_0.getTransform().local.setScale(0.7,0.7);

    this.addGameObject(this.background);
  }

  musicOBJ() {

    this.music = new GameObject();

    this.music.addComponent(new MusicPlayerComponent(restaurantMusic));

    this.addGameObject(this.music);
  }
}
