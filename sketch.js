var squares;
var triangle;
var obstacle;
var ground;
var player;
var backgroundImg;
var score = 0;



function preload(){


  backgroundImg = loadImage("./Images/bg.png");
  player = loadImage("./Images/kid.jpg");
  squares = loadImage("./Images/square.png.pixil");
  triangle = loadImage("./Images/triangle.pixil");
}


function setup(){

  createCanvas(1200, 400);

  player = createSprite(50, 180, 25, 25);
  player.velocityX = 3;
  ground = createSprite(200,310,600,20);
  ground.visible = false;

  ground.x = ground.width /2;
  ground.velocityX = -6;

  


}




function draw(){

  background(backgroundImg);
  


  if (ground.x < 0){
    ground.x = ground.width/2;
  }

  

  

  drawSprites();
}



function spawnObstacles(){


  if(frameCount % 60 === 0){

    var obstacle = createSprite(600, 165, 10, 40);
    obstacle.velocityX = -(6 + 3*score/100);

    var rand = Math.round(random(1,2));
    switch(rand){
      case 1: obstacle.addImage(square);
              break;
      case 2: obstacle.addImage(triangle);
              break;
      default: break;
   }

   obstacle.scale = 0.5;
   obstacle.lifetime = 300;
  }
}