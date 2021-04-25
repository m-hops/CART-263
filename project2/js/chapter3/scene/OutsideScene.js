class OutsideScene extends Scene {

  constructor() {
    super();

    this.blueCatOBJ();
    this.meltChickenOBJ();
    this.phoneBoothOBJ();
    this.streetLampsOBJ();
    this.invisibleBoundaryOBJ();
    this.playerSetupOBJ();
    this.cameraOBJ();
    this.backgroundOBJ();
    this.ramenOutsideOBJ();
    this.dirtGroundLoopOBJ();
    this.foregroundLoopOBJ();
    this.fogEffectOBJ();
    this.comeBackSignOBJ();
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

  foregroundLoopOBJ() {
    //BACKGROUND SETUP//
    this.foregroundMaster = new GameObject();

    this.foregroundMaster.addComponent(new Transform());
    this.foregroundMaster.addComponent(new ParalaxComponent());
    this.foregroundMaster.addComponent(new AttachToComponent(this.camera, true, false, false,
      new p5.Vector(0, 0, 0),
      new p5.Vector(0,0,0),
      new p5.Vector(10000000, height, 100000000)));

    //FOREGROUND HILL LOOP//
    this.foregroundLoop = new GameObject();
    this.foregroundLoop_0 = new GameObject();
    this.foregroundLoop.addChild(this.foregroundLoop_0);

    this.foregroundLoop.addComponent(new Transform());
    this.foregroundLoop_0.addComponent(new Transform());
    this.foregroundLoop_0.addComponent(new ImageComponent(outsideForegroundLoop, 5, 1));

    this.foregroundLoop.getTransform().local.position.z = -20;
    this.foregroundLoop_0.getTransform().local.position.y = 550;
    this.foregroundLoop_0.getTransform().local.position.x = 0;

    this.foregroundMaster.addChild(this.foregroundLoop);

    //FOREGROUND OBJECT 0//
    this.foregroundOBJ0 = new GameObject();
    this.foregroundOBJ0_0 = new GameObject();
    this.foregroundOBJ0.addChild(this.foregroundOBJ0_0);

    this.foregroundOBJ0.addComponent(new Transform());
    this.foregroundOBJ0_0.addComponent(new Transform());
    this.foregroundOBJ0_0.addComponent(new ImageComponent(outsideForegroundOBJ[0], 1, 1));

    this.foregroundOBJ0.getTransform().local.position.z = -10;
    this.foregroundOBJ0_0.getTransform().local.position.y = 410;
    this.foregroundOBJ0_0.getTransform().local.position.x = 8200;
    this.foregroundOBJ0_0.getTransform().local.setScale(0.6,0.6);

    this.foregroundMaster.addChild(this.foregroundOBJ0);

    //FOREGROUND OBJECT 1//
    this.foregroundOBJ1 = new GameObject();
    this.foregroundOBJ1_0 = new GameObject();
    this.foregroundOBJ1.addChild(this.foregroundOBJ1_0);

    this.foregroundOBJ1.addComponent(new Transform());
    this.foregroundOBJ1_0.addComponent(new Transform());
    this.foregroundOBJ1_0.addComponent(new ImageComponent(outsideForegroundOBJ[1], 1, 1));

    this.foregroundOBJ1.getTransform().local.position.z = -10;
    this.foregroundOBJ1_0.getTransform().local.position.y = 410;
    this.foregroundOBJ1_0.getTransform().local.position.x = 8200;
    this.foregroundOBJ1_0.getTransform().local.setScale(0.6,0.6);

    this.foregroundMaster.addChild(this.foregroundOBJ1);

    //FOREGROUND OBJECT 2//
    this.foregroundOBJ2 = new GameObject();
    this.foregroundOBJ2_0 = new GameObject();
    this.foregroundOBJ2.addChild(this.foregroundOBJ2_0);

    this.foregroundOBJ2.addComponent(new Transform());
    this.foregroundOBJ2_0.addComponent(new Transform());
    this.foregroundOBJ2_0.addComponent(new ImageComponent(outsideForegroundOBJ[1], 1, 1));

    this.foregroundOBJ2.getTransform().local.position.z = -10;
    this.foregroundOBJ2_0.getTransform().local.position.y = 450;
    this.foregroundOBJ2_0.getTransform().local.position.x = 6200;
    this.foregroundOBJ2_0.getTransform().local.setScale(0.8,0.8);

    this.foregroundMaster.addChild(this.foregroundOBJ2);

    //FOREGROUND OBJECT 3//
    this.foregroundOBJ3 = new GameObject();
    this.foregroundOBJ3_0 = new GameObject();
    this.foregroundOBJ3.addChild(this.foregroundOBJ3_0);

    this.foregroundOBJ3.addComponent(new Transform());
    this.foregroundOBJ3_0.addComponent(new Transform());
    this.foregroundOBJ3_0.addComponent(new ImageComponent(outsideForegroundOBJ[0], 1, 1));

    this.foregroundOBJ3.getTransform().local.position.z = -10;
    this.foregroundOBJ3_0.getTransform().local.position.y = 380;
    this.foregroundOBJ3_0.getTransform().local.position.x = 3000;
    this.foregroundOBJ3_0.getTransform().local.setScale(0.8,0.8);

    this.foregroundMaster.addChild(this.foregroundOBJ3);

    //FOREGROUND OBJECT 4//
    this.foregroundOBJ4 = new GameObject();
    this.foregroundOBJ4_0 = new GameObject();
    this.foregroundOBJ4.addChild(this.foregroundOBJ4_0);

    this.foregroundOBJ4.addComponent(new Transform());
    this.foregroundOBJ4_0.addComponent(new Transform());
    this.foregroundOBJ4_0.addComponent(new ImageComponent(outsideForegroundOBJ[1], 1, 1));

    this.foregroundOBJ4.getTransform().local.position.z = -10;
    this.foregroundOBJ4_0.getTransform().local.position.y = 450;
    this.foregroundOBJ4_0.getTransform().local.position.x = 700;
    this.foregroundOBJ4_0.getTransform().local.setScale(0.8,0.8);

    this.foregroundMaster.addChild(this.foregroundOBJ4);

    this.addGameObject(this.foregroundMaster);
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

  fogEffectOBJ() {
    //FOREGROUND FOG OBJECT//
    this.foregroundFog = new GameObject();

    this.foregroundFog.addComponent(new Transform());
    this.foregroundFog.addComponent(new ImageComponent(outsideForegroundFogLoop, 6,1))

    this.foregroundFog.getTransform().local.position.z = -10;
    this.foregroundFog.getTransform().local.position.y = 450;
    this.foregroundFog.getTransform().local.position.x = 0;

    this.addGameObject(this.foregroundFog);
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

  meltChickenOBJ() {
    //MELT CHICKEN SPRITE//
    this.meltChickenSprite = new GameObject();

    this.meltChickenSprite.addComponent(new Transform(2000,150));
    this.meltChickenSprite.addComponent(new ImageComponent(characterMeltChicken,1,1));

    this.meltChickenSprite.getTransform().local.position.z = 1;
    this.meltChickenSprite.getTransform().local.setScale(0.5,0.5);

    this.addGameObject(this.meltChickenSprite);

  }

  streetLampsOBJ() {
    //ANIMATED STREETLAMPS//
    this.streetlight0 = new GameObject();

    this.streetlight0.addComponent(new Transform(9000,230));
    this.streetlight0.addComponent(new AnimationComponent(outsideStreetlight[0], 30));

    this.streetlight0.getTransform().local.setScale(0.45,0.45);
    this.streetlight0.getTransform().local.position.z = 1;

    this.addGameObject(this.streetlight0);

    //

    this.streetlight1 = new GameObject();

    this.streetlight1.addComponent(new Transform(5600,240));
    this.streetlight1.addComponent(new AnimationComponent(outsideStreetlight[1], 30));

    this.streetlight1.getTransform().local.setScale(0.45,0.45);
    this.streetlight1.getTransform().local.position.z = 1;

    this.addGameObject(this.streetlight1);

    //

    this.streetlight2 = new GameObject();

    this.streetlight2.addComponent(new Transform(6800,270));
    this.streetlight2.addComponent(new AnimationComponent(outsideStreetlight[2], 30));

    this.streetlight2.getTransform().local.setScale(0.45,0.45);
    this.streetlight2.getTransform().local.position.z = 1;

    this.addGameObject(this.streetlight2);

    //

    this.streetlight3 = new GameObject();

    this.streetlight3.addComponent(new Transform(4700,250));
    this.streetlight3.addComponent(new AnimationComponent(outsideStreetlight[3], 30));

    this.streetlight3.getTransform().local.setScale(0.45,0.45);
    this.streetlight3.getTransform().local.position.z = 1;

    this.addGameObject(this.streetlight3);

    //

    this.streetlight4 = new GameObject();

    this.streetlight4.addComponent(new Transform(3250,250));
    this.streetlight4.addComponent(new AnimationComponent(outsideStreetlight[4], 30));

    this.streetlight4.getTransform().local.setScale(0.45,0.45);
    this.streetlight4.getTransform().local.position.z = 1;

    this.addGameObject(this.streetlight4);

    //

    this.streetlight5 = new GameObject();

    this.streetlight5.addComponent(new Transform(1250,250));
    this.streetlight5.addComponent(new AnimationComponent(outsideStreetlight[5], 30));

    this.streetlight5.getTransform().local.setScale(0.45,0.45);
    this.streetlight5.getTransform().local.position.z = 1;

    this.addGameObject(this.streetlight5);

    //

    this.streetlight6 = new GameObject();

    this.streetlight6.addComponent(new Transform(8200,0));
    this.streetlight6.addComponent(new ImageComponent(outsideStreetlight[6], 1, 1));

    this.streetlight6.getTransform().local.setScale(0.45,0.45);
    this.streetlight6.getTransform().local.position.z = 1;

    this.addGameObject(this.streetlight6);

    //

    this.streetlight7 = new GameObject();

    this.streetlight7.addComponent(new Transform(250,25));
    this.streetlight7.addComponent(new ImageComponent(outsideStreetlight[7], 1, 1));

    this.streetlight7.getTransform().local.setScale(0.45,0.45);
    this.streetlight7.getTransform().local.position.z = 1;

    this.addGameObject(this.streetlight7);
  }

  phoneBoothOBJ() {

    //ANIMATED STREETLAMPS//
    this.phoneBooth = new GameObject();

    this.phoneBooth.addComponent(new Transform(3900,240));
    this.phoneBooth.addComponent(new AnimationComponent(outsidePhoneBooth,1));

    this.phoneBooth.getTransform().local.setScale(0.75,0.75);
    this.phoneBooth.getTransform().local.position.z = 1;

    this.addGameObject(this.phoneBooth);
  }

  comeBackSignOBJ() {
    //MELT CHICKEN SPRITE//
    this.comeBackSign = new GameObject();

    this.comeBackSign.addComponent(new Transform(8200,350));
    this.comeBackSign.addComponent(new ImageComponent(outsideComeBackSign,1,1));

    this.comeBackSign.getTransform().local.position.z = 1;
    this.comeBackSign.getTransform().local.setScale(0.1,0.1);

    this.addGameObject(this.comeBackSign);
  }
}
