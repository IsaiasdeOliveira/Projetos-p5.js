let posicaoX=190;
let posicaoY=200;
let posicaoZ=155;
let= posicaoC=145;
let= posicaoS=220;
let posicaoA=145;
let d=100;
let velocidadeX=0;
let velocidadeY=-1;
let= velocidadeZ=1;
let= velocidadeC=0;
let velocidadeS=1;
let velocidadeA=0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(0,0,255,100);
  strokeWeight(4);
  circle(posicaoX,posicaoY,d);
  posicaoX+=velocidadeX;
  posicaoY-=velocidadeY;
  //circle(190,200,100);
  fill(255,0,0,100);
  circle(posicaoZ,posicaoC,d);
  posicaoZ-=velocidadeZ;
  posicaoC-=velocidadeC;
  //circle(155,145,100);
  fill(0,255,0,100);
  circle(posicaoS,posicaoA,d);
  posicaoS+=velocidadeS;
  posicaoA+=velocidadeA;
  //circle(220,145,100);
  
}