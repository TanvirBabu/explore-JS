// -- String in JavaScript

// What is String?

// "Hello World"
// 'Welcome to JavaScript World'

var str = 'Something'             // String Literal
var str2 = String('Something')    // String Constructor

console.log(str2)


var n = 20
var str = n + ''            // convert number to string
console.log(str)

var n = 20
var str = n.toString()     // convert number to string
console.log(str)

var n = 20
var str = String(n)        // convert number to string
console.log(str)









// Extracting String Parts
// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)