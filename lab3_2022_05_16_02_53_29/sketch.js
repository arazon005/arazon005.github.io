let gap=10
let cirNum=40;
let cirSize=20;
let angle=0;
let cycleG=255;
let cycleB=0;
let circles=[];
function setup() {
  createCanvas(windowWidth, windowHeight);
}
//mouseY controls the R in RGB, as well as how far the vertical static goes
function draw() {
  background(10,10,40);
  fill('white');
  noCursor();
  circle(mouseX, mouseY, 5);
  
  push();
  translate(width/2,height/2);
  rotate(angle);
  angle=angle+map(mouseX,0,width,-.1,.1);
  noFill();
  cycleR=(mouseY/height*255);
  cycleG-=.5;
  if(cycleG==0){
    cycleG=255;
  }
  cycleB+=.5;
  if(cycleB==255){
    cycleB=0;
  }
  stroke(cycleR,cycleG,cycleB);
  strokeWeight(1);
  for(let i=0; i<cirNum; i++){
    arc(0,0, cirSize+gap*i, cirSize+gap*i, angle*i, 360-angle/2);
  }
  pop();
  push();
  stroke("white");
  for(let x=1; x<width-1; x+=7){
    line(x,random(mouseY*.2),x,0);
  }
  fill(255);
  textSize(15);
  textAlign(CENTER,CENTER);
  text("Speed of Light",width/2,height*.8);
  text("Achieving the impossible.", width/2,height*.8+20);
  noFill();
  square(width/5,height/5, width*.6);
  pop();
  
  push();
  translate(width/2, height*.8+10);
  noFill();
  stroke("white");
  rect(-100,-35,200,75);
}