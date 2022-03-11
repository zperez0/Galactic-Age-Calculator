export default class Mars {
  constructor() {
    this.name = "";
    this.earthAge = 0;
    this.lifeExpectancy = 80;
    this.marsSolar = 1.88;
    this.earthDays = 0;
  }

  earthConverter() {
    let earthDays = this.earthAge * 365;
    return earthDays;
  }
}