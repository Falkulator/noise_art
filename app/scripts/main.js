
var PIXI = require('./vendor/pixi.js'),
		Chooser = require('./chooser.js'),
		Color = require('./color.js');

var choosers = [],
		color;

window.onload = function() {
	window.PIXI = PIXI;//WHY? is require breaking somehow?

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

	var color = Color.hslToRgb(Math.random() * 360, Math.random(),100);

	// add the renderer view element to the DOM
	document.body.appendChild(renderer.view);
	for (var i=0;i<2;i++) {
		var point = {
			x: Math.random()*window.innerWidth*2,
			y: Math.random()*window.innerHeight*2
		}

		
		var chooser = Chooser(container, point, Color.rgbToHex(color));
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
		if (dt > 4000) {
			var point = {
				x: Math.random()*window.innerWidth*2,
				y: Math.random()*window.innerHeight*2
			}



			var chooser = Chooser(container, point, Color.rgbToHex(color));
			choosers.push(chooser);
			dt = 0;
		}
			

		requestAnimFrame( animate );

		// render the stage   
		renderer.render(stage);
	}


	

}



