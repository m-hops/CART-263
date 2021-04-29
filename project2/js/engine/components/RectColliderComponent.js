//RECTANGLE BASED COLLISSION DETECTION FOR GAMEOBJECT//

class RectColliderComponent extends ColliderComponent {

  constructor(aabb) {

    super();

    this.aabb = aabb;
  }

  //DRAWS HITBOX; REMOVE STROKE BEFORE FINALIZING PROJECT//
  debugDraw() {

    let boxMin = this.aabb.getMin();
    let boxSize = this.aabb.getSize();

    push();
    noFill();
    stroke(255,0,0);
    noStroke();
    rect(boxMin.x, boxMin.y, boxSize.x, boxSize.y);
    pop();
  }
}
