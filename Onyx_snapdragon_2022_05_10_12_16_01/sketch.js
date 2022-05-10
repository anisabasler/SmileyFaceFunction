var x, y;
var radius;

function setup() {
  createCanvas(600, 600);
  noStroke();

  x = 200;
  y = 200;
  radius = 100;
  
}

function draw() {
    background(230);
		if(mouseIsOverFace()){
			smileyFace(true, true);
		}
		else{
			smileyFace(false, false);
		}
  
   
}
// blink parameter is intended to be true or false
function smileyFace(blink, color){
 push();
  
  
  //face
  if(color){
    fill(85, 99, 224);
  } else {
    fill(201, 85, 224);
  }
   ellipse(200,200,200);
 
  //eye 1
  fill(0);
  ellipse(170,170,30);
 //eye 2
  if(blink){
      rect(220, 165, 45, 15);
  } else {
    ellipse(230,170,30); 
  
  }
  
  fill(85, 224, 192);
  arc(180, 220, 60, 60 ,0, radians(180), PIE);
 
  
  
  pop();
  
}

function mouseIsOverFace(){
	var result;
  var d = dist(mouseX, mouseY, x, y);
  if (d < radius) {
    result = true;
  } else {
    result = false;
  }
  return result;
}