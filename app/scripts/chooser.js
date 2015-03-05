	var Line = require('./line.js'),
			Elipse = require('./elipse.js');


	//Chooses and contols the brush desisions
	var Chooser = function(point, color) {
		return new Elipse(point,color);
	}


	module.exports = Chooser;
