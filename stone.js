class Stone extends BaseClass {
    constructor(x,y){
      super(x,y,80,80);
      this.image = loadImage("sprites/stone.png");
    }
  
    display() {
      super.display();
    }
  }
  