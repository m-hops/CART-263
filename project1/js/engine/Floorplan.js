class Floorplan {

  constructor() {
    this.x = 800;
    this.y = 400;
    this.w = 2112;
    this.h = 1188;

    this.speed = 5;
    this.upstairs = false;
    this.outside = true;

    this.grassOffsetX = 850;
    this.grassOffsetY = 500;

    this.walls = [];
    this.setupWall();
  }

  update(offsetX, offsetY) {
    this.draw(offsetX, offsetY);
    this.run();
  }

  run() {
    if (player.x >= this.x + 100 &&
        player.x <= this.x + 100 + (this.w - 250) &&
        player.y >= this.y + 100&&
        player.y <= this.y + 100 + (this.h - 200)){
          this.outside = false;
        } else {
          this.outside = true;
        }
  }

  setupWall() {

    //INVISIBLE WALL HITBOX FOR FLOOR 1//
    this.walls.push({x:47,y:78,w:400,h:31});
    this.walls.push({x:47,y:78,w:31,h:998});
    this.walls.push({x:47,y:1044,w:793,h:31});
    this.walls.push({x:1068,y:1044,w:907,h:31});
    this.walls.push({x:1946,y:78,w:31,h:996});
    this.walls.push({x:1546,y:78,w:428,h:15});
    this.walls.push({x:558,y:78,w:835,h:31});
    this.walls.push({x:155,y:257,w:114,h:245});
    this.walls.push({x:355,y:218,w:31,h:441});
    this.walls.push({x:185,y:631,w:286,h:31});
    this.walls.push({x:387,y:219,w:82,h:414});
    this.walls.push({x:585,y:78,w:31,h:581});
    this.walls.push({x:46,y:770,w:311,h:31});
    this.walls.push({x:471,y:768,w:142,h:31});
    this.walls.push({x:585,y:768,w:31,h:304});
    this.walls.push({x:525,y:852,w:55,h:137});
    this.walls.push({x:513,y:901,w:70,h:36});
    this.walls.push({x:74,y:961,w:139,h:84});
    this.walls.push({x:812,y:1066,w:31,h:87});
    this.walls.push({x:1068,y:1064,w:31,h:90});
    this.walls.push({x:612,y:91,w:166,h:440});
    this.walls.push({x:612,y:109,w:638,h:167});
    this.walls.push({x:1125,y:91,w:166,h:440});
    this.walls.push({x:759,y:417,w:82,h:98});
    this.walls.push({x:1064,y:417,w:82,h:98});
    this.walls.push({x:1293,y:767,w:31,h:303});
    this.walls.push({x:1293,y:766,w:57,h:31});
    this.walls.push({x:1462,y:768,w:59,h:31});
    this.walls.push({x:1494,y:768,w:31,h:303});
    this.walls.push({x:1295,y:80,w:31,h:580});
    this.walls.push({x:1516,y:220,w:86,h:166});
    this.walls.push({x:1488,y:281,w:118,h:43});
    this.walls.push({x:1436,y:520,w:196,h:31});
    this.walls.push({x:1605,y:80,w:31,h:552});
    this.walls.push({x:1605,y:604,w:226,h:31});
    this.walls.push({x:1727,y:199,w:140,h:245});

    //PUSHES ALL WALLS INTO ARRAY//
    for (let i = 0; i < this.walls.length; i++) {
      this.walls[i].x += this.x;
      this.walls[i].y += this.y;
    }
  }

  //OFFSETX & Y KEEP OBJECTS IN PLACE IN RELATION TO PLAYER//
  draw(offsetX, offsetY) {

    // lightningGenerator();

    //UPSTAIRS FLOORPLAN//
    if (this.upstairs){

    //INSIDE BUILDING//
    } else if (!this.upstairs && !this.outside) {

    rainRun();

    image(floorplan1BKG, this.x + offsetX, this.y + offsetY, this.w, this.h);

    //INVISIBLE WALLS//
    for (let i = 0; i < this.walls.length; i++) {
      push();
      fill(255,0,0,125);
      noStroke();
      noFill();
      rect(this.walls[i].x + offsetX, this.walls[i].y + offsetY, this.walls[i].w, this.walls[i].h)
      pop();
    }

    //OUTSIDE BUILDING//
  } else if (!this.upstairs && this.outside) {
    image(floorplan1Blackout, this.x + offsetX, this.y + offsetY, this.w, this.h);

    //INVISIBLE WALLS//
    for (let i = 0; i < this.walls.length; i++) {
      push();
      noStroke();
      noFill();
      rect(this.walls[i].x + offsetX, this.walls[i].y + offsetY, this.walls[i].w, this.walls[i].h)
      pop();
    }
  }
  }
}
