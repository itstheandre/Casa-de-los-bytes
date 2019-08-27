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

    if (game.map[game.level][this.row / gridSize][this.column / gridSize] === 2)
      game.newLevel();
    // fill("red");
    // rect(this.row, this.column, gridSize, gridSize);
  }

  keyPressed() {
    // Going Left

    if (keyCode === LEFT_ARROW) {
      this.orientation = "left";

      let wallLeft =
        game.map[game.level][this.row / gridSize][this.column / gridSize - 1];

      if (wallLeft === 1) return;
      this.column -= gridSize;

      if (this.column < 0) this.column = 0;
    }

    // Going Up

    if (keyCode === UP_ARROW) {
      this.orientation = "up";
      let wallUp =
        game.map[game.level][this.row / gridSize - 1] &&
        game.map[game.level][this.row / gridSize - 1][this.column / gridSize];
      if (wallUp === 1) return;

      this.row -= gridSize;
      if (this.row < 0) this.row = 0;
    }

    // Going Right

    if (keyCode === RIGHT_ARROW) {
      this.orientation = "right";

      let wallRight =
        game.map[game.level][this.row / gridSize][this.column / gridSize + 1];

      if (wallRight === 1) return;

      this.column += gridSize;
      if (this.column > lastColumnCell) this.column = lastColumnCell;
    }

    // Going Down

    if (keyCode === DOWN_ARROW) {
      this.orientation = "down";
      let wallDown =
        game.map[game.level][this.row / gridSize + 1] &&
        game.map[game.level][this.row / gridSize + 1][this.column / gridSize];
      if (wallDown === 1) return;
      if (wallDown === 2) game.newLevel();
      this.row += gridSize;

      if (this.row > lastRowCell) this.row = lastRowCell;
    }
  }

  collisionCheck() {
    this.rect = {
      top: this.row,
      right: this.column + gridSize,
      left: this.column,
      bottom: this.row + gridSize
    };

    console.log("Anything");
    game.guards.forEach((guard, i) => {
      console.log(guard);
      if (intersect(this.rect, guard.guardLight)) {
        // debugger;
        noLoop();
      }
    });
    function intersect(r1, r2) {
      return !(
        r2.left >= r1.right ||
        r2.right <= r1.left ||
        r2.top >= r1.bottom ||
        r2.bottom <= r1.top
      );
    }
  }
}
