class ImageComponent extends RenderComponent{

  constructor(img, repeatX = 1, repeatY = 1) {

    super();

    this.image = img;
    this.repeatX = repeatX;
    this.repeatY = repeatY;

  }

  render(renderer) {

    for (let y = 0; y < this.repeatY; y++) {
      for (let x = 0; x < this.repeatX; x++) {
        image(this.image, this.image.width * x, this.image.height * y);
      }
    }
  }
}
