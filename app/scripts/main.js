

var PIXI = require('./vendor/pixi.js'),
		Chooser = require('./chooser.js'),
		tinycolor = require('tinycolor');


var choosers = [],
		color;

window.onload = function() {
	window.tinycolor = tinycolor;
	window.PIXI = PIXI;//figure out browserify

	 // create an new instance of a pixi stage
	var stage = new PIXI.Stage(0x000);
	var container = new PIXI.DisplayObjectContainer();
	    container.scale.x = 0.5;
	    container.scale.y = 0.5;

	    stage.addChild(container);
	// create a renderer instance.
	var rendererOptions = {
	    antialiasing:true,
	    transparent:false,
	    resolution:1
	}
	var renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, rendererOptions);

	// add the renderer view element to the DOM
	document.body.appendChild(renderer.view);

	var color = Math.random() * 360;

	for (var i=0;i<2;i++) {
		var point = {
			x: Math.random()*window.innerWidth*2,
			y: Math.random()*window.innerHeight*2
		}
		var chooser = Chooser(container, point, color);
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
			if (choosers[i].remove) {
				choosers.splice(i,1);
			}
		}
		if (dt > 1000) {
			var point = {
				x: Math.random()*window.innerWidth*2,
				y: Math.random()*window.innerHeight*2
			}



			var chooser = Chooser(container, point, color);
			choosers.push(chooser);
			dt = 0;
		}
			

		requestAnimFrame( animate );

		// render the stage   
		renderer.render(stage);
	}



}


