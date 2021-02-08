//JUNK CODE: DELETE BEFORE PROJECT SUBMISSION//
// function getOrientationToEdge(playerX1, playerY1, triangleX1, triangleY1, triangleX2, triangleY2) {
//   let aX0 = (playerX1 - triangleX1);
//   let aY0 = (playerY1 - triangleY1);
//
//   let aX1 = (triangleX2 - triangleX1);
//   let aY1 = (triangleY2 - triangleY1)
//
//   let cProdX = -aY0;
//   let cProdY = aX0;
//
//   let dProd = (cProdX * aX1) + (cProdY * aY1);
//
//   return dProd;
// }
//
// function isPointInTriangle(pX, pY, t0x, t0y, t1x, t1y, t2x, t2y) {
//
//   let point0 = getOrientationToEdge(pX, pY, t0x, t0y, t1x, t1y);
//   let point1 = getOrientationToEdge(pX, pY, t1x, t1y, t2x, t2y);
//   let point2 = getOrientationToEdge(pX, pY, t2x, t2y, t0x, t0y);
//
//   if (point0 >= 0 && point1 >= 0 && point2 >= 0) {
//     return true;
//   } else if (point0 <= 0 && point1 <= 0 && point2 <= 0) {
//     return true;
//   } else {
//     return false;
//   }
//
// }


//JUNK CODE: DELETE BEFORE FINAL PROJECT SUBMISSION//
// if (isPointInTriangle(player.x, player.y, this.x,this.y,this.triangleX, this.triangleY1, this.triangleX, this.triangleY2)) {
//   this.detect = true;
//   console.log('Hit');
// }

// this.detect = false;

// this.triangleXOffset = 250;
// this.triangleYOffset = 100;
//
// this.triangleX = this.x + this.triangleXOffset;
// this.triangleY1 = this.y + this.triangleYOffset;
// this.triangleY2 = this.y - this.triangleYOffset;
