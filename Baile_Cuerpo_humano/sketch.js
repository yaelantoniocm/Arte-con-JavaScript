function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  fill(random(0, 150), random(0, 150), random(0, 15), 255);
  rect(width * 0.5, height * 0.5, width, height);
  
  
  for(let i = 0; i < 10; i++){
    for(let j = 0; j < 4; j++){
      

  push();//TRONCO
    translate(20 + i * 50, 50 + j * 100)
    //translate(mouseX, mouseY);
    scale(0.3);
    fill(random(100, 255), random(100, 255), random(100, 255));
    rect(0, 0, 50, 100);
    push();//CUELLO
      translate(0, -60);
      rotate(radians(sin(millis() * 0.005) * 45));
      fill(255, 100, 100);
      square(0, 0, 10);
      push();//CABEZA
        translate(0, -35);
        fill(random(100, 255), random(100, 255), random(100, 255));
        square(0, 0, 50);
      pop();//CABEZA
    pop();//CUELLO
    
    push();//HOMBRO IZQ
      translate(-40, -50);
      rotate(radians(sin(millis() * 0.01) * 30));
      fill(255, 100, 100);
      square(0, 0, 10);
      push();//BRAZO IZQ
        translate(0, 35);
        fill(random(100, 255), random(100, 255), random(100, 255));
        rect(0, 0, 20, 50);
        push();//CODO IZQ
          translate(0, 35);
          rotate(radians(sin(millis() * 0.01) * 20 - 20));
          fill(255, 100, 100);
          square(0, 0, 10);
          push();//ANTEBRAZO IZQ
            translate(0, 35);
            fill(random(100, 255), random(100, 255), random(100, 255));
            rect(0, 0, 20, 50);
          pop();//ANTEBRAZO IZQ
        pop();//CODO IZQ
      pop();//BRAZO IZQ
    pop();//HOMBRO IZQ
  
    push();//HOMBRO DER
      translate(+40, -50);
      rotate(radians(sin(millis() * 0.01) * -30));
      fill(255, 100, 100);
      square(0, 0, 10);
      push();//BRAZO DER
        translate(0, 35);
    fill(random(100, 255), random(100, 255), random(100, 255));
        rect(0, 0, 20, 50);
        push();//CODO DER
          translate(0, 35);
          rotate(radians(sin(millis() * 0.01) * -20 + 20));
          fill(255, 100, 100);
          square(0, 0, 10);
          push();//ANTEBRAZO DER
            translate(0, 35);
    fill(random(100, 255), random(100, 255), random(100, 255));
            rect(0, 0, 20, 50);
          pop();//ANTEBRAZO DER
        pop();//CODO DER
      pop();//BRAZO DER
    pop();//HOMBRO DER
push();//PELVIS
      translate(0, 60);
      rotate(radians(sin(millis() * 0.01) * 10));
      fill(255, 100, 100);
      square(0, 0, 10);
      push();//PELIVS HUESO
        translate(0, 20);
    fill(random(100, 255), random(100, 255), random(100, 255));
        rect(0, 0, 50, 20);
  
        push();//PIERNA IZQ
        translate(-25, 20);
        rotate(radians(sin(millis() * 0.01) * +30));
        fill(255, 100, 100);
        square(0, 0, 10);
        push();//PIERNA MUSCULO IZQ
          translate(0, 35);
    fill(random(100, 255), random(100, 255), random(100, 255));
          rect(0, 0, 20, 50);
          push();//RODILLA IZQ
            translate(0, 35);
            rotate(radians(sin(millis() * 0.01 + 30) * +20 - 20));
            fill(255, 100, 100);
            square(0, 0, 10);
            push();//ESPINILLA IZQ
              translate(0, 35);
    fill(random(100, 255), random(100, 255), random(100, 255));
              rect(0, 0, 20, 50);
            pop();//ANTEBRAZO IZQ
          pop();//CODO IZQ
        pop();//BRAZO IZQ
      pop();//PIERNA IZQ
  
      push();//PIERNA DER
        translate(+25, 20);
        rotate(radians(sin(millis() * 0.01) * -30));
        fill(255, 100, 100);
        square(0, 0, 10);
        push();//PIERNA MUSCULO DER
          translate(0, 35);
    fill(random(100, 255), random(100, 255), random(100, 255));
          rect(0, 0, 20, 50);
          push();//RODILLA DER
            translate(0, 35);
            rotate(radians(sin(millis() * 0.01 + 30) * -20 + 20));
            fill(255, 100, 100);
            square(0, 0, 10);
            push();//ESPINILLA DER
              translate(0, 35);
    fill(random(100, 255), random(100, 255), random(100, 255));
              rect(0, 0, 20, 50);
            pop();//ANTEBRAZO DER
          pop();//CODO DER
        pop();//BRAZO DER
      pop();//PIERNA IZQ
      
      pop();//PELVIS HUESO
    pop();//PELVIS
    
  pop();//TRONCO
    }
  }
}