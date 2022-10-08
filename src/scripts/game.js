import Player from "./player";
import Bubble from "./bubble";
import Rock from "./rock";
import Turtle from "./turtle";
import DeadTree from "./dead-tree"; 
import GameView from "./game-view";

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
		console.log(waterImg)
		

		this.gameView.animate();
		
		this.player.animate();
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

}