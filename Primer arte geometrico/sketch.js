//crateCanvas -> Crea un lienzo de 400 x 400 pixeles
function setup() {
  createCanvas(400, 400);//esto es un comentario tambien
}


//esto es un comentario de linea

/*
  Esto es un
  comentario 
  de bloque
*/


function draw() {
  background('#ff00ff');
  
  //blue no fill rect
  strokeWeight(5);
  stroke(0, 0, 255);
  noFill();
  square(200, 200, 100);
  
  //yellow no fill circle
  stroke(255, 255, 0);
  fill(0, 0, 0, 0);
  strokeWeight(10);
  circle(200, 200, 100);
  
  //blue fill rect
  fill(0, 0, 255);
  noStroke();
  rect(50, 50, 200, 100);
}