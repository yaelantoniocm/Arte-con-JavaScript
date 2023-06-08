const amplitude = 100;

function setup() {
  createCanvas(360, 400);
  strokeWeight(1);
  textSize(15);
}

function draw() {
  background(255);
  const halfHeight = height * 0.5;
  const halfWidth = width * 0.5;
  //cos
  stroke(255, 0, 0);
  for(let i = 1 ; i <= 360; i++) {
    const grados = i;
    const rad = radians(grados);
    const cs = cos(rad) * amplitude;
    
    point(grados, halfHeight + cs);
  }
  
  //sin
  stroke(0, 255, 0);
  for(let i = 1 ; i <= 360; i++) {
    const grados = i;
    const rad = radians(grados);
    const sn = sin(rad) * amplitude;
    
    point(grados, halfHeight + sn);
  }
  
  //circle
  stroke(0, 0, 255);
  for(let i = 1 ; i <= 360; i += 10) {
    const grados = i;
    const rad = radians(grados);
    const x = cos(rad) * amplitude + halfWidth;
    const y = sin(rad) * amplitude + halfHeight;
    
    text(grados, x, y);
  }
}