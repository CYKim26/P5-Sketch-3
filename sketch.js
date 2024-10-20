let angle = 0
let r,g,b
let dir=-1

function setup() {
  createCanvas(400, 400);
  r = 0
  g = random(255)
  b = 0
}

function draw() {
  background(255);
  if (b<=0 || b>=255) 
    dir*=-1
  b += 5*dir
  angle -= 0.01
  myShape(0,0,400,400)
}


function myShape(x,y,w,h) {
  let cX = x+w/2
  let cY = y+h/2
  let diameter = 2 * sqrt((mouseX-(cX))**2 + (mouseY-(cY))**2)
  strokeWeight(0.4) 
  fill("white")
  circle(cX,cY,diameter)
  fill(r,g,b)
  arc(cX,cY,diameter,diameter,0.75*PI,PI+PI/2,CHORD)
  arc(cX,cY,diameter, diameter,-PI/2,0.25*PI,CHORD)
  fill ("white")
  arc(cX,cY,diameter,diameter,2*PI,angle)
}