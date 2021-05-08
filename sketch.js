
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var tree,treeimg, dground;
var stoneObj;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var world,boy,boyimg;
var attach;


//Declare launcherObject and launchForce variable here
var launcherObj;
var launchForce = 100;

function preload(){
	boyimg=loadImage("boy.png");
  treeimg = loadImage("tree.png")

  }

function setup() {
	createCanvas(1000, 650);

	engine = Engine.create();
	world = engine.world;

  dground = new ground(500,625,1200,20);
  stoneObj =new stone(100,500,25); 

	mango1=new mango(600,290,34);
  mango2=new mango(855,325,35);
	mango3=new mango(670,260,35);
	mango4=new mango(730,200,35);
	mango5=new mango(710,320,36);
	mango6=new mango(780,250,35);
	mango7=new mango(825,170,33);
	mango8=new mango(880,260,35);
	mango9=new mango(940,220,35);
	mango10=new mango(980,305,35);
  

  //attach = new Throw(stoneObj.body,{x:100,y:465});
	tree = new Tree (800,650);
  launcherObj=new Launcher(stoneObj.body,{x:235,y:460});
 

 //boy = createSprite(160,550);
 //boy.addImage(boyimg);
 //boy.scale=0.125;

	
  //create launcherObject here


	Engine.run(engine);
}

function draw() {

  background("grey");
  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  
  

  
  
  tree.display();
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  stoneObj.display();
  dground.display();
  // display launcher object here
    launcherObj.display();

    image(boyimg,200,390,200,300);


  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);
  detectollision(stoneObj,mango8);
  detectollision(stoneObj,mango9);
  detectollision(stoneObj,mango10);
  
  drawSprites();
}

//create mouseDragged function here
function mouseDragged(){
  Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}

//create mouseReleased function here
function mouseReleased(){
  launcherObj.fly();
  
}

//create keyPressed function here
function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	  launcherObject.attach(stoneObj.body);
	}
  }

  function detectollision(lstone,lmango){

  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  	if(distance<=lmango.r+lstone.r)
    {
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }