class Guard {
  constructor(row, column, orientation) {
    this.row = row * gridSize;
    this.column = column * gridSize;
    this.orientation = orientation;
  }

  preload() {
    //
  }

  draw() {
    //
    if (this.orientation === "down") {
      image(guardFront, this.column, this.row, gridSize, gridSize);

      this.guardLight = {
        top: this.row,
        right: this.column + gridSize,
        left: this.column,
        bottom: this.row + gridSize * 3
      };
      // rect(this.row - gridSize, this.column + gridSize, gridSize, gridSize * 2);
    }
    if (this.orientation === "left") {
      image(guardLeft, this.column, this.row, gridSize, gridSize);

      this.guardLight = {
        top: this.row,
        right: this.column + gridSize,
        left: this.column - gridSize * 2,
        bottom: this.row + gridSize
      };
    }
    if (this.orientation === "right") {
      image(guardRight, this.column, this.row, gridSize, gridSize);

      this.guardLight = {
        top: this.row,
        right: this.column + gridSize * 3,
        left: this.column,
        bottom: this.row + gridSize
      };
    }
    if (this.orientation === "up") {
      image(guardBack, this.column, this.row, gridSize, gridSize);

      this.guardLight = {
        top: this.row - gridSize * 2,
        right: this.column + gridSize,
        left: this.column,
        bottom: this.row + gridSize
      };
    }

    //  if(this.img === guardFront)
  }
}
/* 
class Player {
  constructor(row, column) {
    this.row = row * gridSize;
    this.column = column * gridSize;
    this.orientation = "down";
  }

  preload() {
    //
  }

  draw() {
    //
    if (this.orientation === "down") {
      image(thiefFront, this.column, this.row, gridSize, gridSize);
    }
    if (this.orientation === "left") {
      image(thiefLeft, this.column, this.row, gridSize, gridSize);
    }
    if (this.orientation === "right") {
      image(thiefRight, this.column, this.row, gridSize, gridSize);
    }
    if (this.orientation === "up") {
      image(thiefBack, this.column, this.row, gridSize, gridSize);
    }
    // fill("red");
    // rect(this.row, this.column, gridSize, gridSize);
  }

  keyPressed() {
    // Going Left

    if (keyCode === LEFT_ARROW) {
      this.orientation = "left";

      let wallLeft =
        game.map[game.level][player1.row / gridSize][
          player1.column / gridSize - 1
        ];

      if (wallLeft === 1) return;
      this.column -= gridSize;

      if (this.column < 0) this.column = 0;
    }

    // Going Up

    if (keyCode === UP_ARROW) {
      this.orientation = "up";
      let wallUp =
        game.map[game.level][player1.row / gridSize - 1] &&
        game.map[game.level][player1.row / gridSize - 1][
          player1.column / gridSize
        ];
      if (wallUp === 1) return;

      this.row -= gridSize;
      if (this.row < 0) this.row = 0;
    }

    // Going Right

    if (keyCode === RIGHT_ARROW) {
      this.orientation = "right";

      let wallRight =
        game.map[game.level][player1.row / gridSize][
          player1.column / gridSize + 1
        ];

      if (wallRight === 1) return;

      this.column += gridSize;
      if (this.column > lastColumnCell) this.column = lastColumnCell;
    }

    // Going Down

    if (keyCode === DOWN_ARROW) {
      this.orientation = "down";
      let wallDown =
        game.map[game.level][player1.row / gridSize + 1] &&
        game.map[game.level][player1.row / gridSize + 1][
          player1.column / gridSize
        ];
      if (wallDown === 1) return;
      this.row += gridSize;
      if (this.row > lastRowCell) this.row = lastRowCell;
    }
  }
}
 */
/* 
class stillGuard extends Guard {
  constructor(column, row) {
    super(column, row);
  }
}
 */
/* 

-------------
Light - +2 grids, depending on direction.
if (guardFront) light is x++
if (guardLeft) light is y--
if(guardRight) light is y++
if (guardBack) light is x--

------------

Moving Guards constructor maybe takes steps

3 step guards
   3 steps forward, 1 step to the side, turn back, 3 steps fotward, 1 step to the side.

1 step guard
   1 step forward, 1 step to the side, turn back, 1 step to the side, repeat
----------------

Turning Guards ( 0 steps here)

   turn to thr right every second, maybe.

   ------

   Infinite Loop
*/
