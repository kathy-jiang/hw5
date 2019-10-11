function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (var x=200; x>=10; x=x-10){
    for (var y=10; y<=200; y=y+10){
      line(x,y,200,y)
    }
  }
}
