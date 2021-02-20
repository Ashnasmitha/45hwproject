var road1,road2,road3,road4,bgImg,path1,path2,boy,boyImg,boy2,shop,shopImg,potionImage,potionsGroup;

function preload(){
  bgImg=loadImage("road.jpg");

  boyImg=loadAnimation("Runner-1.png","Runner-2.png");
  boy2=loadAnimation("Runner-1.png");

  shopImg=loadAnimation("Shop.png");

  potionImage=loadImage("potion.png");
}

function setup() {
  createCanvas(1280,650);

  road1=createSprite(320,162.5,10,10);
  road1.addImage(bgImg);
  road2=createSprite(960,162.5,10,10);
  road2.addImage(bgImg);
  road3=createSprite(320,500,10,10);
  road3.addImage(bgImg);
  road4=createSprite(960,500,10,10);
  road4.addImage(bgImg);

  path1=createSprite(640,38.5,1280,75);
  path1.shapeColor="saddlebrown";
  path2=createSprite(640,625,1280,50);
  path2.shapeColor="saddlebrown";

  boy = createSprite(640,620,20,20);
  boy.addAnimation("Running",boy2);
  boy.scale=0.08;

  shop=createSprite(640,38.5,1280,75);
  shop.addImage(shopImg);

  potionsGroup = new Group();
}

function draw() {
  background(255,255,255);  

  
if(keyWentDown(LEFT_ARROW)){
    boy.velocityX-=3;
    boy.addAnimation("Running",boyImg);
}
if(keyWentUp(LEFT_ARROW)){
  boy.velocityX=0;
  boy.addAnimation("Running",boy2);
}
if(keyWentDown(RIGHT_ARROW)){
  boy.velocityX+=3;
  boy.addAnimation("Running",boyImg);
}
if(keyWentUp(RIGHT_ARROW)){
  boy.velocityX=0;
  boy.addAnimation("Running",boy2);
}

spawnPotion();

  drawSprites();
}

function spawnPotion() {
  //write code here to spawn the potions
  if (frameCount % 1000 === 0) {
    var potion = createSprite(Math.round(random(150,1220)),Math.round(random(200,550)),40,10);
    potion.addImage(potionImage);
    potion.scale = 0.5;

    potion.lifetime = 100;
    
    potionsGroup.add(potion);
  }
  
}