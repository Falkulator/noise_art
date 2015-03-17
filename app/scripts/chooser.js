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

		this.maxLength = 20 + Math.random() * 800;
		var stepSize = 0.001 + Math.random() * 0.015;

		this.randRot = 300 + Math.random() * 20;
		this.randSize = 5 + Math.random() * 15;
		this.randSpeed = this.randRot + Math.random() *100;
		this.strokeWidth = 20 + Math.random() * 30;
		this.chue = this.n * 30;

		var l = 9 + Math.random() * 21;//zoom scaling
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
		this.dead = false;

		var elapsedTime = 0;

		this.draw = function(dt, trails) {
			//console.log(this);
			this.nx += stepSize;
			this.ny += stepSize;
			this.n = this.noise.perlin2(this.nx,this.ny);
			this.vector.angle += this.n * this.randRot;

			this.pos.x += this.vector.x;
			this.pos.y += this.vector.y;

			var pWidth = paper.view.bounds.width * 5;
			var pHeight = paper.view.bounds.height * 5;



			if (this.path.segments.length > this.maxLength) {
				if (!trails) {
					this.path.removeSegment(0);
					this.maxLength -=1;
					
				}	
				if (this.maxLength <= 0) {
					this.remove = true;
				}
			} else {
				this.paperRender();
			}


			

				

		}

		this.paperRender = function() {
			this.path.add(new paper.Point(this.pos.x, this.pos.y));
			this.path.smooth();
			
			
		}

 
	}

	module.exports = Chooser;
