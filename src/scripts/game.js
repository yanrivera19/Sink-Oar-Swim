import Player from "./player";
import Bubble from "./bubble";
import Rock from "./rock";
import Turtle from "./turtle";
import DeadTree from "./dead-tree"; 
import GameView from "./game-view";
import { distance } from "./utils";

const waterImg = new Image();
waterImg.src = "./assets/images/water/water.jpg";
const bubbleSound = new Audio("./assets/audio/bubble-sound2.mp3");
const mainContainer = document.querySelector(".main-container");
let playerStat = document.createElement("section");
let score = document.createElement("h3");
let lives = document.createElement("h3");


export default class Game {
	constructor(canvas) {
		this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.canvas = canvas;
		this.score = 0;
		this.lives = 3;
		this.paused = false;
		this.numOfPauses = 0;
		this.collisionOccured = false;
		this.listenForPauseEvent();
		this.eventListeners();
		playerStat.setAttribute("id", "player-stat-container");
		score.setAttribute("id", "score");
		lives.setAttribute("id", "lives");
		mainContainer.prepend(playerStat);
		playerStat.append(lives, score);
		this.gameOff = false;
		this.play(); 		
	}

	animate(ctx) {
		if (!this.gameOff) {
			ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
			this.gameView.animate();		
			this.renderScore();
			this.renderLives();
			this.player.animate();
			this.checkRockCollisions();
			this.checkBubbleCollisions(); 
			this.frameId = requestAnimationFrame(this.animate.bind(this, ctx));
		}		
	}

	play() {
		this.player = new Player(this.canvas);
		this.gameView = new GameView(canvas);
		this.playing = true;
		this.animate(this.ctx);
	}

	renderScore() {		
		score.innerHTML = `${this.score}`;		
	}

	renderLives() {		
		lives.innerHTML = `<i id="heart-icon" class="fa-solid fa-heart"></i>${this.lives}`;		
	}

	listenForPauseEvent() {
		addEventListener("keydown", (e) => {		
			if (e.code === "KeyP" && !this.gameOff) {
				this.numOfPauses++;

				if (this.numOfPauses < 3) this.togglePause();
			}
		})
	}

	restart() {
		this.gameOff = false;
		playerStat.remove();
		playerStat = document.createElement("section");
		lives = document.createElement("h3");
		score = document.createElement("h3");
		playerStat.setAttribute("id", "player-stat-container");
		lives.setAttribute("id", "lives");
		score.setAttribute("id", "score");
	}

	togglePause() {
		const modal = document.querySelector("#pause-modal-container");
		const countdown = document.querySelector("#countdown");
		const pauseHeader = document.querySelector("#pause-header");

		if (!this.paused) {
			this.paused = true;
			modal.style.display = "flex"
			countdown.innerHTML = "";
			cancelAnimationFrame(this.frameId);			
		} else {			
			let timeLeft = 3;
			pauseHeader.innerHTML = "Resume in:";
			const timer = setInterval(() => {
				if (timeLeft <= 0) {
					clearInterval(timer);
					pauseHeader.innerHTML = "Paused";
					this.numOfPauses = 0;
					this.paused = false;
					modal.style.display = "none";
					requestAnimationFrame(this.animate.bind(this, this.ctx));			
				}
				
				countdown.innerHTML = `${timeLeft}`;
				timeLeft--;
			}, 1000);
		}
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

	collided(obj1, obj2) {
		if (obj1.left > obj2.right || obj1.right < obj2.left) {
			return false;
		}

		if (obj1.top > obj2.bottom || obj1.bottom < obj2.top) {
			return false;
		}
	
		return true;
	}

	checkRockCollisions() {	
		let collisionOccuring = false;

		for (let rock of this.gameView.rocks) {
			if (this.collided(rock, this.player)) {
				collisionOccuring = true;
				if (this.lives > 0 && !this.collisionOccured) {
					this.lives--;
					this.collisionOccured = true;
					break;
				} else if (this.lives > 0 && this.collisionOccured) {
					break;
				} else {
					this.gameOff = true;
					const gameOverModal = document.querySelector("#game-over-modal");
					gameOverModal.style.display = "flex";	
					break;
				}			
				
			}	
		}	

		if (!collisionOccuring) {
			this.collisionOccured = false;
		}	
	}

	checkBubbleCollisions() {
		this.gameView.bubbles.forEach((bubble, idx) => {
			if (this.collided(bubble, this.player)) {
				bubbleSound.play();
				this.score++;
				this.gameView.bubbles[idx].caught = true;
			}		
		})
	}
}