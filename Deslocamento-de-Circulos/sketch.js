
let x, y, velocidade;
let diametro=50;

function setup() {
  createCanvas(400, 400);
  x = width;
  y=height;
  velocidade=0.01;
  
}

function draw() {
  background(220);
  fill(255,0,0);
  ellipse(x,y,diametro,diametro);
  x=x+ velocidade;
  y=y+velocidade;
  
  if(x-diametro/2>=0|| x+diametro/2>=width||
    y-diametro/2>=0|| y+diametro/2>=height){
    x=random(diametro/2, width-diametro/2);
    y=random(diametro/2, height-diametro/2);
    velocidade=velocidade*-1;
    
  }

}