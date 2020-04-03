class Bomb {
  constructor(row, col, bombRad) {
    this.col = col;
    this.row = row;
    this.bombRad = bombRad;
  }
  setup() {
    bomb = loadImage("assets/bomb.png");
  }

  draw() {
    image(bomb, this.col * 50 + 12.5, this.row * 50 + 17.5, 25, 25);
  }
  checkPlayer(y, x) {
    if (game.player.col === x && game.player.row === y) {
      game.player.health -= 1;
    }
    if (game.player1.col === x && game.player1.row === y) {
      game.player1.health -= 1;
    }
  }
  explosion() {
    setTimeout(() => {
      //right direction explosion
      for (let i = this.col; i <= this.col + this.bombRad; i++) {
        if (game.gameBoard[this.row][i] === 1) {
          break;
        } else if (game.gameBoard[this.row][i] === 2) {
          game.gameBoard[this.row][i] = 3;
          setTimeout(() => (game.gameBoard[this.row][this.col + 1] = 4), 500);
        } else {
          game.gameBoard[this.row][i] = 3;
          setTimeout(() => (game.gameBoard[this.row][i] = 4), 500);
        }
        this.checkPlayer(this.row, i);
      }
      //left direction explosion
      for (let i = this.col - 1; i >= this.col - this.bombRad; i--) {
        if (game.gameBoard[this.row][i] === 1) {
          break;
        } else if (game.gameBoard[this.row][i] === 2) {
          game.gameBoard[this.row][i] = 3;
          setTimeout(() => (game.gameBoard[this.row][this.col - 1] = 4), 500);
        } else {
          game.gameBoard[this.row][i] = 3;
          setTimeout(() => (game.gameBoard[this.row][i] = 4), 500);
        }
        this.checkPlayer(this.row, i);
      }
      //down direction explosion
      for (let j = this.row + 1; j <= this.row + this.bombRad; j++) {
        if (game.gameBoard[j][this.col] === 1) {
          break;
        } else if (game.gameBoard[j][this.col] === 2) {
          game.gameBoard[j][this.col] = 3;
          setTimeout(() => (game.gameBoard[j][this.col] = 4), 500);
        } else {
          // console.log(j, this.col, game.gameBoard[j][this.col]);
          game.gameBoard[j][this.col] = 4;

          setTimeout(() => (game.gameBoard[j][this.col] = 4), 500);
        }
        this.checkPlayer(j, this.col);
      }
      //up direction explosion
      for (let j = this.row - 1; j >= this.row - this.bombRad; j--) {
        if (game.gameBoard[j][this.col] === 1) {
          break;
        } else if (game.gameBoard[j][this.col] === 2) {
          game.gameBoard[j][this.col] = 3;
          setTimeout(() => (game.gameBoard[j][this.col] = 4), 500);
        } else {
          game.gameBoard[j][this.col] = 3;
          setTimeout(() => (game.gameBoard[j][this.col] = 4), 500);
        }
        this.checkPlayer(j, this.col);
      }

      game.player.bombArray.pop();
      game.player1.bombArray.pop();
    }, 2000);
  }
}
