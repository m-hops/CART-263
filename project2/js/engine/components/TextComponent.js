class TextComponent extends RenderComponent{

  constructor(txt) {

    super();

    this.text = txt;
    this.color = 0;
    this.textSize = 40;
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
