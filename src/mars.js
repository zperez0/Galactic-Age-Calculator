export default class Mars {
  constructor() {
    this.name = "";
    this.earthAge = 0;
    this.lifeExpectancy = 80;
    this.marsSolar = 1.88;
  }

  earthConverter() {
    let earthDays = this.earthAge * 365;
    return earthDays;
  }

  marsAge() {
    this.earthConverter();
    return Math.floor(Math.round(this.earthDays / this.marsSolar));
  }

  lifeExp() {
    let marAge = this.marsAge();
    let lifeExpected = Math.floor(
      Math.abs(this.lifeExpectancy / this.marsSolar - marAge)
    );
    return lifeExpected;
  }
}
