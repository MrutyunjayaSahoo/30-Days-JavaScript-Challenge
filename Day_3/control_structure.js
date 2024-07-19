// Day 3: Control Structures
// Activity 1: If-Else Statements

// Task 1 Write a program to check if a number is positive, negative, or zero, and log the result to the console.
// var num = prompt("enter the number to check that number is positive, negative, or zero");
let num = 1;
// var result;
if (num > 0) {
    console.log("positive");
    // result = "positive";

}
else if (num < 0) {
    console.log("negative");
    // result = "negative";

}
else if (num == 0) {
    console.log("Zero");
    // result = "Zero";

}
else {
    console.log("invalid");
    // result = "invalid";

}
// document.getElementById("result").innerHTML = result;
// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

let personAge = 18;
console.log(personAge >= 18 ? 'Eligible' : 'Not eligible');

// Activity 2: Nested If-Else Statements

//Task 3: Write a program to find the largest of three numbers using nested if-else statements.

let a = 10;
let b = 20;
let c = 30;

if (a > b && a > c) {
    console.log(`${a} is largest`);
}
else if (b > a && b > c) {
    console.log(`${b} is largest`);
}
else {
    console.log(`${c} is largest`);
}

// Activity 3: Switch Case

// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

let day = 1;
switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;

    default:
        break;
}

//Task 5: Write a program that uses a switch case to assign a grade (A’, 'B, 'C, 'D', F) based on a score and log the grade to the console.

let score = 80;

switch (true) {
    case score >= 90:
        console.log("Grade A");
        break;
    case score >= 80:
        console.log("Grade B");
        break;
    case score >= 70:
        console.log("Grade C");
        break;
    case score >= 60:
        console.log("Grade D");
        break;
    default:
        console.log("Grade F");
        break;
}

// Activity 4: Conditional (Ternary) Operator

//Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
let number = 5;
console.log(number % 2 == 0 ? 'Even' : 'Odd');

// Activity 5: Combining Conditions

//Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

let year = 2024;

if (year % 4 == 0 && year != 100 || year % 400 == 0){
    console.log("leap year");
}
else{
    console.log("not a leap year");
}