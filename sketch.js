let textX = 100
let sizeFactor;
let backgroundImage
let sizeFactor2; 
let showImage = false;
let imgX, imgY, imgWidth, imgHeight;
let showImage2 = false; 
let imgK, imgZ, imgW, imgH; 
let icedflatwhiteX = -300
let Text1X = 300

let showImage3 = false; // Initially hide the image
let delayTime = 9000; // Delay time in milliseconds (3 seconds)
let startTime;
let sizeFactor3
let sound; 

function preload() {
yellowcircles = loadImage("yellowcircles.gif")
icedflatwhite = loadImage("icedflatwhite.gif")
Text1 = loadImage("TEXT1.gif")
Text2 = loadImage("TEXT2.gif")
fourzeros = loadImage("fourzeros.gif")
flatwhiteicon = loadImage("flatwhiteicon.gif")
background2 = loadImage("background2.gif")
hotcoffee = loadImage("hotcoffee.gif")
sound = loadSound("audio/sound.mp3");
}


function setup() {
    createCanvas(windowWidth, windowHeight)

    imgX = width / 2 - 300;
    imgY = height / 2 - 300;
    imgWidth = 400;
    imgHeight = 250;

    imgK = width / 2 - 300;
    imgZ = height / 2 - 300;
    imgW = 400;
    imgH = 300;

    startTime = millis();

    let button = createButton("Play Sound");
    button.position(150, 200);
    button.mousePressed(() => {
      if (!sound.isPlaying()) {
        sound.play();
      }
    });
}

function draw() {
    background(background2); 
    let sec = second();
    let min = minute(); 

    if (sec === 10) {
        showImage = true; 
    }

    if (showImage) {
        image(flatwhiteicon, width / 2 - 300, height / 2 - 300, 400, 250);
    }
    
    if (sec === 50) {
        showImage2 = true; 
    }

    if (showImage2) {
        image(hotcoffee, width / 2 - 300, height / 2 - 300, 400, 300);
    }

    if (millis() - startTime > delayTime) {
        showImage3 = true;
    }

    if (showImage3) {
        image(fourzeros, width / 2 - 700, height / 2 - 500, 900, 900);
    }

    sizeFactor = map(sec, 56, 59, 100, 600); // Maps second() (0 to 59) to a size (50 to 300)
    sizeFactor2 = map(sec, 20, 40, 10, 600)
    sizeFactor3 = map(sec, 50, 58, 200, 350)

    image(yellowcircles, sizeFactor2, sizeFactor2)
    image(Text2, sizeFactor3, sizeFactor3)


    fill(2)
    textSize(21)
    text("Second: " + sec, 20, 30);

    fill(2)
    textSize(21)
    text("Minute: " + min, 170, 30);

    image(icedflatwhite, icedflatwhiteX, -200, 2000)
    icedflatwhiteX = icedflatwhiteX + 6

    image(Text1, Text1X, -100, 2000)
    Text1X = Text1X + 3

}


        function mousePressed() {
            // Check if the mouse is inside the image boundaries
            if (showImage && mouseX > imgX && mouseX < imgX + imgWidth &&
                mouseY > imgY && mouseY < imgY + imgHeight) {
                showImage = false; // Hide the image when clicked
            }
    
            if (showImage2 && mouseX > imgK && mouseX < imgK + imgW &&
                mouseY > imgZ && mouseY < imgZ + imgH) {
                showImage2 = false; // Hide the image when clicked
            }
        }