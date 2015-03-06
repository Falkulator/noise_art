	var Line = require('./line.js'),
			Ellipse = require('./ellipse.js');


	//Chooses and contols the brush desisions
	var Chooser = function(stage, point, color) {
		return new Ellipse(stage, point,color);
	}


	module.exports = Chooser;
