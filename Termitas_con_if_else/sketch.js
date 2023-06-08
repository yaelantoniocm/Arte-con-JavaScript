let x;
let y;
let h;
let t;

function setup() {
  createCanvas(700, 700);
  x = width / 2;
  y = height / 2;
  h = 50;
  t = 0;
  //        (tipo (en este caso HSB), matiz, saturación, brillo)
  colorMode(HSB, 360, 100, 100); // Modo de color HSB
  background(0);
}

function draw() {
  let n = noise(t); // Valor de ruido
  t += 0.01;
  let hue = map(n, 0, 1, 0, 360); // Mapear el valor de ruido al rango de colores HSB

  stroke(hue, 100, 100);
  strokeWeight(6);
  point(x, y);

  let dir = floor(random(4));
  

  if (dir === 0 && x < width - 7) {
    x += 7;
    h += 7;
  } else if (dir === 1 && x > 7) {
    x -= 7;
    h -= 7;
  } else if (dir === 2 && y < height - 7) {
    y += 7;
    h += 7;
  } else if (dir === 3 && y > 7) {
    y -= 7;
    h -= 7;
  }
}
