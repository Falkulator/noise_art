
var Chooser = require('./chooser.js');

var choosers = [],
		color;

window.onload = function() {

	var canvas = document.getElementById('canvas');
	canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
	paper.setup(canvas);
	paper.view.zoom = 0.039;
	color = Math.random() * 360; 
	setCss();
	
	resizeCanvas();

}

function start() {


	paper.view.onFrame = draw;

	
}

var canvas = document.getElementById('canvas'),
  context = canvas.getContext('2d');

// resize the canvas to fill browser window dynamically
window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  /**
   * Your drawings need to be inside this function otherwise they will be reset when 
   * you resize the browser window and the canvas goes will be cleared.
   */
  start(); 
}


var elapsedTime = 0;
var zoomBool = false;
             
function draw(event) {
	if (elapsedTime > 1) {
		everySec();
	}

	//zoom(event.delta);


	for (var i=0;i<choosers.length;i++) {
		var chooser = choosers[i];
		chooser.draw(event.delta, drawTrails);
		if (chooser.remove) {
			choosers.splice(i,1);
		}
		

	}

	elapsedTime += event.delta;

}

function everySec() {

	while (choosers.length < 9) {

		var point ={
			x: Math.random() * paper.view.bounds.width/3,
			y: Math.random() * paper.view.bounds.height/3
		};

	var chooser = new Chooser(point, color);
	choosers.push(chooser);

	}
	
	elapsedTime = 0;
}

function zoom(dt) {
	if (zoomBool === false) {
		//paper.view.zoom -= 0.0046*dt;
		paper.view.zoom -= 0.026*dt;
		if (paper.view.zoom < 0.004 && zoomBool === false) {
			zoomBool = true;
		}
		
	} 
	if (zoomBool === true) {
		paper.view.zoom += 0.0003*dt;
		if (paper.view.zoom > 0.02) {
			zoomBool = false;
		}
	}
}

var tool = new paper.Tool();
var drawTrails = false; 
tool.onMouseUp = function(event) {

	drawTrails = !drawTrails;
}


setCss = function() {
	var hex = new tinycolor({
		h: color,
		s: 100,
		v: 100 

	});
	$('i').hover(function() {
		$(this).css("color",hex.toRgbString());
	}, function() {
		$(this).css("color","white");
	});
}