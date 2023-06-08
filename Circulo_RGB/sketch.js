const amp = 200;
function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  strokeWeight(10);
  strokeCap(SQUARE);
}

function draw() {
  background(0);
  const satu = map(mouseX, 0, width, 0, 100);
  const bri = map(mouseY, 0, height, 0, 100);
  push();
    translate(width * 0.5, height * 0.5);
    for(let i = 0; i < 360.0; ++i){
      stroke(i, satu, bri);
      const x = cos(radians(i)) * amp;
      const y = sin(radians(i)) * amp;
      line(0, 0, x, y);
    }

  pop();
}