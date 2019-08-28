const game = new Game();
let startGame = false;

function setup() {
  createCanvas(WIDTH, HEIGHT);
  // background("red");
  if (startGame) musicLoop.play();
}

function draw() {
  if (startGame) {
    game.setup();
    game.draw();
  }
  /* 
  if (game.level === 1) {
    player2.draw();
    guard9.draw();
    guard10.draw();
    guard11.draw();
    guard12.draw();
    guard13.draw();
    guard14.draw();
    guard15.draw();
    guard16.draw();
    guard17.draw();
    guard18.draw();
  } */
}

function keyPressed() {
  game.player.keyPressed();
}
