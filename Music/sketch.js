let amplitude = 100;
let noiseScale = 0.02;

function setup() {
  createCanvas(400, 400);
  stroke(255);
  noFill();
}

function draw() {
  background(0);
  amplitude = map(mouseX, 0, width, 20, 200);
  noiseScale = map(mouseY, 0, height, 0.0001, 0.1);
  
  for(let j = 0; j < 10; ++j) {
    stroke((1 - (j/9)) * 255);
    const psx = [];
    const psy = [];
    for(let i = 0; i < 360.0; ++i) {
      const rad = radians(i);
      const x = cos(rad) * amplitude * (j + 1) * 0.1 + width * 0.5;
      const y = sin(rad) * amplitude * (j + 1) * 0.1 + height * 0.5;

      const nx = noise(x * noiseScale + j * 100.0, y * noiseScale, millis() * 0.001) - 0.5;
      const ny = noise(x * noiseScale + j * 200.0, y * noiseScale, millis() * 0.001) - 0.5;

      const xoff = nx * 50;
      const yoff = ny * 50;

      //point(x + xoff, y + yoff);
      psx[i] = x + xoff;
      psy[i] = y + yoff;
    }

    for(let i = 0; i < 360.0; ++i) {
      const x0 = psx[i];
      let x1 = 0;
      if(i == 359){
        x1 = psx[0];
      }else{
        x1 = psx[i + 1];
      }

      const y0 = psy[i];
      let y1 = 0;
      if(i == 359){
        y1 = psy[0];
      }else{
        y1 = psy[i + 1];
      }

      line(x0, y0, x1, y1);
    }
  }
}