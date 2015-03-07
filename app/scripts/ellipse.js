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

		this.maxLength = Math.random() * 1020;
		this.currentLength = 0;
		


		this.remove = false;

		this.randRot = 1 + Math.abs(this.n)  ;
		this.randSize = 80 + Math.random() * 300;

		this.randSpeed = 1 + Math.random() * 5;


		this.color = tinycolor({ 
			h: color, 
			s: Math.random(), 
			v: Math.random()
		});

		this.color = tinycolor(this.color).tetrad()[Math.floor(Math.random() * 4)];
		//this.color.brighten(Math.random()*100);
//console.log(this.color);
		this.chue = Math.abs(this.n) ;





		this.graphics = new PIXI.Graphics();
		stage.addChild(this.graphics);


		var count = 1;
			

		this.draw = function() {
			if (this.remove) {

				return;
			}

			this.n = this.noise.perlin2(this.pos.x,this.pos.y);
			this.vector.angle += this.n * this.randRot;
			
			this.vector.length = this.randSpeed;

			//this.fill = this.color.spin(this.chue).toHex();
			this.color = tinycolor({
				h: this.color._originalInput.h += this.chue,
				s: this.color._originalInput.s ,
				v: this.color._originalInput.v
			});


			// this.color.rgb = Color.hslToRgb(this.color.hue, this.s, 100);


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
			this.graphics.beginFill("0x"+this.color.toHex());

			//this.graphics.drawShape(new PIXI.Ellipse(this.pos.x, this.pos.y, sizex, sizey));
			this.graphics.drawEllipse(this.pos.x, this.pos.y, sizex, sizey);
			// this.graphics.rotation = count * 0.1;
			// count += 1;
		
		
		}


	}

	module.exports = Ellipse;
