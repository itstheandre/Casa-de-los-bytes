class Game {
  constructor() {
    this.level = 0;
    this.map = mapArr;
    this.player = new Player(9, 6);
    this.guards = guards[this.level].map(guard => new Guard(...guard));
    this.movingGuards = movingArr[this.level].map(
      guard => new MovingGuard(...guard)
    );
    this.stillGuards = stillArr[this.level].map(
      guard => new StillGuard(...guard)
    );
    /* this.winningPlayers = winArr[this.level].map(
      thief => new WinningPlayer(...thief)
    ); */
    // this.floor = floorArr[this.level];
  }

  setup() {
    console.log(floorArr);
    floorArr = [
      //map
      basementFloor,
      // basement
      firstFloor,
      // Rooftop
      rooftopFloor,
      // Won!
      gameOverImg,
      // GameOver
      gameOverImg
    ];
    console.log(floorArr);
    //
  }

  draw() {
    frameRate(5);
    image(floorArr[this.level], 0, 0, WIDTH, HEIGHT);
    console.log(this.level);
    console.log(floorArr[0]);
    // noLoop();

    //
    this.player.draw();
    // this.winningPlayers.draw();
    this.guards.forEach(guard => guard.draw());
    this.movingGuards.forEach(guard => guard.draw());
    this.stillGuards.forEach(guard => guard.draw());
    this.stillGuards.forEach(guard => guard.action());
    this.movingGuards.forEach(guard => guard.movement());
    // this.player.collisionCheck();
  }

  newLevel() {
    if (this.level <= 2) {
      this.level++;
      this.guards = guards[this.level].map(guard => new Guard(...guard));
      this.movingGuards = movingArr[this.level].map(
        guard => new MovingGuard(...guard)
      );
      this.stillGuards = stillArr[this.level].map(
        guard => new StillGuard(...guard)
      );
    }
  }

  gameOver() {
    this.level = 4;
  }
}

/* 


End Game

loop through all guards positions (guards with lights already)
if (player1.x === guards.x || player1.y === guards.y) noLoop()
*/
