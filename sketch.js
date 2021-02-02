var egg,eggsImage

var backgroundImage
function preload() {
  backgroundImage=loadImage("yeet.jpeg");
eggsImage=loadImage("3eggs.png")

}

function setup() {
createCanvas(displayWidth,displayHeight)
egg=createSprite(displayWidth-200,440)
egg.addImage(eggsImage)
egg.scale=0.5
}

function draw() {
background(backgroundImage)
drawSprites();

}