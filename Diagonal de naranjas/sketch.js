function setup() {
  createCanvas(400, 400);
  stroke(255, 0, 0);
  strokeWeight(1);
  
}

function draw() {
  background(220);  
  fill(255, 100, 0)  
  for (var i = 40; i < width; i = i + 40) {
        ellipse(i, i, 20, 20);
    }
}

