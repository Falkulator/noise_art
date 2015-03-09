	var noise = require('./vendor/noise.js');

	var Ellipse = function(stage, point, color) {

		this.noise = new noise();
		this.noise.seed(Math.random());
		this.pos = {
			x:point.x,
			y:point.y
		}

		this.n = this.noise.perlin2(this.pos.x, this.pos.y);


		this.maxLength = Math.random() *1020;
		this.currentLength = 0;
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

		this.randRot = 30 + Math.abs(this.n) * Math.random() * 550;
		this.randSize = 20 + Math.random() * 50;

		this.randSpeed = 300 + Math.random() * 1000;
		this.chue = Math.abs(this.n);

		this.vector = {
			angle: Math.random()*360,
			length: 1
		};



		this.fillColor = {
			hue: color + this.chue * 150,
			saturation: Math.random(),
			brightness: 1
		}

		this.graphics = new PIXI.Graphics();
		stage.addChild(this.graphics);
		this.graphics.beginFill(color);

		var count = 1;
			

		this.draw = function() {
			// if (this.remove) {
			// 	this.path.remove();
			// 	return;
			// }

			this.n = this.noise.perlin2(this.pos.x,this.pos.y);
			this.vector.angle += this.n ;
			
			this.vector.length += this.n *  this.randSpeed;




			this.pos.x += this.vector.length * Math.cos(this.vector.angle);
			this.pos.y += this.vector.length * Math.sin(this.vector.angle)

			this.pixiRender();

			if (this.currentLength > this.maxLength) {

				this.remove = true;
			}
			this.currentLength += 1;
			

		}


		this.pixiRender = function() {
			// var pos = new paper.Point(this.pos.x, this.pos.y);
			// var size = new paper.Size(this.vector.x * this.randSize, this.vector.y * this.randSize);
			// var rectangle = new paper.Rectangle(pos, size);
			// var path = new paper.Path.Ellipse(rectangle);
			// path.rotate(Math.abs(this.n) * this.randRot);

			// 	path.fillColor = this.fillColor;
			// 	path.fillColor.hue += this.chue;
			// 	path.fillColor.saturation =1;
			// 	path.fillColor.brightness =1;
			// 	this.fillColor = path.fillColor;

			
			//this.graphics.lineStyle(10, 0xffd900, 1);
			var size = Math.abs(this.n) * this.randSize;

			this.graphics.drawShape(new PIXI.Circle(this.pos.x, this.pos.y, size));
			// this.graphics.rotation = count * 0.1;
			// count += 1;
		
		
		}


	}

	module.exports = Ellipse;
