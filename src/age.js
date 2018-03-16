export class Age {

  constructor(age)
  {
    this.age = age;
  }

  inSeconds(age)
  {
    let ageInSeconds = age * 31536000;
    return (ageInSeconds);
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

}
