// Activity 1: Function Declaration

// - Task 1: Write a function to check if a number is even or odd and log the result to the console.
function EvenOdd() {
    let n = 4;
    if (n % 2 == 0) {
        return "Even";
    }
    else {
        return "Odd";
    }

}

// console.log(EvenOdd());

// - Task 2: Write a function to calculate the square of a number and return the result.

function square() {
    let n = 5
    return n * n;
}

// console.log(square());

// Activity 2: Function Expression

// - Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
function max() {
    let a = 10;
    let b = 20;
    if (a > b) {
        return `${a} is maximum`;
    }
    else {
        return `${b} is maximum`;
    }
}
console.log(max());
// - Task 4: Write a function expression to concatenate two strings and return the result.
function concat(a, b) {
    return `${a} ${b}`
}

// console.log(concat("hello","world"));

//Activity 3: Arrow Functions

// - Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
let sum = (n) => {
    return n + n
}
// console.log(sum(7));

// - Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

let str = (string) => {
    return string.includes("B");
}
// console.log(str("Bol Bam"));

// Activity 4: Function Parameters and Default Values
// - Task 7: Write a function that takes two parameters and returns their product(Multiplication). Provide a default value for the second parameter.
function product(a, b = 5) {
    return a * b;
}

console.log(product(10));

// - Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

function greet(name, age = 18) {
    return `Hello ${name} your age is ${age}`;

}
console.log(greet("Mrutyunjaya"));

// Activity 5: Higher-Order Functions

// - Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

function callFunctionMultipleTimes(func, times) {
    for (let i = 0; i < times; i++) {
        func();
    }
}

// Example usage:
function sayHello() {
    console.log("Hello!");
}

callFunctionMultipleTimes(sayHello, 5);

// - Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

function applyFunction(func1, func2, value) {
    return func2(func1(value));
}

// Example usage:
function double(x) {
    return x + 2;
}

function square(x) {
    return x * x;
}

console.log(applyFunction(double, square, 10));