function setup() {
  createCanvas(700, 500);
  noStroke();
  fill(255, 100, 100);
  rectMode(CENTER);
}

function draw() {
  background(255);
  
  
  
  //Cuadrado rojo
  push();
    translate(100, 100);
    fill(255, 100, 100);
    rotate(millis() * 0.01);
    square(0, 0, 50);
  pop();
  
  
  
  
  //Cuadrado Verde
  push();
    translate(200, 200);
    fill(100, 255, 100);
    rotate(millis() * -0.002);
    square(0, 0, 50);
  pop();
  
  

}