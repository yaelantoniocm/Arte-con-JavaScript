let x = 0;
let y = 0;
let angle = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Cambiar el tamaño de la elipse según el ruido
  let circleSize = map(noise(angle), 0, 1, 10, 100);
  
  // Calcular la posición x e y utilizando el ruido
  x = map(noise(angle), 0, 1, 0, width);
  y = map(noise(angle + 10), 0, 1, 0, height);
  
  
  //Cambiar el color de la bola
  fill(random(255), random(255), random(255));
  
  // Dibujar la elipse en la posición calculada
  push();
  translate(x, y);
  ellipse(0, 0, circleSize, circleSize);
  pop();
  
  // Incrementar el ángulo para animar el movimiento
  angle += 0.02;
}
