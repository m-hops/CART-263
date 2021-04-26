//DISPLAYS IMAGE OF GAME OBJECT//

class ImageComponent extends RenderComponent{

  //IMG IS IMAGE; REPEATX IS HOW MANY TIMES OBJECT IS REPEATED ALONG X AXIS; REPEATY IS HOW MANY TIMES OBJECT IS REPEATED ALONG Y AXIS//
  constructor(img, repeatX = 1, repeatY = 1) {

    super();

    if(img != null && !(img instanceof p5.Image)){
      throw "img must be a p5.Image";
    }
    this.image = img;
    this.repeatX = repeatX;
    this.repeatY = repeatY;

  }

  //ALLOWS ASSETS TO BE LOOPED IF NEEDED//
  render(renderer) {
    if(this.image != null){
      for (let y = 0; y < this.repeatY; y++) {
        for (let x = 0; x < this.repeatX; x++) {
          image(this.image, this.image.width * x, this.image.height * y);
        }
      }
    }
  }
}
