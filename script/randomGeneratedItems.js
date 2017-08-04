var canvas = document.querySelector("canvas");
var context = canvas.getContext('2d');
var cs = getComputedStyle(canvas);
var size = [1,2,3,4,5];
var map = [];
map = [{"width" : 500 , "height" :500, "itemAmount" : 10},
			{"width" : 1000 , "height" :1000, "itemAmount" : 30},
      {"width" : 2000 , "height" :2000, "itemAmount" : 50}];
 var width = canvas.width;
 var height = canvas.height;
 
function drawCircles (count) {
    var locations = new Array();
    
    while (locations.length<count) {
        var newlocation = Math.floor(Math.random()*width*height);
        
        if (locations.indexOf(newlocation) === -1) {
            locations.push(newlocation);
        		context.beginPath();	
  	 				context.arc( newlocation%width,
            						 newlocation/width,
                         Math.floor(Math.random()*5)+1,
                         0,
                         2 * Math.PI
                        );
    
    				context.fillStyle = 'white';
     				context.fill();
            
            console.log( newlocation);
				}
    }
}


drawCircles(100);
