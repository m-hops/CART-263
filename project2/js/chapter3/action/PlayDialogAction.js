
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
