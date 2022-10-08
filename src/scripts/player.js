import GameView from "./game-view";

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
	}

	drawPlayer(ctx) {		
		if (this.paddling) {
			ctx.drawImage(playerAltImg, this.position.horizontal, this.position.vertical, 150, 120);
		} else {
			ctx.drawImage(playerImg, this.position.horizontal, this.position.vertical, 150, 120);
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
		const boundes = this.bounds();
		if (this.position.horizontal < 0) {
			this.velocityL = 0;
		}

		if (this.position.horizontal + 150 > this.dimensions.width) {
			this.velocityR = 0;
		}
	}

	bounds() {
    return {
      left: this.position.horizontal + 50,
      right: this.position.horizontal + 100,
      top: this.position.vertical,
      bottom: this.position.vertical + 120
    };
	}
}

