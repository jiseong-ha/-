function setup() {
  createCanvas(400, 400);
  background(255);
  strokeWeight(2);
  stroke(0, 50);
}

function draw() {
  if (mouseIsPressed ) {
  
 push(); 
strokeWeight(5);
fill(0);
ellipse(width/2, height/2,55,55 ); 

    pop();
  }
}