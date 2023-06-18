import Vec2 from '../../src/Math/Vec2';

describe('Vec2', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('invert', () => {
    const vec2 = new Vec2(1, 2);
    vec2.invert();

    expect(vec2).toEqual({ x: -1, y: -2 });
  });

  test('magnitude', () => {
    const vec2 = new Vec2(1, 2);
    const mag = vec2.magnitude();

    expect(mag).toBeCloseTo(Math.sqrt(5));
  });

  test('magnitudeSquare', () => {
    const vec2 = new Vec2(1, 2);
    const magSq = vec2.magnitudeSquare();

    expect(magSq).toBeCloseTo(5);
  });

  test('normalize', () => {
    const vec2 = new Vec2(2, 7);
    vec2.normalize();

    const expectedX = 2 / Math.sqrt(53);
    const expectedY = 7 / Math.sqrt(53);

    expect(vec2.x).toBeCloseTo(expectedX);
    expect(vec2.y).toBeCloseTo(expectedY);
  });

  test('scale', () => {
    const vec2 = new Vec2(2, 7);
    vec2.scale(18.23);

    expect(vec2).toEqual({ x: 36.46, y: 127.61 });
  });
});
