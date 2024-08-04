// DOM Manipulation
// Activity 1: Selecting and Manipulating Elements

// Task 1: Select an HTML element by its ID and change its text content.
let id = document.getElementById("id").textContent = "Hello DOM, this is ID";

// Task 2: Select an HTML element by its class and change its background color.
let cls = document.getElementsByClassName("class")[0].style.background = "yellow";

// Activity 2: Creating and Appending Elements

// Task 3: Create a new div element with some text content and append it to the body.
let createElem = document.createElement("div");
createElem.innerText = "Hello DOM, this is new div";
createElem.style.border = "2px solid red";
document.body.append(createElem);

// Task 4: Create a new 11 element and add it to an existing ul list.

for (let i = 1; i <= 11; i++) {
    let createLiElem = document.createElement("li");
    createLiElem.innerText = `list item ${i}`;
    document.querySelector("ul").append(createLiElem);

}

// Activity 3: Removing Elements
// Task 5: Select an HTML element and remove it from the DOM.
let remove = document.querySelector("#id");
remove.remove();

// Task 6: Remove the last child of a specific HTML element.
let removeLastChild = document.querySelector("ul");
removeLastChild.lastElementChild.remove();

// Activity 4: Modifying Attributes and Classes

// Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).
let img = document.querySelector("img");
img.src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";

// Task 8: Add and remove a CSS class to/from an HTML element.
let classRemoveAdd = document.querySelector(".div");
classRemoveAdd.classList.add("red")
//to show added class on page
let showOnPage = "Class added";
classRemoveAdd.textContent = `${showOnPage}`;
classRemoveAdd.classList.remove("red");
showOnPage = "Class removed";
classRemoveAdd.textContent = `${showOnPage}`;
// classRemoveAdd.classList.remove("red");

// Activity 5: Event Handling

// Task 9: Add a click event listener to a button that changes the text content of a paragraph.
let btn = document.querySelector("button");
let para = document.querySelector("p");


//using ifelse loop
btn.addEventListener("click",()=>{
    para.textContent = "Button Clicked";
})

// Task 10: Add a mouseover event listener to an element that changes its border color.
let border = document.querySelector(".border");
border.addEventListener("mouseover",()=>{
    border.style.border = "2px solid red";
})
border.addEventListener("mouseleave",()=>{
    border.style.border = "none";
})