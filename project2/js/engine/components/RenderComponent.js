class RenderComponent extends Component{

  constructor() {
    super();
  }

  render(renderer) {

  }
}


class RenderDebugComponent extends RenderComponent{

  constructor() {
    super();
  }

  render(renderer) {


    let trf = this.gameObject.getTransform();
    console.log("Debug Comp local=");
    console.log(trf.local);
    //console.log("Debug Comp local=" + trf.local);
    console.log("Debug Comp world=");
    console.log(trf.world);
    //console.log("Debug Comp world=" + trf.world);
    if(trf != null){
      stroke(255,0,0);
      line(0,0,100,0);
      stroke(0,255,0);
      line(0,0,0,100);
    }
  }
}
