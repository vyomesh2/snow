var snow3point5
var crewmate
var songbg








function preload(){
snow3point5= loadImage("snow3.jpg")
crewmate= loadImage("imposter.png")
songbg=loadSound("songbg.mp3")

}

function setup() {
  createCanvas(800,500);
  snow3 =createSprite(400, 200, 70, 50);
  imposter= createSprite(200,200,200,200)
  snow3.addImage(snow3point5)
  imposter.addImage(crewmate)
  imposter.scale=0.56
  //song.play()
  
}


function draw() {
  background("black");  
  drawSprites();
  if(keyDown(UP_ARROW)){
    imposter.velocityY=89
    

  }
  if(keyDown(DOWN_ARROW)){
    imposter.velocityY=-89

  }
  if(keyDown("space")){
    
    songbg.play()

  }
  
} 