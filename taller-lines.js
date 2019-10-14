function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  
  var  i;
  
  
  
  for (i = 5; i<=400; i+=10){
    line(i,0,i,(height/100+i)*2);
  
   
  }

}
