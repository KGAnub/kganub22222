
let inconsolata;
function preload() {
  inconsolata = loadFont('assets/inconsolata.otf');
}
function setup() {
  createCanvas(100, 100, WEBGL);
  textFont(inconsolata);
  textSize(width / 3);
  textAlign(CENTER, CENTER);
}
function draw() {
  background(0);
  let time = millis();
  rotateX(time / 1000);
  rotateZ(time / 1234);
  text('p5.js', 0, 0);
}

function modelLoaded() {
    console.log("poseNet is Initialized");
}

function draw() {
    background(0);
    let time = millis();
    rotateX(time / 1000);
    rotateZ(time / 1234);
    textSize(16);
strokeWeight(0.5);

line(0, 12, width, 12);
textAlign(CENTER, TOP);
text('TOP', 0, 12, width);

line(0, 37, width, 37);
textAlign(CENTER, CENTER);
text('CENTER', 0, 37, width);

line(0, 62, width, 62);
textAlign(CENTER, BASELINE);
text('BASELINE', 0, 62, width);

line(0, 87, width, 87);
textAlign(CENTER, BOTTOM);
text('BOTTOM', 0, 87, width);
  }

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX +" noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference =floor(leftWristX - rightWristX);
        console.log("leftWrist = " + leftWristX +" rightWrist = " + rightWristX +" difference = " + difference);


    }
}
textSize(32);
text('word', 10, 30);
fill(0, 102, 153);
text('word', 10, 60);
fill(0, 102, 153, 51);
text('word', 10, 90);

