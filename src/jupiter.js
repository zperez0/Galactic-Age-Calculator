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

  lifeExp() {
    let jupAge = this.jupiterAge();
    let lifeExpected = Math.floor(Math.abs(this.lifeExpectancy / this.jupiterSolar - jupAge));
    return lifeExpected;
  }
}

// life exp(80) /  jupiterSolar(11.83)

// life exp - jupAge(current age)(62)
