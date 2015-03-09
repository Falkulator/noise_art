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
		this.n = this.noise.perlin2(this.pos.x, this.pos.y);

		this.maxLength = Math.random() * 200;
		var stepSize = 0.001 + Math.random() * 0.01;

		this.lastPoint = new paper.Point(this.pos.x, this.pos.y);
		this.randRot = 10 + Math.random() * 500;
		this.randSize = 20 + Math.random() * 240;
		this.randSpeed = this.randRot + Math.random() *100;
		this.strokeWidth = 150 + Math.random() * 400;
		this.chue = this.n * 30;

		var l = 90 + Math.random() * 20;
		this.vector = new paper.Point({
			angle: Math.random() * 360,
			length: l * this.randSize
		});

		this.chue = 200 * this.n;

	

		this.fillColor = {
			hue: color + this.chue,
			saturation: Math.random(),
			brightness: 1
		}


		this.path = new paper.Path();
		this.path.strokeWidth = this.strokeWidth;
		this.path.strokeColor = this.fillColor;
		this.path.strokeCap = 'round';
		this.remove = false;

		this.draw = function(dt, t) {
			this.nx += stepSize;
			this.ny += stepSize;
			this.n = this.noise.perlin2(this.nx,this.ny);
			this.vector.angle += this.n * this.randRot;

			this.pos.x += this.vector.x;
			this.pos.y += this.vector.y;

			this.paperRender();

			if (this.path.segments.length > this.maxLength) {
				this.path.removeSegment(0);
				//this.remove = true;
			}
			

		}

		this.paperRender = function() {
			var absn = Math.abs(this.n);
			this.path.add(new paper.Point(this.pos.x, this.pos.y));
			this.path.smooth();

			// this.path.fillColor = this.fillColor;
			// this.path.fillColor.hue += this.chue;

			this.fillColor = this.path.fillColor;
			
			
		}


	}

	module.exports = Chooser;
