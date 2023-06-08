let searchRadius = 100; //Modificación de radio para que aumente
let instances = 500;
let x = [];
let y = [];
let xs = [];
let ys = [];
let col = [];

function setup() {
  createCanvas(500, 500);
  strokeWeight(0.1);

  for (let i = 0; i < instances; ++i) {
    x[i] = random(width);
    y[i] = random(height);
    xs[i] = random(-10, 10);
    ys[i] = random(-10, 10);
    col[i] = color(random(255), random(255), random(255));
  }
}

function draw() {
  background(0);
  for (let i = 0; i < instances; ++i) {
    stroke(col[i]);

    x[i] += xs[i];
    y[i] += ys[i];

    if (x[i] < 0 || x[i] > width) {
      xs[i] *= -1;
    }
    if (y[i] < 0 || y[i] > height) {
      ys[i] *= -1;
    }

    point(x[i], y[i]); //Que se vea como puntos

    for (let j = i; j < instances; ++j) {
      let distance = dist(x[i], y[i], x[j], y[j]);
      if (distance < searchRadius) {
        line(x[i], y[i], x[j], y[j]);
      }
    }
  }
}