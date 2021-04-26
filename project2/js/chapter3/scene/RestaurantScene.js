class RestaurantScene extends Scene {

  constructor() {

    super();

    this.playerSetupOBJ();
    this.cameraOBJ();
    this.backgroundOBJ();
    this.invisibleBoundaryOBJ();
    this.virgilOBJ();
    this.enterExitTriggers();
  }

  playerSetupOBJ() {
    //PLAYER SETUP//
    this.player = new GameObject("player");

    this.player.addComponent(new Physics2D());
    this.player.addComponent(new PlayerInputComponent());
    this.player.addComponent(new Transform(3000,520));
    this.player.addComponent(new DirectionalAnimationComponenet(chloeLeftAnimation, chloeRightAnimation, chloeLeftStationary, chloeRightStationary));
    this.player.addComponent(new RectColliderComponent(new AABB(0,0,chloeLeftStationary.width / 2, chloeLeftStationary.height / 2)));
    this.player.addComponent(new RenderDebugComponent());

    this.player.getTransform().local.position.z = 0;

    this.addGameObject(this.player);

  }

  invisibleBoundaryOBJ() {
    //BACKWALL BOUNDARY OBJ//
    this.backwallBoundary = new GameObject();

    this.backwallBoundary.addComponent(new Transform(3300,500));
    this.backwallBoundary.addComponent(new Physics2D());
    this.backwallBoundary.addComponent(new RectColliderComponent(new AABB(0,0,10,100)));
    this.backwallBoundary.addComponent(new RenderDebugComponent());

    this.addGameObject(this.backwallBoundary);

    //BACKWALL BOUNDARY OBJ//
    this.frontwallBoundary = new GameObject();

    this.frontwallBoundary.addComponent(new Transform(-50,500));
    this.frontwallBoundary.addComponent(new Physics2D());
    this.frontwallBoundary.addComponent(new RectColliderComponent(new AABB(0,0,10,100)));
    this.frontwallBoundary.addComponent(new RenderDebugComponent());

    this.addGameObject(this.frontwallBoundary);

    //TOP BOUNDARY OBJ//
    this.topBoundary = new GameObject();

    this.topBoundary.addComponent(new Transform(0,310));
    this.topBoundary.addComponent(new Physics2D());
    this.topBoundary.addComponent(new RectColliderComponent(new AABB(0,0,3500,10)));
    this.topBoundary.addComponent(new RenderDebugComponent());

    this.addGameObject(this.topBoundary);

    //BOTTOM BOUNDARY OBJ//
    this.topBoundary = new GameObject();

    this.topBoundary.addComponent(new Transform(0,720));
    this.topBoundary.addComponent(new Physics2D());
    this.topBoundary.addComponent(new RectColliderComponent(new AABB(0,0,3500,10)));
    this.topBoundary.addComponent(new RenderDebugComponent());

    this.addGameObject(this.topBoundary);
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
    this.backgroundOverlay.addComponent(new ImageComponent(ramenBKG, 1, 1));

    this.background.addChild(this.backgroundOverlay);

    this.backgroundOverlay.getTransform().local.position.z = 1;
    this.backgroundOverlay.getTransform().local.setScale(0.85,0.8);

    this.addGameObject(this.background);
  }

  virgilOBJ() {
    //VIRGIL SPRITE//
    this.virgilSprite = new GameObject();
    this.speechBubblVirgil = new GameObject();

    this.virgilSprite.addComponent(new Transform(1300,280));
    this.virgilSprite.addComponent(new ImageComponent(virgilPortraitUnimpresssed,1,1));
    this.virgilSprite.addComponent(new TriggerComponent(new EnableGameObjectAction(this.speechBubblVirgil)));
    this.virgilSprite.addComponent(new RectColliderComponent(AABB.MakeTopLeftSize(0,600,1000,100)));
    this.virgilSprite.addComponent(new RenderDebugComponent());

    this.speechBubblVirgil.addComponent(new Transform(1000,-800));
    this.speechBubblVirgil.addComponent(new ImageComponent(speechBubbleIcon,1,1));
    this.speechBubblVirgil.addComponent(new RectColliderComponent(AABB.MakeTopLeftSize(0,0,speechBubbleIcon.width,speechBubbleIcon.height)));
    this.speechBubblVirgil.addComponent(new RenderDebugComponent());

    this.virgilSprite.getTransform().local.position.z = 1;
    this.virgilSprite.getTransform().local.setScale(0.15,0.15);
    this.speechBubblVirgil.getTransform().local.setScale(3,3);
    this.virgilSprite.getTransform().local.rotation = 5 / 180 * 3.1415;

    this.virgilSprite.addChild(this.speechBubblVirgil);

    this.speechBubblVirgil.disable();

    this.addGameObject(this.virgilSprite);
  }

  enterExitTriggers() {
    //TRIGGER TO BATHROOM//
    this.toBathroom = new GameObject();
    this.toBathroomTrigger = new GameObject();

    this.toBathroom.addComponent(new Transform(3200,400));
    this.toBathroom.addComponent(new TriggerComponent(new EnableGameObjectAction(this.toBathroomTrigger)));
    this.toBathroom.addComponent(new RectColliderComponent(AABB.MakeTopLeftSize(0,0,10,10)));
    this.toBathroom.addComponent(new RenderDebugComponent());

    this.toBathroomTrigger.addComponent(new Transform(-250,-300));
    this.toBathroomTrigger.addComponent(new ImageComponent(eInteractImage,1,1));
    this.toBathroomTrigger.addComponent(new RectColliderComponent(AABB.MakeTopLeftSize(0,0,eInteractImage.width,eInteractImage.height)));
    this.toBathroomTrigger.addComponent(new RenderDebugComponent());
    this.toBathroomTrigger.addComponent(new KeyboardEventComponent(69, new ChangeSceneAction("Bathroom")));
    this.toBathroomTrigger.addComponent(new KeyboardEventComponent(69, new PlaySFXAction(pageTurnSFX)));

    this.toBathroom.addChild(this.toBathroomTrigger);

    this.toBathroomTrigger.disable();

    this.addGameObject(this.toBathroom);

    //TRIGGER TO OUTSIDE//
    this.toOutside = new GameObject();
    this.toOutsideTrigger = new GameObject();

    this.toOutside.addComponent(new Transform(50,400));
    this.toOutside.addComponent(new TriggerComponent(new EnableGameObjectAction(this.toOutsideTrigger)));
    this.toOutside.addComponent(new RectColliderComponent(AABB.MakeTopLeftSize(0,0,10,10)));
    this.toOutside.addComponent(new RenderDebugComponent());

    this.toOutsideTrigger.addComponent(new Transform(10,-380));
    this.toOutsideTrigger.addComponent(new ImageComponent(eInteractImage,1,1));
    this.toOutsideTrigger.addComponent(new RectColliderComponent(AABB.MakeTopLeftSize(0,0,eInteractImage.width,eInteractImage.height)));
    this.toOutsideTrigger.addComponent(new RenderDebugComponent());
    this.toOutsideTrigger.addComponent(new KeyboardEventComponent(69, new ChangeSceneAction("OutsidePath")));
    this.toOutsideTrigger.addComponent(new KeyboardEventComponent(69, new PlaySFXAction(pageTurnSFX)));

    this.toOutside.addChild(this.toOutsideTrigger);

    this.toOutsideTrigger.disable();

    this.addGameObject(this.toOutside);

  }
}
