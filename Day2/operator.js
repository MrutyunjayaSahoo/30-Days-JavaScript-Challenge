//Day 2: Operator

//Activity 1: Arithmetic Operations

//Task 1: WAP to add two numbers and log the result to the console.

let addNum1 = 10;
let addNum2 = 20;

console.log(addNum1 + addNum2);

//Task 2: WAP to subtract two numbers and log the result to the console.

let subNum1 = 40;
let subNum2 = 20;

console.log(subNum1 - subNum2);
// Task 3: WAP to multiply two numbers and log the result to the console.
let mulNum1 = 4;
let mulNum2 = 2;

console.log(mulNum1 * mulNum2);

// Task 4: WAP to divide two numbers and log the result to the console.

let divNum1 = 10;
let divNum2 = 2;

console.log(divNum1 / divNum2);

//Task 5: WAP to find the reminder when one number is divided by another and log the result to console.

let remNum1 = 10;
let remNum2 = 3;

console.log(remNum1 % remNum2);

//Activity 2: Assignment Operators

//Task 6: Use the += operator to add a number to a variable and log the result to the console.

let addAssignment1 =10

console.log(addAssignment1 += 10);

//Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.

let subAssignment1 = 10;
console.log(subAssignment1 -= 2);

// Activity 3: Comparison Operators

// Task 8: Write a program to compare two numbers using > and < and log the result to the console.
let compareNum1 = 20;
let compareNum2 = 10;

console.log(`${compareNum1} is greater than ${compareNum2}`,compareNum1 > compareNum2);

console.log(`${compareNum2} is less than ${compareNum1}`,compareNum2 < compareNum1);

// Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
let compNum1 = 1;
let compNum2 = 1;

console.log(`${compNum1} is greater than ${compNum2}`,compNum1 >= compNum2);

console.log(`${compNum2} is less than ${compNum1}`,compNum2 <= compNum1);

// Task 10: Write a program to compare two numbers using == and === and log the result to the console.

let compNum3 = 1;
let compNum4 = "1";

console.log(`${compNum3} is equal to ${compNum4}`,compNum3 == compNum4);

console.log(`${compNum3} is strictly equal to ${compNum4}`,compNum3 === compNum4);

// Activity 4: Logical Operators

// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
let logicalOp1 = 12;
let logicalOp2 = 11;

console.log(logicalOp1 > logicalOp2 && logicalOp1 == 12);

// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
let logicalOp3 = 12;
let logicalOp4 = 11;

console.log(logicalOp3 < logicalOp4 || logicalOp3 === 11);

// Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.

console.log(!logicalOp3);

// Activity 5: Ternary Operator

// Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.

let ternaryNum = 10;

console.log(ternaryNum / 5 == 2 ? 'even' : 'odd');