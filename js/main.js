const game = new Game();
let startGame = false;

function setup() {
  createCanvas(WIDTH, HEIGHT);
  if (startGame) musicLoop.play();
}

function draw() {
  if (startGame) {
    game.setup();
    game.draw();
  }
}

function keyPressed() {
  game.player.keyPressed();
}
