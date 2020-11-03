const root = document.querySelector('#root')

function Person(first, last, age, gender, interests) {
  this.name = {
    "first": first,
    "last": last
  }
  this.age = age
  this.gender = gender
  this.pronoun = gender === "male" ? "he" : "she"
  this.interests = interests.join(", ")
  this.bio = function () {
    alert(`${this.name.first} ${this.name.last} is ${this.age} years old and ${this.pronoun} likes ${person.interests}`)
  }
}

const person = new Person("Miguel", "Costa", 15, "male", ['music', 'games'])
console.log(person)
person.bio()

s
// const person1 = new Object({
//   name: "Chris",
//   age: 38,
//   greeting: function () {
//     alert(`Hi im ${this.name}`)
//   }
// })

// const person2 = Object.create(person1)
// person2.greeting()