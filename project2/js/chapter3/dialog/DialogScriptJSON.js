//MANAGES ACTIONS OF DIALOG SYSTEM//

class DialogScriptJSON extends DialogScript{
  constructor(json){
    super();
    this.json = json;
    this.currentLine = 0;
    this.previousActor = "";
  }
  reset(){
    this.currentLine = 0;
    this.previousActor = "";
  }

  //SWITCHES TO NEXT LINE//
  moveNextLine(){
    this.previousActor = this.getCurrentActor();
    this.currentLine++;
  }
  //WHEN STARTING THE FIRST LINE OF DIALOG FROM AN ACTOR//
  //HAPPENS WHEN SCRIPT BEGIN AND WHEN ACTOR SWITCH//

  isNewActor(){
    return this.previousActor != this.getCurrentActor();
  }

  //DISPLAYS RELEVANT TEXT FROM JSON FILE//
  getCurrentLine(){
    return this.json.lines[this.currentLine].text;
  }

  //DISPLAY CURRENT ACTOR NAME//
  getCurrentActor(){
    return this.json.lines[this.currentLine].actor;
  }
  
  isOver(){
      return this.currentLine >= this.json.lines.length;
  }

  //BELOW 3 ARE FOR MANAGING SLOT IMAGES//
  getCurrentSlot0(){
    if(this.json.lines[this.currentLine].hasOwnProperty('slot0')){
        return this.json.lines[this.currentLine].slot0;
    }
  }
  getCurrentSlot1(){
    if(this.json.lines[this.currentLine].hasOwnProperty('slot1')){
        return this.json.lines[this.currentLine].slot1;
    }
  }
  getCurrentSlot2(){
    if(this.json.lines[this.currentLine].hasOwnProperty('slot2')){
        return this.json.lines[this.currentLine].slot2;
    }
  }
}
