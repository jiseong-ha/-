let P;
let angle1 = random(0, 6 * PI);  
let angle2 = random(0, 6 * PI); 

function setup() {
 createCanvas(400, 400);
 background(255, 255, 255);
 P = new Play();
 
  
}

function draw() {
  P.update ();
  P.display ();
}

class Play {
  
  constructor(){  
    
    this.xpos1 = 200 + 200 * cos(angle1);
   this.ypos1 = 200 + 200 * sin(angle1); 

  this. xpos2 = 200 + 200 * cos(angle2);
   this.ypos2 = 200 + 200 * sin(angle2); 
 
  }
 
 update(){  

 
    }

 
 
display(){ 
  stroke(0, 0, 0, 15);
line(xpos1, ypos1, xpos2, ypos2);
}

  
}
