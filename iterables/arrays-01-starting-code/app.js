// // // const numbers = [1, 2, 3]
// // // console.log(numbers)

// // // const moreNumbers = new Array(1, 2, 3);
// // // console.log(moreNumbers)

// // // const yetMoreNumbers = Array.from({name: 'Miguel', age: 15})
// // // console.log(yetMoreNumbers)

// // // // const numbers = [1, 2, 3]

// // // const hobbies = ['Cooking', 'Sports']

// // // const personalData = [30, "Max", {moreDetails: [] }]

// // // const analyticsData = [[1.1 , 2.6], [1.9, 5.3]]

// // // for (const data of analyticsData) {
// // //   for (const dataPoint of data) {
// // //     console.log(dataPoint)
// // //   }
// // // }

// // const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10]

// // const storedResults = testResults.concat([3.99, 2])

// // testResults.push(5.91)

// // console.log(storedResults, testResults)
// // console.log(testResults.indexOf(1.5))

// // const personData = [{name: 'Max'}, { name: 'Manuel'}]
// // // console.log(personData.indexOf({name: 'Manuel'}))

// // const manuel = personData.find((person, index, persons) => {
// //   return person.name === 'Manuel'
// // })

// // console.log(manuel)

// // const prices = [10.99, 5.99, 3.99, 6.59]
// // const tax = 0.19;
// // const taxAdjustedPrices = [];

// // prices.forEach((price, index, prices) => {
// //   const priceObj = {index: index, prevPrice: prices[index], taxAdjPrice : price * (1 + tax)}
// //   taxAdjustedPrices.push(priceObj)
// // })

// // console.log(taxAdjustedPrices)

// const prices = [10.99, 5.99, 5.99, 6.59];
// const tax = 0.19;

// const taxAdjustedPrices = prices.map((price, index, prices) => {
//   const priceObj = {index: index, prevPrice: prices[index], taxAdjPrice : price * (1 + tax)};
//   return priceObj;
// })

// // console.log(prices, taxAdjustedPrices);

// const sortedPrices = prices.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   }
//   else if (b === a) {
//     return 0;
//   }
//   else {
//     return -1;
//   }
// })

// const filteredArray = prices.filter(price => Math.ceil(price) % 2 == 0);

// // console.log(filteredArray)

// const sum = prices.reduce((accumulator, curValue) => accumulator + curValue, 0)

// // console.log(sum)
// // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 42, 3,12 ,3 ,14, 66]

// // const isPrime = num => {
// //   for(let i = 2; i < num; i++)
// //     if(num % i === 0) return false;
// //   return num > 1;
// // }

// // const primeNumbers = numbers.filter(isPrime)

// // console.log(primeNumbers)

// const data = 'new york;10.99;2000';

// const transformedData = data.split(';');

// console.log(transformedData);
// const nameFragments = ['Max', 'Schwarz'];
// const name = nameFragments.join(' ');
// console.log(name)

// const copiedNameFragments = [...nameFragments];
// console.log(copiedNameFragments)

// console.log(Math.min(...prices));

// const persons = [{ name: 'Max', age: 30 }, { name: 'Manuel', age: 31 }]
// const copiedPersons = persons.map(person => ({ name: person.name, age: person.age }))

// persons.push({ name: 'Anna', age: 29 })
// a
// persons[0].age = 42

// console.log(persons, copiedPersons)

const nameData = ['Max', 'Schwarz', 'Mr', 30];
// const firstName = nameData[0]
// const lasttName = nameData[1]

const [firstName, lastName, ...otherInformation] = nameData;
console.log(firstName, lastName, otherInformation);
