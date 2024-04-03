// Higher order function 

const numbers = [2, 3, 1, 4];

// function multiplyByTwo(num) {
//   return num*2
// }

const n = numbers.map(num => num*2);
const divisibleByTwo = numbers.filter((num) => num%2===0);
const aces = numbers.sort();
const dces = numbers.sort((a, b) => b-a);

// for (let i = 0; i < numbers.length; i++) {
//   n[i] = numbers[i] * 2;
// }

console.log(dces);
// console.log(n);