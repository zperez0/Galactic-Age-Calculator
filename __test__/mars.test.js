import Mars from "./../src/mars.js";

describe("Mars", () => {
  test("should return mars function", () => {
    let mars = new Mars();
    expect(mars.name).toEqual("");
    expect(mars.earthAge).toEqual(0);
    expect(mars.lifeExpectancy).toEqual(80);
    expect(mars.marsSolar).toEqual(1.88);
  });
});

describe("earthConverter", () => {
  test("should convert human earth age to earth days", () => {
    let mars = new Mars();
    mars.earthAge = 2;
    expect(mars.earthConverter()).toEqual(730);
  });
});

describe("marsAge", () => {
  test("should convert earth days to mars age", () => {
    let mars = new Mars();
    mars.earthDays = 730;
    expect(mars.marsAge()).toBeCloseTo(388);
  });
});

describe("lifeExp", () => {
  test("should return life expectancy", () => {
    let mars = new Mars();
    mars.earthDays = 730;
    expect(mars.lifeExp()).toBeCloseTo(345);
  });
});
