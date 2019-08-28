class StillGuard extends Guard {
  constructor(column, row, orientation, rotation) {
    super(column, row, orientation);
    this.rotation = rotation;
  }

  action() {
    if (frameCount % 6 === 0) {
      this.rotateStill();
    }
  }

  rotateStill() {
    // Rotation Right
    if (this.rotation === "right") {
      if (this.orientation === "down") {
        this.orientation = "left";

        // this.column -= gridSize;
      } else if (this.orientation === "up") {
        this.orientation = "right";

        // this.column += gridSize;
      } else if (this.orientation === "right") {
        this.orientation = "down";
        // this.row += gridSize;
      } else if (this.orientation === "left") {
        this.orientation = "up";
        // this.row -= gridSize;
      }
    }
    // Rotation LEFT
    else if (this.rotation === "left") {
      if (this.orientation === "left") {
        this.orientation = "down";
      } else if (this.orientation === "up") {
        this.orientation = "left";
      } else if (this.orientation === "right") {
        this.orientation = "up";
      } else if (this.orientation === "down") {
        this.orientation = "right";
      }
    }
  }
}

/*  
   // Going Down
   this.row += gridSize;
   
   // Going Right
   this.column += gridSize;
   
   // Going Up
   this.row -= gridSize;
   
   // Going Left
   this.column -= gridSize;
   */

class MovingGuard extends Guard {
  constructor(column, row, orientation, rotation, steps) {
    super(column, row, orientation);
    this.rotation = rotation;
    this.steps = steps;
    this.counter = 0;
  }

  action() {
    //
    if (frameCount % 2 === 0) {
      if (this.steps === 1) {
        if (this.counter % (this.steps + 2) === 0) {
          this.movement();
        } else if (this.counter % (this.steps + 2) === 1) {
          this.rotate();
        } else if (this.counter % (this.steps + 2) === 2) {
          this.rotate();
        }
        this.counter++;
      }
      if (this.steps === 2) {
        if (this.counter % (this.steps + 2) === 0) {
          this.movement();
        } else if (this.counter % (this.steps + 2) === 1) {
          this.movement();
        } else if (this.counter % (this.steps + 2) === 2) {
          this.rotate();
        } else {
          this.rotate();
        }
        this.counter++;
      }
    }
  }

  movement() {
    if (this.orientation === "down") {
      this.row += gridSize;
    } else if (this.orientation === "right") {
      this.column += gridSize;
    } else if (this.orientation === "up") {
      this.row -= gridSize;
    } else if (this.orientation === "left") {
      this.column -= gridSize;
    }
  }

  rotate() {
    if (this.rotation === "right") {
      if (this.orientation === "down") {
        this.orientation = "left";

        // this.column -= gridSize;
      } else if (this.orientation === "up") {
        this.orientation = "right";

        // this.column += gridSize;
      } else if (this.orientation === "right") {
        this.orientation = "down";
        // this.row += gridSize;
      } else if (this.orientation === "left") {
        this.orientation = "up";
        // this.row -= gridSize;
      }
    }
    // Rotation LEFT
    if (this.rotation === "left") {
      if (this.orientation === "left") {
        this.orientation = "down";
      } else if (this.orientation === "up") {
        this.orientation = "left";
      } else if (this.orientation === "right") {
        this.orientation = "up";
      } else if (this.orientation === "down") {
        this.orientation = "right";
      }
    }
  }
}
