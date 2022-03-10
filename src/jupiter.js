export default class Jupiter {
  constructor() {
  this.name = "";
  this.age = 0;
  this.lifeExpectancy = 0;
  this.earthSolar = 365;
  }

  jupiterSolarYear(earthSolar, jupiterSolar) {
    return earthSolar * jupiterSolar;
  }

  jupiterAge(jupiterDays, earthAge) {
    let jupAge = jupiterDays * earthAge;
    return jupAge / this.earthSolar;
  }
}
