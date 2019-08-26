class Player {
  constructor(column, row) {
    this.row = row;
    this.column = column;
    this.img;
  }

  preload() {
    thiefFront = loadImage("assets/personagens/thief-still-front.png");
    thiefLeft = loadImage("assets/personagens/thief-still-left.png");
    thiefRight = loadImage("assets/personagens/thief-still-right.png");
    thiefBack = loadImage("assets/personagens/thief-still-back.png");
    this.img = thiefFront;
  }

  draw() {
    //
    image(this.img, this.row, this.column, gridSize, gridSize);
  }
}

/* 
class Game {
  constructor() {
    this.level = 0;
    this.map = [
      // map
      [
        // basement
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 0
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 1
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0], // 2
        [0, 0, 0, 0, 0, 1, 0, 0, 1, 1], // 3
        [0, 0, 1, 1, 1, 1, 0, 1, 0, 0], // 4
        [0, 0, 0, 0, 0, 1, 0, 1, 0, 0], // 5
        [1, 1, 0, 0, 0, 1, 0, 1, 0, 0], // 6
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 7
        [0, 1, 1, 1, 1, 1, 1, 1, 0, 0], // 8
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 2] // 9
      ],
      [
        // first floor
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 0
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 1
        [0, 0, 0, 0, 0, 1, 0, 1, 0, 0], // 2
        [0, 1, 0, 0, 0, 1, 0, 1, 0, 0], // 3
        [0, 1, 0, 0, 2, 0, 0, 1, 0, 0], // 4
        [0, 1, 0, 0, 0, 1, 0, 1, 0, 0], // 5
        [0, 0, 1, 0, 0, 1, 0, 1, 0, 0], // 6
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 7
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 0], // 8
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // 9
      ],
      [
        // Roof is on fire
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 0
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 1
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 2
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 3
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 4
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 5
        [0, 0, 0, 0, 0, 0, 2, 2, 2, 2], // 6
        [0, 0, 0, 0, 0, 0, 2, 2, 2, 2], // 7
        [0, 0, 0, 0, 0, 0, 2, 2, 2, 2], // 8
        [0, 0, 0, 0, 0, 0, 2, 2, 2, 2] // 9
      ]
    ];
  }

  setup() {
    this.grid = loadImage("assets/Grid.png");
  }

  draw() {
    for (let j = 0; j < this.map[this.level].length; j++) {
      for (let k = 0; k < this.map[this.level][j].length; k++) {
        if (this.map[this.level][j][k] === 0)
          rect(gridSize * k, gridSize * j, gridSize, gridSize);
        if (this.map[this.level][j][k] === 1) {
          push();
          fill("blue");
          rect(gridSize * k, gridSize * j, gridSize, gridSize);
          pop();
        }
        if (this.map[this.level][j][k] === 2) {
          push();
          fill("orange");
          rect(gridSize * k, gridSize * j, gridSize, gridSize);
          pop();
        }
        // if (this.map[0][j][k] === 1) background("green");
      }
    }
  }
}
 */
