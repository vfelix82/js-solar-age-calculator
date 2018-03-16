export class Age {

  constructor(age)
  {
    this.age = age;
  }

  inSeconds(age)
  {
    let ageInSeconds = age * 31536000;
    return ageInSeconds;
  }

  ageOnMercury(age)
  {
    let ageOnMercury = age * 0.24;
    return Math.round(ageOnMercury);
  }

  ageOnVenus(age)
  {
    let ageOnVenus = age * 0.62;
    return Math.round(ageOnVenus);
  }

  ageOnMars(age)
  {
    let ageOnMars = age *1.88;
    return Math.round(ageOnMars);
  }

  ageOnJupiter(age)
  {
    let ageOnJupiter = age *11.86;
    return Math.round(ageOnJupiter);
  }

  lifeExpectancyOnMercury(age) {
    let thisAge = new Age(age);
    let lifeExpectancyOnMercury = thisAge.ageOnMercury(age);
    return Math.round(lifeExpectancyOnMercury);
  }

  lifeExpectancyOnVenus(age) {
    let thisAge = new Age(age);
    let lifeExpectancyOnVenus = thisAge.ageOnVenus(age);
    return Math.round(lifeExpectancyOnVenus);
  }

  lifeExpectancyOnMars(age)
  {
    let thisAge = new Age(age);
    let lifeExpectancyOnMars = thisAge.ageOnMars(age);
    return Math.round(lifeExpectancyOnMars);
  }

  lifeExpectancyOnJupiter(age)
  {
    let thisAge = new Age(age);
    let lifeExpectancyOnJupiter = thisAge.ageOnJupiter(age);
    return Math.round(lifeExpectancyOnJupiter);
  }

}
