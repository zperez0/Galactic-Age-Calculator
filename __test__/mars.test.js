import Mars from './../src/mars.js';

describe ('Mars', () => {

  test('should return mars function', () => {
    let mars = new Mars("Z");
    expect(mars.name).toEqual("");
    expect(mars.earthAge).toEqual(0);
    expect(mars.lifeExpectancy).toEqual(80);
    expect(mars.marsSolar).toEqual(1.88);
    expect(mars.earthDays).toEqual(0);
  });
});

describe('earthConverter', () => {

  test('should convert human earth age to earth days', () => {
    let mars = new Mars();
    mars.earthAge = 2; 
    expect(mars.earthConverter()).toEqual(730);
  });
});