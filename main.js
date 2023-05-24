function preload(){
    pic=loadImage("download.png")
}


function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
}
function draw(){
    image(pic,240,240,200,120)
    fill("red")
    stroke("green")
    circle(60,60,30);
    circle(580,420,30);
    circle(60,420,30);
    circle(580,60,30);

    fill("green");
    stroke("green");
    rect(75,50,490,30);
    rect(75,410,490,30);
    rect(75,50,30,360);
    rect(540,50,30,360)
}
function take_snapshot(){

}
