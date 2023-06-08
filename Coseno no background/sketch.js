const amplitude = 100;
const frequency = 1.0;
const phase = 180.0;


function setup() {
  createCanvas(360, 400);
  strokeWeight(1);
  textSize(15);
}

function draw() {
  //background(255);
  const halfHeight = width * 0.5;
  const halftWidth = width * 0.5;
  //sin
  stroke(0, 255, 0);
  for(let i = 1 ; i <= 360; i++) {
    const grados = i;
    const rad = radians(grados);
    const sn = sin(rad * frequency + millis() * 0.001) * amplitude;
    
    point(grados, halfHeight + sn);
  }
  
}