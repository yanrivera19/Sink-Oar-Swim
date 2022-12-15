import Game from "./scripts/game";

const mainContainer = document.querySelector(".main-container");
const canvas = document.getElementById("canvas");
canvas.width = 800;
canvas.height = 600;
const riverSound = new Audio("assets/audio/highflow-river.mp3");
const homePage = document.querySelector("#home-page");
const howToPage = document.querySelector("#how-to-page");
const playBtn = document.querySelector("#play-btn");
const howToBtn = document.querySelector("#how-to-btn");
const goBackBtn = document.querySelector("#go-back-btn");
const playAgainBtn = document.querySelector("#play-again-btn");
const goToHp = document.querySelector("#go-to-hp-btn");
const gameOverModal = document.querySelector("#game-over-modal");
const hpOptions = document.querySelector("#hp-options");
const loader = document.querySelector("#loader");
const bodyEle = document.querySelector("#body");
const muteBtn = document.querySelector("#mute");
const unmuteBtn = document.querySelector("#unmute");
let currentGame;

addEventListener("DOMContentLoaded", (e) => {
  document.getElementById("myVideo").play();
  bodyEle.style.backgroundImage = "url('assets/images/bg-img3.jpg')";
});

playBtn.addEventListener("click", (e) => {
  hpOptions.style.display = "none";
  loader.style.display = "flex";
  setTimeout(() => {
    homePage.style.display = "none";
    riverSound.pause();
    mainContainer.style.display = "flex";
    currentGame = new Game(canvas);
  }, 2000);
});

muteBtn.addEventListener("click", () => {
  muteBtn.style.display = "none";
  unmuteBtn.style.display = "flex";
  riverSound.pause();
});

unmuteBtn.addEventListener("click", () => {
  unmuteBtn.style.display = "none";
  muteBtn.style.display = "flex";
  riverSound.loop = true;
  riverSound.play();
});

howToBtn.addEventListener("click", (e) => {
  homePage.style.display = "none";
  howToPage.style.display = "flex";
});

goBackBtn.addEventListener("click", (e) => {
  howToPage.style.display = "none";
  homePage.style.display = "flex";
});

playAgainBtn.addEventListener("click", (e) => {
  gameOverModal.style.display = "none";
  currentGame = new Game(canvas);
});

goToHp.addEventListener("click", (e) => {
  homePage.style.display = "flex";
  hpOptions.style.display = "flex";
  loader.style.display = "none";
  muteBtn.style.display = "none";
  unmuteBtn.style.display = "flex";
  mainContainer.style.display = "none";
  gameOverModal.style.display = "none";
});
