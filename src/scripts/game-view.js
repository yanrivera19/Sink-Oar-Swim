import Rock from "./rock";
import Bubble from "./bubble";
import River from "./river";
import { randomNumFromRange, randomItemFromList } from "./utils";

const rockImg1 = new Image();
rockImg1.src = "./assets/images/solids/rock1.png";
const rockImg2 = new Image();
rockImg2.src = "./assets/images/solids/rock2.png";
const rockImg3 = new Image();
rockImg3.src = "./assets/images/solids/rock2.png";
const rockImages = [rockImg1, rockImg2, rockImg3];
const waterImg = new Image();
waterImg.src = "./assets/images/water/water.jpg";
const waterImg2 = new Image();
waterImg2.src = "./assets/images/water/image.png";

export default class GameView {
	constructor(canvas) {
		this.rockBubbleVelo = 3;
		this.riverVelo = 2;
		this.dimensions = {width: canvas.width, height: canvas.height};
		this.rivers = [];
		this.riverInit(canvas)
		this.rocks = []
		this.rockInit(canvas, rockImages, this.rockPositions);
		this.bubbles = [];
		this.velocityTracker = 2;
		this.bubbleInit(canvas, this.bubblePositions);
	}

	rockInit(canvas, images, position) {
		for (let i = 0; i < 3; i++) {
			this.rocks.push(new Rock(canvas, this.rockBubbleVelo, randomItemFromList(images), position()[i]));
		}				
	}

	bubbleInit(canvas, position) {
		for (let i = 0; i < 4; i++) {
			this.bubbles.push(new Bubble(canvas, this.rockBubbleVelo, position()[i]));
		}		
	}

	riverInit(canvas) {
		this.rivers.push(new River(canvas, this.riverVelo, waterImg, {x: 0, y: 0}));
		this.rivers.push(new River(canvas, this.riverVelo, waterImg2, {x: 0, y: -(this.dimensions.height)}));
	}

	animate() {		
		this.moveRiver();
		this.moveRocks();
		this.moveBubbles();

		this.rivers.forEach((river) => {
			river.animate();			
		})	
		
		this.rocks.forEach((rock) => {
			rock.animate();			
		})		
		this.bubbles.forEach((bubble) => {
			bubble.animate();			
		})	
	}

	moveRiver() {
		this.rivers.forEach((river) => {
			river.y += river.velocity;			
		})

		if (this.rivers[0].y >= 600 - (this.riverVelo + this.velocityTracker)) {
			let image;
			
			if (this.rivers[0].image === waterImg) {
				image = waterImg;
			} else {
				image = waterImg2;
			}

			this.rivers.shift();
			this.rivers.push(new River(canvas, this.riverVelo, image, {x: 0, y: -(this.dimensions.height)}));
		}		
	}

	moveRocks() {
		this.rocks.forEach((rock) => {
			rock.y += rock.velocity;			
		})

		if (this.rocks[0].y >= 600) {
			this.rocks.shift();
			this.rocks.push(new Rock(canvas, this.rockBubbleVelo, randomItemFromList(rockImages), {x: randomNumFromRange(10, this.dimensions.width - 120), y: -150}));
		}		
	}

	moveBubbles() {
		this.bubbles.forEach((bubble, idx) => {
			if (bubble.caught) {
				this.bubbles.splice(idx, 1);
				this.bubbles.push(new Bubble(canvas, this.rockBubbleVelo, {x: randomNumFromRange(10, this.dimensions.width - 120), y: -200}));
			}

			bubble.y += bubble.velocity;	
		})

		if (this.bubbles[0].y >= 600) {
			this.bubbles.shift();
			this.bubbles.push(new Bubble(canvas, this.rockBubbleVelo, {x: randomNumFromRange(10, this.dimensions.width - 120), y: -150}));
		}		
	}

	increaseVelocities(listOfObjects) {
		this.riverVelo += this.velocityTracker;
		this.rockBubbleVelo += this.velocityTracker
		for (let objects of listOfObjects) {
			for (let object of objects) {
				if (object instanceof River) {
					object.velocity = this.riverVelo;
				} else {
					object.velocity = this.rockBubbleVelo;
				}
			}
		}
	}

	decreaseVelocities(listOfObjects) {
		this.riverVelo = 2;
		this.rockBubbleVelo = 3;
		this.velocityTracker += 2;
		for (let objects of listOfObjects) {
			for (let object of objects) {
				if (object instanceof River) {
					object.velocity = this.riverVelo;
				} else {
					object.velocity = this.rockBubbleVelo;
				}
			}
		}
	}

	rockPositions() {
		return [
			{x: 100, y: -100},
			{x: 300, y: -300},
			{x: 500, y: -500}
		]
	}

	bubblePositions() {
		return [
			{x: 200, y: -100},
			{x: 250, y: -150},
			{x: 130, y: -200},
			{x: 310, y: -270}
		]
	}

}