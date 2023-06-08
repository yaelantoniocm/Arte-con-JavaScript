let points = 100;
let xoff;
let noiseY = 0;
let t = 0; //Usamos t para el movimeinto 
let timeSpeed = 1;

let colora, colorb;

function setup() {
  createCanvas(400, 400);
  strokeWeight(20);
  
  xoff = width / points;
  
  colora = color(50, 50, 255);
  colorb = color(255, 50, 255);
}

function draw() {
  background(255);
  
  for(let i = 0; i < points; ++i) {
    let x = i * xoff + xoff * 0.5;
    for (let j = 0; j < points; ++j) {
      let y = j * xoff + xoff * 0.5;
      let n = noise(x * 0.03, y * 0.03, t);
      t += timeSpeed * 0.000001;
      let s = n * 50;
      let col = n * 255;

      strokeWeight(s);
      //stroke(col);
      stroke(lerpColor(colora, colorb, n));

      point(x, y);
    }
  }
}
