let t = 0;
let timeSpeed = 0.1;

function setup() {
  createCanvas(500, 500);
  noFill();
}

function draw() {
  background(255);
  
  // Coordenadas y valores de ruido para el primer punto
  let x1 = width * 0.25;
  let y1 = height * 0.25;
  let n1 = ((noise(x1, y1, t)) - 0.5) * 2.0;
  let ny1 = ((noise(x1 + 100, y1, t)) - 0.5) * 2.0;
  let xoff1 = n1 * 100;
  let yoff1 = ny1 * 100;
  
  // Coordenadas y valores de ruido para el segundo punto
  let x2 = width * 0.75;
  let y2 = height * 0.25;
  let n2 = ((noise(x2, y2, t)) - 0.5) * 2.0;
  let ny2 = ((noise(x2 + 200, y1, t)) - 0.5) * 2.0;
  let xoff2 = n2 * 100;
  let yoff2 = ny2 * 100;
  
  // Coordenadas y valores de ruido para el tercer punto
  let x3 = width * 0.75;
  let y3 = height * 0.75;
  let n3 = ((noise(x3, y3, t)) - 0.5) * 2.0;
  let ny3 = ((noise(x3 + 300, y2, t)) - 0.5) * 2.0;
  let xoff3 = n3 * 100;
  let yoff3 = ny3 * 100;
  
  // Coordenadas y valores de ruido para el cuarto punto
  let x4 = width * 0.25;
  let y4 = height * 0.75;
  let n4 = ((noise(x4, y4, t)) - 0.5) * 2.0;
  let ny4 = ((noise(x4 + 400, y4, t)) - 0.5) * 2.0;
  let xoff4 = n4 * 100;
  let yoff4 = ny4 * 100;
  
  // Dibuja el cuadrilátero basado en las coordenadas y desplazamientos calculados
  quad(x1 + xoff1, y1 + yoff1, x2 + xoff2, y2 + yoff2, x3 + xoff3, y3 + yoff3, x4 + xoff4, y4 + yoff4);
  
  // Dibuja un círculo en el primer punto
  circle(x1 + xoff1, y1 + yoff1, 30);
  
  // Actualiza el tiempo para el siguiente frame
  t += timeSpeed;
}