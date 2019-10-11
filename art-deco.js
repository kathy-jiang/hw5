function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(255);
  
//   noFill()
//   rectMode(CENTER)
//   rect(100,200,25,25)
//   rect(100,200,50,50)
//   rect(100,200,75,75)
//   rect(100,200,100,100)
  
//   rect(250,200,25,25)
//   rect(250,200,50,50)
//   rect(250,200,75,75)
//   rect(250,200,100,100)
  
//   rect(400,200,25,25)
//   rect(400,200,50,50)
//   rect(400,200,75,75)
//   rect(400,200,100,100)
  
//    rect(550,200,25,25)
//   rect(550,200,50,50)
//   rect(550,200,75,75)
//   rect(550,200,100,100)
  
//   rect(700,200,25,25)
//   rect(700,200,50,50)
//   rect(700,200,75,75)
//   rect(700,200,100,100)
  
  
 for ( var x = 100; x <= 700; x += 150 )  {
  	for ( var y = 25; y <= 100; y += 25 ) {
    	rect ( x, 200, y,y);
  
       noFill()
  rectMode(CENTER);
     }
  }
}
