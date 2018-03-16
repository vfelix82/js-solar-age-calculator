import { Age } from './../src/age.js';

describe ('Age', function(){
  it('should convert Earth age to age on Mercury', function() {
    let age = new Age(35);
    expect(age.ageOnMercury(35)).toEqual(8);
  });
});

describe ('Age', function(){
  it('should convert Earth age to age on Venus', function() {
    let age = new Age(35);
    expect(age.ageOnVenus(35)).toEqual(22);
  });
});

describe ('Age', function(){
  it('should convert Earth age to age on Mars', function() {
    let age = new Age(35);
    expect(age.ageOnMars(35)).toEqual(66);
  });
});

describe ('Age', function(){
  it('should convert Earth age to age on Jupiter', function() {
    let age = new Age(35);
    expect(age.ageOnJupiter(35)).toEqual(415);
  });
});
