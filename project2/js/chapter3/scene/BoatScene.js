class BoatScene extends Scene {

  constructor() {

    super();

    this.boundaryOBJ();
    this.playerSetupOBJ();
    this.cameraOBJ();
    this.backgroundOBJ();
    this.dockTrigger();
    this.musicOBJ();

  }

  boundaryOBJ() {

    //DOOR BOUNDARY//
    this.island0 = new GameObject();

    this.island0.addComponent(new Transform(940,650));
    this.island0.addComponent(new Physics2D());
    this.island0.addComponent(new RectColliderComponent(new AABB(0,0,10,10)));
    this.island0.addComponent(new RenderDebugComponent());

    this.addGameObject(this.island0);
  }

  playerSetupOBJ() {
    //PLAYER SETUP//
    this.player = new GameObject("player");
    this.playerVisual = new GameObject();
    this.player.addChild(this.playerVisual);

    this.playerVisual.addComponent(new Transform(-boatTopSprite.width/2, -boatTopSprite.height/2));
    this.playerVisual.addComponent(new ImageComponent(boatTopSprite));
    this.player.addComponent(new Physics2D());
    this.player.addComponent(new BoatInputComponent());
    this.player.addComponent(new Transform(500,500));
    this.player.addComponent(new RectColliderComponent(AABB.MakeTopLeftSize(0,0,boatTopSprite.width / 2, boatTopSprite.height/2)));
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
      new p5.Vector(-width / 2, -height / 2, 0),
      new p5.Vector(0,0,0),
      new p5.Vector(mapBackground.width * 0.85 - width,mapBackground.height * 0.8 - height, 100000000)));

    this.addGameObject(this.camera);
  }

  backgroundOBJ() {
    //BACKGROUND SETUP//
    this.background = new GameObject();

    this.background.addComponent(new Transform());

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

  dockTrigger() {

    //ACTIVATES TRIGGER TO DOCK//
    this.dockTrigger = new GameObject();
    this.dockTriggerSpeech = new GameObject();

    this.dockTrigger.addComponent(new Transform());
    this.dockTrigger.addComponent(new TriggerComponent(new EnableGameObjectAction(this.dockTriggerSpeech)));
    this.dockTrigger.addComponent(new RectColliderComponent(AABB.MakeTopLeftSize(600,1750,400,100)));
    this.dockTrigger.addComponent(new RenderDebugComponent());

    this.dockTriggerSpeech.addComponent(new Transform());
    this.dockTriggerSpeech.addComponent(new AnimationComponent(eInteractAnimation,3));
    this.dockTriggerSpeech.addComponent(new RectColliderComponent(AABB.MakeTopLeftSize(0,0,eInteractAnimation.width,eInteractAnimation.height)));
    this.dockTriggerSpeech.addComponent(new RenderDebugComponent());
    this.dockTriggerSpeech.addComponent(new KeyboardEventComponent(69, new ChangeSceneAction("Outside")));
    this.dockTriggerSpeech.addComponent(new KeyboardEventComponent(69, new PlaySFXAction(pageTurnSFX)));

    this.dockTrigger.addChild(this.dockTriggerSpeech);

    this.dockTriggerSpeech.disable();

    this.addGameObject(this.dockTrigger);
  }

  musicOBJ() {

    this.music = new GameObject();

    this.music.addComponent(new MusicPlayerComponent(boatMusic,0.8));

    this.addGameObject(this.music);
  }

}
