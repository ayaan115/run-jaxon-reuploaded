var jaxon, bomb, coin;
var energyDrink, path;
var jaxonRunning;
var boundary1, boundary2;
function preload(){
  //pre-load images
  path.addAmination("path.png");
  jaxonRunning.loadAnimation("Runner-1.png", "Runner-2.png");
  jaxon.loadAnimation("Runner-1.png", "Runner-2.png", jaxonRunning);
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  jaxon = createSprite(200, 200, 10, 10);
  path = createSprite(200, 200, 100, 100);
  
}

function draw() {
  background("white");
  

  drawSprites();
}

