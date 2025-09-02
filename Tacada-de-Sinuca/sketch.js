let x =160;
let y= 260;
let z=195;
let s= 215;
let a= 260;
let b =185;
let c= 260;
let d=260;
let e= 251;
let f= 200;
let g= 251;
let h= 180;
let i= 205;
let j= 242;
let k= 242;
let l=200;
let m= 190;
let n= 195;

let targetX=215;
let targetS=230;
let targetY=340;
let targetZ= 250;
let targetA=300;
let targetB=220;
let targetD= 270;
let targetC=345;
let targetE= 270;
let targetF= 215;
let targetG= 290;
let targetH= 125;
let targetI= 240;
let targetJ= 260;
let targetK= 265;
let targetL= 220;
let targetM= 210;
let targetN= 205;
let easing=0.04; //segundo
let easingX=0.1; //primeiro

function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(220);
  
  
  let dx= targetX- x;
  let ds= targetS- s;
  let dy= targetY- y;
  let dz= targetZ - z;
  let da= targetA- a;
  let db= targetB- b;
  let dd= targetB -b;
  let dc= targetC -c;
  let de= targetE -e;
  let df= targetF- f;
  let dg= targetG- g;
  let dh= targetH- h;
  let di= targetI- i;
  let dj= targetJ -j;
  let dk= targetK-k;
  let dl= targetL-l;
  let dm= targetM- m;
  let dn= targetN- n;
  x+=dx*easingX;
  s+=ds*easing;
  y+= dy*easing;
  a+= da*easing;
  z+= dz*easing;
  b+= db*easing;
  c+= dc*easing;
  d+= dd*easing;
  e+= de*easing;
  f+= df*easing;
  g+= dg*easing;
  h+= dh*easing;
  i+= di*easing;
  j+= dj*easing;
  k+= dk*easing;
  l+= dl*easing;
  m+= dm*easing;
  n+= dn*easing;
  
  if(targetX==215)
  {
    targetX+=easingX
  }
  
if(targetX >= 215 && targetY < 340)
{
  targetY+= easing
}
  
  stroke(150,75,0);
  strokeWeight(4);
  fill(0,100,0);
  rect(50,120,300,150);
  noStroke();
  fill(0,0,0);
  circle(57,127,20,10);    
  circle(200,127,20,10);
  circle(342,127,20,10);
  circle(57,261,20,10);
  circle(200,261,20,10);
  circle(342,261,20,10);
  //começo
  fill(80,48,30);
  circle(260,s,10,10);
  fill(3,185,133);
  circle(y,205,10,10);
  fill(255,105,180);
  circle(a,z,10,10);
  fill(148,0,211);
  circle(d,b,10,10);
  fill(255,0,0);
  circle(c,175,10,10);
  fill(0,255,255);
  circle(e,210,10,10);
  fill(255,255,0);
  circle(251,f,10,10);
  fill(0);
  circle(g,190,10,10);
  fill(80,48,30)
  circle(251,h,10,10);
  fill(3,187,133);
  circle(242,i,10,10);
  fill(255,105,180);
  circle(j,195,10,10);
  fill(148,0,211);
  circle(k,185,10,10);
  fill(255,0,0);
  circle(233,l,10,10);
  fill(0,255,255);
  circle(233,m,10,10);
  fill(255,255,0);
  circle(224,n,10,10);
  fill(255);
  circle(x,195,10,10);
  noFill();
  stroke(80,40,20);
  strokeWeight(5);
  line(15,195,120,195);
  


}