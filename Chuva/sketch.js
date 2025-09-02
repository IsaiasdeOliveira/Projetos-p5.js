let neve=[];
let quant=500;
function setup() {
  stroke(255);
  createCanvas(400, 400);
  
  for(let i=0; i<quant; i++){
    neve[i]=[];
    neve[i][0]=random(400);
    neve[i][1]=random(-400);
    neve[i][2]=random(4);
  }
}

function draw() {
  background(0,255,255);
    stroke(0,0,255,90);
  for(let i=0; i<quant; i++){
    let tamanho=map(neve[i][2],0,4,5,15);
    let espessura= map(neve[i][2],0,4,0.5,3);
    strokeWeight(espessura);
   line(neve[i][0], neve[i][1],neve[i][0], neve[i][1]+tamanho);
    neve[i][1]+=neve[i][2]+1;
    if(neve[i][1]>420){
      neve[i][1]=0;
      neve[i][0]=random(400);
}
  }
}