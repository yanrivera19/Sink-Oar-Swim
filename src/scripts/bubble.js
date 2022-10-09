const bubbleImg = new Image();
bubbleImg.src = "./assets/images/water/bubble.png";

export default class Bubble {
	constructor(canvas, position) {
		this.velocity = 2;
		this.dimensions = {width: canvas.width, height: canvas.height};
		this.x = position.x;
		this.y = position.y;
		this.ctx = canvas.getContext("2d");	
		this.height = 50;
		this.width = 50;	
		this.radius = 25;	
		this.caught = false;
	}

	animate() {		
		this.ctx.drawImage(bubbleImg, this.x, this.y, this.width, this.height);
	}

	bounds() {
		return {
			top: this.y,
			right: this.x + this.width,
			bottom: this.y + this.height,
			left: this.x
		}
	}
}