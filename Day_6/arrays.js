// Activity 1: Array Creation and Access

// - Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
const arr = [1, 2, 3, 4, 5];
console.log(arr);

// - Task 2: Access the first and last elements of the array and log them to the console
console.log(arr[0]);
console.log(arr[arr.length - 1]);
//or
console.log(arr[4]);

//Activity 2: Array Methods (Basic)

// - Task 3: Use the push method to add a new number to the end of the array and log the updated array.
arr.push(7);
console.log(arr);
// - Task 4: Use the pop method to remove the last element from the array and log the updated array.
arr.pop()
console.log(arr);
// - Task 5: Use the shift method to remove the first element from the array and log the updated array.
arr.shift();
console.log(arr);
// - Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
arr.unshift(0);
console.log(arr);

//Activity 3: Array Methods (Intermediate)

// - Task 7: Use the map method to create a new array where each number is doubled and log the new array
const doubled = arr.map((num) => {
    return num * 2
})
console.log(doubled);

// - Task 8: Use the filter method to create a new array with only even numbers and log the new array.
const evenFilter = arr.filter((even) => {
    return even % 2 === 0
})
console.log(evenFilter);

// - Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
const myArr = new Array (10,20,30);
const sumNum = myArr.reduce((acc,curVal) =>{
    return acc + curVal
},0);
console.log(sumNum);

//Activity 4: Array Iteration

// - Task 10: Use a for loop to iterate over the array and log each element to the console.
const iterableArr = [10,100,1000,10000];
for (const iterator of iterableArr) {
    console.log(iterator);
}

// - Task 11: Use the forEach method to iterate over the array and log each element to the console.
const forEachArr = [1,2,3,4,5,6];
forEachArr.forEach((n) =>{
    console.log(n);
})

//Activity 5: Multi-dimensional Arrays

// - Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(matrix);

// - Task 13: Access and log a specific element from the two-dimensional array.
console.log(matrix[0][2]);//element at the first row and third column

//3D
const threeD = [
    [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ],
    [
        [10,20,30],
        [40,50,60],
        [70,80,90]
    ]
]

console.log(threeD);
console.log(threeD[1][0][2]);//element at the second block, first row, and second column