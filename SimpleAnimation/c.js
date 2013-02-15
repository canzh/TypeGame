const FPS=30;
const SECONDS_BETWEEN_FRAMES=1/FPS;
const HALF_IMAGE_DIMENSION=17;
const HALF_CANVAS_WIDTH=300;
const HALF_CANVAS_HEIGHT=200;
var image=new Image();
image.src='b.jpg';
var canvas=null;
var context2D=null;
var currentFunction=null;
var currentTime=0;
var sineWave=0;

window.onload=init;

function init() {
 canvas=document.getElementById('canvas');
 context2D=canvas.getContext('2d');
 
 setInterval(draw, SECONDS_BETWEEN_FRAMES*1000);
 currentFunction=scale;
}

function draw() {
 currentTime+=SECONDS_BETWEEN_FRAMES;
 sineWave=(Math.sin(currentTime)+1)/2;
 
 context2D.clearRect(0,0,canvas.width,canvas.height);
 context2D.save();
 context2D.translate(HALF_CANVAS_WIDTH-HALF_IMAGE_DIMENSION, HALF_CANVAS_HEIGHT-HALF_IMAGE_DIMENSION);
 
 currentFunction();
 context2D.drawImage(image,0,0);
 context2D.restore();
}

function alpha() {
 context2D.globalAlpha=sineWave;   
}

function shear() {
 context2D.transform(1,0,(sineWave-0.5),1,0,0);   
}

function scale() {
 context2D.translate(HALF_IMAGE_DIMENSION * (1-sineWave), HALF_IMAGE_DIMENSION * (1-sineWave));
 context2D.scale(sineWave,sineWave);
}

function rotate() {
 context2D.translate(HALF_IMAGE_DIMENSION, HALF_IMAGE_DIMENSION);
 context2D.rotate(sineWave*Math.PI*2);
 context2D.translate(-HALF_IMAGE_DIMENSION, -HALF_IMAGE_DIMENSION);
}