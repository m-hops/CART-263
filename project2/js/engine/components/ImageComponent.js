class ImageComponent extends RenderComponent{

  constructor(img) {

    super();

    this.image = img;
  }

  render() {
    image(this.image, 0, 0);
  }
}
