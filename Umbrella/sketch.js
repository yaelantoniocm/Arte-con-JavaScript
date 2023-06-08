function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  let x = width / 2;
  let y = height / 2;

  for (let i = 0; i < 8; i++) {
    let angle = map(i, 0, 8, 0, TWO_PI);
    let nx = x + cos(angle) * 100;
    let ny = y + sin(angle) * 100;
    drawWeb(x, y, nx, ny);
  }
}

function drawWeb(x1, y1, x2, y2) {
  push();
  translate(x1, y1);
  let angle = atan2(y2 - y1, x2 - x1);
  rotate(angle);

  for (let i = 0; i < 20; i++) {
    let radius = i * 5;
    let offset = map(noise(i * 0.1, frameCount * 0.01), 0, 1, -15, 15);
    let x = radius + offset;
    let y = 0;
    
    if (i % 3 === 0) {
      stroke(255, 0, 0); // Color rojo cada tercer círculo
    } else {
      stroke(0);
    }
    
    line(0, 0, x, y);
    translate(x, y);
  }
  
  pop();
}
