const name = "String"; // string
const age = 23.3; // number
const isPassout = true; // boolean
const details = {
  address: "Lamachour",
  "full-village": "Myagdi",
  ward: 4,
  test: {
    hello: "hi",
  }
}; // object

let company; // undefined
let salary = null; // null

const hobbies = [
  "Reading",
  12,
  true,
  {
    name: "Singing",
  },
  null,
]; // array


// console.log(typeof age);
// console.log(typeof isPassout);
// console.log(typeof details);
// console.log(typeof hobbies);
// console.log(typeof salary);

// console.log(typeof company);

console.log(details.address);
console.log(details["full-village"]);
console.log(hobbies[-1]);