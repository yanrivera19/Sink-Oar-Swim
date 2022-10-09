const waterImg = new Image();
waterImg.src = "./assets/images/water/water.jpg"


export default class River {
	constructor(canvas, position) {
		this.velocity = 2;
		this.dimensions = {width: canvas.width, height: canvas.height};
		this.x = position.x;
		this.y = position.y;
		this.ctx = canvas.getContext("2d");	
		// this.bounds = this.bounds();
	}
	
	animate() {
		// this.bounds();
		this.ctx.drawImage(waterImg, this.x, this.y, this.dimensions.width, this.dimensions.height);
	}

	// bounds() {
	// 	return {
	// 		top: this.y + 10,
	// 		right: this.x + this.width - 15,
	// 		bottom: this.y + this.height - 10,
	// 		left: this.x + 15
	// 	}
	// }

}