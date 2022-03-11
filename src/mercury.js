export default class Mercury {
  constructor() {
    this.name = "";
    this.earthAge = 0;
    this.lifeExpectancy = 80;
    this.mercurySolar = .24;
  }

  earthConverter() {
    let earthDays = this.earthAge * 365;
    return earthDays;
  }

  mercuryAge() {
    this.earthConverter();
    return Math.floor(Math.round(this.earthDays / this.mercurySolar
    ));
  }

  lifeExp() {
    let merAge = this.mercuryAge();
    let lifeExpected = Math.floor(Math.abs(this.lifeExpectancy / this.mercurySolar - merAge));
    return lifeExpected;
  }
}
