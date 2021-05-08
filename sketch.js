var bird, candy, ground;
var birdanm, candyanm, backgroundanm; 
var candyGroup;
var score = 0;

function preload() {
birdanm = loadAnimation("Bird 1.png", "bird 2.png", "bird 4.png");
birdanm2 = loadAnimation("Bird 1.1.png","Bird 2.2.png", "Bird 4.4.png");
candyanm = loadImage("candy for bird.png");
backgroundanm = loadImage("BG for Flasppy.jpg");
}

function setup() {
  createCanvas(800,400);
  bird = createSprite(400, 200, 50, 50);
  bird.debug = true;
  bird.setCollider("rectangle", 0, 0, 100, 100);
  bird.addAnimation("bird1", birdanm);
  bird.addAnimation("bird2", birdanm2);
  candyGroup = new Group();
}

function draw() {
  background(backgroundanm);  

  if(keyDown(LEFT_ARROW)){
    bird.changeAnimation("bird2", birdanm2);
   bird.x = bird.x - 5;
  }

  if(keyDown(RIGHT_ARROW)){
    bird.changeAnimation("bird1", birdanm);
    bird.x = bird.x + 5;
   }

   spawncandy();
   for(var i = 0; i< candyGroup.length; i++){
    if(candyGroup.get(i).isTouching(bird)){
      score += 1;
        candyGroup.get(i).destroy();}   
        
    }
    

  drawSprites();
  textSize(30);
  text("score:"+score, 50, 60);
}
function spawncandy(){
  if(World.frameCount% 60 === 0){
    var r = Math.round(random(200, 600))
    candy = createSprite (r, 0);
    candy.debug = true;
    candy.setCollider ("rectangle", 0, 0, 70, 70);
    candy.addImage("candy", candyanm);
    candy.velocityY = 2;
    candy.scale = 0.5  ;
    candyGroup.add(candy);
  }
}

