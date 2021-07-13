var ship 
var sea
function preload(){
  seaImg = loadImage("sea.png")
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")

}




function setup(){
  createCanvas(1000,600);
  sea = createSprite(500,300,1000,100)
 sea.addImage(seaImg)
  ship = createSprite(500,400,20,50)
 ship.addAnimation("ship",shipImg1)
 ship.scale = 0.2
sea.scale= 1





}

function draw() {
  background("blue")
  sea.velocityX = -3
  if(sea.x<0){
    sea.x= sea.width/2
    
  }
  drawSprites()
  
}