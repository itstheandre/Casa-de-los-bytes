class Game {
  constructor() {
    this.player = new Player(1, 1);
    this.player1 = new Player1(9, 13);
    this.startScreen = 0;
    this.gameBoard = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 1],
      [1, 4, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 4, 1],
      [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
      [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1],
      [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
      [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1],
      [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
      [1, 4, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 4, 1],
      [1, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];
  }

  setup() {
    obstacle = loadImage("assets/Obstacle.png");
    floor = loadImage("assets/Floor.png");
    brick = loadImage("assets/Brick.png");
    gameOver = loadImage("assets/GameOver.png");

    this.player1.setup();
    this.player.setup();
  }
  gameOver() {
    image(gameOver, 145, 105, 470, 125);
    noLoop();
    setInterval(() => location.reload(), 1000);
  }
  gameOver1() {
    image(gameOver, 145, 205, 470, 12);
    noLoop();
    setInterval(() => location.reload(), 1000);
  }

  keyPressed() {
    if (keyCode === 13) {
      this.startScreen = 1;
    }
  }
  gameBoardArr() {
    this.gameBoard.forEach((x, indX) =>
      x.forEach((y, indY) => {
        //SPAWNAREA
        if (this.gameBoard[indX][indY] === 0) {
          image(floor, indY * 50, indX * 50, 50, 50);
        }
        //Border
        if (this.gameBoard[indX][indY] === 1) {
          image(obstacle, indY * 50, indX * 50, 50, 50);
        }
        //Brick
        if (this.gameBoard[indX][indY] === 2) {
          image(brick, indY * 50, indX * 50, 50, 50);
        }
        //EXPLOSION
        if (this.gameBoard[indX][indY] === 3) {
          fill(255, 0, 0);
          rect(indY * 50, indX * 50, 50, 50);
        }
        //AFTER EXPLOSION
        if (this.gameBoard[indX][indY] === 4) {
          image(floor, indY * 50, indX * 50, 50, 50);
        }
        //PLAYERSPAWN
        if (
          this.gameBoard[indX][indY] === 5 ||
          this.gameBoard[indX][indY] === 6 ||
          this.gameBoard[indX][indY] === 7 ||
          this.gameBoard[indX][indY] === 8
        ) {
          fill(34, 139, 34);
          rect(indY * 50, indX * 50, 50, 50);
        }
      })
    );
    this.player1.draw();
    this.player.draw();
  }
}
