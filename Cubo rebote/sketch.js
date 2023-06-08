let x = 0; 
let y = 0;
let xs = 0;
let ys = 0;
function setup() {
  createCanvas(500, 500);
  x = random(width);
  y = random(height);
  xs = random(-10, 10);
  ys = random(-10, 10);
  noStroke();
}

function draw() {
  background(255);
  fill(0);
  moveBall();
  bounceBall();
  drawBall();
}

function randomGrayBall() {
  fill(random(255), random(255), random(255));
}

function moveBall() {
  x += xs;
  y += ys;
}

function bounceBall() {
  if(x < 0 || x  > width){
    xs *= -1;
  }
  if(y < 0 || y > height) {
    ys *= -1;
  }
}

function drawBall() {
    square(x, y, 50);
}