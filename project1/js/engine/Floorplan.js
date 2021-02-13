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

    this.wallsDownstairs = [];
    this.wallsUpstairs = [];
    this.spawnPointsDownstairs = [];
    this.spawnPointsUpstairs = [];
    this.setupWall();
    this.victimSpawnPoint();
  }

  update(offsetX, offsetY) {
    this.draw(offsetX, offsetY);
    this.run();
  }

  run() {
    if (player.x >= this.x + 100 &&
      player.x <= this.x + 100 + (this.w - 250) &&
      player.y >= this.y + 100 &&
      player.y <= this.y + 100 + (this.h - 200)) {
      this.outside = false;
    } else {
      this.outside = true;
    }
  }

  //LOCATIONS FOR ENEMY SPAWN//
  victimSpawnPoint() {

    //LOCATION OF SPAWN POINTS DOWNSTAIRS//
    this.spawnPointsDownstairs.push({
      x: 955,
      y: 1275,
      w: 1,
      h: 1
    });
    this.spawnPointsDownstairs.push({
      x: 930,
      y: 985,
      w: 1,
      h: 1
    });
    this.spawnPointsDownstairs.push({
      x: 2435,
      y: 1325,
      w: 1,
      h: 1
    });
    this.spawnPointsDownstairs.push({
      x: 2200,
      y: 630,
      w: 1,
      h: 1
    });
    this.spawnPointsDownstairs.push({
      x: 2480,
      y: 560,
      w: 1,
      h: 1
    });

    //LOCATION OF SPAWN POINTS UPSTAIRS//
    this.spawnPointsUpstairs.push({
      x: 2630,
      y: 650,
      w: 1,
      h: 1
    });
    this.spawnPointsUpstairs.push({
      x: 2595,
      y: 1245,
      w: 1,
      h: 1
    });
    this.spawnPointsUpstairs.push({
      x: 1095,
      y: 995,
      w: 1,
      h: 1
    });
    this.spawnPointsUpstairs.push({
      x: 1035,
      y: 605,
      w: 1,
      h: 1
    });
    this.spawnPointsUpstairs.push({
      x: 1390,
      y: 1010,
      w: 1,
      h: 1
    });

  }

  //LOCATIONS FOR WALLS//
  setupWall() {

    //INVISIBLE WALL HITBOX FOR FLOOR 1//
    this.wallsDownstairs.push({
      x: 47,
      y: 78,
      w: 400,
      h: 32
    });
    this.wallsDownstairs.push({
      x: 47,
      y: 78,
      w: 32,
      h: 998
    });
    this.wallsDownstairs.push({
      x: 47,
      y: 1044,
      w: 793,
      h: 32
    });
    this.wallsDownstairs.push({
      x: 1068,
      y: 1044,
      w: 907,
      h: 32
    });
    this.wallsDownstairs.push({
      x: 1946,
      y: 78,
      w: 32,
      h: 996
    });
    this.wallsDownstairs.push({
      x: 1546,
      y: 78,
      w: 428,
      h: 15
    });
    this.wallsDownstairs.push({
      x: 558,
      y: 78,
      w: 835,
      h: 32
    });
    this.wallsDownstairs.push({
      x: 155,
      y: 250,
      w: 114,
      h: 245
    });
    this.wallsDownstairs.push({
      x: 355,
      y: 218,
      w: 32,
      h: 441
    });
    this.wallsDownstairs.push({
      x: 185,
      y: 632,
      w: 286,
      h: 32
    });
    this.wallsDownstairs.push({
      x: 387,
      y: 219,
      w: 82,
      h: 414
    });
    this.wallsDownstairs.push({
      x: 585,
      y: 78,
      w: 32,
      h: 581
    });
    this.wallsDownstairs.push({
      x: 46,
      y: 770,
      w: 321,
      h: 32
    });
    this.wallsDownstairs.push({
      x: 471,
      y: 768,
      w: 142,
      h: 32
    });
    this.wallsDownstairs.push({
      x: 585,
      y: 768,
      w: 32,
      h: 304
    });
    this.wallsDownstairs.push({
      x: 532,
      y: 852,
      w: 55,
      h: 137
    });
    this.wallsDownstairs.push({
      x: 513,
      y: 901,
      w: 70,
      h: 36
    });
    this.wallsDownstairs.push({
      x: 74,
      y: 961,
      w: 139,
      h: 84
    });
    this.wallsDownstairs.push({
      x: 812,
      y: 1066,
      w: 32,
      h: 87
    });
    this.wallsDownstairs.push({
      x: 1068,
      y: 1064,
      w: 32,
      h: 90
    });
    this.wallsDownstairs.push({
      x: 612,
      y: 91,
      w: 166,
      h: 440
    });
    this.wallsDownstairs.push({
      x: 612,
      y: 109,
      w: 638,
      h: 167
    });
    this.wallsDownstairs.push({
      x: 1132,
      y: 91,
      w: 166,
      h: 440
    });
    this.wallsDownstairs.push({
      x: 759,
      y: 417,
      w: 82,
      h: 98
    });
    this.wallsDownstairs.push({
      x: 1064,
      y: 417,
      w: 82,
      h: 98
    });
    this.wallsDownstairs.push({
      x: 1293,
      y: 767,
      w: 32,
      h: 303
    });
    this.wallsDownstairs.push({
      x: 1293,
      y: 766,
      w: 57,
      h: 32
    });
    this.wallsDownstairs.push({
      x: 1462,
      y: 768,
      w: 59,
      h: 32
    });
    this.wallsDownstairs.push({
      x: 1494,
      y: 768,
      w: 32,
      h: 303
    });
    this.wallsDownstairs.push({
      x: 1295,
      y: 80,
      w: 32,
      h: 580
    });
    this.wallsDownstairs.push({
      x: 1516,
      y: 220,
      w: 86,
      h: 166
    });
    this.wallsDownstairs.push({
      x: 1488,
      y: 281,
      w: 118,
      h: 43
    });
    this.wallsDownstairs.push({
      x: 1436,
      y: 520,
      w: 196,
      h: 32
    });
    this.wallsDownstairs.push({
      x: 1605,
      y: 80,
      w: 32,
      h: 552
    });
    this.wallsDownstairs.push({
      x: 1605,
      y: 604,
      w: 226,
      h: 32
    });
    this.wallsDownstairs.push({
      x: 1727,
      y: 199,
      w: 140,
      h: 245
    });

    //PUSHES ALL WALLS INTO ARRAY//
    for (let i = 0; i < this.wallsDownstairs.length; i++) {
      this.wallsDownstairs[i].x += this.x;
      this.wallsDownstairs[i].y += this.y;
    }
  }

  getCurrentWalls() {
    if (this.upstairs) {
      return this.wallsUpstairs;
    } else {
      return this.wallsDownstairs;
    }
  }

  getCurrentSpawnPoints() {
    if (this.upstairs) {
      return this.spawnPointsUpstairs;
    } else {
      return this.spawnPointsDownstairs;
    }
  }

  //OFFSETX & Y KEEP OBJECTS IN PLACE IN RELATION TO PLAYER//
  draw(offsetX, offsetY) {

    let curWalls = this.getCurrentWalls();
    let curSpawn = this.getCurrentSpawnPoints();

    lightningGenerator();

    //UPSTAIRS FLOORPLAN//
    if (this.upstairs) {

      rainRun();

      image(floorplan2BKG, this.x + offsetX, this.y + offsetY, this.w, this.h);

      //INVISIBLE WALLS//
      for (let i = 0; i < curWalls.length; i++) {
        push();
        fill(255, 0, 0, 125);
        noStroke();
        noFill();
        rect(curWalls[i].x + offsetX, curWalls[i].y + offsetY, curWalls[i].w, curWalls[i].h)
        pop();
      }

      //INVISIBLE SPAWN POINTS//
      for (let i = 0; i < curSpawn.length; i++) {
        push();
        fill(255, 0, 0, 125);
        noStroke();
        // noFill();
        rect(curSpawn[i].x + offsetX, curSpawn[i].y + offsetY, curSpawn[i].w, curSpawn[i].h)
        pop();
      }

      //INSIDE BUILDING//
    } else if (!this.upstairs) {

      rainRun();

      image(floorplan1BKG, this.x + offsetX, this.y + offsetY, this.w, this.h);

      //INVISIBLE WALLS//
      for (let i = 0; i < curWalls.length; i++) {
        push();
        fill(255, 0, 0, 125);
        noStroke();
        noFill();
        rect(curWalls[i].x + offsetX, curWalls[i].y + offsetY, curWalls[i].w, curWalls[i].h)
        pop();
      }

      //INVISIBLE SPAWN POINTS//
      for (let i = 0; i < curSpawn.length; i++) {
        push();
        fill(255, 0, 0, 125);
        noStroke();
        // noFill();
        rect(curSpawn[i].x + offsetX, curSpawn[i].y + offsetY, curSpawn[i].w, curSpawn[i].h)
        pop();
      }
    }
  }
}
