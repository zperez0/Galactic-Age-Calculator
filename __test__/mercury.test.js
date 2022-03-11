import Mercury from './../src/mercury.js';

describe ('Mercury', () => {

  test('should return mercury function', () => {
    let mercury = new Mercury();
    expect(mercury.name).toEqual("");
    expect(mercury.earthAge).toEqual(0);
    expect(mercury.lifeExpectancy).toEqual(80);
    expect(mercury.mercurySolar).toEqual(.24);
  });
});

describe('earthConverter', () => {

  test('should convert human earth age to earth days', () => {
    let mercury = new Mercury();
    mercury.earthAge = 2; 
    expect(mercury.earthConverter()).toEqual(730);
  });
});
