//3.1
const noParameter = () => 89;
console.log(noParameter());
//3.2
const singleParameter = num => num / 7;
console.log(singleParameter(48));
// 3.3
const doubleParameter = (num1, num2) => (num1 + num2) / 2;
console.log(doubleParameter(10, 11));
//3.4 
const doubleParameter2 = (num1, num2) => {
    const x = num1 + 7;
    const y = num2 + 7;
    return (x + y) / 7;
}
console.log(doubleParameter2(10, 11));