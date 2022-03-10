//import class here

describe ('jupiter', () => {

  test('should return jupiter function',() => {
    let jupiter = new Jupiter('Z', '27', '80');
    expect(jupiter.name).toEqual("");
    expect(jupiter.age).toBeGreaterThanOrEqual(0);
    expect(jupiter.lifeExpectancy).toBeGreaterThanOrEqual(0);
  });
});