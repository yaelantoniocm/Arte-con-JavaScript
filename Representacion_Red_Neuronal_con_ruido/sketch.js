let searchRadius = 100;
let instances = 500;
let x = [];
let y = [];
let xs = [];
let ys = [];
let col = [];
let noiseOffset;

function setup() {
  createCanvas(500, 500);
  strokeWeight(0.1);

  noiseOffset = random(50); // Valor aleatorio para el desplazamiento del ruido

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

    // Calcula el valor de ruido para esta instancia
    let noiseValue = noise(noiseOffset + i * 0.01) * 2; // Ajusta el factor multiplicativo 

    y[i] += ys[i] + noiseValue;

    if (x[i] < 0 || x[i] > width) {
      xs[i] *= -1;
    }
    if (y[i] < 0 || y[i] > height) {
      ys[i] *= -1;
    }

    point(x[i], y[i]);

    for (let j = i; j < instances; ++j) {
      let distance = dist(x[i], y[i], x[j], y[j]);
      if (distance < searchRadius) {
        line(x[i], y[i], x[j], y[j]);
      }
    }
  }
}
