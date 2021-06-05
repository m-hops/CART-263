class OpeningScene extends Scene {

  constructor() {

    super();

    this.cameraOBJ();

    this.dialogBox = new DialogBox(this.camera);
    this.addGameObject(this.dialogBox);
    this.dialogBox.disable();

    this.MusicOBJ();
    this.chloeNormalOBJ();

  }

  MusicOBJ() {

    this.music = new GameObject();

    this.music.addComponent(new MusicPlayerComponent(introMusic));

    this.addGameObject(this.music);
  }

  cameraOBJ() {
    //CAMERA SETUP//
    this.camera = new GameObject();

    this.camera.addComponent(new CameraComponent());
    this.camera.addComponent(new Transform());

    this.addGameObject(this.camera);
  }

  chloeNormalOBJ() {
    //REGULAR SILHOUETTE OF CHLOE//
    this.chloeNormal = new GameObject();

    this.chloeNormal.addComponent(new Transform(550, 200));
    this.chloeNormal.addComponent(new AnimationComponent(chloeOpeningFallAnimation));

    this.addGameObject(this.chloeNormal);
  }

  start() {
    super.start();

    let afterDialogAction = new ChangeSceneAction("Negative Space");

    this.dialogBox.playScript(new DialogScriptJSON(openingDialog0), afterDialogAction); 

  }
}
