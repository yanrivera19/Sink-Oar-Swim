export default class Rock {
	constructor(canvas, image, position) {
		this.velocity = 2;
		this.dimensions = {width: canvas.width, height: canvas.height};
		this.x = position.x;
		this.y = position.y;
		this.ctx = canvas.getContext("2d");	
		this.image = image;		
	}
	
	animate() {
		this.ctx.drawImage(this.image, this.x, this.y, 150, 120);
	}

}