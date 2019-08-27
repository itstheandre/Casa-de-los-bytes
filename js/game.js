class Game {
  constructor() {
    this.level = 0;
    this.map = mapArr;
    this.player = new Player(9, 6);
    this.guards = guards[this.level].map(guard => new Guard(...guard));
  }

  setup() {
    // this.grid = loadImage("assets/Grid.png");
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
      }
    }
    //
    // if (this.level === 0) {
    this.player.draw();
    // this.collisionCheck();
    this.guards.forEach(guard => guard.draw());
    // this.player.collisionCheck();
  }

  newLevel() {
    this.level++;
    this.guards = guards[this.level].map(guard => new Guard(...guard));
  }
}

/* 


End Game

loop through all guards positions (guards with lights already)
if (player1.x === guards.x || player1.y === guards.y) noLoop()
*/
