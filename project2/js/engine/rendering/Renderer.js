//RENDERING FOR ALL GAME OBJECTS AND THEIR CHILDREN//

class Renderer {

  render(scene) {

    let cameraGo = scene.getFirstGameObjectWithComponentType(CameraComponent);

    //ERROR CHECK TO MAKE SURE CAMERA IS SETUP WITH SCENE//
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

    //RENDER ALL COMPONENTS IN ORDER//
    for (let h = 0; h < compToRender.length; h++) {

      push();
      compToRender[h].gameObject.getTransform().world.apply();
      compToRender[h].render(this);
      pop();
    }
    pop();
  }

  //PUSHES RENDERED CHILDREN COMPONENTS INTO ARRAY//
  addRenderComponenets(array, go) {
    go.visitEnabledGameObjects(function (x) {
      for (let j = 0; j < x.components.active.length; j++) {
        let comp = x.components.active[j];
        if (comp instanceof RenderComponent) {
          array.push(comp);
        }
      }
    });
  }
}
