'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear > 1981 && birthYear <= 1996) {
      const str = `Oh and you are a millenail, ${firstName}`;
      console.log(str);
    }
  }
  printAge();

  return age;
}

const firstName = 'Duy';
calcAge(1989);
