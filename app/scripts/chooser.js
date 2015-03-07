	var Line = require('./line.js'),
			Ellipse = require('./ellipse.js');


	//Chooses and contols the brush desisions
	var Chooser = function(point, color) {
		return new Ellipse(point, color);
	}


	module.exports = Chooser;
