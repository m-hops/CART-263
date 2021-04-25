class BathroomNegativeScene extends Scene {

  constructor() {

    super();

    this.playerSetupOBJ();
    this.cameraOBJ();
    this.backgroundOBJ();
    this.invisibleBoundaryOBJ();
    this.blinkOBJ();
  }

  invisibleBoundaryOBJ() {
    //BACKWALL BOUNDARY OBJ//
    this.backwallBoundary = new GameObject();

    this.backwallBoundary.addComponent(new Transform(2000,400));
    this.backwallBoundary.addComponent(new Physics2D());
    this.backwallBoundary.addComponent(new RectColliderComponent(new AABB(0,0,10,100)));
    this.backwallBoundary.addComponent(new RenderDebugComponent());

    this.addGameObject(this.backwallBoundary);

    //UPPER BOUNDARY OBJ//
    this.upperBoundary = new GameObject();

    this.upperBoundary.addComponent(new Transform(0,310));
    this.upperBoundary.addComponent(new Physics2D());
    this.upperBoundary.addComponent(new RectColliderComponent(new AABB(0,0,2000,10)));
    this.upperBoundary.addComponent(new RenderDebugComponent());

    this.addGameObject(this.upperBoundary);

    //LOWER BOUNDARY OBJ//
    this.lowerBoundary = new GameObject();

    this.lowerBoundary.addComponent(new Transform(0,715));
    this.lowerBoundary.addComponent(new Physics2D());
    this.lowerBoundary.addComponent(new RectColliderComponent(new AABB(0,0,2000,10)));
    this.lowerBoundary.addComponent(new RenderDebugComponent());

    this.addGameObject(this.lowerBoundary);

    //LEFT BOUNDARY OBJ//
    this.doorBoundary = new GameObject();

    this.doorBoundary.addComponent(new Transform(0,500));
    this.doorBoundary.addComponent(new Physics2D());
    this.doorBoundary.addComponent(new RectColliderComponent(new AABB(0,0,10,10)));
    this.doorBoundary.addComponent(new RenderDebugComponent());

    this.addGameObject(this.doorBoundary);
  }

  playerSetupOBJ() {
    //PLAYER SETUP//
    this.player = new GameObject("player");

    this.player.addComponent(new Physics2D());
    this.player.addComponent(new PlayerInputComponent());
    this.player.addComponent(new Transform(1850,500));
    this.player.addComponent(new DirectionalAnimationComponenet(chloeSilhouetteLeftAnimation, chloeSilhouetteRightAnimation, chloeSilhouetteLeftStationary, chloeSilhouetteRightStationary));
    this.player.addComponent(new RectColliderComponent(new AABB(0,0,chloeSilhouetteLeftStationary.width / 2, chloeSilhouetteLeftStationary.height / 2)));
    this.player.addComponent(new RenderDebugComponent());

    this.player.getTransform().local.position.z = -1;

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

  blinkOBJ() {

      //BLINK SPRITE//
      this.blink = new GameObject();
      this.blinkInteract = new GameObject();

      this.blink.addComponent(new Transform(500,470));
      this.blink.addComponent(new AnimationComponent(ramenBathroomNegativeBlink,5));
      this.blink.addComponent(new TriggerComponent(new EnableGameObjectAction(this.blinkInteract)));
      this.blink.addComponent(new RectColliderComponent(AABB.MakeTopLeftSize(0,0,10,10)));
      this.blink.addComponent(new RenderDebugComponent());

      this.blinkInteract.addComponent(new Transform(0,-350));
      this.blinkInteract.addComponent(new ImageComponent(eInteractSilhouetteImage,1,1));
      this.blinkInteract.addComponent(new RectColliderComponent(AABB.MakeTopLeftSize(0,0,eInteractSilhouetteImage.width,eInteractSilhouetteImage.height)));
      this.blinkInteract.addComponent(new RenderDebugComponent());

      this.blinkInteract.getTransform().local.setScale(0.5,0.5);

      this.blink.addChild(this.blinkInteract);

      this.blinkInteract.disable();

      this.addGameObject(this.blink);

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
  }
}
