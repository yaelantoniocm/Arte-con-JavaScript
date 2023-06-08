let pointsNumber = 2000;
let x = [];
let y = [];
let col = [];

function setup() {
  createCanvas(800, 800);
  background(255);
  strokeWeight(20);

  for (let i = 0; i < pointsNumber; ++i) {
    x[i] = random(width);
    y[i] = random(height);
    col[i] = color(random(100, 255), random(100, 255), random(100, 255), random(100, 255));
  }
}

function draw() {
  noStroke();
  fill(255, 12);
  //rect(0, 0, width, height);
  for (let i = 0; i < pointsNumber; ++i) {
    stroke(col[i]);
    point(x[i], y[i]);
    x[i] += random(-2, 2);
    y[i] += random(-2, 2);

    if (x[i] < 0) {
      x[i] = width;
    }
    if (x[i] > width) {
      x[i] = 0;
    }
    if (y[i] < 0) {
      y[i] = height;
    }
    if (y[i] > height) {
      y[i] = 0;
    }
  }
}

