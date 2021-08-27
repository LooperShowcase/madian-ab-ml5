let player;
let playerImg;
let obstacleImg;
let bg;
let obs2;
let obstacles = [];

function preload() {
  playerImg = loadImage("player.png");
  obstacleImg = loadImage("obs2.png");
  bg = loadImage("background.jpg");
  let options = { probabilityThreshold: 0.85 };
  wordClassifier = ml5.soundClassifier("SpeechCommands18w", options);
}
function setup() {
  createCanvas(1100, 600);
  player = new Player();
  wordClassifier.classify(heardWord);
}

function heardWord(error, results) {
  if (results[0].label === "up") {
    player.jump();
  }
}

function keyPressed() {
  if (key === " ") {
    player.jump();
  }
}

function draw() {
  background(bg);
  if (random(1) < 0.01) {
    obstacles.push(new Obstacle());
  }

  for (let obs of obstacles) {
    obs.show();
    obs.move();
    if (player.collided(obs)) {
      console.log("Game over");
      noLoop();
    }
  }

  player.show();
  player.move();
}
