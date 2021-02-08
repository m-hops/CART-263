  function lineRectRaycast(l0X, l0Y, l1X, l1Y, rect) {

    let rayVecX = l1X - l0X;
    let rayVecY = l1Y - l0Y;
    let rayLength = Math.sqrt(rayVecX * rayVecX + rayVecY * rayVecY);
    let rayDirX = rayVecX / rayLength;
    let rayDirY = rayVecY / rayLength;
    let rCenterX = rect.x + rect.w * 0.5;
    let rCenterY = rect.y + rect.h * 0.5;
    let rExtentX = rect.w * 0.5;
    let rExtentY = rect.h * 0.5;
    return raycastToAABox2D(rCenterX, rCenterY, rExtentX, rExtentY, l0X, l0Y, rayDirX, rayDirY, rayLength * rayLength);
  }

  function raycastToAABox2DAxis(b, sinTheta, rExtend, rayFromRectCenterX, rayFromRectCenterY, rayDirX, rayDirY) {
    let h = -b / sinTheta;
    let ratioToEdge = 1 - Math.abs(rExtend / b);
    let t = h * ratioToEdge;
    let pX = rayFromRectCenterX + rayDirX * t;
    let pY = rayFromRectCenterY + rayDirY * t;
    let vDot = pX * pX + pY * pY;
    let s2 = Math.abs(vDot - rExtend * rExtend);
    return {
      t: t,
      s2: s2
    };
  }

  function raycastToAABox2D(rCenterX, rCenterY, rExtentX, rExtentY, rayOriginX, rayOriginY, rayDirX, rayDirY, maxRayDistSquare) {

    let rayFromRectCenterX = rayOriginX - rCenterX;
    let rayFromRectCenterY = rayOriginY - rCenterY;
    let castUp = raycastToAABox2DAxis(rayFromRectCenterX, rayDirX, rExtentX, rayFromRectCenterX, rayFromRectCenterY, rayDirX, rayDirY);

    let hitInfo = {
      hit: false,
      t: 0
    };

    if (castUp.s2 < rExtentY * rExtentY) {
      hitInfo.t = castUp.t;
      hitInfo.hit = true;
    } else {
      let castRight = raycastToAABox2DAxis(rayFromRectCenterY, rayDirY, rExtentY, rayFromRectCenterX, rayFromRectCenterY, rayDirX, rayDirY);
      if (castRight.s2 < rExtentX * rExtentX) {
        hitInfo.t = castRight.t;
        hitInfo.hit = true;
      }
    }

    if (hitInfo.t < 0 || hitInfo.t * hitInfo.t > maxRayDistSquare) {
      hitInfo.t = 0;
      hitInfo.hit = false;
    } else {
      hitInfo.x = rayDirX * hitInfo.t + rayOriginX;
      hitInfo.y = rayDirY * hitInfo.t + rayOriginY;
    }
    return hitInfo;

  }
