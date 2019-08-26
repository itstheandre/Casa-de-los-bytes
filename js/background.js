class Background {
  constructor() {
    //   this.xSky = 0;
    //   this.xClouds = 0;
    //   this.xForest = 0;
  }

  setup() {
    this.grid = loadImage("assets/Grid.png"); // p5 function
  }
  draw() {
    // this.xSky = (this.xSky - 5) % width;
    this.xSky = this.xSky - 1;
    if (this.xSky <= -width) {
      this.xSky = 0;
    }
    // image(img, x, y, w, h)
    image(this.bgSky, this.xSky, 0, width); // `width` is made available by p5 and corresponds to the width of the canvas
    image(this.bgSky, this.xSky + width, 0, width);

    this.xClouds -= 2;
    if (this.xClouds <= -width) {
      this.xClouds = 0;
    }

    image(this.bgClouds, this.xClouds, 0, width);
    image(this.bgClouds, this.xClouds + width, 0, width);

    this.xForest -= 4;

    if (this.xForest <= -width) {
      this.xForest = 0;
    }

    image(this.bgForest, this.xForest, 230, width);
    image(this.bgForest, this.xForest + width, 230, width);
  }
}
