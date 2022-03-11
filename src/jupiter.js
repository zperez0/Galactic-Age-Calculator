export default class Jupiter {
  constructor() {
  this.name = "";
  this.earthAge = 0;
  this.lifeExpectancy = 80;
  this.jupiterSolar = 12;
  }

  earthConverter() {
    let earthDays = this.earthAge * 365;
    return earthDays;
  }
}