class Vec2 {
  public x: number;

  public y: number;

  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  invert(): void {
    this.x = -this.x;
    this.y = -this.y;
  }

  magnitude(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  magnitudeSquare(): number {
    return this.x * this.x + this.y * this.y;
  }

  normalize(): void {
    const length = this.magnitude();

    this.x *= length;
    this.y *= length;
  }

  scale(k: number) {
    this.x *= k;
    this.y *= k;
  }
}

export default Vec2;
