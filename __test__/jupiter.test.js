import Jupiter from './../src/jupiter.js';

describe ('jupiter', () => {

  test('should return jupiter function',() => {
    let jupiter = new Jupiter("Z");
    expect(jupiter.name).toEqual("");
    expect(jupiter.age).toEqual(0);
    expect(jupiter.lifeExpectancy).toEqual(0);
  });
});