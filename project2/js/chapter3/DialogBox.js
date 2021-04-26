
class DialogBox extends GameObject {

  constructor(cameraOBJ = null, keyboardFocus = "dialog") {
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

    this.textGO = new GameObject();
    let textTransform = new Transform();
    textTransform.local.setPosition(25,100,-1);
    this.textGO.addComponent(textTransform);
    this.text = new TextComponent();
    this.textGO.addComponent(this.text);
    this.addChild(this.textGO);

    this.nameGO = new GameObject();
    let nameTransform = new Transform();
    nameTransform.local.setPosition(750,30,-1);
    this.nameGO.addComponent(nameTransform);
    this.name = new TextComponent();
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
  setCameraOBJ(camera){

    this.addComponent(new AttachToComponent(camera, true, true, false, createVector(0,height - textBoxBKG.height)));
  }
  start(){
    super.start();
    //this.playScript(new DialogScriptJSON(dialogTest));
    this.disable();
  }
  addListener(onDialog){
      this.onDialog.addListener(onDialog);
  }
  onKeyPressed(evt){
    this.script.moveNextLine();
    this.updateCurrentLine();
  }
  updateCurrentLine(){
    if(this.script.isOver()){
        this.stopCurrentScript();
    } else {
      this.setText(this.script.getCurrentActor(), this.script.getCurrentLine());
    }
  }
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
  setText(actorName, msg) {
    this.name.text = actorName;
    this.text.text = msg;

    console.log("[Dialog box] actor='"+actorName+"': " + msg);
  }

  setBackground(img) {
    this.background.image = img;
  }
}
