const game = new Game();
const player1 = new Player(10, 10);

function setup() {
  createCanvas(WIDTH, HEIGHT);
  background("red");
  // musicLoop.play();
}

function draw() {
  game.draw();
  player1.draw();
}
