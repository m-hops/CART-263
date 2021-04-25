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
    this.fencePostOBJ();
    this.toDockSignOBJ();
  }

  invisibleBoundaryOBJ() {
    //DOOR BOUNDARY//
    this.doorBoundary = new GameObject("doorBoundary");

    this.doorBoundary.addComponent(new Transform(9400,650));
    this.doorBoundary.addComponent(new Physics2D());
    this.doorBoundary.addComponent(new RectColliderComponent(new AABB(0,0,100,10)));
    this.doorBoundary.addComponent(new RenderDebugComponent());

    this.addGameObject(this.doorBoundary);

    //REAR BOUNDARY//
    this.rearBoundary = new GameObject("rearBoundary");

    this.rearBoundary.addComponent(new Transform(9500,400));
    this.rearBoundary.addComponent(new Physics2D());
    this.rearBoundary.addComponent(new RectColliderComponent(new AABB(0,0,10,100)));
    this.rearBoundary.addComponent(new RenderDebugComponent());

    this.addGameObject(this.rearBoundary);

    //TOP BOUNDARY BAR//
    this.topBoundary = new GameObject("topBoundary");

    this.topBoundary.addComponent(new Transform(100,220));
    this.topBoundary.addComponent(new Physics2D());
    this.topBoundary.addComponent(new RectColliderComponent(new AABB(0,0,10000,10)));
    this.topBoundary.addComponent(new RenderDebugComponent());

    this.addGameObject(this.topBoundary);

    //BOTTOM BOUNDARY BAR//
    this.bottomBoundary = new GameObject("bottomBoundary");

    this.bottomBoundary.addComponent(new Transform(100,700));
    this.bottomBoundary.addComponent(new Physics2D());
    this.bottomBoundary.addComponent(new RectColliderComponent(new AABB(0,0,10000,10)));
    this.bottomBoundary.addComponent(new RenderDebugComponent());

    this.addGameObject(this.bottomBoundary);
  }

  playerSetupOBJ() {
    //PLAYER SETUP//
    this.player = new GameObject("player");

    this.player.addComponent(new Physics2D());
    this.player.addComponent(new PlayerInputComponent());
    this.player.addComponent(new Transform(9250,460));
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

    //FENCE SECTION//
    let chainedFence0 = new GameObject();
    let chainedFence0_0 = new GameObject();
    chainedFence0.addChild(chainedFence0_0);

    chainedFence0.addComponent(new Transform());
    chainedFence0_0.addComponent(new Transform());
    chainedFence0_0.addComponent(new ImageComponent(outsideChainlinkFence[0], 1, 1));

    this.background.addChild(chainedFence0);

    chainedFence0.getTransform().local.position.z = 20;
    chainedFence0_0.getTransform().local.position.x = 6600;
    chainedFence0_0.getTransform().local.position.y = 320;
    chainedFence0_0.getTransform().local.rotation = 15 / 180 * 3.1415;

    //

    let chainedFence1 = new GameObject();
    let chainedFence1_0 = new GameObject();
    chainedFence1.addChild(chainedFence1_0);

    chainedFence1.addComponent(new Transform());
    chainedFence1_0.addComponent(new Transform());
    chainedFence1_0.addComponent(new ImageComponent(outsideChainlinkFence[1], 1, 1));

    this.background.addChild(chainedFence1);

    chainedFence1.getTransform().local.position.z = 20;
    chainedFence1_0.getTransform().local.position.x = 6130;
    chainedFence1_0.getTransform().local.position.y = 205;
    chainedFence1_0.getTransform().local.rotation = 15 / 180 * 3.1415;

    //

    let chainedFence2 = new GameObject();
    let chainedFence2_0 = new GameObject();
    chainedFence2.addChild(chainedFence2_0);

    chainedFence2.addComponent(new Transform());
    chainedFence2_0.addComponent(new Transform());
    chainedFence2_0.addComponent(new ImageComponent(outsideChainlinkFence[0], 1, 1));

    this.background.addChild(chainedFence2);

    chainedFence2.getTransform().local.position.z = 20;
    chainedFence2_0.getTransform().local.position.x = 4800;
    chainedFence2_0.getTransform().local.position.y = 320;
    chainedFence2_0.getTransform().local.rotation = 358 / 180 * 3.1415;

    //

    let chainedFence3 = new GameObject();
    let chainedFence3_0 = new GameObject();
    chainedFence3.addChild(chainedFence3_0);

    chainedFence3.addComponent(new Transform());
    chainedFence3_0.addComponent(new Transform());
    chainedFence3_0.addComponent(new ImageComponent(outsideChainlinkFence[0], 1, 1));

    this.background.addChild(chainedFence3);

    chainedFence3.getTransform().local.position.z = 20;
    chainedFence3_0.getTransform().local.position.x = 3800;
    chainedFence3_0.getTransform().local.position.y = 320;
    chainedFence3_0.getTransform().local.rotation = 2 / 180 * 3.1415;

    //

    let chainedFence4 = new GameObject();
    let chainedFence4_0 = new GameObject();
    chainedFence4.addChild(chainedFence4_0);

    chainedFence4.addComponent(new Transform());
    chainedFence4_0.addComponent(new Transform());
    chainedFence4_0.addComponent(new ImageComponent(outsideChainlinkFence[1], 1, 1));

    this.background.addChild(chainedFence4);

    chainedFence4.getTransform().local.position.z = 20;
    chainedFence4_0.getTransform().local.position.x = 3300;
    chainedFence4_0.getTransform().local.position.y = 300;
    chainedFence4_0.getTransform().local.rotation = 2 / 180 * 3.1415;

    //

    let chainedFence5 = new GameObject();
    let chainedFence5_0 = new GameObject();
    chainedFence5.addChild(chainedFence5_0);

    chainedFence5.addComponent(new Transform());
    chainedFence5_0.addComponent(new Transform());
    chainedFence5_0.addComponent(new ImageComponent(outsideChainlinkFence[0], 1, 1));

    this.background.addChild(chainedFence5);

    chainedFence5.getTransform().local.position.z = 20;
    chainedFence5_0.getTransform().local.position.x = 2600;
    chainedFence5_0.getTransform().local.position.y = 320;
    chainedFence5_0.getTransform().local.rotation = 358 / 180 * 3.1415;

    //

    let chainedFence6 = new GameObject();
    let chainedFence6_0 = new GameObject();
    chainedFence6.addChild(chainedFence6_0);

    chainedFence6.addComponent(new Transform());
    chainedFence6_0.addComponent(new Transform());
    chainedFence6_0.addComponent(new ImageComponent(outsideChainlinkFence[1], 1, 1));

    this.background.addChild(chainedFence6);

    chainedFence6.getTransform().local.position.z = 20;
    chainedFence6_0.getTransform().local.position.x = 2095;
    chainedFence6_0.getTransform().local.position.y = 335;
    chainedFence6_0.getTransform().local.rotation = 358 / 180 * 3.1415;

    //

    let chainedFence7 = new GameObject();
    let chainedFence7_0 = new GameObject();
    chainedFence7.addChild(chainedFence7_0);

    chainedFence7.addComponent(new Transform());
    chainedFence7_0.addComponent(new Transform());
    chainedFence7_0.addComponent(new ImageComponent(outsideChainlinkFence[1], 1, 1));

    this.background.addChild(chainedFence7);

    chainedFence7.getTransform().local.position.z = 20;
    chainedFence7_0.getTransform().local.position.x = 1590;
    chainedFence7_0.getTransform().local.position.y = 350;
    chainedFence7_0.getTransform().local.rotation = 358 / 180 * 3.1415;

    //

    let chainedFence8 = new GameObject();
    let chainedFence8_0 = new GameObject();
    chainedFence8.addChild(chainedFence8_0);

    chainedFence8.addComponent(new Transform());
    chainedFence8_0.addComponent(new Transform());
    chainedFence8_0.addComponent(new ImageComponent(outsideChainlinkFence[1], 1, 1));

    this.background.addChild(chainedFence8);

    chainedFence8.getTransform().local.position.z = 20;
    chainedFence8_0.getTransform().local.position.x = 1085;
    chainedFence8_0.getTransform().local.position.y = 365;
    chainedFence8_0.getTransform().local.rotation = 358 / 180 * 3.1415;

    //

    let chainedFence9 = new GameObject();
    let chainedFence9_0 = new GameObject();
    chainedFence9.addChild(chainedFence9_0);

    chainedFence9.addComponent(new Transform());
    chainedFence9_0.addComponent(new Transform());
    chainedFence9_0.addComponent(new ImageComponent(outsideChainlinkFence[0], 1, 1));

    this.background.addChild(chainedFence9);

    chainedFence9.getTransform().local.position.z = 20;
    chainedFence9_0.getTransform().local.position.x = 100;
    chainedFence9_0.getTransform().local.position.y = 300;
    chainedFence9_0.getTransform().local.rotation = 10 / 180 * 3.1415;

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
    this.ramenIntoTrigger = new GameObject;

    this.ramenOutside.addComponent(new Transform(9300,75));
    this.ramenOutside.addComponent(new ImageComponent(ramenOutside,1,1));
    this.ramenOutside.addComponent(new TriggerComponent(new EnableGameObjectAction(this.ramenIntoTrigger)));
    this.ramenOutside.addComponent(new RectColliderComponent(AABB.MakeTopLeftSize(120,400,50,100)));
    this.ramenOutside.addComponent(new RenderDebugComponent());

    this.ramenIntoTrigger.addComponent(new Transform(60,290));
    this.ramenIntoTrigger.addComponent(new ImageComponent(eInteractImage,1,1));
    this.ramenIntoTrigger.addComponent(new RectColliderComponent(AABB.MakeTopLeftSize(0,0,eInteractImage.width,eInteractImage.height)));
    this.ramenIntoTrigger.addComponent(new RenderDebugComponent());

    this.ramenOutside.getTransform().local.setScale(0.9,0.9);
    this.ramenOutside.getTransform().local.position.z = -1;
    this.ramenIntoTrigger.getTransform().local.setScale(0.7,0.7);

    this.ramenOutside.addChild(this.ramenIntoTrigger);

    this.ramenIntoTrigger.disable();

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
    this.blueCatSprite = new GameObject('blueCatSprite');
    this.speechBubbleCat = new GameObject('speechBubble');

    this.blueCatSprite.addComponent(new Transform(7000,120));
    this.blueCatSprite.addComponent(new ImageComponent(characterBlueCat,1,1));
    this.blueCatSprite.addComponent(new TriggerComponent(new EnableGameObjectAction(this.speechBubbleCat)));
    this.blueCatSprite.addComponent(new RectColliderComponent(AABB.MakeTopLeftSize(0,600,1000,100)));
    this.blueCatSprite.addComponent(new RenderDebugComponent());

    this.speechBubbleCat.addComponent(new Transform(850,50));
    this.speechBubbleCat.addComponent(new ImageComponent(speechBubbleIcon,1,1));
    this.speechBubbleCat.addComponent(new RectColliderComponent(AABB.MakeTopLeftSize(0,0,speechBubbleIcon.width,speechBubbleIcon.height)));
    this.speechBubbleCat.addComponent(new RenderDebugComponent());

    this.blueCatSprite.getTransform().local.position.z = 1;
    this.blueCatSprite.getTransform().local.setScale(0.4,0.4);

    this.blueCatSprite.addChild(this.speechBubbleCat);

    this.speechBubbleCat.disable();

    this.addGameObject(this.blueCatSprite);
  }

  meltChickenOBJ() {
    //MELT CHICKEN SPRITE//
    this.meltChickenSprite = new GameObject();
    this.speechBubbleChicken = new GameObject();

    this.meltChickenSprite.addComponent(new Transform(2000,150));
    this.meltChickenSprite.addComponent(new ImageComponent(characterMeltChicken,1,1));
    this.meltChickenSprite.addComponent(new TriggerComponent(new EnableGameObjectAction(this.speechBubbleChicken)));
    this.meltChickenSprite.addComponent(new RectColliderComponent(AABB.MakeTopLeftSize(100,300,1200,150)));
    this.meltChickenSprite.addComponent(new RenderDebugComponent());

    this.speechBubbleChicken.addComponent(new Transform(1000,-100));
    this.speechBubbleChicken.addComponent(new ImageComponent(speechBubbleIcon,1,1));
    this.speechBubbleChicken.addComponent(new RectColliderComponent(AABB.MakeTopLeftSize(0,0,speechBubbleIcon.width,speechBubbleIcon.height)));
    this.speechBubbleChicken.addComponent(new RenderDebugComponent());

    this.meltChickenSprite.getTransform().local.position.z = 1;
    this.meltChickenSprite.getTransform().local.setScale(0.5,0.5);

    this.meltChickenSprite.addChild(this.speechBubbleChicken);

    this.speechBubbleChicken.disable();

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
    this.speechBubblePhone = new GameObject();

    this.phoneBooth.addComponent(new Transform(3900,240));
    this.phoneBooth.addComponent(new AnimationComponent(outsidePhoneBooth,1));
    this.phoneBooth.addComponent(new TriggerComponent(new EnableGameObjectAction(this.speechBubblePhone)));
    this.phoneBooth.addComponent(new RectColliderComponent(AABB.MakeTopLeftSize(0,100,200,100)));
    this.phoneBooth.addComponent(new RenderDebugComponent());

    this.speechBubblePhone.addComponent(new Transform(300,-300));
    this.speechBubblePhone.addComponent(new ImageComponent(speechBubbleIcon,1,1));
    this.speechBubblePhone.addComponent(new RectColliderComponent(AABB.MakeTopLeftSize(0,100,speechBubbleIcon.width,speechBubbleIcon.height)));
    this.speechBubblePhone.addComponent(new RenderDebugComponent());

    this.phoneBooth.getTransform().local.setScale(0.75,0.75);
    this.phoneBooth.getTransform().local.position.z = 1;
    this.speechBubblePhone.getTransform().local.setScale(0.6,0.6);

    this.phoneBooth.addChild(this.speechBubblePhone);

    this.speechBubblePhone.disable();

    this.addGameObject(this.phoneBooth);
  }

  comeBackSignOBJ() {

    //COME BACK SIGN OBJECT//
    this.comeBackSign = new GameObject();
    this.speechBubbleSign = new GameObject();

    this.comeBackSign.addComponent(new Transform(8200,350));
    this.comeBackSign.addComponent(new ImageComponent(outsideComeBackSign,1,1));
    this.comeBackSign.addComponent(new TriggerComponent(new EnableGameObjectAction(this.speechBubbleSign)));
    this.comeBackSign.addComponent(new RectColliderComponent(AABB.MakeTopLeftSize(0,600,4000,1000)));
    this.comeBackSign.addComponent(new RenderDebugComponent());

    this.speechBubbleSign.addComponent(new Transform(1700,-1500));
    this.speechBubbleSign.addComponent(new ImageComponent(speechBubbleIcon,1,1));
    this.speechBubbleSign.addComponent(new RectColliderComponent(AABB.MakeTopLeftSize(0,100,speechBubbleIcon.width,speechBubbleIcon.height)));
    this.speechBubbleSign.addComponent(new RenderDebugComponent());

    this.comeBackSign.getTransform().local.position.z = 1;
    this.comeBackSign.getTransform().local.setScale(0.1,0.1);
    this.speechBubbleSign.getTransform().local.setScale(4,4);

    this.comeBackSign.addChild(this.speechBubbleSign);

    this.speechBubbleSign.disable();

    this.addGameObject(this.comeBackSign);
  }

  fencePostOBJ() {

    //BROKEN FENCE POST OBJECT0//
    this.fencePost0 = new GameObject();

    this.fencePost0.addComponent(new Transform(8000,240));
    this.fencePost0.addComponent(new ImageComponent(outsideBarbedFence[0]));

    this.fencePost0.getTransform().local.setScale(0.75,0.75);
    this.fencePost0.getTransform().local.position.z = 1;

    this.addGameObject(this.fencePost0);

    //BROKEN FENCE POST OBJECTS1//
    this.fencePost1 = new GameObject();

    this.fencePost1.addComponent(new Transform(6300,200));
    this.fencePost1.addComponent(new ImageComponent(outsideBarbedFence[1]));

    this.fencePost1.getTransform().local.setScale(1,1);
    this.fencePost1.getTransform().local.position.z = 1;

    this.addGameObject(this.fencePost1);

    //BROKEN FENCE POST OBJECTS2//
    this.fencePost2 = new GameObject();

    this.fencePost2.addComponent(new Transform(6600,200));
    this.fencePost2.addComponent(new ImageComponent(outsideBarbedFence[2]));

    this.fencePost2.getTransform().local.setScale(1,1);
    this.fencePost2.getTransform().local.position.z = 1;

    this.addGameObject(this.fencePost2);

    //BROKEN FENCE POST OBJECTS3//
    this.fencePost3 = new GameObject();

    this.fencePost3.addComponent(new Transform(5600,265));
    this.fencePost3.addComponent(new ImageComponent(outsideBarbedFence[3]));

    this.fencePost3.getTransform().local.setScale(0.7,0.7);
    this.fencePost3.getTransform().local.position.z = 2;

    this.addGameObject(this.fencePost3);

    //BROKEN FENCE POST OBJECTS4//
    this.fencePost4 = new GameObject();

    this.fencePost4.addComponent(new Transform(5400,290));
    this.fencePost4.addComponent(new ImageComponent(outsideBarbedFence[2]));

    this.fencePost4.getTransform().local.setScale(0.7,0.7);
    this.fencePost4.getTransform().local.position.z = 2;

    this.addGameObject(this.fencePost4);

    //BROKEN FENCE POST OBJECTS5//
    this.fencePost5 = new GameObject();

    this.fencePost5.addComponent(new Transform(3750,310));
    this.fencePost5.addComponent(new ImageComponent(outsideBarbedFence[2]));

    this.fencePost5.getTransform().local.setScale(0.6,0.6);
    this.fencePost5.getTransform().local.position.z = 2;

    this.addGameObject(this.fencePost5);

    //BROKEN FENCE POST OBJECTS6//
    this.fencePost6 = new GameObject();

    this.fencePost6.addComponent(new Transform(2000,310));
    this.fencePost6.addComponent(new ImageComponent(outsideBarbedFence[0]));

    this.fencePost6.getTransform().local.setScale(0.6,0.6);
    this.fencePost6.getTransform().local.position.z = 2;

    this.addGameObject(this.fencePost6);

    //BROKEN FENCE POST OBJECTS7//
    this.fencePost7 = new GameObject();

    this.fencePost7.addComponent(new Transform(1100,275));
    this.fencePost7.addComponent(new ImageComponent(outsideBarbedFence[2]));

    this.fencePost7.getTransform().local.setScale(0.9,0.9);
    this.fencePost7.getTransform().local.position.z = 1;

    this.addGameObject(this.fencePost7);
  }

  toDockSignOBJ() {

    //TO DOCK SIGN OBJ//
    this.toDockSign = new GameObject();
    this.speechBubbleSign = new GameObject();

    this.toDockSign.addComponent(new Transform(500,-10));
    this.toDockSign.addComponent(new ImageComponent(outsideToDockSign,1,1));

    this.toDockSign.getTransform().local.position.z = 3;
    this.toDockSign.getTransform().local.setScale(0.4,0.4);

    this.addGameObject(this.toDockSign);
  }
}
