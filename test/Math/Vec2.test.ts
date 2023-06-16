import Vec2 from '../../src/Math/Vec2';

describe('Vec2', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('All functions', () => {
    const vec2 = new Vec2(1, 2);

    expect(vec2).toEqual(new Vec2(1, 2));
  });
});
