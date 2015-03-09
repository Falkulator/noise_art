	var noise = require('./vendor/noise.js');

	var Chooser = function(point, color) {

		this.noise = new noise();
		this.noise.seed(Math.random());
		this.pos = {
			x:point.x,
			y:point.y
		};
		this.nx = 0;
		this.ny = 0;
		this.n = this.noise.perlin2(this.nx, this.ny);

		this.maxLength = Math.random() * 2000;
		var stepSize = 0.01;

		this.lastPoint = new paper.Point(this.pos.x, this.pos.y);
		this.randRot = 10 + Math.random() * 500;
		this.randSize = 20 + Math.random() * 140;
		this.randSpeed = this.randRot + Math.random() *100;
		this.chue = Math.random();


		this.vector = new paper.Point({
			angle: Math.random()*360,
			length: 100 * this.randSize
		});

		this.chue = 2 * Math.abs(this.n);



		this.fillColor = {
			hue: color + this.chue * 150,
			saturation: Math.random(),
			brightness: 1
		}


		this.path = new paper.Path();
		this.path.strokeWidth = this.randSize;
		this.path.strokeColor = this.fillColor;
		this.path.strokeCap = 'round';
		this.remove = false;

		this.draw = function(dt, t) {
			if (this.remove)
				return;
			this.nx += stepSize;
			this.ny += stepSize;
			this.n = this.noise.perlin2(this.nx,this.ny);
			this.vector.angle += this.n * this.randRot;

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

	//		this.path.fillColor = this.fillColor;
	//		this.path.fillColor.hue += this.chue;

			this.fillColor = this.path.fillColor;
			
			
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
