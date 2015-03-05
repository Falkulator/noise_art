	var noise = require('./vendor/noise.js');

	var Elipse = function(point, color) {

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

		this.maxLength = Math.random() *200;


		this.remove = false;
		this.lastPoint = new paper.Point(this.pos.x, this.pos.y);
		this.randRot = 1 + Math.abs(this.n) * Math.random() * 350;
		this.randSize = 1 + Math.random() * 20;
		this.randSpeed = 250 + Math.random() * 1300;
		this.chue = 2 * Math.abs(this.n);

		this.uLength = 0;



		this.fillColor = {
			hue: color + this.chue * 150,
			saturation: Math.random(),
			brightness: 1
		}

			//this.fillColor = 'green';


		

			
			

		this.draw = function(dt, t) {
			if (this.remove) {
				//this.path.remove();
				return;
			}

			this.n = this.noise.perlin2(this.pos.x,this.pos.y);
			this.vector.angle += this.n * this.randRot;
			
			this.vector.length = this.randSpeed;


			this.pos.x += this.vector.x;
			this.pos.y += this.vector.y;

			this.paperRender();
			this.uLength += 1;
			if (this.uLength > this.maxLength) {

				this.remove = true;
			}
			

		}







		this.paperRender = function() {
			// var pos = new paper.Point(this.pos.x, this.pos.y);
			// var size = new paper.Size(this.vector.x * this.randSize, this.vector.y * this.randSize);
			// var rectangle = new paper.Rectangle(pos, size);
			// var path = new paper.Path.Ellipse(rectangle);

			var path = new paper.Shape.Ellipse({
				point: [this.pos.x, this.pos.y],
			   size: [this.vector.x * this.randSize, this.vector.y * this.randSize]
			});
			path.rotate(Math.abs(this.n) * this.randRot);

				path.fillColor = this.fillColor;
				path.fillColor.hue += this.chue;
				this.fillColor = path.fillColor;
		
		}


	}

	module.exports = Elipse;
