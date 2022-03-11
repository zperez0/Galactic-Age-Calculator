export default class Jupiter {
  constructor(earthDays) {
  this.name = "";
  this.earthAge = 0;
  this.lifeExpectancy = 80;
  this.jupiterSolar = 11.86;
  this.earthDays = earthDays;
  }

  earthConverter() {
    let earthDays = this.earthAge * 365;
    return earthDays;
  }

  jupiterAge() {
    this.earthConverter();
    return Math.floor(Math.round(this.earthDays / this.jupiterSolar
    ));
  }
}



//lifeExp * 365 / 4330 - life exp
