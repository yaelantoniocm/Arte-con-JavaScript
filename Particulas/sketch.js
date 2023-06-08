let numParticles = 200;
let particles = [];

function setup() {
  createCanvas(800, 800);
  
  for (let i = 0; i < numParticles; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(0);
  
  for (let i = 0; i < particles.length; i++) {
    let particle = particles[i];
    particle.update();
    particle.display();
    particle.checkEdges();
    particle.checkCollision(particles, i + 1);
  }
}

class Particle {
  constructor() {
    this.position = createVector(random(width), random(height));
    this.velocity = createVector(random(-2, 2), random(-2, 2));
    this.radius = random(2, 10);
    this.color = color(random(255), random(255), random(255));
  }

  update() {
    this.position.add(this.velocity);
  }

  display() {
    noStroke();
    fill(this.color);
    ellipse(this.position.x, this.position.y, this.radius * 2, this.radius * 2);
  }

  checkEdges() {
    if (this.position.x < 0 || this.position.x > width) {
      this.velocity.x *= -1;
    }
    if (this.position.y < 0 || this.position.y > height) {
      this.velocity.y *= -1;
    }
  }

  checkCollision(otherParticles, startIndex) {
    for (let i = startIndex; i < otherParticles.length; i++) {
      let otherParticle = otherParticles[i];
      let distance = dist(this.position.x, this.position.y, otherParticle.position.x, otherParticle.position.y);
      let minDistance = this.radius + otherParticle.radius;

      if (distance < minDistance) {
        // Handle collision between particles
        let angle = atan2(this.position.y - otherParticle.position.y, this.position.x - otherParticle.position.x);
        let dx = cos(angle) * minDistance;
        let dy = sin(angle) * minDistance;

        this.position.x = otherParticle.position.x + dx;
        this.position.y = otherParticle.position.y + dy;

        // Swap velocities
        let tempX = this.velocity.x;
        let tempY = this.velocity.y;
        this.velocity.x = otherParticle.velocity.x;
        this.velocity.y = otherParticle.velocity.y;
        otherParticle.velocity.x = tempX;
        otherParticle.velocity.y = tempY;
      }
    }
  }
}

