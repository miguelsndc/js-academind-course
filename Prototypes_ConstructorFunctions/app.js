class agedPerson {
  printAge() {
    console.log(this.age);
  }
}

class Person extends agedPerson {
  name = "Max";

  constructor() {
    super();
    this.age = 30;
  }

  greet() {
    console.log(`Hii, im ${this.name} and i am ${this.age} years old}`);
  }
}

// function Person() {
//   this.age = 30;
//   this.name = "Max";
//   this.greet = function () {
//     console.log(`Hii, im ${this.name} and i am ${this.age} years old`);
//   };
// }

// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   },
// };

const person = new Person();
person.greet();
person.printAge();
console.log(person.__proto__);
