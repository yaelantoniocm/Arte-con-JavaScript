let pointsNumber = 2000;
let x = [];
let y = [];
let col = [];
let w = [];
let h = [];
let index = 0;

function setup() {
  createCanvas(800, 800);
  background(255);
  strokeWeight(20);

  for (let i = 0; i < pointsNumber; i++) {
    x[i] = random(width);
    y[i] = random(height);
    col[i] = color(random(100, 255), random(100, 255), random(100, 255), random(100, 255));
    w[i] = random(10,80);
    h[i] = random(10,80);
  }
}

function draw() {
  noStroke();
  fill(255, 12);
  //rect(0, 0, width, height);
  for (let i = 0; i < pointsNumber; i++) {
    stroke(col[i]);
    rect(x[i], y[i], w[i], h[i]);
    x[i] += random(-2, 2);
    y[i] += random(-2, 2);

    if (x[i] < 0) {
      x[i] = width;
    }
    if (x[i] > width) {
      x[i] = 0;
    }
    if (y[i] < 0) {
      y[i] = height;
    }
    if (y[i] > height) {
      y[i] = 0;
    }
    w[i] += 0.5;
    h[i] += 0.5;
  }
  
  //Para generar varias imagenes y poder hacer gifs
  if(frameCount < 60){
    if(frameCount % 5 == 0) {
      save("MyRender" + index + ".jpg");
      index++;
    }
  }
}

function mousePressed(){
  save("imagen_generado.png");
}

// :) :) :) :) :) 