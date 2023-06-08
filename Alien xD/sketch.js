function setup() {
    createCanvas(1080, 920);
  }

  
  function draw() {
    //Fondo azul pastel
    background('#252850');
  
    //Hacer que el cielo cambie de color
    if (mouseIsPressed) {
        background('#000000');
    }
    
    // Cielo con estrellas
    fill('#ffff');
    noStroke();
    ellipse(200,140, 20,50);
    ellipse(200,140, 50,20);
    ellipse(200,140, 31,30);
    
    noStroke();
    ellipse(295,150, 20,50);
    ellipse(295,150, 50,20);
    ellipse(295,150, 31,30);
    
    noStroke();
    ellipse(380,145, 20,50);
    ellipse(380,145, 50,20);
    ellipse(380,145, 31,30);
    
    noStroke();
    ellipse(470,135, 20,50);
    ellipse(470,135, 50,20);
    ellipse(470,135, 31,30);

    noStroke();
    ellipse(560,150, 20,50);
    ellipse(560,150, 50,20);
    ellipse(560,150, 31,30);

    noStroke();
    ellipse(650,127, 20,50);
    ellipse(650,127, 50,20);
    ellipse(650,127, 31,30);

    noStroke();
    ellipse(740,118, 20,50);
    ellipse(740,118, 50,20);
    ellipse(740,118, 31,30);

    noStroke();
    ellipse(830,160, 20,50);
    ellipse(830,160, 50,20);
    ellipse(830,160, 31,30);

    //Creando cuerpo y cabeza de dragon con espinas y alas

    


    //Creando cuerpo y cabeza de dragon con espinas y alas
    
    //Creando cuerpo y cabeza de alienigena
    fill('#1df489');
    ellipse(540, 600, 150, 240); //Cuerpo
    ellipse(540, 400, 200, 220); //Cabeza

    //Creando ojos
    fill('#000000');
    ellipse(510, 350, 40, 100);
    ellipse(570, 350, 40, 100);
  
    //Creando sonrisa 
    fill('#000000');
    arc(540, 450, 100, 100, 0, PI + QUARTER_PI, CHORD);
    
    //Creando piernas
    fill('#1df489');
    rect(500, 680, 30, 100 ,20);
    rect(560, 680, 30, 100, 20); 
     
    //Creando brazos
    fill('#1df489');
    rect(400, 500, 100, 20 ,20);
    rect(580, 500, 100, 20 , 20);
    
    //Platillo volador
    fill('#959595')
    ellipse(200, 600, 350, 150);
    fill('#7abbf9')
    ellipse(200, 550, 250, 100);
    fill('#959595');
    rect(100, 620, 30, 100 ,20);
    rect(300, 620, 30, 100, 20); 
    rect(50, 590, 30, 100 ,20);
    rect(250, 600, 30, 100, 20); 
    
    

}        