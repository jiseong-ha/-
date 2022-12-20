let p = 0.5;

function setup() {
  createCanvas(400, 400);
  background(0);
  stroke(200);
}

function draw() {
  
  if (random() > p) {
  	  point(random(500), random(400));
  } else {
  	stroke(random(255), random(255), random(255));
  strokeWeight(1);
  line(width/2, height/2, mouseX, mouseY);
  }
  }
  
function keyReleased() {
  if (keyCode == DELETE) background(0);
 
}