import Game from "./scripts/game";

const mainContainer = document.querySelector(".main-container");
const canvas = document.getElementById("canvas");
canvas.width = 700;
canvas.height = 500;
const homePage = document.querySelector("#home-page");
const playBtn = document.querySelector("#play-btn");
const playAgainBtn = document.querySelector("#play-again-btn");
const goToHp = document.querySelector("#go-to-hp-btn");
const gameOverModal = document.querySelector("#game-over-modal");
let currentGame;

playBtn.addEventListener("click", (e) => {
	homePage.style.display = "none";
	mainContainer.style.display = "flex";
	currentGame = new Game(canvas);
});

playAgainBtn.addEventListener("click", (e) => {
	gameOverModal.style.display = "none";
	currentGame = new Game(canvas);
})

goToHp.addEventListener("click", (e) => {
	homePage.style.display = "flex";
	mainContainer.style.display = "none";
	gameOverModal.style.display = "none";
})


