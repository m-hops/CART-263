class AffineTransform{
  constructor(){
    this.position = new p5.Vector(0,0,0);
    this.scale = new p5.Vector(1,1,1);
    this.rotation = 0;
  }
  copy(){
    let result = new AffineTransform();
    result.position = this.position.copy();
    result.scale = this.scale.copy();
    result.rotation = this.rotation;
    return result;
  }
  transformed(transform){
    //console.log(this);
    let result = new AffineTransform();
    result.position = this.position.copy();
    result.position.mult(transform.scale);

    let rotated = new p5.Vector(result.position.x, result.position.y).rotate(transform.rotation);
    result.position.x = rotated.x;
    result.position.y = rotated.y;
    result.position.add(transform.position);

    result.scale = this.scale.copy();
    result.scale.mult(transform.scale);

    result.rotation = this.rotation + transform.rotation;

      // console.log(
      //   "pos=" + this.position
      //     + "\n scale=" + this.scale
      //     + "\n rotation=" + this.rotation
      //   + "\ntransformed by \n pos=" + transform.position
      //   + "\n scale=" + transform.scale
      //   + "\n rotation=" + transform.rotation
      //   + "\nequals\n pos=" + result.position
      //   + "\n scale=" + result.scale
      //   + "\n rotation=" + result.rotation);
    return result;
  }
  transformVector(vec){
    let result = p5.Vector.mult(vec, this.scale);
    result.rotate(this.rotation);
    result.add(this.position);
    return result;
  }
  inverseTransformVector(vec){
    let result = p5.Vector.sub(vec, this.position);
    result.rotate(-this.rotation);
    vec.div(this.scale);
    return result;
  }
  set(otherTransform){
    this.position = otherTransform.position.copy();
    this.scale = otherTransform.scale.copy();
    this.rotation = otherTransform.rotation;
  }
  setPosition(x,y,z=this.position.z){
    this.position.x = x;
    this.position.y = y;
    this.position.z = z;
  }
  setScale(x,y){
    this.scale.x = x;
    this.scale.y = y;
  }
  setRotation(angle){
    this.rotation = angle;
  }
  move(x,y){
    this.position.x += x;
    this.position.y += y;
  }
  moveByVector(v){
    this.position.add(v);
  }
  apply(){
    // console.log("apply transform\n pos=" + this.position
    //  + "\n scale=" + this.scale
    //  + "\n rotation=" + this.rotation);
    angleMode(RADIANS);
    translate(this.position);
    rotate(this.rotation);
    scale(this.scale);
  }
  applyInverse(){
    // console.log("apply transform\n pos=" + this.position
    //  + "\n scale=" + this.scale
    //  + "\n rotation=" + this.rotation);
    scale(p5.Vector.div(new p5.Vector(1,1,1), this.scale));
    angleMode(RADIANS);
    rotate(-this.rotation);
    translate(p5.Vector.sub(new p5.Vector(0,0,0), this.position));
  }
}
