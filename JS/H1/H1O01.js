function setup() {
  canvas = createCanvas(450,450);
  background('gray');
  canvas.parent('processing');
  noLoop();
}

function draw() {
  // groene cirkel zonder rand
  noStroke();
  fill('green');
  strokeWeight('50');
  ellipse(225,225,400);
  fill('white');
  ellipse(225,225,300);
  
  // witte rechthoek met rode rand
  
  stroke('green');
  fill('white');
  strokeWeight(10);
  rect(125,125,200);  
}
