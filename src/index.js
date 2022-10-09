import Game from "./scripts/game";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 700;
canvas.height = 500;
// const scoreHeader = document.createElement("h3")
// scoreHeader.innerHTML = "score"
// scoreHeader.style.color = "yellow"
// scoreHeader.style.zIndex = 1;
// canvas.appendChild(scoreHeader)
const game = new Game(canvas);
