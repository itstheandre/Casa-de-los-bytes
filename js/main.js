const game = new Game();
let startGame = false;

function setup() {
  createCanvas(WIDTH, HEIGHT);
  initGame();
  musicLoop.play();
}

function draw() {
  if (startGame) {
    game.setup();
    game.draw();
  }
}

function keyPressed() {
  if (game.level !== 4) game.player.keyPressed();
}
