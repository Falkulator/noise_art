
var Chooser = require('./chooser.js');

var choosers,
		color;

window.onload = function() {
	
	var canvas = document.getElementById('canvas');
	canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
	paper.setup(canvas);
	paper.view.zoom = 0.3;
	var path = new paper.Path.Rectangle(paper.view.bounds);
	path.fillColor = 'black';

	
	resizeCanvas();

	

}

function start() {
	color = Math.random() * 360;
	choosers = [];
	for (var i=0;i<2;i++) {
		var p ={
			x: Math.random() * paper.view.bounds.width,
			y: Math.random() * paper.view.bounds.height
		};

		var chooser = new Chooser(p,color);
		choosers.push(chooser);
	}
	
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
	var clen = choosers.length;
	if (elapsedTime > 3) {
		everySec();
	}
	zoom(event.delta);
	for (var i=0;i<clen;i++) {
		var chooser = choosers[i];
		chooser.draw(event.delta, event.time);

	}

	elapsedTime += event.delta;

}

function zoom(dt) {
	if (zoomBool === false) {
		paper.view.zoom -= 0.0026*dt;
		if (paper.view.zoom < 0.003 ) {
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

function everySec() {
	console.log(paper.view.zoom);
		var p ={
			x: Math.random() * paper.view.bounds.width *1/ paper.view.zoom,
			y: Math.random() * paper.view.bounds.height *1/ paper.view.zoom
		};

		var chooser = new Chooser(p,color);
		choosers.push(chooser);

		var p ={
			x: Math.random() * paper.view.bounds.width,
			y: Math.random() * paper.view.bounds.height 
		};

		var chooser = new Chooser(p,color);
		choosers.push(chooser);
		
		elapsedTime = 0;
}