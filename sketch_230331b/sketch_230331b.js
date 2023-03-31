let a = 0 
let sequence = []; 
 
function preload() { 
imgOne = loadImage('rocks.webp'); 
imgone = loadImage('rocks.webp'); 
imgTwo = loadImage('glow.webp'); 
imgtwo = loadImage('glow.webp'); 
imgThree = loadImage('cave.jpeg'); 
imgthree = loadImage('cave.jpeg'); 
imgFour = loadImage('waterfall.webp'); 
imgfour = loadImage('waterfall.webp'); 
imgFive = loadImage('waterfalls.jpeg');
imgfive = loadImage('waterfalls.jpeg'); 
imgSix = loadImage('mountain.webp'); 
imgsix = loadImage('mountain.webp'); 
imgSeven = loadImage('avatar.jpeg'); 
imgseven = loadImage('avatar.jpeg'); 
imgEight = loadImage('fish.jpg'); 
imgeight = loadImage('fish.jpg'); 
} 
 
function setup() {  
createCanvas(4500, 4500); 
imgOne.resize(4500,4500) 
imgone.resize(windowWidth, windowHeight) 
imgTwo.resize(4500,4500) 
imgtwo.resize(windowWidth, windowHeight) 
imgThree.resize(4500,4500) 
imgthree.resize(windowWidth, windowHeight) 
imgFour.resize(4500,4500) 
imgfour.resize(windowWidth, windowHeight) 
imgFive.resize(4500,4500) 
imgfive.resize(windowWidth, windowHeight) 
imgSix.resize(4500,4500) 
imgsix.resize(windowWidth, windowHeight) 
imgSeven.resize(4500,4500) 
imgseven.resize(windowWidth, windowHeight) 
imgEight.resize(4500,4500) 
imgeight.resize(windowWidth, windowHeight) 
}  
 
function draw() {  
background(sequence = [imgOne,imgone,imgTwo,imgtwo,imgThree,imgthree,imgFour,imgfour,imgFive,imgfive,imgSix,imgsix,imgSeven,imgseven,imgEight,imgeight]);  
image(sequence[a], 0, 0); 
fill(0, 0, 0); 
circle(mouseX, mouseY, map(mouseX, 0, 500, 50, 100));
}  
 
function mousePressed() {  
a=a+1; 
if (a===16){ 
a=0 
} 
 
}
