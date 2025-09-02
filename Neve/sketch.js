let neve=[];
let quant=50;
function setup() {
  noStroke();
  createCanvas(400, 400);
  
  for(let i=0; i<quant; i++){
    neve[i]=[];
    neve[i][0]=random(400);
    neve[i][1]=random(-400);
    neve[i][2]=random(4);
  }
}

function draw() {
  background(0);
  
  for(let i=0; i<quant; i++){
    let tamanho=map(neve[i][2],0,4,5,20);
   circle(neve[i][0], neve[i][1],tamanho);
    neve[i][1]+=neve[i][2]+1;
    if(neve[i][1]>420){
      neve[i][1]=0;
      neve[i][0]=random(400);
}
  }
}