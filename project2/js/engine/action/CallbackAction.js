class CallbackAction extends EventListener {

  constructor(onBegin, onEnd) {

    super();
    this.onBegin = onBegin;
    this.onEnd = onEnd;
  }

  begin(event){
    if(this.onBegin != null) this.onBegin(event);
  }

  end(event){
    if(this.onEnd != null) this.onEnd(event);
  }

}
