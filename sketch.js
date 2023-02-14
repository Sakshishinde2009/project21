var forestImg, forest;
var stoneImg, stonesGroup;
var ghost, ghostImg;
var  invisibleBlockGroup, invisibleBlock;
var gameState = "play"
var stone 

function preload(){
  forestImg = loadImage("forest.png");
  stoneImg = loadImage("stone.png");
  ghostImg = loadImage("ghost-standing.png");
  
}

function setup() {
  createCanvas(600,600);
  forest = createSprite(300,300);
  forest.addImage("forest",forestImg);
  forest.scale = 3;
  forest.velocityX = 1;
  
  stonesGroup = new Group();
  invisibleBlockGroup = new Group();
  
  ghost = createSprite(150,450,50,50);
  ghost.scale = 0.5;
  ghost.addImage("ghost", ghostImg);

  invisibleBlock = createSprite(150,500,50,10);
  invisibleBlock.visible = false;
}


function draw() {
  background(255);
 if(forest.x > 400 ){
      forest.x = 300;
    } 
  
  if (gameState === "play") {
    
    if(keyDown("space")){
        ghost.velocityY = -9;
       }
         
     ghost.velocityY =  invisibleBlock.velocityY;  
  
    spawnstones();

    
    
     drawSprites();
}
  
   if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250);
    background(0);
  }
}

function spawnstones()
{
  if (frameCount % 60 === 0) {
    var stone = createSprite(200, -50);
    var invisibleBlock = createSprite(200,15);
    
    invisibleBlock.height = 2;
    
    stone.x = Math.round(random(10,40));
    invisibleBlock.x = stone.x ; 

    stone.addImage(stoneImg);
    stone.velocityX = 1;
    
    invisibleBlock.velocityX = 1;
    ghost.depth = stone.depth;
    ghost.depth =1;
    
    stone.lifetime = 800;
    invisibleBlock.lifetime = 800;

    stonesGroup.add(stone);
    invisibleBlock.debug = false;
    invisibleBlockGroup.add(invisibleBlock);
}
