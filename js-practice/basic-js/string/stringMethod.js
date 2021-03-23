// JavaScript String Methods

// The two methods, indexOf() and search(), are equal?
// They accept the same arguments (parameters), and return the same value?

// The two methods are NOT equal. These are the differences:

// The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values (regular expressions).





// Finding a String in a String  - indexOf()
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");

console.log(pos)


// Replacing String Content
// The replace() method replaces a specified value with another value in a string:

// Example
str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "Tanvir.me");

console.log(n)


var a = 'I am'
var b = 'Tanvir Hassan'
var c = a.concat(' ', b)

console.log(c)





var a = 'I am'
var b = 'Tanvir Hassan'
var c = a.concat(' ', b)
var d = c.substr(12)            // substr(start, length)

console.log(d)


var a = 'I am'
var b = 'Tanvir Hassan'
var c = a.concat(' ', b)
var d = c.substr(5, 9)           // substr(start, length)

console.log(d)



var a = 'I am'
var b = 'Tanvir Hassan'
var c = a.concat(' ', b)

console.log(c.charAt(5))

console.log(c.startsWith('I'))           //  true
console.log(c.startsWith('I Tanvir'))    //  false


console.log(c.endsWith('n'))           //  true
console.log(c.endsWith('i'))    //  false


var a = 'I am'
var b = 'Tanvir Hassan'

console.log(a.toUpperCase())
console.log(b.toLowerCase())

console.log('     abcdef       ')
console.log('     abcdef       ' .trim())






var a = 'I am'
var b = 'Tanvir Hassan'
var c = a.concat(' ', b)

console.log(c.split(' '))