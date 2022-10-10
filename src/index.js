import Game from "./scripts/game";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 700;
canvas.height = 500;
const game = new Game(canvas);
