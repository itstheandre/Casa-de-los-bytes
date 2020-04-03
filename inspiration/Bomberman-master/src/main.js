const game = new Game();

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  frameRate(60);
  canvas.parent("canvas");

  game.setup();
}
function preload() {
  defaultDown = loadImage("assets/DownDefault.png");
  bomb = loadImage("assets/bomb.png");
  defaultDownPlayer1 = loadImage("assets/DownDefaultPlayer1.png");
  obstacle = loadImage("assets/Obstacle.png");
  floor = loadImage("assets/Floor.png");
  brick = loadImage("assets/Brick.png");
  hit = loadImage("assets/Hit.png");
  gameOver = loadImage("assets/GameOver.png");
  pressEnter = loadImage("assets/PressEnterToStart.png");
  walkUp = loadImage("assets/UpDefault.png");
  right = loadImage("assets/RightWalkDefault.png");
  left = loadImage("assets/WalkLeftDefault.png");
  hit1 = loadImage("assets/Hit1.png");
}

function draw() {
  if (game.startScreen === 0) {
    clear();
    image(pressEnter, 145, 205, 470, 12);
  }
  if (game.startScreen === 1) {
    clear();
    game.gameBoardArr();
  }
}

function keyPressed() {
  game.player.keyPressed();
  game.player1.keyPressed();
  game.keyPressed();
}

window.addEventListener(
  "keydown",
  function(e) {
    // space and arrow keys
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
    }
  },
  false
);
