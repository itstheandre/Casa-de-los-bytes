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
let basementFloor;
let firstFloor;
let rooftopFloor;
let gameOverImg;
let floorArr;

function preload() {
  console.log("Something else");
  // theme song played throughout the videogame
  thiefLeft = loadImage("assets/characters/thief-still-left.png");
  thiefFront = loadImage("assets/characters/thief-still-front.png");
  musicLoop = loadSound("assets/theme_song/8bit_casa_de_papel.mp3");
  thiefRight = loadImage("assets/characters/thief-still-right.png");
  thiefBack = loadImage("assets/characters/thief-still-back.png");
  guardFront = loadImage("assets/characters/light_guard/guard-front-light.png");
  guardLeft = loadImage("assets/characters/light_guard/guard-left-light.png");
  guardRight = loadImage("assets/characters/light_guard/guard-right-light.png");
  guardBack = loadImage("assets/characters/light_guard/guard-back-light.png");
  basementFloor = loadImage("assets/level_design/basement.png");
  firstFloor = loadImage("assets/level_design/first_floor.png");
  rooftopFloor = loadImage("assets/level_design/roof.png");
  gameOverImg = loadImage("assets/level_design/game_over.png");
}
