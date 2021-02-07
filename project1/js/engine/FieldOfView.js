class FieldOfView {
  constructor(){

  }

  dotProduct(aX,aY,bX,bY) {
    return aX * bX + aY * bY;
  }

  normalizeX(x,y) {
    let l = vectorLength(x,y);
    return x / l;
  }

  normalizeY(x,y) {
    let l = vectorLength(x,y);
    return y / l;
  }

  crossProductX(x,y) {
    return -y;
  }

  crossProductY(x,y) {
    return x;
  }

  vectorLength(x,y) {
    return Math.sqrt(x * x + y * y);
  }

  projectOnAxisX(aX, aY, pX, pY) {
    let l = dotProduct(aX, aY, pX, pY);
    return aX * l;
  }

  projectOnAxisY(aX, aY, pX, pY) {
    let l = dotProduct(aX, aY, pX, pY);
    return aY * l;
  }

  isRectCollideWithLine(rX, rY, rW, rH, l0X, l0Y, l1X, l1Y) {
    let pointsX = [];
    let pointsY = [];
    let projectedPointsX = [];
    let projectedPointsY = [];
    let distanceToAxis = [];
    let wallPoints = 4;

    //GET THE FOUR CORNERS OF THE RECTANGLE//
    pointsX[0] = rX - l0X;
    pointsY[0] = rY - l0Y;

    pointsX[1] = rX - l0X;
    pointsY[1] = rY + rH - l0Y;

    pointsX[2] = rX + rW - l0X;
    pointsY[2] = rY + rH - l0Y;

    pointsX[3] = rX + rW - l0X;
    pointsY[3] = rY - l0Y;

    //GET THE AXIS VECTOR//
    let aX = l1X - l0X;
    let aY = l1Y - l0Y;
    let lineLength = vectorLength(aX, aY);

    //NORMALIZE AXIS VECTOR//
    let aXn = normalizeX(aX,aY);
    let aYn = normalizeY(aX,aY);

    for (let h = 0; h < wallPoints; h++) {
      let pl = dotProduct(aXn, aYn, pointsX[h], pointsY[h]);

      if (pl < 0 || pl > lineLength){
        return false;
      }
    }

    //COMPUTE THE NORMAL OF THE AXIS//
    let axisNormalX = crossProductX(aXn, aYn);
    let axisNormalY = crossProductY(aXn, aYn);

    //GET THE DISTANCE OF EACH PROJECTED POINT OF THE RECTANGLE TO THE AXIS//
    for (let j = 0; j < wallPoints; j++){
      distanceToAxis[j] = dotProduct(axisNormalX, axisNormalY, pointsX[j], pointsY[j]);
    }

    //TEST IF ALL POINT ARE ON THE SAME SIDE OF THE AXIS//
    if (distanceToAxis[0] >= 0 && distanceToAxis[1] >= 0 && distanceToAxis[2] >= 0 && distanceToAxis[3] >= 0) {
      return false;
    } else if (distanceToAxis[0] <= 0 && distanceToAxis[1] <= 0 && distanceToAxis[2] <= 0 && distanceToAxis[3] <= 0) {
      return false;
    } else {
      return true;
    }



  }

}
