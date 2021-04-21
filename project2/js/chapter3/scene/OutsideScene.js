class OutsideScene extends Scene {

  constructor() {
    super();

    //PLAYER SETUP//
    this.player = new GameObject();

    this.player.addComponent(new Physics2D());
    this.player.addComponent(new PlayerInputComponent());
    this.player.addComponent(new Transform());
    this.player.addComponent(new DirectionalAnimationComponenet(chloeLeftAnimation, chloeRightAnimation, chloeLeftStationary, chloeRightStationary));

    this.addGameObject(this.player);

    //CAMERA SETUP//
    this.camera = new GameObject();

    this.camera.addComponent(new CameraComponent());
    this.camera.addComponent(new Transform());
    this.camera.addComponent(new AttachToComponent(this.player, true, false, false,
      new p5.Vector(-width / 2, 0, 0),
      new p5.Vector(0,0,0),
      new p5.Vector(width * 2, height, 100000000)));

    this.addGameObject(this.camera);

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
    skyLayer.addComponent(new ImageComponent(outsideSky, 2, 1));
    this.background.addChild(skyLayer);

    skyLayer.getTransform().local.position.z = 90;
    skyLayer.getTransform().local.setScale(0.6,0.6);

    //NEAR MOUNTAINS//
    let layer0 = new GameObject();

    layer0.addComponent(new Transform());
    layer0.addComponent(new ImageComponent(outsideBKGMountains0, 2, 1));
    this.background.addChild(layer0);

    layer0.getTransform().local.position.z = 60;
    layer0.getTransform().local.position.y = 200;

    //FAR MOUNTAINS//
    let layer1 = new GameObject();

    layer1.addComponent(new Transform());
    layer1.addComponent(new ImageComponent(outsideBKGMountains1, 2, 1));

    this.background.addChild(layer1);

    layer1.getTransform().local.position.z = 80;

    this.addGameObject(this.background);

    this.groundLoop = new GameObject();

    this.groundLoop.addComponent(new Transform());
    this.groundLoop.addComponent(new ImageComponent(outsideGroundLoop, 2, 1));

    this.groundLoop.getTransform().local.setScale(0.9,0.9);
    this.groundLoop.getTransform().local.setPosition(0,-260,1);

    this.addGameObject(this.groundLoop);

  }
}
