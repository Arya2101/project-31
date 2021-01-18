const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var maximumDrops = 100;
var drops = [];
var boy;
var thunder;
var umbrella;
var boyRunning;
var thunderImg;
var thunder1;
var thunder2;
var thunder3;
var thunder4;


function preload(){
 boyRunning = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png")
  thunder1 = loadImage("thunder1.png");
  thunder2 = loadImage("thunder2.png");
  thunder3 = loadImage("thunder3.png");
  thunder4 = loadImage("thunder4.png");

}


function setup(){
  createCanvas(400,400);

  engine = Engine.create();
  world  = engine.world;

  if(frameCount%100===0){
    for(var i=0; i<maximumDrops;i++){
      drops.push(new RainDrops(random(0,400),random(0,400),3,10));
     }
    } 

    boy = createSprite(200,275,20,50);
    boy.addAnimation("running", boyRunning);
    boy.scale = 0.35;
    
    
}

    
function draw(){
    background("black");
    Engine.update(engine);
    for(var i=0; i<maximumDrops;i++){
        drops[i].display();
        drops[i].update();
      }
      spawnThunder();
      drawSprites();
    
}   

function spawnThunder(){
  if (frameCount % 150 === 0){
    thunder = createSprite(400,90,10,15);
    thunder.x = Math.round(random(0,400));
    thunder.debug = false;
     var rand = Math.round(random(1,6));
     switch(rand) {
       case 1: thunder.addImage(thunder1);
               break;
       case 2: thunder.addImage(thunder2);
               break;
       case 3: thunder.addImage(thunder3);
               break;
       case 4: thunder.addImage(thunder4);
               break;
       default: break;
     }
     thunder.scale = random(0.1,0.3);
     thunder.lifetime = 75;
}
}
