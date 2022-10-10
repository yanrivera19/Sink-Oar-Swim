export default class Rock {
	constructor(canvas, image, position) {
		this.velocity = 2;
		this.dimensions = {width: canvas.width, height: canvas.height};
		this.x = position.x;
		this.y = position.y;
		this.left; 
		this.top;
		this.bottom;
		this.left;
		this.ctx = canvas.getContext("2d");	
		this.image = image;
		this.height = 120;
		this.width = 120;		
	}
	
	animate() {
		this.top = this.y + 10;
		this.right = this.x + this.width - 15;
		this.bottom = this.y + this.height - 10;
		this.left = this.x + 15;
		this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
	}
}