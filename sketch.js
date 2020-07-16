var ground,ground_img,iground
var monkey,monkey_img, m;
var  banana_img,stone_img;
var score, time, gs;
var bananagroup,stonegroup;

function preload(){
  
  monkey_img = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png" );
  
m = loadImage("Monkey_01.png"); 
  
 banana_img = loadImage("Banana.png"); 
 stone_img = loadImage("stone.png"); 
 
  ground_img = loadImage("jungle.jpg");
  
 stone_img = loadImage("stone.png") ;
}


function setup() {
  createCanvas(400,400);
  
  ground = createSprite(200,200);
  ground.addImage("ground", ground_img);
  iground = createSprite(200,365,500,10);
  iground.visible = false;
  
  monkey = createSprite(60,320);
  monkey.scale = 0.12;
  monkey.addAnimation("monkey",monkey_img);
  monkey.addAnimation("m",m)
  
  score = 0;
  
  gs = "L"
  time = 0;
 bananagroup = new Group();
 stonegroup = new Group(); 
}


function draw(){
 background(255); 
 
  if(gs === "L"){
   //giving velocity to ground
    ground.velocityX = -6;
    //resetting ground
    if(ground.x < -10){
      ground.x = ground.width/2;
    }
  
 monkey.collide(iground); 
    
       //updating time
   time = time + Math.round(getFrameRate()/60);
  
 if(keyDown("space") && monkey.y >  315) {
   monkey.velocityY = - 10 ;
 }
  
 //gravity
 monkey.velocityY = monkey.velocityY + 0.4; 
  
 if (frameCount%70 === 0){
 sbanana();
 } 
  
if(frameCount%140 === 0){
sStone();
}  
  
if(bananagroup.isTouching(monkey)){
  score = score + 1;
  bananagroup.destroyEach();
}  
  
if(stonegroup.isTouching(monkey)) {
  gs = "J"; 
} 
  }

else if(gs === "J"){
monkey.velocityY = 0;
ground.velocityX = 0;
bananagroup.setLifetimeEach(-1);
bananagroup.setVelocityXEach(0); 
stonegroup.setLifetimeEach(-1);
stonegroup.setVelocityXEach(0);
monkey.changeAnimation("m",m);  
}  
  
  drawSprites();
 
 stroke("white") ;
  fill("white");
text("Score: "+ score, 300,50);
text("time: "+ time, 30,50); 
 if(gs === "J"){
   textSize(50);
  text("gameOver",70,200) 
 } 
}

function sbanana(){
  var banana = createSprite(415,200);
banana.velocityX = -7  
banana.addImage("banana",banana_img); banana.lifetime = 300;
banana.scale = 0.07;  
bananagroup.add(banana);  
  
var rand = Math.round(random(1,5)) ;
  switch(rand){
    
    case 1: banana.Y = 180;
      break;
    case 2:  banana.y = 190;
      break;
    case 3:  banana.y = 200;
      break;
    case 4:  banana.y = 210;
      break;
    case 5:  banana.y = 220;
      break;
    default: break; 
  }
}

function sStone(){
 var stone = createSprite(410,350);
stone.velocityX = -9
stone.addImage("stone",stone_img);
stone.lifetime = 300;  
stone.scale = 0.14;  
stonegroup.add(stone);  
}