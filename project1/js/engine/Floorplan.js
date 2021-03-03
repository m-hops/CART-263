class Floorplan {

  constructor() {
    this.x = 800;
    this.y = 400;
    this.w = 2112;
    this.h = 1188;

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

    // LOCATION OF SPAWN POINTS DOWNSTAIRS//
    this.spawnPointsDownstairs.push({
      x: 955,
      y: 1275,
      w: 1,
      h: 1,
      path: [{x:955, y:1275},{x:1185, y:1275},{x:1185, y:1350}]
    });
    this.spawnPointsDownstairs.push({
      x: 915,
      y: 985,
      w: 1,
      h: 1,
      path: [{x:915, y:985},{x:915, y:550},{x:1315, y:550}]
    });
    this.spawnPointsDownstairs.push({
      x: 2435,
      y: 1325,
      w: 1,
      h: 1,
      path: [{x:2435, y:1325},{x:2435, y:1075},{x:2200, y:1075},{x:2200, y:1260}]
    });
    this.spawnPointsDownstairs.push({
      x: 2150,
      y: 630,
      w: 1,
      h: 1,
      path: [{x:2150, y:630},{x:2150, y:1000},{x:2335, y:1000},{x:2335,y:1100},{x:2535,y:1100}]
    });
    this.spawnPointsDownstairs.push({
      x: 2480,
      y: 550,
      w: 1,
      h: 1,
      path: [{x:2480, y:550}, {x:2700, y:550}, {x:2700, y:920}, {x:2480, y:920}]
    });

    //LOCATION OF SPAWN POINTS UPSTAIRS//
    this.spawnPointsUpstairs.push({
      x: 2600,
      y: 600,
      w: 1,
      h: 1,
      path: [{x:2600, y:600},{x:2600, y:700},{x:2300, y:700},{x:2300, y:800},{x:2620, y:800},{x:2620, y:980}]
    });
    this.spawnPointsUpstairs.push({
      x: 2700,
      y: 1150,
      w: 1,
      h: 1,
      path: [{x:2700, y:1150},{x:2250, y:1150},{x:2250, y:1200},{x:1900, y:1200},{x:1900, y:1450},{x:1900, y:1200},{x:2250, y:1200},{x:2250, y:1370},{x:2450, y:1370}]
    });
    this.spawnPointsUpstairs.push({
      x: 1095,
      y: 995,
      w: 1,
      h: 1,
      path: [{x:1095, y:995},{x:1095, y:1300},{x:1450, y:1300},{x:1450, y:950},{x:1550, y:950}]
    });
    this.spawnPointsUpstairs.push({
      x: 1035,
      y: 605,
      w: 1,
      h: 1,
      path: [{x:1035, y:605},{x:1035, y:805},{x:1150, y:805},{x:1150, y:1005},{x:1150, y:705},{x:1350, y:705},{x:1350, y:905},{x:1350, y:625},{x:1150, y:625}]
    });
    this.spawnPointsUpstairs.push({
      x: 1750,
      y: 930,
      w: 1,
      h: 1,
      path: [{x:1750, y:930},{x:1750, y:1300},{x:2000, y:1300},{x:2000, y:1000}]
    });

  }

  //LOCATIONS FOR WALLS//
  setupWall() {

    //INVISIBLE WALL HITBOX FOR FLOOR 1//
    this.wallsDownstairs.push({
      x: 55,
      y: 83,
      w: 382,
      h: 10
    });
    this.wallsDownstairs.push({
      x: 55,
      y: 85,
      w: 10,
      h: 975
    });
    this.wallsDownstairs.push({
      x: 55,
      y: 1055,
      w: 790,
      h: 10
    });
    this.wallsDownstairs.push({
      x: 1068,
      y: 1054,
      w: 890,
      h: 10
    });
    this.wallsDownstairs.push({
      x: 1951,
      y: 78,
      w: 10,
      h: 980
    });
    this.wallsDownstairs.push({
      x: 1546,
      y: 78,
      w: 428,
      h: 15
    });
    this.wallsDownstairs.push({
      x: 563,
      y: 78,
      w: 830,
      h: 32
    });
    this.wallsDownstairs.push({
      x: 175,
      y: 280,
      w: 90,
      h: 205
    });
    this.wallsDownstairs.push({
      x: 375,
      y: 228,
      w: 10,
      h: 410
    });
    this.wallsDownstairs.push({
      x: 200,
      y: 642,
      w: 255,
      h: 10
    });
    this.wallsDownstairs.push({
      x: 387,
      y: 200,
      w: 70,
      h: 440
    });
    this.wallsDownstairs.push({
      x: 600,
      y: 78,
      w: 10,
      h: 570
    });
    this.wallsDownstairs.push({
      x: 56,
      y: 780,
      w: 310,
      h: 10
    });
    this.wallsDownstairs.push({
      x: 481,
      y: 780,
      w: 125,
      h: 10
    });
    this.wallsDownstairs.push({
      x: 595,
      y: 778,
      w: 10,
      h: 280
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
      h: 80
    });
    this.wallsDownstairs.push({
      x: 1068,
      y: 1064,
      w: 32,
      h: 80
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
      x: 1305,
      y: 777,
      w: 10,
      h: 280
    });
    this.wallsDownstairs.push({
      x: 1303,
      y: 780,
      w: 40,
      h: 10
    });
    this.wallsDownstairs.push({
      x: 1472,
      y: 780,
      w: 40,
      h: 10
    });
    this.wallsDownstairs.push({
      x: 1500,
      y: 780,
      w: 10,
      h: 270
    });
    this.wallsDownstairs.push({
      x: 1305,
      y: 80,
      w: 10,
      h: 560
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
      x: 1446,
      y: 530,
      w: 180,
      h: 10
    });
    this.wallsDownstairs.push({
      x: 1615,
      y: 80,
      w: 10,
      h: 552
    });
    this.wallsDownstairs.push({
      x: 1615,
      y: 615,
      w: 210,
      h: 10
    });
    this.wallsDownstairs.push({
      x: 1727,
      y: 199,
      w: 140,
      h: 245
    });
    this.wallsDownstairs.push({
      x: 1317,
      y: 850,
      w: 20,
      h: 75
    });
    this.wallsDownstairs.push({
      x: 1450,
      y: 965,
      w: 20,
      h: 75
    });

    //INVISABLE WALL HITBOX FOR FLOOR 2//
    this.wallsUpstairs.push({
      x:108,
      y:80,
      w:1871,
      h:25
    });
    this.wallsUpstairs.push({
      x:1950,
      y:79,
      w:25,
      h:993
    });
    this.wallsUpstairs.push({
      x:1184,
      y:1041,
      w:799,
      h:25
    });
    this.wallsUpstairs.push({
      x:1184,
      y:1041,
      w:37,
      h:141
    });
    this.wallsUpstairs.push({
      x:991,
      y:1086,
      w:219,
      h:93
    });
    this.wallsUpstairs.push({
      x:990,
      y:1041,
      w:25,
      h:138
    });
    this.wallsUpstairs.push({
      x:109,
      y:1044,
      w:906,
      h:25
    });
    this.wallsUpstairs.push({
      x:109,
      y:80,
      w:25,
      h:992
    });
    this.wallsUpstairs.push({
      x:951,
      y:998,
      w:68,
      h:42
    });
    this.wallsUpstairs.push({
      x:1190,
      y:984,
      w:50,
      h:54
    });
    this.wallsUpstairs.push({
      x:1190,
      y:984,
      w:50,
      h:54
    });
    this.wallsUpstairs.push({
      x:111,
      y:496,
      w:160,
      h:25
    });
    this.wallsUpstairs.push({
      x:386,
      y:496,
      w:81,
      h:25
    });
    this.wallsUpstairs.push({
      x:439,
      y:413,
      w:25,
      h:409
    });
    this.wallsUpstairs.push({
      x:441,
      y:414,
      w:46,
      h:25
    });
    this.wallsUpstairs.push({
      x:608,
      y:413,
      w:49,
      h:25
    });
    this.wallsUpstairs.push({
      x:634,
      y:83,
      w:25,
      h:352
    });
    this.wallsUpstairs.push({
      x:634,
      y:332,
      w:243,
      h:25
    });
    this.wallsUpstairs.push({
      x:634,
      y:81,
      w:229,
      h:269
    });
    this.wallsUpstairs.push({
      x:854,
      y:278,
      w:25,
      h:547
    });
    this.wallsUpstairs.push({
      x:718,
      y:361,
      w:133,
      h:75
    });
    this.wallsUpstairs.push({
      x:707,
      y:740,
      w:140,
      h:60
    });
    this.wallsUpstairs.push({
      x:440,
      y:797,
      w:137,
      h:25
    });
    this.wallsUpstairs.push({
      x:686,
      y:799,
      w:193,
      h:25
    });
    this.wallsUpstairs.push({
      x:1102,
      y:82,
      w:241,
      h:271
    });
    this.wallsUpstairs.push({
      x:1498,
      y:109,
      w:313,
      h:41
    });
    this.wallsUpstairs.push({
      x:634,
      y:332,
      w:243,
      h:25
    });
    this.wallsUpstairs.push({
      x:1576,
      y:110,
      w:156,
      h:124
    });
    this.wallsUpstairs.push({
      x:1888,
      y:318,
      w:63,
      h:130
    });
    this.wallsUpstairs.push({
      x:1321,
      y:468,
      w:438,
      h:25
    });
    this.wallsUpstairs.push({
      x:1870,
      y:468,
      w:108,
      h:187
    });
    this.wallsUpstairs.push({
      x:1651,
      y:499,
      w:82,
      h:25
    });
    this.wallsUpstairs.push({
      x:1321,
      y:468,
      w:25,
      h:272
    });
    this.wallsUpstairs.push({
      x:1319,
      y:635,
      w:216,
      h:25
    });
    this.wallsUpstairs.push({
      x:1651,
      y:634,
      w:327,
      h:25
    });
    this.wallsUpstairs.push({
      x:1347,
      y:560,
      w:90,
      h:61
    });
    this.wallsUpstairs.push({
      x:1364,
      y:682,
      w:54,
      h:47
    });
    this.wallsUpstairs.push({
      x:1884,
      y:886,
      w:66,
      h:146
    });
    this.wallsUpstairs.push({
      x:1798,
      y:986,
      w:155,
      h:57
    });
    this.wallsUpstairs.push({
      x:1825,
      y:925,
      w:52,
      h:25
    });
    this.wallsUpstairs.push({
      x:1321,
      y:853,
      w:25,
      h:219
    });

    //PUSHES ALL FLOOR 1 WALLS INTO ARRAY//
    for (let i = 0; i < this.wallsDownstairs.length; i++) {
      this.wallsDownstairs[i].x += this.x;
      this.wallsDownstairs[i].y += this.y;
    }

    //PUSHES ALL FLOOR 2 WALLS INTO ARRAY//
    for (let j = 0; j < this.wallsUpstairs.length; j++) {
      this.wallsUpstairs[j].x += this.x;
      this.wallsUpstairs[j].y += this.y;
    }
  }

  //SWITCH TO ALLOW PROPER PLACEMENT OF WALLS DEPENDING ON LEVEL//
  getCurrentWalls() {
    if (this.upstairs) {
      return this.wallsUpstairs;
    } else {
      return this.wallsDownstairs;
    }
  }

  //SWITCH TO ALLOW PROPER PLACEMENT OF SPAWN POINTS DEPENING ON LEVEL//
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
        noFill();
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
        // noFill();
        rect(curWalls[i].x + offsetX, curWalls[i].y + offsetY, curWalls[i].w, curWalls[i].h)
        pop();
      }

      //INVISIBLE SPAWN POINTS//
      for (let i = 0; i < curSpawn.length; i++) {
        push();
        fill(255, 0, 0, 125);
        noStroke();
        noFill();
        rect(curSpawn[i].x + offsetX, curSpawn[i].y + offsetY, curSpawn[i].w, curSpawn[i].h)
        pop();
      }
    }
  }
}
