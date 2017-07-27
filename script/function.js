var gc = document.createElement("canvas");
gc.width = gc.height = 35;
var gx = gc.getContext("2d");

gx.beginPath();
gx.moveTo(35, 2);
gx.lineTo(35, 35);
gx.lineTo(2, 35);
gx.stroke();
gx.fillRect(17,17,1,1);

var pc = document.createElement("canvas");
pc.width = pc.height = 1000;
var px = pc.getContext("2d");
document.body.appendChild(pc);
for(var y = 0; y < pc.height; y += gc.height) {
  for(var x = 0; x < pc.width; x += gc.width) {
    px.drawImage(gc, x, y);
  }
}

//pc.width = window.innerWidth;
//pc.height = window.innerHeight;

var mx = my = lx = ly = 0;

function handleMouseMove(event) {
  mx = event.clientX;
  my = event.clientY;
}
function fadeClear() {
  px.fillStyle = 'rgba(255,255,255,0.03)';
  px.fillRect(0, 0, pc.width, pc.height);
}
function drawDot(x, y) {
  var size = 10;
  px.fillStyle = "#F00";
  px.fillRect(x-size*0.5, y-size*0.5, size, size);
  lx = x;
  ly = y;
}

function draw(t) {
  var lag = 0.02;

  fadeClear();

  var x, y;

  var dx = lx - mx;
  var dy = ly - my;

  x = lx - (dx*lag);
  y = ly - (dy*lag);

  drawDot(x, y);

  window.requestAnimationFrame(draw);
}

window.addEventListener("mousemove", handleMouseMove);

draw(0);
