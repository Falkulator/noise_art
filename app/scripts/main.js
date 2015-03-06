
var PIXI = require('./vendor/pixi.js'),
		Chooser = require('./chooser.js');

var choosers = [],
		color;

window.onload = function() {
	window.PIXI = PIXI;//WHY? is require breaking somehow?

	 // create an new instance of a pixi stage
	var stage = new PIXI.Stage(0x000);
	var container = new PIXI.DisplayObjectContainer();
	    container.scale.x = 0.2;
	    container.scale.y = 0.2;

	    stage.addChild(container);
	// create a renderer instance.
	var renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);

	// add the renderer view element to the DOM
	document.body.appendChild(renderer.view);
	for (var i=0;i<2;i++) {
		var point = {
			x: Math.random()*window.innerWidth*5,
			y: Math.random()*window.innerHeight*5
		}
		var chooser = Chooser(container, point, getRandomColor());
		choosers.push(chooser);
	}
	

	requestAnimFrame( animate );

	var lastTime = Date.now(),
    	dt = 0;

	function animate() {
		var now = Date.now();
    dt += now - lastTime;
    lastTime = now;

		for (var i=0;i<choosers.length;i++) {
			choosers[i].draw();
		}
		if (dt > 2000) {
			var point = {
				x: Math.random()*window.innerWidth*5,
				y: Math.random()*window.innerHeight*5
			}
			var chooser = Chooser(container, point, getRandomColor());
			choosers.push(chooser);
			dt = 0;
		}
			

		requestAnimFrame( animate );

		// render the stage   
		renderer.render(stage);
	}


	

}

function getRandomColor() {
// creating a random number between 0 and 255
var r = Math.floor(Math.random()*256);
var g = Math.floor(Math.random()*256);
var b = Math.floor(Math.random()*256);
 
// going from decimal to hex
var hexR = r.toString(16);
var hexG = g.toString(16);
var hexB = b.toString(16);
 
// making sure single character values are prepended with a "0"
if (hexR.length == 1) {
hexR = "0" + hexR;
}
 
if (hexG.length == 1) {
hexG = "0" + hexG;
}
 
if (hexB.length == 1) {
hexB = "0" + hexB;
}
 
// creating the hex value by concatenatening the string values
var hexColor = "0x" + hexR + hexG + hexB;
return hexColor.toUpperCase();
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
	
	paper.view.zoom = 0.01;

	
}

