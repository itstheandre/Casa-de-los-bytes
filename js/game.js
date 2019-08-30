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
    this.winningPlayers = winArr[3].map(thief => new WinningPlayer(...thief));
    this.endGuards = guards[4].map(guard => new Guard(...guard));
  }

  setup() {
    floorArr = [
      //map
      basementFloor,
      // basement
      firstFloor,
      // Rooftop
      rooftopFloor,
      // Won!
      congratsImg,
      // GameOver
      gameOverImg
    ];
    // if (startGame) musicLoop.play();

    //
  }

  draw() {
    if (this.level < 3) {
      frameRate(5);
      image(floorArr[this.level], 0, 0, WIDTH, HEIGHT);

      this.player.draw();
      this.guards.forEach(guard => guard.draw());
      this.movingGuards.forEach(guard => guard.draw());
      this.stillGuards.forEach(guard => guard.draw());
      this.stillGuards.forEach(guard => guard.action());
      this.movingGuards.forEach(guard => guard.action());
      this.player.collisionCheck();
    } else if (this.level === 3) {
      frameRate(5);
      image(floorArr[this.level], 0, 0, WIDTH, HEIGHT);
      // this.winningPlayers.forEach(thief => thief.draw());
      if (keyCode === 32) {
        this.level = 0;
        this.player = new Player(9, 6);
        this.guards = guards[this.level].map(guard => new Guard(...guard));
        this.movingGuards = movingArr[this.level].map(
          guard => new MovingGuard(...guard)
        );
        this.stillGuards = stillArr[this.level].map(
          guard => new StillGuard(...guard)
        );
      }
    } else {
      frameRate(5);
      image(floorArr[4], 0, 0, WIDTH, HEIGHT);
      // this.endGuards.forEach(guard => guard.draw());
      if (keyCode === 32) {
        this.level = 0;
        this.guards = guards[this.level].map(guard => new Guard(...guard));
        this.movingGuards = movingArr[this.level].map(
          guard => new MovingGuard(...guard)
        );
        this.stillGuards = stillArr[this.level].map(
          guard => new StillGuard(...guard)
        );
        this.player = new Player(9, 6);
      }
    }
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
