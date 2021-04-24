class OutsideScene extends Scene {

  constructor() {
    super();

    this.blueCatOBJ();
    this.invisibleBoundaryOBJ();
    this.playerSetupOBJ();
    this.cameraOBJ();
    this.backgroundOBJ();
    this.ramenOutsideOBJ();
    this.dirtGroundLoopOBJ();
  }

  invisibleBoundaryOBJ() {
    //DOOR BOUNDARY//
    this.doorBoundary = new GameObject();

    this.doorBoundary.addComponent(new Transform(9400,650));
    this.doorBoundary.addComponent(new Physics2D());
    this.doorBoundary.addComponent(new RectColliderComponent(new AABB(0,0,100,10)));
    this.doorBoundary.addComponent(new RenderDebugComponent());

    this.addGameObject(this.doorBoundary);

    //REAR BOUNDARY//
    this.rearBoundary = new GameObject();

    this.rearBoundary.addComponent(new Transform(9500,400));
    this.rearBoundary.addComponent(new Physics2D());
    this.rearBoundary.addComponent(new RectColliderComponent(new AABB(0,0,10,100)));
    this.rearBoundary.addComponent(new RenderDebugComponent());

    this.addGameObject(this.rearBoundary);

    //TOP BOUNDARY BAR//
    this.topBoundary = new GameObject();

    this.topBoundary.addComponent(new Transform(100,220));
    this.topBoundary.addComponent(new Physics2D());
    this.topBoundary.addComponent(new RectColliderComponent(new AABB(0,0,10000,10)));
    this.topBoundary.addComponent(new RenderDebugComponent());

    this.addGameObject(this.topBoundary);

    //BOTTOM BOUNDARY BAR//
    this.bottomBoundary = new GameObject();

    this.bottomBoundary.addComponent(new Transform(100,700));
    this.bottomBoundary.addComponent(new Physics2D());
    this.bottomBoundary.addComponent(new RectColliderComponent(new AABB(0,0,10000,10)));
    this.bottomBoundary.addComponent(new RenderDebugComponent());

    this.addGameObject(this.bottomBoundary);
  }

  playerSetupOBJ() {
    //PLAYER SETUP//
    this.player = new GameObject();

    this.player.addComponent(new Physics2D());
    this.player.addComponent(new PlayerInputComponent());
    this.player.addComponent(new Transform(9350,460));
    this.player.addComponent(new DirectionalAnimationComponenet(chloeLeftAnimation, chloeRightAnimation, chloeLeftStationary, chloeRightStationary));
    this.player.addComponent(new RectColliderComponent(new AABB(0,0,chloeLeftStationary.width / 2, chloeLeftStationary.height / 2)));
    this.player.addComponent(new RenderDebugComponent());

    this.player.getTransform().local.position.z = 0;

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

    //SKY BACKGROUND//
    let skyLayer = new GameObject();

    skyLayer.addComponent(new Transform());
    skyLayer.addComponent(new ImageComponent(outsideSky, 4, 1));

    this.background.addChild(skyLayer);

    skyLayer.getTransform().local.position.z = 90;
    skyLayer.getTransform().local.setScale(0.6,0.6);

    //NEAR MOUNTAINS//
    let layer0 = new GameObject();

    layer0.addComponent(new Transform());
    layer0.addComponent(new ImageComponent(outsideBKGMountains0, 4, 1));

    this.background.addChild(layer0);

    layer0.getTransform().local.position.z = 60;
    layer0.getTransform().local.position.y = 120;

    //FAR MOUNTAINS//
    let layer1 = new GameObject();

    layer1.addComponent(new Transform());
    layer1.addComponent(new ImageComponent(outsideBKGMountains1, 4, 1));

    this.background.addChild(layer1);

    layer1.getTransform().local.position.z = 80;

    //TREES//
    let layer2 = new GameObject();
    let layer2_0 = new GameObject();
    layer2.addChild(layer2_0);

    layer2.addComponent(new Transform());
    layer2_0.addComponent(new Transform());
    layer2_0.addComponent(new ImageComponent(outsideTrees, 1, 1));

    this.background.addChild(layer2);

    layer2.getTransform().local.position.z = 50;
    layer2_0.getTransform().local.position.x = 1200;
    layer2_0.getTransform().local.position.y = -50;

    this.addGameObject(this.background);
  }

  dirtGroundLoopOBJ() {
    //DIRT GROUND LOOP//
    this.groundLoop = new GameObject();

    this.groundLoop.addComponent(new Transform());
    this.groundLoop.addComponent(new ImageComponent(outsideGroundLoop, 4, 1));

    this.groundLoop.getTransform().local.setScale(0.9,0.9);
    this.groundLoop.getTransform().local.setPosition(0,-260,1);
    this.groundLoop.getTransform().local.position.z = 2;

    this.addGameObject(this.groundLoop);
  }

  ramenOutsideOBJ() {
    //OUTSIDE RAMEN ENTRANCE//
    this.ramenOutside = new GameObject();

    this.ramenOutside.addComponent(new Transform(9300,75));
    this.ramenOutside.addComponent(new ImageComponent(ramenOutside,1,1));

    this.ramenOutside.getTransform().local.setScale(0.9,0.9);
    this.ramenOutside.getTransform().local.position.z = -1;


    this.addGameObject(this.ramenOutside);
  }

  blueCatOBJ() {
    //BLUE CAT SPRITE//
    this.blueCatSprite = new GameObject();
    this.speechBubble = new GameObject();

    this.blueCatSprite.addComponent(new Transform(7000,20));
    this.blueCatSprite.addComponent(new ImageComponent(characterBlueCat,1,1));
    // this.blueCatSprite.addComponent(new TriggerComponent(new PrintAction('I smell of meatball')));
    this.blueCatSprite.addComponent(new TriggerComponent(new EnableGameObjectAction(this.speechBubble)));
    this.blueCatSprite.addComponent(new RectColliderComponent(new AABB(0,500,500,100)));
    this.blueCatSprite.addComponent(new RenderDebugComponent());

    this.speechBubble.addComponent(new Transform(850,50));
    this.speechBubble.addComponent(new ImageComponent(speechBubbleIcon,1,1));

    this.blueCatSprite.getTransform().local.position.z = 1;
    this.blueCatSprite.getTransform().local.setScale(0.5,0.5);

    this.blueCatSprite.addChild(this.speechBubble);

    this.speechBubble.disable();

    this.addGameObject(this.blueCatSprite);
  }

  // update(){
  //   super.update();
  //   if(this.player.enabled){
  //     this.player.disable();
  //   } else{
  //     this.player.enable();
  //   }
  // }
}
