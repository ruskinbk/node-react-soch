function today() {
  console.log("Today is a beautiful day!");
}

function today() {
  console.log("Today is Wednesday");
}

today();

const yesterday = () => {
  console.log("Yesterday is not today");
}

yesterday();

function addTwo(num) {
  return num+2;
}

const arrowAddTwo = num => num+2;

console.log(arrowAddTwo(3));

function goToClub(age) {
  if (typeof age != "number") {
    console.log("Please enter a number");
    return;
  }
  if (age > 18) {
    console.log("Welcome welcome");
  } else if (age === 18) {
    console.log("Eh hello");
  } else {
    console.log("Not allowed");
  }
  // switch (age) {
  //   case age > 18: // true // 22 == true
  //     console.log("Welcome welcome");
  //     break;  
  //   default:
  //     console.log("Not allowed");
  //     break;
  // }
}
goToClub("17");


function loop() {
  let i = 1;
  // while (i <= 5) {
  //   console.log("Hello "+i+" times");
  //   i++;
  // }

  // do {
  //   console.log("Hello "+i+" times");
  // } while(i < 5);

  for (let index = 0; index < 4; index++) {
    console.log(index);
  }
}

loop();

function isPrime(num) { 
  if (num <= 2) return true;
  for (let i = 2; i < num; i++) {
    if (num%i===0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(12));
console.log(isPrime(2));
console.log(isPrime(15));