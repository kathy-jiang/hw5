function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  noStroke ();
  
  for ( var x = 25; x <= width; x += 50 )  {
  	for ( var y = 25; y <= height; y += 50 ) {
    	ellipse ( x, y, 25, 25);
      fill ( 255 );
    }
  }
}
