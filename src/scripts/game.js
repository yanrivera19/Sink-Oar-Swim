import Player from "./player";
import Bubble from "./bubble";
import RedCross from "./red-cross";
import GameView from "./game-view";

const bubbleSound = new Audio("./assets/audio/bubble-sound2.mp3");
const getLifeSound = new Audio("./assets/audio/collect-life.mp3");
const oughSound = new Audio("./assets/audio/ough.mp3");
const wohoSound = new Audio("./assets/audio/woho.mp3");
const bgMusic = new Audio("assets/audio/nobm.mp3");
const gameOverSound = new Audio("assets/audio/game-over.mp3");
let playerStat = document.querySelector("#player-stat-container");
let score = document.createElement("h3");
let lives = document.createElement("h3");
let mute = document.createElement("button");
mute.innerHTML = "<i id='mute-game' class='fa-solid fa-volume-xmark'></i>"
let unmute = document.createElement("button");
unmute.innerHTML = "<i id='unmute-game' class='fa-solid fa-volume-high'></i>"
unmute.style.display = "none";
const alertContainer = document.querySelector("#alert-msg-container");
const redAlert = document.querySelector("#alert");
const alertMessage = document.querySelector("#alert-message");

export default class Game {
	constructor(canvas) {
		this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.canvas = canvas;
		this.score = 0;
		this.lives = 3;
		this.paused = false;
		this.muted = false;
		this.numOfPauses = 0;
		this.timeCounter = 0;
		this.fastRiverFlowTime = 0;
		this.bubbleValue = 1;
		this.secondsLeftBeforeSpeedIncrease = 300;
		this.collisionOccured = false;
		this.listenForPauseEvent();
		this.eventListeners();
		score.setAttribute("id", "score");
		lives.setAttribute("id", "lives");
		playerStat.append(lives, score, mute, unmute);
		this.gameOff = false;
		this.play();
	}

	animate(ctx) {
		if (!this.gameOff) {
			ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
			this.gameView.animate();
			if (this.bubbleValue >= 2) this.gameView.animateRedCross();		
			this.renderScore();
			this.renderLives();
			this.player.animate();
			this.checkRockCollisions();
			this.checkCatchableCollisions(); 
			if (!this.paused && this.timeCounter < 1800 && this.fastRiverFlowTime === 0) this.timeCounter++;
			if (!this.paused && this.timeCounter >= 1500 && this.fastRiverFlowTime === 0) {
				alertContainer.style.display = "flex";
				redAlert.innerHTML = "ALERT!";
				alertMessage.innerHTML = "Stream speed will increase soon"
				this.secondsLeftBeforeSpeedIncrease--;
			}
			if (this.timeCounter >= 1800 && !this.gameOff && this.fastRiverFlowTime === 0) {
				this.timeCounter = 0;
				this.increaseVelocity();
			}
			if (!this.paused && this.fastRiverFlowTime < 900 && this.timeCounter === 0) this.fastRiverFlowTime++;	
			if (!this.paused && this.fastRiverFlowTime >= 900 && this.timeCounter === 0) {
				this.fastRiverFlowTime = 0;
				this.decreaseVelocity();
			}
			if (this.bubbleValue >= 2 && this.timeCounter === 0 && this.fastRiverFlowTime === 0) this.gameView.redCrossInit();
			this.frameId = requestAnimationFrame(this.animate.bind(this, ctx));
		}		
	}

	play() {
		this.player = new Player(this.canvas);
		this.gameView = new GameView(canvas);
		this.playing = true;
		this.animate(this.ctx);
		setTimeout(() => {
			bgMusic.volume = 0.2;
			bgMusic.loop = true;
			bgMusic.play();			
		}, 500);
	}

	renderScore() {		
		score.innerHTML = `${this.score}`;		
	}

	renderLives() {		
		lives.innerHTML = `<i id="heart-icon" class="fa-solid fa-heart"></i>${this.lives}`;		
	}

	listenForPauseEvent() {
		addEventListener("keydown", (e) => {		
			if (e.code === "Space" && !this.gameOff) {
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
			bgMusic.pause();
			this.paused = true;
			modal.style.display = "flex"
			countdown.innerHTML = "";
			cancelAnimationFrame(this.frameId);			
		} else {			
			bgMusic.volume = 0.2;
			bgMusic.loop = true;
			bgMusic.play();
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

	increaseVelocity() {
		alertContainer.style.display = "none";	
		this.secondsLeftBeforeSpeedIncrease = 300;
		this.bubbleValue++;
		wohoSound.play();
		this.gameView.increaseVelocities([this.gameView.rocks, this.gameView.catchables, this.gameView.rivers]);
	}

	decreaseVelocity() {
		this.gameView.decreaseVelocities([this.gameView.rocks, this.gameView.catchables, this.gameView.rivers])
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
		
		addEventListener("keydown", (e) => {		
			if (e.code === "KeyM" && !this.gameOff) {
				if (this.muted === false) {
					this.muted = true;
					mute.style.display = "none";
					unmute.style.display = "flex";
					bgMusic.pause();
				} else {
					this.muted = false;
					unmute.style.display = "none";
					mute.style.display = "flex";
					bgMusic.volume = 0.2;
					bgMusic.loop = true;
					bgMusic.play();
				}
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
					if (this.lives > 1) oughSound.play();
					this.lives--;
					this.collisionOccured = true;
					break;
				} else if (this.lives > 0 && this.collisionOccured) {
					break;
				} else {
					bgMusic.pause();
					this.gameOff = true;
					const gameOverModal = document.querySelector("#game-over-modal");
					gameOverModal.style.display = "flex";	
					gameOverSound.play();
					break;
				}							
			}	
		}	

		if (!collisionOccuring) {
			this.collisionOccured = false;
		}	
	}

	checkCatchableCollisions() {
		this.gameView.catchables.forEach((catchable, idx) => {
			if (this.collided(catchable, this.player)) {
				if (catchable instanceof Bubble) {
					bubbleSound.play();
					this.gameView.catchables[idx].caught = true;
					this.score += this.bubbleValue;
				}	else if (catchable instanceof RedCross) {
					getLifeSound.play();
					this.gameView.catchables[idx].caught = true;
					this.lives++;
				}	
			}
		})
	}
}