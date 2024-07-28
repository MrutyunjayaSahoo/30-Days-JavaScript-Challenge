// Activity 1: Object Creation and Access

// - Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
const bookObj = {
    title: "Harry Potter",
    author: "J.K. Rowling",
    year: 1997
}
console.log(bookObj);

// - Task 2: Access and log the title and author properties of the book object.
console.log(bookObj.title, bookObj.author);

// Activity 2: Object Methods

// - Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
const book2Obj = {
    title: "The Four",
    Author: "Scott Galloway",
    year: 2007,
    getBookInfo: function () {
        return `The title of the book is ${book2Obj.title} and the author is ${book2Obj.Author}`
    }
}
console.log(book2Obj.getBookInfo());


// - Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

const book3Obj = {
    title: "Syrup",
    author: "Maxx Barry",
    year: 1999,
    getBookInfo: function (Year) {
        return `The year of the book is ${Year}`
    }
}

console.log(book3Obj.getBookInfo(2000));

// Activity 3: Nested Objects

// - Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
const library = {
    name: "The Library Book",
    books: [
        {
            title: "Harry Potter",
            author: "J.K. Rowling",
            year: 1997
        },
        {
            title: "The Four",
            author: "Scott Galloway",
            year: 2007
        },
        {
            title: "Syrup",
            author: "Maxx Barry",
            year: 1999
        }
    ]
}

console.log(library);

//- Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log(library.name);
library.books.forEach(book => {
    console.log(book.title);
});

//other way 
// for (let i = 0; i < library.books.length; i++) {
//     const element = library.books[i].title;
//     console.log(element);

// }

//Activity 4: The this Keyword

// - Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this
// method.

const book4Obj = {
    title: "The Four",
    Author: "Scott Galloway",
    year: 2007,
    getBokkDetails: function () {
        return `Title is ${this.title} and year is ${this.year}`;
    },

}

console.log(book4Obj.getBokkDetails());

// Activity 5: Object Iteration

// - Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.

const book5Obj = {
    title: "The Four",
    Author: "Scott Galloway",
    year: 2007,
}
for (const key in book5Obj) {
    console.log(`${key}: ${book5Obj[key]}`);
}

// - Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
console.log(Object.keys(book5Obj), Object.values(book5Obj));