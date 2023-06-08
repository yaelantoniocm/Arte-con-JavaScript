const amplitude = 100;
const frequency = 1.0;
const phase = 180.0;

function setup() {
  createCanvas(360, 400);
  strokeWeight(5);
  textSize(15);
}

function draw() {
  background(255);
  const halfHeight = height * 0.5;
  const halfWidth = width * 0.5;
  
  //sin
  stroke(0, 255, 0);
  for(let i = 1 ; i <= 360; i += 10) {
    const grados = i ;
    const rad = radians(grados);
    const sp = map(mouseX, 0, width, 0.0001, 0.005);
    const sn = sin(rad * frequency + millis() * sp) * amplitude;
    
    point(grados, halfHeight + sn);
  }
  
  //circle
//   stroke(0, 0, 255);
//   for(let i = 1 ; i <= 360; i += 10) {
//     const grados = i;
//     const rad = radians(grados);
//     const x = cos(rad) * amplitude + halfWidth;
//     const y = sin(rad) * amplitude + halfHeight;
    
//     text(grados, x, y);
//   }
}