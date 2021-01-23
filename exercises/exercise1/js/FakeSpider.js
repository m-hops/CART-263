class FakeSpider {
  constructor(x, y, image){
    this.x = x;
    this.y = y;
    this.image = image;

    //CREATION OF MASK USING EXISTING IMAGES//
    this.imageMasked = image.get();
    this.mask = createGraphics(this.image.width, this.image.height);
    this.angle = 0;
  }

  //FUNCTIONS NEEDED FOR EVERY FRAME//
  update() {
    this.display();
  }

  display() {

    //MASK CREATION USING IMAGES IN ARRAY CREATED IN SCRIPT.JS//
    this.imageMasked.copy(this.image, 0, 0, this.image.width, this.image.height, 0, 0, this.image.width, this.image.height);
    this.mask.push();
    this.mask.erase();
    this.mask.fill(255);
    this.mask.stroke(255);
    this.mask.rect(0,0,this.image.width, this.image.height);

    this.mask.noErase();
    this.mask.fill(0, 0, 0, 255);
    this.mask.stroke(0, 0, 0, 255);

    //MAPPING MASK TO MOUSE LOCATION AND CREATION OF CIRCLE//
    let x = this.x - this.image.width / 2;
    let y = this.y - this.image.height / 2;
    let spotX = spotlightX - x;
    let spotY = spotlightY - y;

    this.mask.circle(spotX, spotY, 300);
    this.mask.pop();

    //SPIDER IMAGES//
    push();
    imageMode(CENTER);
    translate(this.x,this.y);
    rotate(this.angle);

    //MAPS MASK LOCAL WITH SPIDERS//
    this.imageMasked.mask(this.mask);
    image(this.imageMasked, 0, 0);
    pop();
  }

  //USED TO DETERMINE WHICH SPIDERS WERE CLICKED//
  overlap(x,y){
    if (x > this.x - this.image.width/2 &&
      x < this.x + this.image.width/2 &&
      y > this.y - this.image.height/2 &&
      y < this.y + this.image.width/2) {
        return true;
      }
      else {
        return false;
      }
  }
}
