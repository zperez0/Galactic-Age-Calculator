import Jupiter from './../src/jupiter.js';

describe ('jupiter', () => {

  test('should return jupiter function',() => {
    let jupiter = new Jupiter("Z");
    expect(jupiter.name).toEqual("");
    expect(jupiter.earthAge).toEqual(0);
    expect(jupiter.lifeExpectancy).toEqual(0);
  });
});

describe ('jupiterAge', () => {

  test('should convert human earth age to earth days', () => {
    let jupiter = new Jupiter();
    jupiter.earthAge = 2;
    expect(jupiter.jupiterAge()).toEqual(730);
  });
});