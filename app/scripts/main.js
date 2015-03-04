
var Chooser = require('./chooser.js');

var choosers;

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

	choosers = [];
	for (var i=0;i<1;i++) {
		var p ={
			x: Math.random() * paper.view.bounds.width,
			y: Math.random() * paper.view.bounds.height
		};

		var chooser = new Chooser(p);
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
             
function draw(event) {
	var clen = choosers.length;
	if (elapsedTime > 1) {
		console.log(paper.view.zoom);
		var p ={
			x: Math.random() * paper.view.bounds.width,
			y: Math.random() * paper.view.bounds.height
		};

		var chooser = new Chooser(p);
		choosers.push(chooser);
		
		elapsedTime = 0;
	}
	
	paper.view.zoom -= 0.00015;
	for (var i=0;i<clen;i++) {
		var chooser = choosers[i];
		chooser.draw(event.delta, event.time);

	}

	elapsedTime += event.delta;

}
