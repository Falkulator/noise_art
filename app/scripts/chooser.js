	var noise = require('./vendor/noise.js');

	var Chooser = function(point, color) {

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

		this.maxLength = Math.random() *1020;

// 		var stepSize = 0.3;
// 		var nx=ny=0;
// 		this.vectors = [];
// 		for (var i=0;i<this.maxLength;i++) {
// 			var n =this.noise.perlin2(nx,ny);
// 			this.vectors.push(new paper.Point({
// 				length:Math.abs(n),
// 				angle:function() {return this.angle+=n ||Math.random() * 360}
// 			}));
// 			nx+=stepSize;
// 			ny+=stepSize;

// 		}

// console.log(this.vectors);


		this.remove = false;
		this.lastPoint = new paper.Point(this.pos.x, this.pos.y);
		this.randRot = 1 + Math.abs(this.n) * Math.random() * 350;
		this.randSize = 1 + Math.random() * 30;
		this.randSpeed = 250 + Math.random() * 1300;
		this.chue = Math.abs(this.n);

		



		this.fillColor = {
			hue: color + this.chue * 80,
			saturation: Math.random(),
			brightness: 1
		}

			//this.fillColor = 'green';

		this.path = new paper.Path();
		this.path.strokeWidth = this.randSize;
		this.path.strokeColor = this.fillColor;
		//this.path.fillColor = this.fillColor;
		this.path.strokeCap = 'round';
		

			
			

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

			//this.path.fillColor = this.fillColor;
			//this.path.strokeColor.hue += this.chue;
			//this.path.fillColor.hue += this.chue;
			// this.path.fillColor.saturation =1;
			// this.path.fillColor.brightness =1;
			this.fillColor = this.path.strokeColor;
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
