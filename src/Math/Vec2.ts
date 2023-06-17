class Vec2 {
  public x: number;

  public y: number;

  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  public clone(): Vec2 {
    return new Vec2(this.x, this.y);
  }

  public invert(): void {
    this.x = -this.x;
    this.y = -this.y;
  }

  public magnitude(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  public magnitudeSquare(): number {
    return this.x * this.x + this.y * this.y;
  }

  public normalize(): void {
    const mag = this.magnitude();

    if (mag === 0) return;
    this.scale(1 / mag);
  }

  public scale(k: number): void {
    this.x *= k;
    this.y *= k;
  }

  public add(vec: Vec2): void {
    this.x += vec.x;
    this.y += vec.y;
  }

  public addScaledVector(vec: Vec2, k: number): void {
    this.x += k * vec.x;
    this.y += k * vec.y;
  }

  public subtract(vec: Vec2): void {
    this.x -= vec.x;
    this.y -= vec.y;
  }

  public multiplyComponent(vec: Vec2): Vec2 {
    return new Vec2(this.x * vec.x, this.y * vec.y);
  }

  public multiplyScalar(vec: Vec2): number {
    return this.x * vec.x + this.y * vec.y;
  }
}

export default Vec2;
