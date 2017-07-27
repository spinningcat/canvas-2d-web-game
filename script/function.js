console.clear();

var canvas = document.createElement("canvas");
document.body.appendChild(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");

var mx = my = lx = ly = 0;

function handleMouseMove(event) {
  mx = event.clientX;
  my = event.clientY;
}
function fadeClear() {
  ctx.fillStyle = 'rgba(255,255,255,0.03)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}
function drawDot(x, y) {
  var size = 10;
  ctx.fillStyle = "#F00";
  ctx.fillRect(x-size*0.5, y-size*0.5, size, size);
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
