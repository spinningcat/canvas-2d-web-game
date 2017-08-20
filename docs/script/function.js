var can = document.createElement('canvas');

document.body.appendChild(can);
var ctx = can.getContext('2d');


var coords = [];
var x, y;
var columnCount = 20
var rowCount = 20;
var columnWidth = can.width / columnCount;
var offsetLeft = columnWidth / 2;
var rowHeight = can.height / rowCount;
var offsetTop = rowHeight / 2;
var dirY = 0, dirX = 0;
var rads = Math.PI;
var pi2 = Math.PI / 2;

function mouseMove(e){
	x = e.clientX;
	y = e.clientY;
    centreX = can.width / 2
    centreY = can.height / 2

    if (y > centreY) {
    	dirY = -1;
    }
    else {
    	dirY = 1;
    }
    if (x > centreX) {
    	dirX = -1;
    }
    else {
    	dirX = 1;
    }

    //shift to centre
	rads = Math.atan((y - centreY) / (x - centreX));
}
function drawBackground() {
	ctx.beginPath(); //important
    var i;
    for (i = 1; i <= columnCount; i++) {
    	ctx.moveTo(columnWidth * i + offsetLeft, 0);
        ctx.lineTo(columnWidth * i + offsetLeft, can.height);
    }
    for (i = 1; i <= rowCount; i++) {
    	ctx.moveTo(0, rowHeight * i + offsetTop);
        ctx.lineTo(can.width, rowHeight * i + offsetTop);
    }
    ctx.stroke();
    ctx.closePath();
}

function loop() {
	//runs repeatedly, about 60 times per second

	//clear last frame
    ctx.clearRect(0, 0, can.width, can.height);
	if (!Math.abs(rads)) {
    	rads = 0
    }
    offsetTop = (offsetTop + dirY * Math.abs(rads) / pi2) % rowHeight;
    if (dirX === 1) {
        offsetLeft = (offsetLeft + 1 - (Math.abs(rads) / pi2)) % columnWidth;
    }
    else {
        offsetLeft = (offsetLeft - (1 - (Math.abs(rads) / pi2))) % columnWidth;
    }

	//draw background
	drawBackground();

	ctx.save();
    ctx.translate(can.width / 2, can.height / 2);
    ctx.rotate(rads);
 	ctx.rect(-25, -10, 50, 20);
	ctx.stroke();
    ctx.restore();
    
    /*if (coords.length >= 20) {
    	coords.shift();
    }
    coords.push([x,y]);
    var l = coords.length;
    var i = 0;
    for(i; i < l; i++) {
    	ctx.fillStyle = 'rgba(0,0,0,' + i/l + ')';
    	ctx.fillRect(coords[i][0], coords[i][1], 10, 10);
    }*/
    //setTimeout(loop, 500);
	window.requestAnimationFrame(loop);
}
loop();
window.addEventListener('mousemove', mouseMove, false);

var cs = getComputedStyle(can);
var size = [1,2,3,4,5];
var map = [];
map = [{"width" : 500 , "height" :500, "itemAmount" : 10},
			{"width" : 1000 , "height" :1000, "itemAmount" : 30},
      {"width" : 2000 , "height" :2000, "itemAmount" : 50}];
 var width = can.width;
 var height = can.height;
 
function drawCircles (count) {
    var locations = new Array();
		  
    while (locations.length<count) {
        var newlocation = Math.floor(Math.random()*width*height);
        
        if (locations.indexOf(newlocation) === -1) {
            locations.push(newlocation);
        		ctx.beginPath();	
  	 				ctx.arc( newlocation%width,
            						 newlocation/width,
                         Math.floor(Math.random()*5)+1,
                         0,
                         2 * Math.PI
                        );
    
    				ctx.fillStyle = 'white';
     				ctx.fill();
            
            console.log( newlocation);
				}
    }
}


drawCircles(100);
