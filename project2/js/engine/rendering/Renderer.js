class Renderer {

  render(scene) {

    let cameraGo = scene.getFirstGameObjectWithComponentType(CameraComponent);

    if (cameraGo == null) {
      console.log('No Camera found. Dumbass');

      return;
    }

    //GATHERS ALL THE RENDER COMPONENETS THAT EXIST IN THE SCENE//
    let compToRender = [];

    for (let i = 0; i < scene.gameObjects.active.length; i++) {

      let go = scene.gameObjects.active[i];

      this.addRenderComponenets(compToRender, go);
    }

    //ORDER RENDER COMPONENETS BY THE Z VALUE OF THEIR POSITION; IDEA IS TO RENDER FURTHEST OBJECTS FIRST//
    //HIGHER NUMBER IS FURTHER AWAY FROM CAMERA//
    compToRender.sort(function(a, b){return b.gameObject.getTransform().world.position.z - a.gameObject.getTransform().world.position.z});

    push();
    cameraGo.getTransform().world.applyInverse();
    // console.log(cameraGo.getTransform().world)
    //RENDER ALL COMPONENTS IN ORDER//
    for (let h = 0; h < compToRender.length; h++) {
      push();
      //console.log(compToRender[h].gameObject.getTransform());
      compToRender[h].gameObject.getTransform().world.apply();
      compToRender[h].render(this);
      pop();
    }



    // DEBUG DRAW

    // for (let i = 0; i < scene.gameObjects.active.length; i++) {
    //
    //   let go = scene.gameObjects.active[i];
    //   let trf = go.getTransform();
    //   if(trf != null){
    //     push();
    //     //console.log(compToRender[h].gameObject.getTransform());
    //     trf.world.apply();
    //     stroke(255,0,0);
    //     line(0,0,100,0);
    //     stroke(0,255,0);
    //     line(0,0,0,100);
    //     pop();
    //   }
    // }

    pop();





  }

  addRenderComponenets(array, go) {

    for (let j = 0; j < go.components.active.length; j++) {

      let comp = go.components.active[j];

      if (comp instanceof RenderComponent) {
        array.push(comp);
      }
    }

    for (let i = 0; i < go.children.active.length; i++) {
      this.addRenderComponenets(array, go.children.active[i]);
    }
  }
}
