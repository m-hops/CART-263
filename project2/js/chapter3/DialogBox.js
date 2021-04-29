//CONSTRUCTS AND IMPLEMENTS DIALOG GAME OBJECT//

class DialogBox extends GameObject {

  //PARAMETERS: CAMERAOBJ IS ATTACHED TO CAMERA, KEYBOARDFOCUS DISABLES PLAYER MOVEMENT(ALSO IMPLEMENTED IN KEYBOARDEVENTCOMPONENT)//
  constructor(cameraOBJ = null, keyboardFocus = "dialog", slot0 = null, slot1 = null, slot2 = null) {
    super();
    this.script = null;
    this.onDialog = new Event();
    this.onScriptEnd = null;
    this.scriptPlaying = false;
    this.keyboardFocus = keyboardFocus;

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
    transform.local.position.z = -10;
    this.addComponent(transform);
    this.addComponent(new KeyboardEventComponent(69,new CallbackAction(this.onKeyPressed.bind(this), null), this.keyboardFocus));

    this.backgroundShadeGO = new GameObject();
    let backgroundShadeTransform = new Transform();
    this.backgroundShadeGO.addComponent(backgroundShadeTransform);
    this.backgroundShade = new ImageComponent(dialogBlackShade);
    backgroundShadeTransform.local.setPosition(0,-450);
    this.backgroundShadeGO.addComponent(this.backgroundShade);
    this.addChild(this.backgroundShadeGO);

    this.portraitSlot0GO = new GameObject();
    let portraitSlot0Transform = new Transform();
    this.portraitSlot0GO.addComponent(portraitSlot0Transform);
    this.portraitSlot0 = new ImageComponent(slot0);
    portraitSlot0Transform.local.setPosition(0,-450);
    portraitSlot0Transform.local.setScale(0.5,0.5);
    this.portraitSlot0GO.addComponent(this.portraitSlot0);
    this.addChild(this.portraitSlot0GO);

    this.portraitSlot1GO = new GameObject();
    let portraitSlot1Transform = new Transform();
    this.portraitSlot1GO.addComponent(portraitSlot1Transform);
    this.portraitSlot1 = new ImageComponent(slot1);
    portraitSlot1Transform.local.setPosition(300,-450);
    portraitSlot1Transform.local.setScale(0.4,0.4);
    this.portraitSlot1GO.addComponent(this.portraitSlot1);
    this.addChild(this.portraitSlot1GO);

    this.portraitSlot2GO = new GameObject();
    let portraitSlot2Transform = new Transform();
    this.portraitSlot2GO.addComponent(portraitSlot2Transform);
    this.portraitSlot2 = new ImageComponent(slot2);
    portraitSlot2Transform.local.setPosition(600,-450);
    portraitSlot2Transform.local.setScale(0.4,0.4);
    this.portraitSlot2GO.addComponent(this.portraitSlot2);
    this.addChild(this.portraitSlot2GO);

    this.textGO = new GameObject();
    let textTransform = new Transform();
    textTransform.local.setPosition(25,75,-1);
    this.textGO.addComponent(textTransform);
    this.text = new TextComponent();
    this.textGO.addComponent(this.text);
    this.addChild(this.textGO);

    this.nameGO = new GameObject();
    let nameTransform = new Transform();
    nameTransform.local.setPosition(740,27,-1);
    this.nameGO.addComponent(nameTransform);
    this.name = new TextComponent();
    this.name.textSize = 20;
    this.nameGO.addComponent(this.name);
    this.addChild(this.nameGO);

    this.backgroundGO = new GameObject();
    let backgroundTransform = new Transform();
    this.backgroundGO.addComponent(backgroundTransform);
    this.background = new ImageComponent(textBoxBKG);
    this.backgroundGO.addComponent(this.background);
    this.addChild(this.backgroundGO);

    if(cameraOBJ != null){
      this.setCameraOBJ(cameraOBJ);
    }

  }

  //SETS CAMERA TO ATTACH TO DIALOG BOX//
  setCameraOBJ(camera){

    this.addComponent(new AttachToComponent(camera, true, true, false, createVector(0,height - textBoxBKG.height)));
  }

  //ADDS EVENT LISTENER TO THE DIALOG BOX//
  addListener(onDialog){
      this.onDialog.addListener(onDialog);
  }

  //WHEN PLAYER PRESSES KEY TO ADVANCE DIALOG//
  onKeyPressed(evt){
    this.script.moveNextLine();
    this.updateCurrentLine();
  }

  //PULL FROM CURRENT LINE AND UPDATE VISUAL//
  updateCurrentLine(){
    if(this.script.isOver()){
        this.stopCurrentScript();
    } else {
      this.setText(this.script.getCurrentActor(), this.script.getCurrentLine());

      let portrait0 = portraits[this.script.getCurrentSlot0()];
      this.portraitSlot0.image = portrait0;

      let portrait1 = portraits[this.script.getCurrentSlot1()];
      this.portraitSlot1.image = portrait1;

      let portrait2 = portraits[this.script.getCurrentSlot2()];
      this.portraitSlot2.image = portrait2;
    }
  }

  //STARTS NEW DIALOG SCRIPT//
  playScript(script, onDone = null) {
    this.stopCurrentScript();
    this.onScriptEnd = onDone;
    this.enable();
    this.getScene().pushKeyboardFocus(this.keyboardFocus);
    this.scriptPlaying = true;
    this.script = script;
    this.script.reset();
    if(this.onDialog != null) this.onDialog.begin(this.onDialog);
    this.updateCurrentLine();
  }

  //ENDS CURRENT DIALOG SCRIPT//
  stopCurrentScript(){
    if(this.scriptPlaying){
        this.getScene().popKeyboardFocus(this.keyboardFocus);
        if(this.onDialog != null) this.onDialog.end(this.onDialog);
        if(this.onScriptEnd != null) {
          this.onScriptEnd.raise();
        }
        this.script = null;
        this.scriptPlaying = false;
        console.log("[Dialog box] script over");
    }
    this.disable();
  }

  //UPDATES VISUALS//
  setText(actorName, msg) {
    this.name.text = actorName;
    this.text.text = msg;

    console.log("[Dialog box] actor='"+actorName+"': " + msg);
  }

  //SELECTS BACKGROUND IMAGE//
  setBackground(img) {
    this.background.image = img;
  }
}
