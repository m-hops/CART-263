//INITIALIZES DIALOG WHEN CALLED UP IN EVENT//

//DIALOGOBJ IS FOR THE DIALOG BOX, SCRIPT IS FOR THE JSON FILE, ONDONE IF YOU WISH TO INITIALIZE AN ACTION UPON COMPLETION//
class PlayDialogAction extends EventListener{
  constructor(dialogOBJ, script, onDone=null) {

    super();
    this.dialogOBJ = dialogOBJ;
    this.script = script;
    this.onDone = onDone;
  }

  end(event){
    this.dialogOBJ.playScript(this.script, this.onDone);
  }
}
