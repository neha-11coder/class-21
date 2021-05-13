
var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.velocityY=-5;


  fixedRect = createSprite(400, 100, 50, 50);
  fixedRect.shapeColor = "green";
  fixedRect.velocityY=5;
  
  
}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
  
  bounceOff(movingRect,fixedRect)
  
  /*if(isTouching()){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  
  else {
    movingRect.shapeColor = "green";
  
    fixedRect.shapeColor = "green"
  }*/
  drawSprites();
}


  


/*function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}*/

function bounceOff(object1,object2){
  if(object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2){
    object1.velocityX=object1.velocityX*(-1)  
    object2.velocityX=object2.velocityX*(-1)
  }
  if(object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2){
      object1.velocityY=object1.velocityY*(-1)
      object2.velocityY=object2.velocityY*(-1)
  }
}
