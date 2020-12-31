class Boy{
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.x = x;
      this.y = y;
      this.body = Bodies.rectangle(x,y,100,100,options);
      this.image = loadImage("sprites/boy.png");
      World.add(world,this.body)
    }
    display(){
      var position = this.body.position
      push();
      translate(position.x,position.y);
      fill(255);
      imageMode(CENTER);
      image(this.image,0,0,290,290);
      pop();
    }
  }