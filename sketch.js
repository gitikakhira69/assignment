function preload() {
  //load game assets
 
}
var rabbit;
var carrot;
var edges;

function setup() {
  createCanvas(600,600);
  rabbit=createSprite(50,550,20,20)
  rabbit.shapeColor="white";
  carrot=createSprite(540,50,30,30)
  carrot.shapeColor="orange";
  edges=createEdgeSprites();

  obs1=createSprite(50,240,100,20);
  obs1.velocityX=5;
  obs1.shapeColor="blue";
  obs2=createSprite(200,240,100,20)
  obs2.velocityX=5;
  obs2.shapeColor="blue";
  obs3=createSprite(350,240,100,20)
  obs3.velocityX=5;
  obs3.shapeColor="blue";
  obs4=createSprite(500,240,100,20)
  obs4.velocityX=5;
  obs4.shapeColor="blue";

  obs5=createSprite(500,350,100,20)
  obs5.velocityX=-5;
  obs5.shapeColor="blue";
  obs6=createSprite(350,350,100,20)
  obs6.velocityX=-5;
  obs6.shapeColor="blue";
  obs7=createSprite(200,350,100,20)
  obs7.velocityX=-5;
  obs7.shapeColor="blue";
  obs8=createSprite(50,350,100,20)
  obs8.velocityX=-5;
  obs8.shapeColor="blue";

}

function draw() {
  background("black");
  rabbit.bounceOff(edges[0]);
  rabbit.bounceOff(edges[1]);
  rabbit.bounceOff(edges[2]);
  rabbit.bounceOff(edges[3]);
  
  if(obs1.x>600) {
    obs1.x= 0;
  }
  else if (obs2.x>600) {
    obs2.x=0;
  }
  else if (obs3.x>600) {
    obs3.x=0;
  }
  else if (obs4.x>600) {
    obs4.x=0;
  }

  if(obs5.x<0) {
    obs5.x=600;
  }
  else if(obs6.x<0) {
    obs6.x=600;
  }
  else if(obs7.x<0) {
    obs7.x=600;
  }
  else if(obs8.x<0) {
    obs8.x=600;
  }

  if(keyDown("up"))
  {
    rabbit.y=rabbit.y-10
  }
  if(keyDown("down"))
  {
    rabbit.y=rabbit.y+10
  }
  if(keyDown("left"))
  {
    rabbit.x=rabbit.x-10
  }
  if(keyDown("right"))
  {
    rabbit.x=rabbit.x+10
  }
  if(rabbit.isTouching(carrot))
  {
    text("You Win",250,300)
  }
  if(rabbit.isTouching(obs1))
  {
    obs1.velocityX=0
    text("You Lose",250,300)
  }
  if(rabbit.isTouching(obs2))
  {
    obs2.velocityX=0
    text("You Lose",250,300)
  }
  if(rabbit.isTouching(obs3))
  {
    obs3.velocityX=0
    text("You Lose",250,300)
  }
  if(rabbit.isTouching(obs4))
  {
    obs4.velocityX=0
    text("You Lose",250,300)
  }
  if(rabbit.isTouching(obs5))
  {
    obs5.velocityX=0
    text("You Lose",250,300)
  }
  if(rabbit.isTouching(obs6))
  {
    obs6.velocityX=0
    text("You Lose",250,300)
  }
  if(rabbit.isTouching(obs7))
  {
    obs7.velocityX=0
    text("You Lose",250,300)
  }
  if(rabbit.isTouching(obs8))
  {
    obs8.velocityX=0
    text("You Lose",250,300)
  }
  drawSprites();
}
