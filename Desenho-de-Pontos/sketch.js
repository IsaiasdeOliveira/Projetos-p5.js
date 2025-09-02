let x;
let y;

function setup() {
  createCanvas(400, 400);
  background(255);
  x=200;
  y=200;
}

function draw() {
  strokeWeight(4);
  x+=random(-4,4);
  y+=random(-4,4);
  
  point(x,y);
}