let cellsNumber = 5;
let offset;


function setup() {
  createCanvas(500, 500);
  noStroke();
  //textAlign(CENTER,CENTER); //Alinear texto
  offset = width / cellsNumber;
  //textSize(15);
  
  background(255);
  
  
}

function draw() {
  background(0);
  let counter = 0;
  
  for(let i = 0; i < cellsNumber; i ++){
    for(let j = 0; j < cellsNumber; j ++){
      fill(random(100, 255), random(100, 255), random(100, 255));
      
      if (counter % 2 == 0){
        ellipse(offset * i + offset * 0.5, offset * j + offset * 0.5, offset, offset);
      }else {
        rect(offset * i, offset * j, offset, offset);
      }
      
      
      fill(0);
      //text("Id: " + counter, offset * i + offset * 0.5, offset * j + offset * 0.25);
      //text("I: " + counter, offset * i + offset * 0.5, offset * j + offset * 0.5);
      //text("J: " + counter, offset * i + offset * 0.5, offset * j + offset * 0.75);
      ++counter;
    }

  }
}