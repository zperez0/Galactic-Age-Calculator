//import class here

import { TestScheduler } from "jest";

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