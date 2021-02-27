// -- string Method

var a = 'I am'
var b = 'Tanvir Hassan'
var c = a.concat(' ', b)

console.log(c)





var a = 'I am'
var b = 'Tanvir Hassan'
var c = a.concat(' ', b)
var d = c.substr(12)

console.log(d)


var a = 'I am'
var b = 'Tanvir Hassan'
var c = a.concat(' ', b)
var d = c.substr(5, 9)

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