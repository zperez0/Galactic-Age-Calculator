import Jupiter from './../src/jupiter.js';

describe ('Jupiter', () => {

  test('should return jupiter function',() => {
    let jupiter = new Jupiter("Z");
    expect(jupiter.name).toEqual("");
    expect(jupiter.earthAge).toEqual(0);
    expect(jupiter.lifeExpectancy).toEqual(80);
    expect(jupiter.jupiterSolar).toEqual(11.86);
    expect(jupiter.earthDays).toEqual(0);
  });
});

describe ('earthConverter', () => {

  test('should convert human earth age to earth days', () => {
    let jupiter = new Jupiter();
    jupiter.earthAge = 2;
    expect(jupiter.earthConverter()).toEqual(730);
  });
});

describe ('jupiterAge', () => {

  test('should convert earth days to jupiter age', () => { 
    let jupiter = new Jupiter();
    jupiter.earthDays = 730;
    expect(jupiter.jupiterAge()).toBeCloseTo(62);
  });
});

describe ('lifeExp', () => {

  test('should return life expectancy', () => {
    let jupiter = new Jupiter();
    jupiter.earthDays = 730;
    expect(jupiter.lifeExp()).toBeCloseTo(55);
  });
});