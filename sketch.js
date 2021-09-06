
var trex ,trex_running;
var ground;
var curvyground
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  curvyground=loadAnimation("ground1.png","ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite  
 trex = createSprite(100,50,40,80)
 trex.addAnimation("running",trex_running)
 trex.scale=0.5
 ground=createSprite(200,180,400,20)
ground.addAnimation("ground_running",curvyground)
}

function draw(){
  background("white")
  if(keyDown("space"))
  {
  trex.velocityY= - 10;
  }
  trex.velocityY=trex.velocityY+0.5
  trex.collide(ground);
  ground.velocityX=-7;
  console.log(ground.x);
  if(ground.x<0)
  {
   ground.x= ground.width/2
  }
  drawSprites()
  
}
