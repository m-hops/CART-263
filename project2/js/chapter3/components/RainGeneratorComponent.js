class RainGeneratorComponent extends RenderComponent {

  constructor(rect, amount, speedY = 10, offsetX = 5, offsetY = 10) {

    super();

    this.rainDrops = [];

    this.rect = rect;
    this.speedX = 5;
    this.speedY = speedY;
    this.amount = amount;
    this.offsetX = offsetX;
    this.offsetY = offsetY;

  }

  start() {

    for (let i = 0; i < this.amount; i++) {
      this.rainDrops[i] = {
        x: random() * this.rect.getSize().x + this.rect.getMin().x,
        y: random() * this.rect.getSize().y + this.rect.getMin().y
      };

    }

  }

  update() {
    for (let i = 0; i < this.amount; i++) {
      this.rainDrops[i].x += this.speedX;
      this.rainDrops[i].y += this.speedY;

      if (this.rainDrops[i].y > this.rect.getMax().y) {
        this.rainDrops[i].x = random() * this.rect.getSize().x + this.rect.getMin().x;
        this.rainDrops[i].y = this.rect.getMin().y;
      }

      if (this.rainDrops[i].y < this.rect.getMin().y) {
        this.rainDrops[i].x = random() * this.rect.getSize().x + this.rect.getMin().x;
        this.rainDrops[i].y = this.rect.getMax().y;
      }
    }

  }

  render(renderer) {

    for (let i = 0; i < this.amount; i++) {
      push();
      strokeWeight(1);
      stroke(255, 150);
      line(this.rainDrops[i].x, this.rainDrops[i].y, this.rainDrops[i].x + this.offsetX, this.rainDrops[i].y + this.offsetY);
      pop();
    }
  }

}
