function setup() {
  createCanvas(400, 400);
  stroke(0,0, 255); //color
  strokeWeight(5);
}

function draw() {
  background(255);
  
  let x = 0;
  
  while (x <= width) {
    line(x, 0, x, height);
    x += 20;
  }
  
  for (let y = height; y >= 0 ; y -= 20){
    line(0, y, width, y);
  }
  
  //Cambio de colores en los cuadros
  for (let x = 0; x <= width; x += 20){
      for (let y = 0; y <= height; y += 20){
          fill(random(255), random(250), random(255));
          rect(x, y, 20, 20);
      }
  }
}