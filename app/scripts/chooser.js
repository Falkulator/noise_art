	var noise = require('./vendor/noise.js');

	var Chooser = function(point) {

		this.noise = new noise();
		this.noise.seed(Math.random());
		this.pos = {
			x:point.x,
			y:point.y
		}
		this.n = this.noise.perlin2(this.pos.x, this.pos.y);

		this.vector = new paper.Point({
			angle: Math.random()*360,
			length: 1 + Math.random() * 6
		});

		this.maxLength = 220;
		var stepSize = 0.3;
		// this.preNoise = [];
		// for (var i=0;i<this.maxLength;i++) {
		// 	var x=y=0;
		// 	this.preNoise.push(this.noise.perlin2(x,y));
		// 	x+=stepSize;
		// 	y+=stepSize;
		// }

		this.lastPoint = new paper.Point(this.pos.x, this.pos.y);
		this.randRot = 10 + Math.abs(this.n) * Math.random() * 500;
		this.randSize = 1 + Math.random() * 53;
		this.randSpeed = 100 + Math.random() * 1000;
		this.chue = Math.random();

		


		var c = Math.abs(this.n);
		this.fillColor = new paper.Color(1-c,1,1);

			//this.fillColor = 'green';

		this.path = new paper.Path();
		this.path.strokeWidth = this.randSize;
		this.path.strokeColor = this.fillColor;
		this.path.strokeCap = 'round';
		this.remove = false;

			
			

		this.draw = function(dt, t) {
			if (this.remove)
				return;
			this.n = this.noise.perlin2(this.pos.x,this.pos.y);
			this.vector.angle += this.n * this.randRot;
			
			this.vector.length = this.randSpeed;


			this.pos.x += this.vector.x;
			this.pos.y += this.vector.y;

			this.paperRender();

			if (this.path.segments.length > this.maxLength) {

				this.remove = true;
			}
			

		}


		// this.paperRender = function() {
		// 	var absn = Math.abs(this.n);
		// 	this.path.add(new paper.Point(this.pos.x, this.pos.y));
		// 	this.path.smooth();
	
			
		// }


		//smooth line path 
		this.paperRender = function() {
			var absn = Math.abs(this.n);
			this.path.add(new paper.Point(this.pos.x, this.pos.y));
			this.path.smooth();
			
			
		}

		// this.paperRender = function() {
		// 	var pos = new paper.Point(this.pos.x, this.pos.y);
		// 	var size = new paper.Size(this.vector.x * this.randSize, this.vector.y * this.randSize);
		// 	var rectangle = new paper.Rectangle(pos, size);
		// 	var path = new paper.Path.Ellipse(rectangle);
		// 	path.rotate(Math.abs(this.n) * this.randRot);

		// 		path.fillColor = this.fillColor;
		// 		path.fillColor.hue += this.chue;
		// 		path.fillColor.saturation =1;
		// 		path.fillColor.brightness =1;
		// 		this.fillColor = path.fillColor;
		
		// }


	}

	module.exports = Chooser;
