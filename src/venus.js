export default class Venus {
  constructor() {
    this.name = "";
    this.earthAge = 0;
    this.lifeExpectancy = 80;
    this.venusSolar = .62;
  }

  earthConverter() {
    let earthDays = this.earthAge * 365;
    return earthDays;
  }
}