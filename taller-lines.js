
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (var i = 10; i <= 3900; i = i + 10) {
  for (var y = 20; y <= height; y=y+50){
  
    line(i, 10, i, y);
  }
}
}
