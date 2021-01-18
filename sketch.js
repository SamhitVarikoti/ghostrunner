var tower,ghost,window,invisibleground,ralling

var PLAY = 1;
var END = 0;
var gameState = PLAY;



    
    
function preload(){
  towerImage = loadImage("tower.png");
  ghostImage = loadImage("ghost-standing.png");
  windowImg = loadImage("door.png");
  
}


function setup(){
  createCanvas(600,600);
  
  tower = createSprite(300,300,50,50);
  tower.addImage(towerImage);
  tower.velocityY = 2;

  
  ghost = createSprite(300,100,40,40);
  ghost.addImage(ghostImage);
  ghost.scale = 0.3;
  
}


function draw(){
  background("black");
  
  if(gameState === PLAY){
    
    if(tower.y > 400){
    tower.y = 300
  }
  if(keyDown("space")){
    ghost.velocityY = -10;
  }
  ghost.velocityY = ghost.velocityY + 0.8;
  
  if(keyDown("left_arrow")){
    ghost.x = ghost.x-4;
  }
   if(keyDown("right_arrow")){
    ghost.x = ghost.x+4;
  }
  spawnObstacles();
  drawSprites();
  }
  
}
function spawnObstacles(){
  if(frameCount % 60 === 0){
      window = createSprite(200,0,30,30);
      window.x = Math.round(random(100,500));
      window.addImage(windowImg);
      window.scale = 0.5;
      window.velocityY = 3;
     }
  
}