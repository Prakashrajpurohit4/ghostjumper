var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
 ghost=createSprite(200,200)
 ghost.addImage(ghostImg)
 ghost.scale=0.4





 doorsGroup=new Group()
 climbersGroup=new Group()
 invisibleBlockGroup=new Group()

}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }
   spawndoors()
  

   if(keyDown("space")){
    ghost.velocityY=-5
  
   }
   if(keyDown("right_arrow")){
   ghost.x=ghost.x+3
   }
   if(keyDown("left_arrow")){
   ghost.x=ghost.x-3
  }
  if(climbersGroup.isTouching(ghost)){
  ghost.velocityY=0
  }
  if(invisibleBlockGroup.isTouching(ghost)||ghost.y>600){
  ghost.destroy()
  


  }
  
  
  
  
   ghost.velocityY=ghost.velocityY+0.5
   drawSprites()
  }
   function spawndoors(){
   
    if(frameCount%200===0){
     door=createSprite(Math.round(random(120,400)),-50)
    door.addImage(doorImg)
    door.velocityY=2
    door.lifetime=800
    
    doorsGroup.add(door)

    climber=createSprite(door.x,10)
    climber.addImage(climberImg)
    climber.velocityY=2
     climber.lifetime=800 
     
    climbersGroup.add(climber)
   
    invisibleBlock=createSprite(door.x,15,climber.width,2)
    //invisibleBlock.debug=true
    invisibleBlock.velocityY=2
   invisibleBlock.lifetime=800
   invisibleBlockGroup.add(invisibleBlock)
   
   
    ghost.depth=door.depth
    ghost.depth=ghost.depth+1



    }
          









   }








