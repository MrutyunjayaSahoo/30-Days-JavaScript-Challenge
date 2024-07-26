// Activity 1: For Loop

//  Task 1: Write a program to print numbers from 1 to 10 using a for loop.

for (let i = 1; i <= 10; i++) {
    const element = i;
    console.log(`1 to 10: ${element}`);

}

//  Task 2: Write a program to print the multiplication table of 5 using a for loop.

for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        for (let j = 0; j <= 10; j++) {
            const mul = i * j;
            console.log(`${i} * ${j} = ${mul}`);

        }
    }

}

//## Activity 2: While Loop
// - Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.

let n = 1;
let sum = 0;
while (n <= 10) {
    sum = (n * (n + 1)) / 2;
    n++;
}
console.log(sum);

// - Task 4: Write a program to print numbers from 10 to 1 using a while loop.

let num = 10;
while (num >= 1) {
    // console.log(num);
    num--;
}

// Activity 3: Do...While Loop

// - Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
let i = 1;
let text = ""
do {
    text += i + ",";
    i++;
} while (i <= 5);
// console.log(text);
// - Task 6: Write a program to calculate the factorial of a number using a do...while loop
let N = 5;
let fact = 1;
do {
    fact *= N;
    N--;
} while (N >= 1);
console.log(fact);

// Activity 4: Nested Loops

// - Task 7: Write a program to print a pattern using nested for loops:
//   (ignore color)
//     *
//     **
//     ***
//     ****

// To create the left triangle pattern in javascript again run 2 nested for loop external loop will take care of columns of pattern and the internal loop will print rows of the pattern.
// let Number = 5;
// let str = ""
// for (let i = 1; i < Number; i++) {
//     for (let j = 0; j < i; j++) {
//         str += "*";
//     }
//     // for(let k = 0; k < i; k++){
//     //     str += "*";
//     // }
//     str += "\n";
// }
// console.log(str)

// Simple star pattern
for (let i = 1; i <= 5; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }
    console.log(pattern);
}

// Activity 5: Loop Control Statements

// - Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        console.log("Skipped number 5");
        continue
    }
    console.log(index);
}

// - Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
for (let index = 1; index <= 10; index++) {
    if (index == 7) {
        console.log("Loop stopped at number 7");
        break
    }
    console.log(index);
}
