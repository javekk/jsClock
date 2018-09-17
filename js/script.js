//      _       _____  _               _    
//     (_)     /  __ \| |             | |   
//      _  ___ | /  \/| |  ___    ___ | | __
//     | |/ __|| |    | | / _ \  / __|| |/ /
//     | |\__ \| \__/\| || (_) || (__ |   < 
//     | ||___/ \____/|_| \___/  \___||_|\_\
//    _/ |                                  
//   |__/                                   
//                                     by @javekk



var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var vertCenter = canvas.height / 2; //Vertical center of the canvas
var horiCenter = canvas.width /2; //Horizontal center of the canvas
ctx.translate(vertCenter, vertCenter); //Put the 0,0 coordinates to the center of the canvas

window.onload = function() {
	setInterval(draw, 1000); //redraw the clock every second.... smart? eeemmhhhmm
};

function draw() {		
	background();
	numbers();
	hands();
};


