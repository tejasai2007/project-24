
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var bin,bin1,bin2,bin3,bin4,bin5;
var ball,ball1;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(500,680,1000);
	//bin = Bodies.rectangle(800,660,20,20);
	//World.add(world,bin)

//	bin1 = createSprite(200,200,200,20);
//	bin1.x = bin.position.x;
//	bin1.y = bin.position.y;
	bin = new Bin(500,500,10,10)
  
	bin2 = new Bin(900,600,20,20);

	//bin3 = createSprite(200,200,20,150);
	//bin3.x = bin2.position.x;
	//bin3.y = bin2.position.y;

	bin4 = new Bin(700,600,20,20);
	//World.add(world,bin)

	//bin5 = createSprite(200,200,20,150);
	//bin5.x = bin4.position.x;
	//bin5.y = bin4.position.y;

	//ball = Bodies.circle(100,600,10);
	//World.add(world,ball);

	ball = new  Paper(200,200);

	


  
}


function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  

	keyPressed();

  ground.display();
  
  drawSprites();
 
}
function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x : 85,y : 85})

	}


}



