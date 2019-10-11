function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);
  for (var i = 10; i <= 3900; i = i + 10) {
  
  
    line(i, 10, i, i);
  }
}
