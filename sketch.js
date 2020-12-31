
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


  	engine = Engine.create();
	  world = engine.world;

    ground = new Ground(600,700,1200,20);

    stone = new Stone(100,100);

    tree = new Tree(575,485,100,100);

    boy  = new Boy(175,620,50,50);

    mango1 = new Mango(730,430);
    mango2 = new Mango(550,400);
    mango3 = new Mango(570,320);
    mango4 = new Mango(450,430);
    mango5 = new Mango(630,370);


    slingshot = new SlingShot(stone.body,{x:80, y:390});

  	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  stone.display();
  tree.display();
  ground.display();
  boy.display();
  slingshot.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  drawSprites();
 
}


function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
  //}
}

function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}