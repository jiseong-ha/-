let ball1, ball2;

function setup() {
  createCanvas(500, 400);
  ball1 = new Ball();
  ball2 = new Ball();
}

function draw() {
  background(0);
  ball1.draw();
  ball2.draw();
  ball1.move();
  ball2.move();
}

class Ball{
  constructor(){
    this.x = random(width);
    this.y = random(height, height*2);
    this.d = random(5, 30);
  }

  draw(){
    fill(255);
    circle(this.x, this.y, this.d);
  }

  move(){
    this.x += random(-2, 2);
    this.y -= 2;
    if (this.y < 0) {
      this.x = random(width);
      this.y = random(height, height * 2);
    }
  }
}
