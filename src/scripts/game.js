import Player from "./player";
import Bubble from "./bubble";
import Rock from "./rock";
import Turtle from "./turtle";
import DeadTree from "./dead-tree"; 
import GameView from "./game-view";
import { distance } from "./utils";

const waterImg = new Image();
waterImg.src = "./assets/images/water/water.jpg"


export default class Game {
	constructor(canvas) {
		this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.canvas = canvas;
		this.play(); 
		this.eventListeners();
	}

	animate(ctx) {
		ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
		this.gameView.animate();		
		this.player.animate();
		this.checkRockCollisions();
		this.checkBubbleCollisions(); 
		requestAnimationFrame(this.animate.bind(this, ctx));
	}

	play() {
		this.player = new Player(this.canvas);
		this.gameView = new GameView(canvas);
		this.playing = true;
		this.animate(this.ctx);
	}

	eventListeners() {
		addEventListener("keydown", (e) => {		
			if (e.code === "ArrowLeft") {
				this.player.velocityL = -3;
				this.player.paddling = true;
			}

			if (e.code === "ArrowRight") {
				this.player.velocityR = 3;
				this.player.paddling = true;
			} 
		})
		
		addEventListener("keyup", (e) => {
			if (e.code === "ArrowLeft") {
				this.player.velocityL = 0;
				this.player.paddling = false;
			} 
			if (e.code === "ArrowRight") {
				this.player.velocityR = 0;
				this.player.paddling = false;

			}			
		})
	}

	checkRockCollisions() {
		this.gameView.rocks.forEach((rock) => {
			if (this.player.bounds().left < rock.bounds().right && this.player.bounds().top < rock.bounds().bottom && 
			distance(this.player.bounds().left, this.player.bounds().top, rock.bounds().right, rock.bounds().bottom) < 
				((this.player.width / 2) + (rock.width / 2))) {
				alert("collision");
			}
			if (this.player.bounds().right > rock.bounds().left && this.player.bounds().top < rock.bounds().bottom && 
			distance(this.player.bounds().right, this.player.bounds().top, rock.bounds().left, rock.bounds().bottom) < 
				((this.player.width / 2) + (rock.width / 2))) {
				alert("collision");
			}

			if (this.player.bounds().left < rock.bounds().right && this.player.bounds().bottom > rock.bounds().top && 
			distance(this.player.bounds().left, this.player.bounds().bottom, rock.bounds().right, rock.bounds().top) < 
				((this.player.width / 2) + (rock.width / 2))) {
				alert("collision");
			}

			if (this.player.bounds().right > rock.bounds().left && this.player.bounds().bottom > rock.bounds().top && 
			distance(this.player.bounds().right, this.player.bounds().bottom, rock.bounds().left, rock.bounds().top) < 
				((this.player.width / 2) + (rock.width / 2))) {
				alert("collision");
			}
		})
	}

	checkBubbleCollisions() {
		this.gameView.bubbles.forEach((bubble, idx) => {
			if (this.player.bounds().left < bubble.bounds().right && this.player.bounds().top < bubble.bounds().bottom && 
			distance(this.player.bounds().left, this.player.bounds().top, bubble.bounds().right, bubble.bounds().bottom) < 
				((this.player.width / 2) + (bubble.radius))) {
				this.player.score++;
				this.gameView.bubbles[idx].caught = true;
			}

			if (this.player.bounds().right > bubble.bounds().left && this.player.bounds().top < bubble.bounds().bottom && 
			distance(this.player.bounds().right, this.player.bounds().top, bubble.bounds().left, bubble.bounds().bottom) < 
				((this.player.width / 2) + (bubble.radius))) {
				this.player.score++;
				this.gameView.bubbles[idx].caught = true;
			}

			if (this.player.bounds().left < bubble.bounds().right && this.player.bounds().bottom > bubble.bounds().top && 
			distance(this.player.bounds().left, this.player.bounds().bottom, bubble.bounds().right, bubble.bounds().top) < 
				((this.player.width / 2) + (bubble.radius))) {
				this.player.score++;
				this.gameView.bubbles[idx].caught = true;
			}

			if (this.player.bounds().right > bubble.bounds().left && this.player.bounds().bottom > bubble.bounds().top && 
			distance(this.player.bounds().right, this.player.bounds().bottom, bubble.bounds().left, bubble.bounds().top) < 
				((this.player.width / 2) + (bubble.radius))) {
				this.player.score++;
				this.gameView.bubbles[idx].caught = true;
			}
		})
	}

}