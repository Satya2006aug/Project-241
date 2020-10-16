
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1, dustbinPart1, dustbinPart2, dustbinPart3, sprite, sprite2, sprite3;
var ground1;

function preload()
{
	
}

function setup() {
createCanvas(800, 700);
engine = Engine.create();
world = engine.world;
sprite=createSprite(600,620,10,80);
sprite.shapeColor="red";

sprite2=createSprite(680,620,10,80);
sprite2.shapeColor="red";

sprite3=createSprite(640,660,80,10);
sprite3.shapeColor="red";
dustbinPart1 = Bodies.rectangle(600 , 610 , 20 , 100 ,{isStatic:true});
World.add(world,dustbinPart1);

dustbinPart2 = Bodies.rectangle(500 , 610 , 20 , 100 ,{isStatic:true});
World.add(world,dustbinPart2);

dustbinPart3 = Bodies.rectangle(400 , 650 , 200 , 20 ,{isStatic:true});
World.add(world,dustbinPart3);
paper1 = new Paper(160,640,40);
ground1 = new Ground(400,670,800,20);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  paper1.display();
  ground1.display();
  
  drawSprites();
 
}

function keypressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
    
  }
} 

