export default class Rock {
	constructor(canvas, image, position) {
		this.velocity = 2;
		this.dimensions = {width: canvas.width, height: canvas.height};
		this.x = position.x;
		this.y = position.y;
		this.ctx = canvas.getContext("2d");	
		this.image = image;
		this.height = 120;
		this.width = 120;		
		// this.bounds = this.bounds();
	}
	
	animate() {
		this.bounds();
		this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
	}

	bounds() {
		return {
			top: this.y + 10,
			right: this.x + this.width - 15,
			bottom: this.y + this.height - 10,
			left: this.x + 15
		}
	}

}