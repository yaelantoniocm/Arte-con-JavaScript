let x;
let y;
let h;

function setup() {
  createCanvas(700, 700);
  x = width/2;
  y = height/2;
  h = 50;
  colorMode(HSB, width);
  background(51);
  
  
}

function draw() {
  
  stroke(h+width/2, width, width);
  strokeWeight(6);
  
  point(x,y);
  
  let dir = floor(random(4));
  console.log(dir);
  
  switch (dir) {
    case 0:
      x = x+7;
      h = h+7;
      break;
    case 1:
      x = x-7;
      h = h-7;
      break;
    case 2:
      y = y+7;
      h = h+7;
      break;
    case 3:
      y = y-7;
      h = h-7;
      break;
  }
  
  
}