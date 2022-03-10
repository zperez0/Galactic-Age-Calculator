import Jupiter from './../src/jupiter.js';

describe ('jupiter', () => {

  test('should return jupiter function',() => {
    let jupiter = new Jupiter("Z");
    expect(jupiter.name).toEqual("");
    expect(jupiter.age).toEqual(0);
    expect(jupiter.lifeExpectancy).toEqual(0);
  });
});

describe ('jupiterSolarYear', () => {

  test('should convert earth solar year to jupiter solar year', () => {
    let jupiter = new Jupiter();
    let earthSolar = 365;
    let jupiterSolar = 12;
    expect(jupiter.jupiterAge(earthSolar, jupiterSolar)).notToBe(0);
  });
});