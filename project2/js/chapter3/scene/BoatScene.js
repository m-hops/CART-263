class BoatScene extends Scene {

  constructor() {

    super();

    this.playerSetupOBJ();
    this.cameraOBJ();

    this.dialogBox = new DialogBox(this.camera);
    this.addGameObject(this.dialogBox);
    this.dialogBox.disable();

    this.backgroundOBJ();
    this.zone0Trigger();
    this.musicOBJ();

  }

  playerSetupOBJ() {
    //PLAYER SETUP//
    this.player = new GameObject("player");
    this.playerVisual = new GameObject();
    this.player.addChild(this.playerVisual);

    let trf = new Transform();

    this.playerVisual.addComponent(new Transform(-boatTopSprite.width/2, -boatTopSprite.height/2));
    this.playerVisual.addComponent(new ImageComponent(boatTopSprite));
    this.player.addComponent(new Physics2D());
    this.player.addComponent(new BoatInputComponent());
    this.player.addComponent(trf);
    this.player.addComponent(new RectColliderComponent(AABB.MakeTopLeftSize(0,0,boatTopSprite.width / 2, boatTopSprite.height/2)));
    this.player.addComponent(new RenderDebugComponent());

    this.player.getTransform().local.position.z = 0;

    if (gameState.previousScene == "Outside") {
      trf.local.position = createVector(900,1500,0);
    }

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

  zone0Trigger() {

    //ACTIVATES TRIGGER TO DOCK//
    this.zone0Trigger = new GameObject();
    this.zone0TriggerInteract = new GameObject();

    this.zone0Trigger.addComponent(new Transform());
    this.zone0Trigger.addComponent(new TriggerComponent(new EnableGameObjectAction(this.zone0TriggerInteract)));
    this.zone0Trigger.addComponent(new RectColliderComponent(AABB.MakeTopLeftSize(600,1550,600,250)));
    this.zone0Trigger.addComponent(new RenderDebugComponent());

    this.zone0TriggerInteract.addComponent(new Transform(900,1750));
    this.zone0TriggerInteract.addComponent(new AnimationComponent(eInteractAnimation,3));
    this.zone0TriggerInteract.addComponent(new RectColliderComponent(AABB.MakeTopLeftSize(0,0,eInteractAnimation.width,eInteractAnimation.height)));
    this.zone0TriggerInteract.addComponent(new RenderDebugComponent());
    this.zone0TriggerInteract.addComponent(new KeyboardEventComponent(69, new ChangeSceneAction("Outside")));
    this.zone0TriggerInteract.addComponent(new KeyboardEventComponent(69, new PlaySFXAction(pageTurnSFX)));

    this.zone0TriggerInteract.getTransform().local.setScale(0.7,0.7);

    this.zone0Trigger.addChild(this.zone0TriggerInteract);

    this.zone0TriggerInteract.disable();

    this.addGameObject(this.zone0Trigger);
  }

  musicOBJ() {

    this.music = new GameObject();

    this.music.addComponent(new MusicPlayerComponent(boatMusic,0.8));

    this.addGameObject(this.music);
  }

  start() {
    super.start();
    this.dialogBox.playScript(new DialogScriptJSON(boatDialog263_0));

  }

}
