const numbers = [21, 4, 1, 41, 5414, 4, 1, 4, 4, 54, 48, 548, 15, 484, 184, 54];

const newNumber = numbers.map(number => number / 7);
// console.log(newNumber);
// 5 forEach
// numbers.forEach(number => console.log(number / 7));
const oddNumber = numbers.filter(number => number % 2);
// console.log(oddNumber);
const findIt = numbers.find(number => number > 500);
// console.log(findIt);

//6.0
const [first, balance] = numbers;
console.log(balance);