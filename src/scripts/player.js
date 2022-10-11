const playerImg = new Image();
playerImg.src = "./assets/images/player.png";
const playerAltImg = new Image();
playerAltImg.src = "./assets/images/player-alt.png";


export default class Player {
	constructor(canvas) {
		this.velocityL = 0;
		this.velocityR = 0;
		this.paddling = false;
		this.dimensions = {width: canvas.width, height: canvas.height};
		this.position = {vertical: this.dimensions.height / 2 + 100, horizontal: this.dimensions.width / 2 - 65 };
		this.ctx = canvas.getContext("2d");
		this.left; 
		this.top;
		this.bottom;
		this.left;
		this.width = 140;
		this.height = 140;
	}

	drawPlayer(ctx) {		
		if (this.paddling) {
			ctx.drawImage(playerAltImg, this.position.horizontal, this.position.vertical, this.width, this.height);
		} else {
			ctx.drawImage(playerImg, this.position.horizontal, this.position.vertical, this.width, this.height);
		}
	}

	animate() {
		this.move();
		this.drawPlayer(this.ctx);
	}

	move() {
		this.checkBoundaries();
		this.position.horizontal += this.velocityL;
		this.position.horizontal += this.velocityR;
	}

	checkBoundaries() {
		this.left = this.position.horizontal + 60;
		this.right = this.position.horizontal + 90;
		this.top = this.position.vertical + 10;
		this.bottom = this.position.vertical + 110;

		if (this.position.horizontal < 0) {
			this.velocityL = 0;
		}

		if (this.position.horizontal + 150 > this.dimensions.width) {
			this.velocityR = 0;
		}
	}
}
