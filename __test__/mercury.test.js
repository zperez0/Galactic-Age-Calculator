import Mercury from './../src/mercury.js';

describe ('Mercury', () => {

  test('should return mercury function', () => {
    let mercury = new Mercury("Z");
    expect(mercury.name).toEqual("");
    expect(mercury.earthAge).toEqual(0);
    expect(mercury.lifeExpectancy).toEqual(80);
    expect(mercury.mercurySolar).toEqual(.24);
  });
});
