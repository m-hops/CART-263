class RealSpider extends FakeSpider{

  constructor(x, y, image) {
    super(x, y, image)

    //TRIGGER FOR CLICKING SPIDER//
    this.found = false;
  }

  update() {
    super.update();

    //MENU NAVIGATION AFTER CLICKING REAL SPIDER//
    if (this.found) {
      goToMenu('endScreen');
      this.found = false;
    }
  }

  //CONFIRMATION OF CLICKING REAL SPIDER//
  mousePressed() {
    if (this.overlap(mouseX,mouseY)) {
      this.found=true;
    }
  }

}
