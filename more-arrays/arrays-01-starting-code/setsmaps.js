// const ids = new Set(['Hi', 'from', 'set'])

// if (ids.has('Hi')) {
//   ids.delete('Hi')
// }

// for ( const entriy of ids.entries()) {
//   console.log(entriy)
// }

const person1 = { name: 'Max' }
const person2 = { name: 'Manuel' }

const personData = new Map([[person1, [{ date: 'Yesterday', price: 10 }]]])

personData.set(person2, [{ date: 'Two weeks ago', price: 100 }])

console.log(personData)
console.log(personData.get(person1))

for (const [key, value] of personData.entries()) {
  console.log(key, value)
}


for (const key of personData.keys()) {
  console.log(key)
}