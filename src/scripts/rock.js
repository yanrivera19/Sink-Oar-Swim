export default class Rock {
	constructor(canvas, velocity, image, position) {
		this.velocity = velocity;
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
		this.top = this.y + 15;
		this.right = this.x + this.width - 20;
		this.bottom = this.y + this.height - 15;
		this.left = this.x + 20;
		this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
	}
}