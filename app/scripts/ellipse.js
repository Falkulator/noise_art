	var noise = require('./vendor/noise.js'),
		Color = require('./color.js');

	var Ellipse = function(stage, point, color) {

		this.noise = new noise();
		this.noise.seed(Math.random());
		this.pos = {
			x:point.x,
			y:point.y
		}

		this.n = this.noise.perlin2(this.pos.x, this.pos.y);

		this.vector = {
			angle: Math.random()*360,
			length: 1 + Math.random() * 6
		};

		this.maxLength = Math.random() *1020;
		this.currentLength = 0;
		


		this.remove = false;

		this.randRot = 1 + Math.abs(this.n) * Math.random() * 10;
		this.randSize = 20 + Math.random() * 50;

		this.randSpeed = 2 + Math.random() * 30;

		this.s = Math.random() * 100;
		this.color = {
			hue: Math.abs(this.n) * 25 + color,
			chue: 50,
			rgb: Color.hslToRgb(Math.abs(this.hue), this.s, 100)
		}




		this.graphics = new PIXI.Graphics();
		stage.addChild(this.graphics);


		var count = 1;
			

		this.draw = function() {
			if (this.remove) {
				//this.path.remove();
				return;
			}

			this.n = this.noise.perlin2(this.pos.x,this.pos.y);
			this.vector.angle += this.n * this.randRot;
			
			this.vector.length = this.randSpeed;

			this.color.hue += this.color.chue;
			this.color.rgb = Color.hslToRgb(this.color.hue, this.s, 100);


			this.pos.x += this.vector.length * Math.cos(this.vector.angle);
			this.pos.y += this.vector.length * Math.sin(this.vector.angle)

			this.pixiRender();

			if (this.currentLength > this.maxLength) {

				this.remove = true;
			}
			this.currentLength += 1;
			

		}


		this.pixiRender = function() {
		
			//this.graphics.lineStyle(10, 0xffd900, 1);
			var sizex = this.vector.length * Math.cos(this.vector.angle);
			var sizey = this.vector.length * Math.sin(this.vector.angle);
			this.graphics.beginFill(Color.randomHex());

			//this.graphics.drawShape(new PIXI.Ellipse(this.pos.x, this.pos.y, sizex, sizey));
			this.graphics.drawEllipse(this.pos.x, this.pos.y, sizex, sizey);
			// this.graphics.rotation = count * 0.1;
			// count += 1;
		
		
		}


	}

	module.exports = Ellipse;
