// Day 8: ES6+ Features

// Activity 1: Template Literals

// - Task 1: Use template literals to create a string that includes variables for a persons name and age, and log the string to the console.

let name = "Hari";
let age = 21;
console.log(`My name is ${name} and my age is ${age}`);

// - Task 2: Create a multi-line string using template literals and log it to the console.

let multiLIneString = `This is a multi-line string using template literals.`
console.log(multiLIneString);

// Activity 2: Destructuring

// - Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [first, second] = arr;
console.log(first, second);
//or
let [firstElement, secondElement] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(firstElement, secondElement);
//or
let [firstElem, secondElem, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(firstElement, secondElement, rest);

// - Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

let book = {
    title: "Harry Potter",
    author: "J.K. Rowling",
    year: 1997

}

let { title, author } = book;
console.log(title, author);

// Activity 3: Spread and Rest Operators

// - Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let arr3 = [...arr1, ...arr2];
console.log(arr3);

//Task 6:Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

function sum(...args) {
    return args.reduce((acc, current) => acc + current, 0
    );

}
let argIs = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(argIs);

//  Activity 4: Default Parameters

// - Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

function prod(a, b=1) {
    return a*b
    
}

console.log(prod(10)); //without parameter
console.log(prod(10, 5)); //with parameter

// Activity 5: Enhanced Object Literals

// - Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

const obj = {
    name: "sahil",
    age: 21,
    greeting: function () {
        console.log(`My name is ${this.name} and my age is ${this.age}`);
    }
}

obj.greeting();

// - Task 9: Create an object with computed property names based on variables and log the object to the console.

const obj1 = {
    name: "sahil",
    age: 21,
    ["name + age"]: function () {
        console.log(`My name is ${this.name} and my age is ${this.age}`);
    }
}

obj1["name + age"]();
//or
function createObject(propertyName, propertyValue) {
    return {
        [propertyName]: propertyValue
    }
}
let myObject = createObject("name", "sahil");
console.log(myObject);