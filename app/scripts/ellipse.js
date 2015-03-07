	var noise = require('./vendor/noise.js');

	var Ellipse = function(stage, point, color) {

		this.noise = new noise();
		this.noise.seed(Math.random());
		this.pos = {
			x:point.x,
			y:point.y
		}

		this.n = this.noise.perlin2(this.pos.x, this.pos.y);



		this.maxLength = Math.random() * 2020;
		this.currentLength = 0;
		


		this.remove = false;

		this.randRot = 1 + Math.abs(this.n)  ;
		this.randSize = Math.random() * 4;
		this.randSpeed = 5 + Math.random() * 15;

		this.vector = {
			angle: Math.random()*360,
			length: Math.abs(this.n) * this.randSize
		};



		this.color = tinycolor(color).tetrad()[Math.floor(Math.random() * 4)];
		this.chue = 0.5;
		this.color = tinycolor(this.color).toHsl();
		//console.log(this.color);//this fixes the color?
		this.color = tinycolor({
			h: this.color.h,
			s: this.color.s,
			l: Math.abs(this.n)
		});

		this.graphics = new PIXI.Graphics();
		stage.addChild(this.graphics);


		var count = 1;
			

		this.draw = function() {
			if (this.remove) {

				return;
			}

			this.n = this.noise.perlin2(this.pos.x,this.pos.y);
			this.vector.angle += this.n ;
			
			//this.vector.length = this.randSpeed;

			//this.fill = this.color.spin(this.chue).toHex();

			this.color = tinycolor({
				h: this.color._originalInput.h += this.chue,
				s: this.color._originalInput.s,
				l: 0.3 + this.n
			});
			//console.log(this.color);

			// this.color.rgb = Color.hslToRgb(this.color.hue, this.s, 100);
			//this.vector.length = Math.abs(this.n)*this.randSize;

			this.pos.x += this.vector.length/4 * Math.cos(this.vector.angle);
			this.pos.y += this.vector.length/4 * Math.sin(this.vector.angle)

			this.pixiRender();

			if (this.currentLength > this.maxLength) {

				this.remove = true;
			}
			this.currentLength += 1;
			

		}


		this.pixiRender = function() {
		
			//this.graphics.lineStyle(10, 0xffd900, 1);
			this.vector.length += this.n;
			var size = this.vector.length/4;
			this.graphics.beginFill("0x"+this.color.toHex());


			//this.graphics.drawShape(new PIXI.Ellipse(this.pos.x, this.pos.y, sizex, sizey));
			this.graphics.drawCircle(this.pos.x, this.pos.y, size);
			// this.graphics.rotation = count * 0.1;
			// count += 1;
		
		
		}


	}

	module.exports = Ellipse;
