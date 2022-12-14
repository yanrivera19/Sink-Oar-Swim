const playerImg = new Image();
playerImg.src = "./assets/images/player.png";
const playerAltImg = new Image();
playerAltImg.src = "./assets/images/player-alt.png";
const hurtPlayerImg = new Image();
hurtPlayerImg.src = "./assets/images/hurt-player.png";
const hurtPlayerAltImg = new Image();
hurtPlayerAltImg.src = "./assets/images/hurt-player-alt.png";

export default class Player {
	constructor(canvas) {
		this.velocityL = 0;
		this.velocityR = 0;
		this.paddling = false;
		this.dimensions = {width: canvas.width, height: canvas.height};
		this.position = {vertical: this.dimensions.height / 2 + 150, horizontal: this.dimensions.width / 2 - 65 };
		this.ctx = canvas.getContext("2d");
		this.left; 
		this.top;
		this.bottom;
		this.left;
		this.width = 140;
		this.height = 120;
		this.image;
		this.hurt = false;
	}

	determineImage() {
		if (this.paddling && !this.hurt) {
			this.image = playerAltImg;
		} else if (!this.paddling && !this.hurt) {
			this.image = playerImg;
		} else if (this.paddling && this.hurt) {
			this.image = hurtPlayerAltImg;
		} else {
			this.image = hurtPlayerImg;
		}
	}

	drawPlayer(ctx) {		
		this.determineImage();

		ctx.drawImage(this.image, this.position.horizontal, this.position.vertical, this.width, this.height);
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
		this.top = this.position.vertical + 15;
		this.bottom = this.position.vertical + 105;

		if (this.position.horizontal < 0) {
			this.velocityL = 0;
		}

		if (this.position.horizontal + 140 > this.dimensions.width) {
			this.velocityR = 0;
		}
	}
}
