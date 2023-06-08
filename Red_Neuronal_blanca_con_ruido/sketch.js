let searchRadius = 100;
let instances = 500;
let x = [];
let y = [];
let xs = [];
let ys = [];
let col = [];
let noiseOffset;

function setup() {
  // Configuración inicial del lienzo de dibujo
  createCanvas(500, 500);
  strokeWeight(0.1);

  noiseOffset = random(1000);

  // Inicialización de las coordenadas, velocidades y colores de las partículas
  for (let i = 0; i < instances; ++i) {
    x[i] = random(width);
    y[i] = random(height);
    xs[i] = random(-10, 10);
    ys[i] = random(-10, 10);
    col[i] = color(0);
  }
}

/**
 * La función draw se ejecuta continuamente en cada frame de la animación.
 * Se encarga de actualizar la posición de las partículas, dibujarlas en el lienzo
 * y establecer conexiones entre las partículas cercanas.
 */
function draw() {
  background(255); // Establece el fondo del lienzo como blanco

  for (let i = 0; i < instances; ++i) {
    // Calcula el valor de ruido para esta instancia utilizando el desplazamiento del ruido
    let noiseValue = noise(noiseOffset + i * 0.01) * 255;

    col[i] = color(noiseValue); // Actualiza el color de la partícula

    x[i] += xs[i]; // Actualiza la posición en el eje x según la velocidad
    y[i] += ys[i]; // Actualiza la posición en el eje y según la velocidad

    // Revierte la dirección de la velocidad si la partícula alcanza los límites del lienzo
    if (x[i] < 0 || x[i] > width) {
      xs[i] *= -1;
    }
    if (y[i] < 0 || y[i] > height) {
      ys[i] *= -1;
    }

    stroke(col[i]); // Establece el color del trazo

    point(x[i], y[i]); // Dibuja un punto en la posición actual de la partícula
    
    // se encarga de dibujar líneas de conexión más gruesas entre las partículas que están cerca una de la otra, según la distancia calculada y el valor de searchRadius.
    for (let j = i; j < instances; ++j) {
      let distance = dist(x[i], y[i], x[j], y[j]);
      if (distance < searchRadius) {
        strokeWeight(map(distance, 0, searchRadius, 0.5, 0));
        line(x[i], y[i], x[j], y[j]); // Dibuja una línea entre las partículas cercanas
      }
    }
  }
}

