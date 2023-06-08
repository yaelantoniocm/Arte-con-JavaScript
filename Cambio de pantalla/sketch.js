let x = 0;
let y = 0;
let gs = 0;

function setup()
{
  createCanvas(500,500);
  fill(255);
  noStroke();
  y = height;
}

function draw(){
  background(255-gs);
  fill(gs);
  circle(x,y,100);
  x = x + 1;
  y = y - 1;
  gs = gs + 1
  
}