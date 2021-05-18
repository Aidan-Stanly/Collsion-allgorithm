var fixedRect, movingRect;
var o1,o2,o3,o4;

function setup() {
  createCanvas(1200,800);
  o1 = createSprite(600, 400, 50, 80);
  o1.shapeColor = "green";
  o1.debug = true;
  o2 = createSprite(400,200,80,30);
  o2.shapeColor = "blue";
  o2.debug = true;
  o3 = createSprite(100,400,60,60)
  o3.shapeColor="red"
  o3.debug = true;
  o4 = createSprite(100,500,100,60)
  o4.shapeColor="yellow"
  o4.debug = true;
}


function draw() {
  background(255,255,255);  
  o1.x = World.mouseX;
  o1.y = World.mouseY;

  if(collide(o1,o2)){
  o1.shapeColor=(random(0,255))
  o2.shapeColor=(random(0,255))
  }
  else if(collide(o1,o3)){
  o1.shapeColor=rgb(random(0,255),random(0,255),random(0,255))
  o3.shapeColor=rgb(random(0,255),random(0,255),random(0,255))
  }
  else if(collide(o1,o4)){
  o1.shapeColor=rgb(random(0,255),random(0,255),random(0,255))
  o4.shapeColor=rgb(random(0,255),random(0,255),random(0,255))
  }
  else{
  o1.shapeColor="green"
  o2.shapeColor="green"
  o3.shapeColor="green"
  o4.shapeColor="green"
  }
  drawSprites();
}
function collide(movingRect,fixedRect) {
if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
      && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
      && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
   return true;
  }
  else {
    return false;
  }}
