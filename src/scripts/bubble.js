const bubbleImg = new Image();
bubbleImg.src = "./assets/images/water/bubble.png";

export default class Bubble {
  constructor(canvas, velocity, position) {
    this.velocity = velocity;
    this.dimensions = {width: canvas.width, height: canvas.height};
    this.x = position.x;
    this.y = position.y;
		this.left; 
		this.top;
		this.bottom;
		this.left;
    this.ctx = canvas.getContext("2d");	
    this.height = 50;
    this.width = 50;	
    this.radius = 25;	
    this.caught = false;
  }

  animate() {		
		this.top = this.y;
		this.right = this.x + this.width;
		this.bottom = this.y + this.height;
		this.left = this.x;
    this.ctx.drawImage(bubbleImg, this.x, this.y, this.width, this.height);
  }
}
