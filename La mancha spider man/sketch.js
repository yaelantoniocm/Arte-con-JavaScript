let t = 0;
let timeSpeed = 0.1;
let cubeSize = 200;
let numVertices = 8;
let vertexSize = 10;

function setup() {
  createCanvas(500, 500, WEBGL);
  noFill();
}

function draw() {
  background(255);
  rotateY(frameCount * 0.01);

  for (let i = 0; i < numVertices; i++) {
    let x = (i % 2 === 0) ? -cubeSize / 2 : cubeSize / 2;
    let y = (i < 4) ? -cubeSize / 2 : cubeSize / 2;
    let z = (i % 4 < 2) ? -cubeSize / 2 : cubeSize / 2;
    let n = noise(x, y, z, t);
    let xPos = x + map(n, 0, 1, -cubeSize / 4, cubeSize / 4);
    let yPos = y + map(n, 0, 1, -cubeSize / 4, cubeSize / 4);
    let zPos = z + map(n, 0, 1, -cubeSize / 4, cubeSize / 4);

    push();
    translate(xPos, yPos, zPos);
    sphere(vertexSize);
    pop();
  }

  t += timeSpeed;
}



