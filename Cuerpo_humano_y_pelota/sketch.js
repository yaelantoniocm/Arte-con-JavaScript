const amp = 50.0;
const freq = 0.001;
const phase = 0.0;
function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background(100, 100, 255);
  
  
  push();//tronco
    translate(width * 0.5, height * 0.5);
    fill(255);
    rect(0, 0, 50, 100);
    push();//cuello
      translate(0, -60);
      rotate(radians(sin(millis() * freq + phase) * amp));
      fill(255, 0, 0);
      circle(0, 0, 10);
      push();//cabeza
        translate(0, -35);
        fill(255);
        square(0, 0, 50);
      pop();//cabeza
    pop();//cuello
  pop();//tronco
  
  const x = width * 0.75;
  const y = height * 0.5 + sin(millis() * 0.005) * 50;
  const r = map(sin(millis() * 0.01), -1, +1, 15, 100);
  fill(255, 100, 255);
  ellipse(x, y, r, r);
}