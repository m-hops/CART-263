
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
  moveNextLine(){
    this.previousActor = this.getCurrentActor();
    this.currentLine++;
  }
  // when starting the first line of dialog from an actor
  // happens when script begin and when actor switch
  isNewActor(){
    return this.previousActor != this.getCurrentActor();
  }
  getCurrentLine(){
    return this.json.lines[this.currentLine].text;
  }
  getCurrentActor(){
    return this.json.lines[this.currentLine].actor;
  }
  isOver(){
      return this.currentLine >= this.json.lines.length;
  }
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
