
var Chooser = require('./chooser.js');

var choosers,
		color;

window.onload = function() {
	
	var canvas = document.getElementById('canvas');
	canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
	paper.setup(canvas);
	paper.view.zoom = 0.5;
	var path = new paper.Path.Rectangle(paper.view.bounds);
	path.fillColor = 'black';
	color = Math.random() * 360;
	
	resizeCanvas();

	

}

function start() {

	choosers = [];


	for (var i=0;i<3;i++) {
		var point = {
			x: Math.random() * paper.view.bounds.width,
			y: Math.random() * paper.view.bounds.height
		};

		var chooser = new Chooser(point, color);
		choosers.push(chooser);
	}

	paper.view.zoom = 0.01;
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
	if (elapsedTime > 1 && choosers.length < 15) {
		everySec();
	}

	//zoom(event.delta);

	for (var i=0;i<choosers.length;i++) {
		var chooser = choosers[i];
		chooser.draw(event.delta, event.time);
		if (chooser.remove) {
			choosers.splice(i,1);
		}
		

	}

	elapsedTime += event.delta;

}

function everySec() {

	var point ={
		x: Math.random() * paper.view.bounds.width,
		y: Math.random() * paper.view.bounds.height
	};

	var chooser = new Chooser(point, color);
	choosers.push(chooser);
	
	elapsedTime = 0;
}

function zoom(dt) {
	if (zoomBool === false) {
		paper.view.zoom -= 0.0026*dt;
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
