
//html5 visible tag
var manImg1, manImg2;
var manImgs = [];
var investMen = [];
var manInvest;
var current;
var manImg;
var bool = true;

var bgImage;


function preload() {

  manImg1 = loadImage('assets/invest0.png');
  manImg2 = loadImage('assets/invest2.png');
  bg = loadImage('assets/2draw.jpg');
  
  bgImage = loadImage('assets/deathscreen3.jpg');
  bgVideo = createVideo('assets/bgVideo.mp4');

  grow = createVideo('assets/zoom_1.mp4');

  grow.loop();
  grow.hide();
  
  bgVideo.loop();
  bgVideo.hide();
  
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  frameRate(15);
   manImg = manImg2

}

function keyPressed(){
  if (keyCode === ENTER) {
      for (i = 0; i <= investMen.length; i++) {
    
    investMen[i].clear();
      }
}
}

function mousePressed() {
  
  
   



  if (bool === true) {
    
    image(bgVideo, width / 2, height / 2);
    grow.play();

    manImg = manImg1;

    bool = false;
    
    println("cool!");
    
  } else {
    println("notcool...");
    
    manImg = manImg2;

    bool = true;
  }

}






function draw() {
  imageMode(CENTER);
  background('#0d02eb');
  image(bgImage, displayWidth/2, displayHeight/2,displayWidth, displayHeight  );
  fill(255);
  textSize(36);
  textFont('Courier');
  //text('DATATRASH',50,50);
 // text('Unknown error', 50, 90);
  //println ('mousex:'+mouseX+'mouseY:'+mouseY);
  
 


  var xPos = mouseX;
  var yPos = mouseY;
  investMen.push(new investMan(xPos, yPos, manImg));




  if (mouseX > 900 && mouseY > 100) {

    image(grow, width / 2, height / 2);
    grow.play();
    
     image(bgVideo, width / 2, height / 2);
    grow.play();

  } else if (mouseX < 100 && mouseY > 100) {
    //background(255);
    grow.pause();
    image(bg, 500, 200);
  }





  for (i = 0; i < investMen.length; i++) {
    
    investMen[i].display();
   
  }
}

function investMan(x, y, img) {
  this.x = x;
  this.y = y;
  this.img = img;

  // this.bool = true;

  this.update = function() {
    this.x = mouseX;
    this.y = mouseY;
  }
  
  this.clear = function() {
    for (i = 0; i < investMen.length;i++){
      investMen.pop(investMen[i]);
    }
  }



  this.display = function() {
    imageMode(CENTER)
    image(this.img, this.x, this.y);
    
  }

}