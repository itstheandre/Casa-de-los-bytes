const game = new Game();

/* 
const guard1 = new Guard(7, 3, "up");
const guard2 = new Guard(7, 8, "up");
const guard3 = new Guard(4, 9, "down");
const guard4 = new Guard(3, 4, "left");
const guard5 = new Guard(1, 0, "down");
const guard6 = new Guard(1, 3, "left");
const guard7 = new Guard(2, 6, "up");
const guard8 = new Guard(1, 9, "down"); */

//
/* const player2 = new Player(9, 9);
const guard9 = new Guard(6, 9, "up");
const guard10 = new Guard(7, 8, "up");
const guard11 = new Guard(4, 9, "down");
const guard12 = new Guard(3, 4, "left");
const guard13 = new Guard(1, 0, "down");
const guard14 = new Guard(1, 3, "left");
const guard15 = new Guard(2, 6, "up");
const guard16 = new Guard(1, 9, "down");
const guard17 = new Guard(1, 9, "down");
const guard18 = new Guard(1, 9, "down");
 */
function setup() {
  createCanvas(WIDTH, HEIGHT);
  background("red");
  // musicLoop.play();
}

function draw() {
  game.draw();
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
  player1.keyPressed();
}
