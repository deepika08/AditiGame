var bg,coin,sound,bg2
var ground,animal1,animal2,animal3,animal4
var boy,boy_img
var gameOver,restart
var obstacle,stone1,stone2,stone3,stone4

function preload(){
boy_running = loadAnimation("boy/boy1.png","boy/boy2.png","boy/boy3.png","boy/boy4.png","boy/boy5.png","boy/boy6.png")
boyImg = loadImage("boy.gif")
bgfinal = loadImage("bg.png")
bg1=loadImage("bg1.jpg")
coin=loadImage("coin.png")
sound=loadSound("coins sound.wav")
bg2=loadImage("bg2.jpg")
restart=loadImage("restart.png")
gameOver=loadImage("gameover0.png")
stone1=loadImage("stone/stone1.png")
stone2=loadImage("stone/stone2.png")
stone3=loadImage("stone/stone3.png")
stone4=loadImage("stone/stone4.png")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  forest = createSprite(width/2, height/2)
  forest.addImage(bgfinal)
  forest.scale = 9
  forest.velocityY = 3;
  forest.y = forest.width/2
  ground=createSprite(width/2, height -20, width,20)
  ground.visible = false

  boy=createSprite(width/2,height-30,50,50)
  boy.addAnimation("running", boy_running)
  //boy.addImage(boyImg)
  //boy.scale=1


}

function draw() {
  background(255);  



  text ("x"+mouseX+",y"+mouseY,200,100)

  if(forest.y > height-800)
  {
    forest.y = forest.height/2
  }
  if(keyDown(UP_ARROW) && boy.y >height/2+200){
    boy.y-=2
    
  }
  if(keyDown(DOWN_ARROW)){
    boy.y+=2
    
  }
  if(keyDown(LEFT_ARROW)&& boy.x > width/2 -200){
    
    boy.x-=2
  }
  if(keyDown(RIGHT_ARROW) && boy.x < width/2 +200){
    
    boy.x+=2
  }
  stones()
  coins()
  boy.collide(ground)
  drawSprites();
}

function stones(){
  if(frameCount % 160 ===0){
   var obstacle=createSprite(Math.round(random(width/2-200, width/2+200)),height/2+200,50,50)
   var r = Math.round(random(1,4))
   switch(r){
      case 1:  obstacle.addImage(stone1);
              break;
      case 2:  obstacle.addImage(stone2);
              break;
      case 3:  obstacle.addImage(stone3);
              break;
      case 4:  obstacle.addImage(stone4);
              break;
      default: break;
   }
   
    obstacle.velocityY=3
    obstacle.scale=0.8
    obstacle.lifetime = 300
  }
  
  }

  function coins(){
    if(frameCount% 300 ===0){
     var coins=createSprite(Math.round(random(width/2-200, width/2+200)),height/2+200,50,50)
      coins.addImage(coin)
        coins.scale=0.4
        coins.velocityY=3
        coins.lifetime = 300
    }
    
  }