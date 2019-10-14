function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  
  var  i;
  
  for (i = 10; i<200; i+=10){
    line(width/2-i,i,width/2+i,i);
  }
  
  for (i = 10;i<200;i+=10){
    line(i,i+200,width-i,i+200);
  }

}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  
  var  i;
  
  for (i = 10; i<200; i+=10){
    line(width/2-i,i,width/2+i,i);
  
    line(i,i+200,width-i,i+200);
  }

}
