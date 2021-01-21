class RealSpider extends FakeSpider{

  constructor(x, y, image) {
    super(x, y, image)

    this.found = false;
  }

  update() {
    super.update();

    if (this.found) {
      goToMenu('endScreen');
      this.found = false;
    }
  }

  mousePressed() {
    if (this.overlap(mouseX,mouseY)) {
      this.found=true;
      console.log('hit');
    }
  }

}
