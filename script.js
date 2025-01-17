// Part 1: JavaScript Basics
// Variables and Data Types
let name = "John Doe";
let age = 25;
let isStudent = true;
let hobbies = ["reading", "coding", "gaming"];
let person = { name: "John", age: 25, isStudent: true };

// Logging the values and types
console.log("Name: " + name + " (Type: " + typeof name + ")");
console.log("Age: " + age + " (Type: " + typeof age + ")");
console.log("Is student: " + isStudent + " (Type: " + typeof isStudent + ")");
console.log("Hobbies: " + hobbies + " (Type: " + typeof hobbies + ")");
console.log("Person: " + JSON.stringify(person) + " (Type: " + typeof person + ")");

// Operators - Simple Calculator
function simpleCalculator() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let operator = prompt("Choose an operation (+, -, *, /):");

    let result;

    // Perform operation based on user input
    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            alert("Cannot divide by zero!");
            return;
        }
    } else {
        alert("Invalid operator!");
        return;
    }

    // Output the result
    alert("Result: " + result);
}

// Functions - greetUser
function greetUser(name) {
    return "Hello, " + name + "!";
}

alert(greetUser("John Doe"));

// Part 2: JavaScript Control Structures
// If Statement - Check eligibility to vote
let userAge = parseInt(prompt("Enter your age:"));
if (userAge >= 18) {
    alert("You are eligible to vote.");
} else {
    alert("You are not eligible to vote.");
}

// Loops - Display numbers 1 to 10 in an ordered list
let ol = document.createElement("ol");
for (let i = 1; i <= 10; i++) {
    let li = document.createElement("li");
    li.textContent = i;
    ol.appendChild(li);
}
document.body.appendChild(ol);

// Part 3: Introduction to the DOM
// Change the text of the <h1> element
document.querySelector("h1").textContent = "JavaScript in Action!";

// Add new <p> inside the dynamic-content <div>
let dynamicContentDiv = document.getElementById("dynamic-content");
let newParagraph = document.createElement("p");
newParagraph.textContent = "This content was added dynamically using JavaScript.";
dynamicContentDiv.appendChild(newParagraph);

