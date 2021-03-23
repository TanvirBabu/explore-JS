// Note the difference between (x==y) and (x===y).
// Also note that comparing (two JavaScript objects will always return false).


// Example
var testObj = new String('Tanvir');
console.log(typeof testObj)


// Example
var x = new String("John");             
var y = new String("John");

console.log(x == y)   // (x == y) is false because x and y are objects



// Example 1
var x = "John";        // x is a string

var y = new String("John");  // y is an object
console.log(y)
console.log(typeof y)

// Example 2
var x = "John";             
var y = new String("John");
console.log(x == y)   // (x == y) is true because x and y have equal values


// Example 3
var x = "John";             
var y = new String("John");

console.log(x === y) // (x === y) is false because x and y have different types (string and object)
