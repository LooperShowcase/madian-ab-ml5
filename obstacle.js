class Obstacle {
  constructor() {
    this.size = 50;
    this.x = width;
    this.y = height - this.size;
    this.option = random(1);
  }
  show() {
    image(obstacleImg, this.x, this.y, this.size, this.size);
  }
  move() {
    this.x -= 6;
  }
}
