class Player {
  constructor() {
    this.size = 150;
    this.x = 30;
    this.y = height - 150;
    this.velocityY = 0;
    this.gravity = 2;
  }
  show() {
    image(playerImg, this.x, this.y, this.size, this.size);
  }
  jump() {
    if (this.y === height - this.size) {
      this.velocityY = -35;
    }
  }
  move() {
    this.y += this.velocityY;
    this.velocityY += this.gravity;
    this.y = constrain(this.y, 0, height - this.size);
  }
  collided(currentObs) {
    let isColliding = collideRectRect(
      this.x,
      this.y,
      this.size - 50,
      this.size - 50,

      currentObs.x,
      currentObs.y,
      currentObs.size - 40,
      currentObs.size - 40
    );
    return isColliding;
  }
}
