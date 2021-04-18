class DialogScene extends Scene {

  constructor() {
    super();

    this.dialogGO = new DialogBox();
    // this.dialogGO.setText("Poo Poo", "I smell like poo poo. Uh oh stinky!")
    this.dialogGO.setBackground(chloeLeftStationary);

    this.dialogGO.addComponent(new Physics2D());
    this.dialogGO.addComponent(new PlayerInputComponent());

    this.dialogGO.updateAsyn();
    this.dialogGO.getTransform().local.setPosition(0,height-225);
    this.addGameObject(this.dialogGO);
  }
}
