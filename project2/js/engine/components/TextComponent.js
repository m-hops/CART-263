//ADDS TEXT COMPONENTS TO GAME OBJECT//

class TextComponent extends RenderComponent{

  //TXT SHOULD LINK TO JSON FILE FOR DISPLAYING//
  constructor(txt) {

    super();

    this.text = txt;
    this.color = 0;
    this.textSize = 30;
    this.font = dialogFont;
  }

  render(renderer) {
    push();
    fill(this.color);
    textSize(this.textSize);
    textFont(dialogFont);
    text(this.text, 0, 0);
    pop();
  }
}
