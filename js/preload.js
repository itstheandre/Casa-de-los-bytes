let musicLoop;
let winningMusic;
let thiefFront;
let thiefLeft;
let thiefRight;
let thiefBack;
let guardFront;
let guardLeft;
let guardRight;
let guardBack;

function preload() {
  console.log("Something else");
  // theme song played throughout the videogame
  thiefLeft = loadImage("assets/personagens/thief-still-left.png");
  thiefFront = loadImage("assets/personagens/thief-still-front.png");
  musicLoop = loadSound("assets/theme_song/8bit_casa_de_papel.mp3");
  thiefRight = loadImage("assets/personagens/thief-still-right.png");
  thiefBack = loadImage("assets/personagens/thief-still-back.png");
  guardFront = loadImage("assets/personagens/guard-still-front.png");
  guardLeft = loadImage("assets/personagens/guard-still-left.png");
  guardRight = loadImage("assets/personagens/guard-still-right.png");
  guardBack = loadImage("assets/personagens/guard-still-back.png");
  this.img = guardFront;
}
