song=""
function preload(){
    song=laodSound("musicc.mp3")
}
function setup()
{
    canvas=createCanvas(600,500);
    canvas.centre();
    vedio=createCapture(VEDIO);
    vedio.hide();
}
function draw(){
    image(vedio,0,0,600,500);
}
function play(){
    song.play()
}