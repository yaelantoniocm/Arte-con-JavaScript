//Noise es como random pero con una secuencia más armónica. 
let points = 25;
let xoff;
let noiseY = 0;
//let acolor;
//let bcolor;


function setup() {
  createCanvas(400, 400);
  strokeWeight(20);
  
  //acolor = color(255, 0 , 0);
  //bcolor = color(0 , 255, 0);
  
  xoff = width / points;
  
}

function draw() {
  background(255);
  
  let y = height * 0.5;
  
  
  for(let i = 0; i < points; i++) {
    let x = i * xoff + xoff * 0.003;
    let n = noise(x * 0.003 , noiseY);
    noiseY += 1 * 0.003;
    let s = n * 20;
    let col = n * 255;
    let newy = y + n * 50;
    
    strokeWeight(s);
    stroke(col);
    
    //stroke(lerpColor(acolor, bcolor, n));
    
    point(x, newy);
  }
}