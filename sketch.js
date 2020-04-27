var bullet,wall,damage=0;

function setup() {
  createCanvas(1600,400);

  bullet= createSprite(200, 200, 25, 25);
  bullet. shapeColor=("white");

  wall= createSprite(1350,200,50,400);
  wall.shapeColor=(80,80,80);

  bullet.velocityX= random(+223,+321);
bullet.weight= random(30,52);
 
}

function draw() {
  background(0,0,0); 

  damage=(0.5*bullet.weight*bullet.velocityX*bullet.velocityX)/wall.width;

if (bullet.isTouching(wall)){

  bullet.velocityX=0;
wall.x=1350;
bullet.x=1330;
}

text ("Damage:"+damage,500,200);
  drawSprites();
}