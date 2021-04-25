class PhysicsSolver {
  constructor(){
    this.collisions = [];
    this.nextCollisions = [];
  }
  solve(scene) {

    let physicComp = [];
    let colliders = [];


    for (let i = 0; i < scene.gameObjects.active.length; i++) {
      let go = scene.gameObjects.active[i];
      go.visitEnabledGameObjects(function (x) {
        for (let j = 0; j < x.components.active.length; j++) {
          let comp = x.components.active[j];
          if (comp instanceof ColliderComponent) {
            colliders.push(comp);
          }
          if (comp instanceof Physics2D) {
            comp.stepPhysics();
            physicComp.push(comp);
          }
        }
      });
    }

    for (let j = 0; j < colliders.length; j++) {
      this.solveCollider(colliders, j);

      // for (let h = 0; h < compToSolve[j].gameObject.components.active.length; h++) {
      //   let comp = compToSolve[j].gameObject.components.active[h];
      //
      //   if (comp instanceof ColliderComponent) {
      //     this.solveCollider(compToSolve, comp);
      //   }
      // }
    }

    // find collision that are no more colliding and notify their triggers
    for(let k = 0; k != this.collisions.length; k++){

      let colIndex = this.nextCollisions.findIndex(x => x.a === this.collisions[k].a && x.b === this.collisions[k].b);
      if (colIndex < 0) {
        let triggers = this.collisions[k].a.gameObject.components.getAllElementOfType(TriggerComponent);
        for (let i = 0; i < triggers.length; i++) {
          triggers[i].onCollision.end();
        }
        triggers = this.collisions[k].b.gameObject.components.getAllElementOfType(TriggerComponent);
        for (let j = 0; j < triggers.length; j++) {
          triggers[j].onCollision.end();
        }
      }
    }

    // move frame forward
    this.collisions = this.nextCollisions;
    this.nextCollisions = [];

    for (let j = 0; j < physicComp.length; j++) {
      let trf = physicComp[j].gameObject.getTransform();
      trf.local = physicComp[j].nextFrameLocal;
    }



  }

  addColliders(physicComp, colliders, go) {

    for (let j = 0; j < go.components.active.length; j++) {

      let comp = go.components.active[j];

      if (comp instanceof ColliderComponent) {
        colliders.push(comp);
      }
      if (comp instanceof Physics2D) {
        physicComp.push(comp);
      }
    }

    for (let i = 0; i < go.children.active.length; i++) {
      this.addColliders(physicComp, colliders, go.children.active[i]);
    }
  }

  solveCollider(colliders, index) {
    let trfA = colliders[index].gameObject.getTransform();
    let physicsA = colliders[index].gameObject.components.getFirstElementOfType(Physics2D);
    for (let i = 0; i < colliders.length; i++) {
      // do not test colliders on the same gameObject
      if(colliders[i].gameObject != colliders[index].gameObject){
        let trfB = colliders[i].gameObject.getTransform();
        let physicsB = colliders[i].gameObject.components.getFirstElementOfType(Physics2D);
        this.solveColliderCollider(trfA, physicsA, colliders[index], trfB, physicsB, colliders[i]);
      }
    }
  }

  // solveCollider(allComp, collider) {
  //   let trfA = collider.gameObject.getTransform();
  //   let physicsA = collider.gameObject.components.getFirstElementOfType(Physics2D);
  //   for (let i = 0; i < allComp.length; i++) {
  //
  //     for (let h = 0; h < allComp[i].gameObject.components.active.length; h++) {
  //
  //       let comp = allComp[i].gameObject.components.active[h];
  //       if(comp != collider){
  //         let trfB = allComp[i].gameObject.getTransform();
  //         let physicsB = allComp[i].gameObject.components.getFirstElementOfType(Physics2D);
  //         if (comp instanceof ColliderComponent) {
  //           this.solveColliderCollider(
  //             trfA, physicsA, collider,
  //             trfB, physicsB, comp);
  //         }
  //       }
  //     }
  //   }
  // }
  getGONextFrameLocalTransform(go){
    let physics = go.components.getFirstElementOfType(Physics2D);
    if(physics != null) return physics.nextFrameLocal;
    let trf = go.getTransform();
    if(trf != null) return trf.local;
    return AffineTransform.identity();
  }
  getGONextFrameWorldTransform(go){
    let trfLocal = this.getGONextFrameLocalTransform(go);
    go = go.parent;
    while(go != null){
      let parentTrfLocal = this.getGONextFrameLocalTransform(go);
      trfLocal = trfLocal.transformed(parentTrfLocal);
      go = go.parent;
    }
    return trfLocal;
  }
  solveColliderCollider(transformA, physicsA, colliderA, transformB, physicsB, colliderB) {
    //console.log("Solve Collider");
    let trfWorldA = this.getGONextFrameWorldTransform(colliderA.gameObject);//transformA.local;
    let trfWorldB = this.getGONextFrameWorldTransform(colliderB.gameObject);//transformB.local;
    //if(physicsA != null) trfWorldA = physicsA.nextFrameLocal;
    //if(physicsB != null) trfWorldB = physicsB.nextFrameLocal;
    //
    // if(colliderA.gameObject.parent != null){
    //   let parentTrf = this.getGONextFrameTransform(colliderA.gameObject.parent);
    //   trfWorldA = trfWorldA.transformed(colliderA.gameObject.parent.getTransform().world);
    // }
    // if(colliderB.gameObject.parent != null){
    //   let parentTrf = this.getGONextFrameTransform(colliderB.gameObject.parent);
    //   trfWorldB = trfWorldB.transformed(colliderB.gameObject.parent.getTransform().world);
    // }
    let boxA = colliderA.aabb.transformedTranslateScale(trfWorldA);
    let boxB = colliderB.aabb.transformedTranslateScale(trfWorldB);

    if (boxA.isIntersecting(boxB)) {
      let collision = {a:colliderA,b:colliderB};

      let colIndex = this.collisions.findIndex(x => x.a === collision.a && x.b === collision.b);
      if (colIndex < 0) {
        let triggers = colliderA.gameObject.components.getAllElementOfType(TriggerComponent);
        for (let i = 0; i < triggers.length; i++) {
          triggers[i].onCollision.begin();
        }
        triggers = colliderB.gameObject.components.getAllElementOfType(TriggerComponent);
        for (let j = 0; j < triggers.length; j++) {
          triggers[j].onCollision.begin();
        }
        //if(physicsA != null) physicsA.nextFrameLocal = transformA.local;
        //if(physicsB != null) physicsB.nextFrameLocal = transformB.local;
      }
      if(physicsA != null && physicsB == null){
        this.solveCollision1(transformA, physicsA, colliderA, transformB, colliderB);
      } else if(physicsA == null && physicsB != null){
        this.solveCollision1(transformB, physicsB, colliderB, transformA, colliderA);
      } else if(physicsA != null && physicsB != null){
        this.solveCollision2(transformA, physicsA, colliderA, transformB, physicsB, colliderB);
      }
      this.nextCollisions.push(collision);
    }
  }
  // solve using 1 gameobject with a physics component
  solveCollision1(transformA, physicsA, colliderA, transformB, colliderB){
    // let nameA = "unknown";
    // let nameB = "unknown";
    // if(colliderA.gameObject.name != null) nameA = colliderA.gameObject.name;
    // if(colliderB.gameObject.name != null) nameB = colliderB.gameObject.name;
    // console.log("["+frameCount+"] solveCollision1 {"+nameA+"} -- {"+nameB+"}");
    //physicsA.speed = 0;
    //physicsA.direction = createVector(0,0,0);
    //physicsA.nextFrameLocal = transformA.local;
  }
  // solve using 2 gameobject with a physics component
  solveCollision2(transformA, physicsA, colliderA, transformB, physicsB, colliderB){
    // let nameA = "unknown";
    // let nameB = "unknown";
    // if(colliderA.gameObject.name != null) nameA = colliderA.gameObject.name;
    // if(colliderB.gameObject.name != null) nameB = colliderB.gameObject.name;
    // console.log("["+frameCount+"] solveCollision2 {"+nameA+"} -- {"+nameB+"}");
    physicsA.speed = 0;
    physicsA.direction = createVector(0,0,0);
    physicsA.nextFrameLocal = transformA.local;
    physicsB.speed = 0;
    physicsB.direction = createVector(0,0,0);
    physicsB.nextFrameLocal = transformB.local;
  }
}
