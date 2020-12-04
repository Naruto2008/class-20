var fix,moving;



function setup() {
  createCanvas(1200,800);
  fix=createSprite(600,400,50,80);
  fix.shapeColor="green";
  moving=createSprite(400,200,80,30); 
  moving.shapeColor="green";
}

function draw() {
  background(255,255,255);  
  moving.x=World.mouseX;
  moving.y=World.mouseY;
  if(moving.x-fix.x<fix.width/2+moving.width/2 && fix.x-moving.x<fix.width/2+moving.width/2
     && moving.y-fix.y<fix.height/2+moving.height/2 
    && fix.y-moving.y<fix.height/2+moving.height/2){
      fix.shapeColor="red";
      moving.shapeColor="red";

    }
    else{
      fix.shapeColor="green";
      moving.shapeColor="green";
    }
  drawSprites();
}