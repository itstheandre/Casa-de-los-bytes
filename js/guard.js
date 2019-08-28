class Guard {
  constructor(row, column, orientation) {
    this.row = row * gridSize;
    this.column = column * gridSize;
    this.orientation = orientation;
  }

  preload() {}

  draw() {
    //
    if (this.orientation === "down") {
      image(guardFront, this.column, this.row, gridSize, gridSize * 3);

      this.guardLight = {
        top: this.row,
        right: this.column + gridSize,
        left: this.column,
        bottom: this.row + gridSize * 3
      };
    }
    if (this.orientation === "left") {
      image(
        guardLeft,
        this.column - gridSize * 2,
        this.row,
        gridSize * 3,
        gridSize
      );

      this.guardLight = {
        top: this.row,
        right: this.column + gridSize,
        left: this.column - gridSize * 2,
        bottom: this.row + gridSize
      };
    }
    if (this.orientation === "right") {
      image(guardRight, this.column, this.row, gridSize * 3, gridSize);

      this.guardLight = {
        top: this.row,
        right: this.column + gridSize * 3,
        left: this.column,
        bottom: this.row + gridSize
      };
    }
    if (this.orientation === "up") {
      image(
        guardBack,
        this.column,
        this.row - gridSize * 2,
        gridSize,
        gridSize * 3
      );

      this.guardLight = {
        top: this.row - gridSize * 2,
        right: this.column + gridSize,
        left: this.column,
        bottom: this.row + gridSize
      };
    }
  }
}
