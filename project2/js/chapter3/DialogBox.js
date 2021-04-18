class DialogBox extends GameObject {

  constructor() {
    super();

    // CREATE A GAMEOBJECT HIERARCHY LIKE SO:
    //GO DialogBox
    //  Comp Transform
    //  GO Text
    //    Comp Transform
    //    Comp TextComponent
    //  GO Name
    //    Comp Transform
    //    Comp TextComponent
    //  GO Background
    //    Comp Transform
    //    Comp ImageComponent
    this.name = "Dialog Box";

    let transform = new Transform();
    this.addComponent(transform);

    this.textGO = new GameObject();
    let textTransform = new Transform();
    textTransform.local.setPosition(10,100,-1);
    this.textGO.addComponent(textTransform);
    this.text = new TextComponent();
    this.textGO.addComponent(this.text);
    this.addChild(this.textGO);

    this.nameGO = new GameObject();
    let nameTransform = new Transform();
    nameTransform.local.setPosition(10,10,-1);
    this.nameGO.addComponent(nameTransform);
    this.name = new TextComponent();
    this.nameGO.addComponent(this.name);
    this.addChild(this.nameGO);

    this.backgroundGO = new GameObject();
    let backgroundTransform = new Transform();
    this.backgroundGO.addComponent(backgroundTransform);
    this.background = new ImageComponent();
    this.backgroundGO.addComponent(this.background);
    this.addChild(this.backgroundGO);

    
  }

  setText(characterName, msg) {
    this.name.text = characterName;
    this.text.text = msg;

  }

  setBackground(img) {
    this.background.image = img;
  }
}
