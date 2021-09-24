console.log(111, 222, 333) // Console.log 同时输出多个值，用于区分

const name = 'Will Robinson';
console.warn(`Danger ${name}! Danger!`);

x = "hello world"; // Strings of text in quotation marks.
x = 'JavaScript'; // Single quote marks also delimit

console.log("*********** Object **************")

let book = { // Objects are enclosed in curly braces. 
    topic: "JavaScript", // The property "topic" has value "JavaScript." 
    edition: 7 // The property "edition" has value 7 
}; // The curly brace marks the end of the object. 
// Access the properties of an object with . or []: 
book.topic // => "JavaScript" 
book["edition"] // => 7: another way to access property values. 
book.author = "Flanagan"; // Create new properties by assignment. 
book.contents = {}; // {} is an empty object with no properties.
// Conditionally access properties with ?. (ES2020): 
book.contents?.ch01?.sect1 // => undefined: book.contents has no ch01 property.

let primes = [2, 3, 5, 7]; // An array of 4 values, delimited with [ and ]. 
primes[0]

console.log("*********** Function **************")

// Functions are parameterized blocks of JavaScript code that we can invoke. 
function plus1(x) { // Define a function named "plus1" with parameter "x" 
    return x + 1; // Return a value one larger than the value passed in 
} // Functions are enclosed in curly braces 
plus1(y) // => 4: y is 3, so this invocation returns 3+1 
let square = function (x) { // Functions are values and can be assigned to vars
    return x * x; // Compute the function's value 
}; // Semicolon marks the end of the assignment. 
square(plus1(y)) // => 16: invoke two functions in one expression

// Arrow functions
const plus1 = x => x + 1; // The input x maps to the output x + 1 
const square = x => x * x; // The input x maps to the output x * x 
plus1(y) // => 4: function invocation is the same 
square(plus1(y)) // => 16


console.log("*********** Class **************")

class Point { // By convention, class names are capitalized. 
    constructor(x, y) { // Constructor function to initialize new instances. 
        this.x = x; // This keyword is the new object being initialized. 
        this.y = y; // Store function arguments as object properties. 
    } // No return is necessary in constructor functions. 
    distance() { // Method to compute distance from origin to point. 
        return Math.sqrt( // Return the square root of x² + y². 
            this.x * this.x + // this refers to the Point object on which 
            this.y * this.y // the distance method is invoked.
        );
    }
}

// Use the Point() constructor function with "new" to create Point objects 
let p = new Point(1, 1); // The geometric point (1,1). 
// Now use a method of the Point object p 
p.distance() // => Math.SQRT2