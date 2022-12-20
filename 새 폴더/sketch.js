 

function setup() {
  createCanvas(400, 400);
  background(255);
  strokeWeight(3);
 
  }

function draw() {
for (let i = 0; i < 100; i++) {
  let r = random(50); 
  let x = random(width);
  let y= random(height);
  stroke(r * 5);
  line(x, y, i, i+r);
}
}