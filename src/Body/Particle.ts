import Vec2 from '../Math/Vec2';

class Particle {
  public position: Vec2;

  public velocity: Vec2;

  public acceleration: Vec2;

  public damping: number;

  public inverseMass: number;

  constructor(x = 0, y = 0, m = 1) {
    this.position = new Vec2(x, y);
    this.velocity = new Vec2(0, 0);
    this.acceleration = new Vec2(0, 0);
    this.damping = 0;
    this.inverseMass = m;
  }
}

export default Particle;
