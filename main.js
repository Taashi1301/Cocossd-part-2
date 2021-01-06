img="";
status="";
function preload(){
    img=loadImage("download.png");
}

function setup(){
    canvas=createCanvas(600,600);
    canvas.center();
    objectdetector = ml5.objectDetector('cocossd', modelLoaded);
}

function modelLoaded(){
    console.log("Model has been loaded");
    status=true;
    document.getElementById("status").innerHTML="Status: Detecting objects";
    objectdetector.detect(img, gotResults);
}

function draw(){
    image(img, 0, 0, 600, 600);
    fill(255, 0, 0);
    stroke(255,0,0);
    text("laptop", 120, 30);
    noFill();
    rect(130, 40, 300, 300);
    fill(255,0,0);
    stroke(255,0,0);
    text("Plant", 450,30);
    noFill();
    rect(450, 40, 140, 300);
}

function gotResults(error, results){
    if(error){
        console.log(error);
    }
    if(results){
        console.log(results);
    }
}