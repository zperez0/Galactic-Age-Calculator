//import class here

describe ('Venus', () => {

  test('should return venus function', () => {
    let venus = new Venus("Z");
    expect(venus.name).toEqual("");
    expect(venus.earthAge).toEqual(0);
    expect(venus.lifeExpectancy).toEqual(80);
    expect(venus.venusSolar).toEqual(.62);
  });
});