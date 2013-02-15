window.onload = function() {

var canvas = document.getElementById('canvas');

canvas.onkeydown = function(e) {
alert('aaa');

var context=canvas.getContext('2d');
 
context.clearRect(0,0,canvas.width,canvas.height);
 context.fillStyle='white';
 context.fillText(e.keCode, 100, 100);
};

  /*
 var fps=30;
 
 setInterval(function() {
  var obj = new init();
  obj.update();
  obj.draw();
}, 1000/fps);
*/
};

function keydown(ev) {
    draw('aaa');
}

function draw(text) {
      this.canvas = document.getElementById('canvas');
 this.context=canvas.getContext('2d');
 
 this.canvas.clearRect(0,0,canvas.width,canvas.height);
 context.fillStyle='white';
 context.fillText(text, 100, 100);
}

function init() {
 this.canvas = document.getElementById('canvas');
 this.context=canvas.getContext('2d');

 
 this.keydown = function(ev) {
     draw(ev.keyCode);
 }
 
 this.update = function() {
     
 }
 
 this.draw = function(text) {
 this.canvas.clearRect(0,0,canvas.width,canvas.height);
 context.fillStyle='white';
 context.fillText('this is a canvas', 100, 100);
}

this.canvas.addEventListener('keydown', this.keydown, false);
}


