export class Age {

  constructor(age, smoker, stress, diet)
  {
    this.age = age;
    this.smoker = smoker;
    this.stress = stress;
    this.diet = diet;
  }

  inSeconds()
  {
    let ageInSeconds = this.age * 31536000;
    return ageInSeconds;
  }

  ageOnMercury()
  {
    let ageOnMercury = this.age * 0.24;
    return Math.round(ageOnMercury);
  }

  ageOnVenus()
  {
    let ageOnVenus = this.age * 0.62;
    return Math.round(ageOnVenus);
  }

  ageOnMars()
  {
    let ageOnMars = this.age *1.88;
    return Math.round(ageOnMars);
  }

  ageOnJupiter()
  {
    let ageOnJupiter = this.age *11.86;
    return Math.round(ageOnJupiter);
  }

  lifeExpectancyOnEarth()
  {
    let yearsLeftToLive = this.age;

    if (this.smoker == true) {
      this.age += 5;
    }
    else if (this.stress == true) {
      this.age += 10;
    }
    else if (this.diet == true) {
      this.age += 15;
    }
    return yearsLeftToLive
  }

}
