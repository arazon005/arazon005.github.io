var drops = [];
let empty=false;
function setup() {
  createCanvas(640, 360);
  for (var i = 0; i < 500; i++) {
    drops[i] = new Drop();
  }
}

function draw() {
  background(230, 230, 250);
  for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
    if(millis()%80==0){
      drops.pop();
    }
    if(drops.length==0){
      empty=true;
    }
    if(empty==true){
      repopulate();
    }
  }
}
function repopulate(){ 
    for (var i = 0; i < 500; i++) {
      drops[i] = new Drop();
    }
    empty=false;
}

function Drop() {
  this.x = random(width);
  this.y = random(-500, -50);
  this.z = random(0, 20);
  this.len = map(this.z, 0, 20, 10, 20);
  this.yspeed = map(this.z, 0, 20, 1, 5);


  this.fall = function() {
    this.y = this.y + this.yspeed;
    var grav = map(this.z, 0, 20, 0, 0.2);
    this.yspeed = this.yspeed + grav;

    if (this.y > height) {
      this.y = random(-200, -100);
      this.yspeed = map(this.z, 0, 20, 4, 10);
    }
  };

  this.show = function() {
    var thick = map(this.z, 0, 20, 1, 3);
    stroke(138, 43, 226);
    fill("blue");
    rotate(this.angle);
    square(this.x+random(-3,3), this.y, 10);

  };
}