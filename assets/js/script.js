// Access the div with the id 'output'
const outputDiv = document.getElementById('output');  

///const means that it gives the variable a permanent global value
///The 'output, gets my div that i name output

// Log a message to the console
console.log('Hello from the console!');

// Display the same message on the HTML page
outputDiv.innerText = 'Hello from the HTML!';

///


var age = 20;    ///var is another way to create a javascript variable

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// Ternary Example
var result = (age >= 18) ? "You are an adult." : "You are a minor.";
console.log(result);