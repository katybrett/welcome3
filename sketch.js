var img;

function setup() {
  createCanvas(610,610)
  background(0)
  
  img = loadImage("desktop/IMG_0362.jpg");  // Load the image
}
  



function draw() {
  image(img, 0, 0);
  
  {strokeWeight(20)
stroke(235, 230, 233)
 
line(10, 10, 10, 600)
line(10, 10, 600, 10)
line(600, 10, 600, 600)
line(10, 600, 230, 600)
line(600, 600, 370, 600)

  noStroke();
  resetMatrix()
  textSize(70);
  textFont("Times New Roman")
  fill(0);
text("K A T Y", 177, 270);


  
  textSize(70);
  
text("B R E T T", 148, 400);
fill(0);




 
 resetMatrix()
 {translate(mouseX, mouseY);
  textSize(30);
  

fill(255);

  rect(0, 0, 50, 80)
  
 
  
 }
}


}

//
