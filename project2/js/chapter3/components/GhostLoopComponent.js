class GhostLoopComponent extends Component {

  constructor(rect) {
    super();

    this.speed = 400;
    this.rect = rect;
    this.bobbingTime = 0;
    this.y = 0;
    this.scale = 1;
    this.bobbingTimeRandom = random(400,1100);
  }

  start() {
    let parentTransform = this.gameObject.getTransform();
    this.scale = random(0.02,0.1);

    parentTransform.local.position.x = random() * this.rect.getSize().x + this.rect.getMin().x;
    this.y = random() * this.rect.getSize().y + this.rect.getMin().y;
    parentTransform.local.setScale(this.scale, this.scale);
    parentTransform.local.position.z = -this.scale;

    this.speed = 400 * this.scale;

  }

  update() {
    let parentTransform = this.gameObject.getTransform();

    this.bobbingTime += 3.1415 * deltaTime / this.bobbingTimeRandom;

    parentTransform.local.position.x += this.speed * deltaTime / 1000;
    parentTransform.local.position.y = this.y + Math.sin(this.bobbingTime) * this.scale * 50;

    if (parentTransform.local.position.x > this.rect.getMax().x) {
      parentTransform.local.position.x = this.rect.getMin().x;
      this.y = random() * this.rect.getSize().y + this.rect.getMin().y;

      this.scale = random(0.02,0.1);
      parentTransform.local.setScale(this.scale, this.scale);
      parentTransform.local.position.z = -this.scale;

      this.speed = 400 * this.scale;
    }

  }

}
