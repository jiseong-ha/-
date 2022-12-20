let P;


function setup() {
 createCanvas(400, 400);
 background(255, 255, 255);
 P = new Play();
 
  
}

function draw() {
  P.update ();

}

function Play() {
 
  stroke(0, 0, 0, 15);

 this. update = function(){
  let angle1 = random(0, 6 * PI); 
   let xpos1 = 200 + 200 * cos(angle1);
   let ypos1 = 200 + 200 * sin(angle1);
  let angle2 = random(0, 6 * PI);
    let xpos2 = 200 + 200 * cos(angle2);
   let ypos2 = 200 + 200 * sin(angle2); 
  
line(xpos1, ypos1, xpos2, ypos2); 
 }
}

function mousePressed() {
  background (0);
}