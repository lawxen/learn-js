let book = { // Objects are enclosed in curly braces. 
    topic: "JavaScript", // The property "topic" has value "JavaScript." 
    edition: 7 // The property "edition" has value 7 
}; // The curly brace marks the end of the object. 
book.contents?.ch01?.sect1
// book.contents?.ch01?.sect1 // => undefined: book.contents has no ch01 property.