function setup() {
  createCanvas(700, 500);
  noStroke();
  fill(255, 100, 100);
  rectMode(CENTER);
}

function draw() {
  background(255);
  translate(200, 200);
  rotate(radians(millis() * 0.1));
  //scale(mouseX / width * 2, 1);
  square(0, 0, 200);
  
  translate(200, 0);
  
  rotate(radians(millis() * -0.2));
  square(0, 0, 100);
}