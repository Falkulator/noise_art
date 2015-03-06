

	function hslToRgb(h, s, l){
	    var r, g, b;

	    if(s == 0){
	        r = g = b = l; // achromatic
	    }else{
	        var hue2rgb = function hue2rgb(p, q, t){
	            if(t < 0) t += 1;
	            if(t > 1) t -= 1;
	            if(t < 1/6) return p + (q - p) * 6 * t;
	            if(t < 1/2) return q;
	            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
	            return p;
	        }

	        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
	        var p = 2 * l - q;
	        r = hue2rgb(p, q, h + 1/3);
	        g = hue2rgb(p, q, h);
	        b = hue2rgb(p, q, h - 1/3);
	    }

    	return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
	}

	function rgbToHex(color) {

		// going from decimal to hex
		var hexR = color[0].toString(16);
		var hexG = color[1].toString(16);
		var hexB = color[2].toString(16);
		 
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

		function randomHex() {
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



module.exports.hslToRgb = hslToRgb;
module.exports.rgbToHex = rgbToHex;
module.exports.randomHex = randomHex;