let apple = "Apple";
let upperCaseApple = "APPLE";
let ten = 10
let twenty = 20
let fruits = ["apple", "banana", "orange"];



console.log("\nIs apple equals to Apple?");
console.log(apple == "Apple");

console.log("\nIs apple not equals to Apple?");
console.log(apple != "Apple");

console.log("\nIs APPLE  equals to apple after converting to lowercase?");
console.log(upperCaseApple.toLowerCase() == "apple");

console.log("\nIs APPLE not equals to apple after converting to lowercase?");
console.log(upperCaseApple.toLowerCase() != "apple");

console.log("\nIs ten equals to twenty?");
console.log(ten == twenty);

console.log("\nIs ten not equals to twenty?");
console.log(ten != twenty);

console.log("\nIs is ten greater than 0?");
console.log(ten > 0);

console.log("\nIs twenty less than ten?");
console.log(twenty < ten);

console.log("\nIs ten greater than or equals to 5?");
console.log(ten >= 5);

console.log("\nIs twenty less than or equals to ten?");
console.log(twenty <= ten);

console.log("\ntwenty is not equals to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);

console.log("\ntwenty is not equals to 10 and twenty is greater than 30");
console.log(twenty != 10 && twenty > 30);

console.log("\n twenty is greater than 50 OR twenty is equals to twenty");
console.log(twenty > 50 || 20 == 20);

console.log("\n twenty is greater than 50 OR twenty is not equals to twenty");
console.log(twenty > 50 || 20 != 20);

console.log("\nIS orange included in my fruits array");
console.log(fruits.includes("orange"));

console.log("\nIS orange not included in my fruits array");
console.log(!fruits.includes("orange"));
