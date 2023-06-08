let x = 200; 
let y = 200;
let right = false;
let left = false;
let up = false;
let down = false;
let sp = 10.0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  fill(0);
  
  if(right == true) {
    x+=sp;
  }
  if(left == true) {
    x-=sp;
  }
  if(up == true) {
    y-=sp;
  }
  if(down == true) {
    y+=sp;
  }
  
  circle(x, y, 50);
}

//wasd
function keyPressed() {
  if(key == 'd' || key == 'D' || keyCode == RIGHT_ARROW){
    right = true;
  }
    if(key == 'a' || key == 'A' || keyCode == LEFT_ARROW){
    left = true;
  }
    if(key == 'w' || key == 'W' || keyCode == UP_ARROW){
    up = true;
  }
    if(key == 's' || key == 'S' || keyCode == DOWN_ARROW){
    down = true;
  }
  
}

function keyReleased() {
  if(key == 'd' || key == 'D' || keyCode == RIGHT_ARROW){
    right = false;
  }
    if(key == 'a' || key == 'A' || keyCode == LEFT_ARROW){
    left = false;
  }
    if(key == 'w' || key == 'W' || keyCode == UP_ARROW){
    up = false;
  }
    if(key == 's' || key == 'S' || keyCode == DOWN_ARROW){
    down = false;
  }
  
}