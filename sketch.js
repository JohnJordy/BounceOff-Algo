var fixedRect, movingRect;
var gameobject1
var gameobject2 

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

//  movingRect.velocityY = -5;
 // fixedRect.velocityY = +5;

  gameobject1 = createSprite(200,50,50,50)
  gameobject1.shapeColor= "lime"
  gameobject1.velocityX=-4
  gameobject2 = createSprite(400,50,50,50)
  gameobject2.shapeColor= "cyan"
  gameobject2.velocityX=4
}

function draw() {
  background(0,0,0);  
  bounceoff(gameobject1,gameobject2)
  
  drawSprites();
}

