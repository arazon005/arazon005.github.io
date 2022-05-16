
let current;
let between;
let timer;
let start;
let reactions=[];
let x=175;
let y=130;
let colorG=0;
let colorR=255;
let prep="Are you ready?";
let result="";
let avgText="";
let difference;
let clicked=0;

function setup() {
  createCanvas(400, 400);
  timer=random(2000, 6000);
  start=8000;
  setTimeout(relocate, start+timer)
}
function draw(){
  timeCheck();
}
function timeCheck(){
  if(millis()<7999){
    background(220);
    fill(0);
    textSize(20);
    text("The game will begin shortly.", width/2-115, height/2-50);
    text("Please click the square when it is yellow.",25, height/2-25);
    text("It will move once it is clickable.",width/2-125, height/2);
    text("The game will record how fast you clicked", 15, height/2+50);
    text("the square after it became yellow, five times.", 5, height/2+75);
  }
  else{
    background(220);
    fill(0);
    textSize(20);
    text(prep, width/2-60, height/2);
    fill(colorR,colorG,0);
    square(x, y, 50);
    if(millis()>start+timer){
      if(reactions.length<5){
        colorG=255;
        prep="";
      }
    }
    fill(0)
    text(result, 20, 20);
    text(avgText, 40,40);
    text(reactions.length+" tests done.",width/2-50, height/2+100)
    
  }
}
function relocate(){
    x=random(width-50);
    y=random(height-50);
}
function reset(){
  if(reactions.length==5){
    let sum=0;
    for(var i=0; i<reactions.length; i++){
      sum+=reactions[i];
    }
    x=175;
    y=130;
    avg=sum/reactions.length;
    if(avg<500){
      prep="Hey that's pretty good!";
    }
    else if(avg<900){
      prep="Not too bad."
      colorR=255;
    }
    else{
      prep="That's a bit slow."
      colorR=255;
      colorG=0;
    }
    result="Your average reaction was ";
    avgText=avg+" ms"
  }
  else{
  colorR=255;
  colorG=0;
  start=millis();
  timer=random(2000,6000);
  prep="Are you ready?";
  clicked=0;
  result="";
  x=175;
  y=130;
  setTimeout(relocate, timer);
  }
}
function mousePressed(){
  if(check(mouseX,mouseY,millis())){
    colorR=0;
    colorG=255;
    current=millis();
    clicked=1;
    difference=current-start-timer;
    result=difference+" ms";
    reactions.splice(0,0, difference);
    setTimeout(reset, 2500);
  }
}
function check(posX, posY, time){
  if((posX=>x)&&(posX<=x+50)&&(posY=>y)&&(posY<=y+50)&&(time>=start+timer)&&(clicked==0)){
    return true;
  }
  else{
    return false;
  }
}