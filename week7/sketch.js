// https://github.com/kylemcdonald/AppropriatingNewTechnologies/wiki/Week-2
var capture;
var tracker
var w = 640,
    h = 480;
var lefteye;
var righteye;
var lips;


function preload(){
    lefteye = loadImage("images/lefteye.png");
    righteye = loadImage("images/righteye.png");
    lips = loadImage("images/lips.png");
    } 

function setup() {
    capture = createCapture(VIDEO);
    createCanvas(w, h);
    capture.size(w, h);
    capture.hide();

    colorMode(HSB);

    tracker = new clm.tracker();
    tracker.init(pModel);
    tracker.start(capture.elt);
}

function draw() {
    image(capture, 0, 0, w, h);
    var positions = tracker.getCurrentPosition();


    if (positions.length > 0) {
        var mouthLeft = createVector(positions[44][0], positions[44][1]);
        var mouthRight = createVector(positions[50][0], positions[50][1]);
        var eyeLeft = createVector(positions[27][0], positions[27][1]);
        var eyeRight = createVector(positions[32][0], positions[32][1]);
        var lips_ = createVector(positions[60][0], positions[60][1]);
        var smile = mouthLeft.dist(mouthRight);

        // uncomment the line below to show an estimate of amount "smiling" 
        rect(20, 20, smile * 3, 20);
        
        noStroke();
        fill(0, 255, 255);


        imageMode(CENTER);
        image(lefteye, positions[27][0], positions[27][1], 100, 100);
        image(righteye, positions[32][0], positions[32][1], 120, 120);
        image(lips, positions[60][0], positions[60][1], 180, 100);
   
    }
}
