
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  for (var i = 0; i <= 400; i = i + 10) {
    line(0, i, 400, i);
  }
  
   {
    
    fill(259);
    //noStroke();
    triangle(0,0,200,0,0,200);
    triangle(200,0,400,0,400,200);
    triangle(0,200,0,400,200,400);
    triangle(200,400,400,200,400,400);
     
             
}

}
