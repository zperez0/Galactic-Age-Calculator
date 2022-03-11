import Venus from "./../src/venus.js";

describe("Venus", () => {
  test("should return venus function", () => {
    let venus = new Venus();
    expect(venus.name).toEqual("");
    expect(venus.earthAge).toEqual(0);
    expect(venus.lifeExpectancy).toEqual(80);
    expect(venus.venusSolar).toEqual(0.62);
  });
});

describe("earthConverter", () => {
  test("should convert human earth age to earth days", () => {
    let venus = new Venus();
    venus.earthAge = 2;
    expect(venus.earthConverter()).toEqual(730);
  });
});

describe("venusAge", () => {
  test("should convert earth days to venus age", () => {
    let venus = new Venus();
    venus.earthDays = 730;
    expect(venus.venusAge()).toBeCloseTo(1177);
  });
});

describe("lifeExp", () => {
  test("should return life expectancy", () => {
    let venus = new Venus();
    venus.earthDays = 730;
    expect(venus.lifeExp()).toBeCloseTo(1047);
  });
});
