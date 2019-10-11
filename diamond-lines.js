function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  for (var x1=200; x1>=10; x1=x1-10){
    for (var y1=10; y1<=200; y1=y1+10){
      for (var a1=200: a1<=390; a1=a1+10){
      line(x1,y1,a1,y1)
    }
  }
}
  for(var x2=10; x2<=200; x2=x2+10){
    for (var y2=200; y2<=400 ;y2=y2+10){
      for(var a2= 390; a2>=200;a2=a2-10){
        line(x2,y2,a2,y2)
      }
    }
  }
}
