//Day 1: Variable and Data Types 

//Activity 1: Variable Declaration

//Task 1: Declare a variable using var, assign it a number, and log the value to the console.

var num = 21;

console.log(num);

//Task 2: Declare a variable using let, assign it a string, and log the value to the console.

let str = "challenge";

console.log(str);

//Activity 2: Constant Declaration

//Task 3: Declare a variable using const, assign it a boolean, and log the value to the console.

const bool = true;
console.log(bool);

//Activity 3: Data Types

//Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.

const number = 7;
console.log(typeof number);

const string = "Mrutyunjaya";
console.log(typeof string);

const boolean = true;
console.log(typeof boolean);

const car = {
    name: "TATA Harrier",
    color: "Black",
    price: 1549000
};
console.log(typeof car);

const array = ["MS", 21, "Male"];
console.log(typeof array);

//or
// console.log(`${typeof number} \n${typeof string} \n${typeof boolean} \n${typeof car}\n${typeof array}`);

//Activity 4: Reassigning Variables

//Task 5: Declare a variable using let, assign it an initial value, reasign a new value, and log both values to console.

let noOfCustomer = 10;
console.log(noOfCustomer);
noOfCustomer = 20;
console.log(noOfCustomer);

//Activity 5: Understanding const

//Task 6: Try reassigning a variable declared with const and observe the error

const assign = 12;
console.log(`Initial value before reassigned ${assign}`);
//attempting to reassign value 

try{
    assign = 24;
}
catch(error){
    console.error("error:",error.message);
}
console.log(`Final value after reassigned ${assign}`);

