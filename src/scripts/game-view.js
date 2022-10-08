import Rock from "./rock";

const rockImg1 = new Image();
rockImg1.src = "./assets/images/solids/rock1.png";
const rockImg2 = new Image();
rockImg2.src = "./assets/images/solids/rock2.png";
const rockImg3 = new Image();
rockImg3.src = "./assets/images/solids/rock3.png";
const rocks = [rockImg1, rockImg2, rockImg3];


export default class GameView {
	constructor(canvas) {
		this.dimensions = {width: canvas.width, height: canvas.height};
		this.rocks = [new Rock(canvas, rocks[Math.floor(Math.random() * rocks.length)], this.rockPositions()[0]), 
		new Rock(canvas, rocks[Math.floor(Math.random()*rocks.length)], this.rockPositions()[1]), 
		new Rock(canvas, rocks[Math.floor(Math.random()*rocks.length)], this.rockPositions()[2])];
		this.objects = [this.rocks]		
	}

	animate() {
		this.moveObjects();
		this.rocks.forEach((rock) => {
			rock.animate();			
		})		
	}

	moveObjects() {
		this.objects[0].forEach((rock) => {
			rock.y += 2;			
		})

		if (this.objects[0][0].y >= 490) {
			this.rocks.shift();
			this.rocks.push(new Rock(canvas, rocks[Math.floor(Math.random() * rocks.length)], this.rockPositions()[Math.floor(Math.random() * 2)]));
		}		
	}

	rockPositions() {
		const rockPos = [
			{x: 100, y: -100},
			{x: 300, y: -300},
			{x: 500, y: -500}
		]
		return rockPos;
	}

}