let points = 120;
let xoff;
let noiseY = 0;
let t = 0;
let timeSpeed = 0.0000010;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  xoff = width / points;
  noStroke();
}

function draw() {
  background(0);
  
  for(let i = 0; i < points; ++i) {
    let x = i * xoff + xoff * 0.5;
    for (let j = 0; j < points; ++j) {
      let y = j * xoff + xoff * 0.5;
      let n = noise(x * 0.03, y * 0.03, t);
      n = constrain(n, 0.25, 0.75);
      n = map(n, 0.25, 0.75, 0, 1);
      t += timeSpeed;
      let s = n * xoff;
      let col = n * 255;
      fill(255);
      square(x, y, s);
    }
  }
}