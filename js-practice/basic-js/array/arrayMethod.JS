// -- Array Method

var arr = [3, 6, 8, 5]
//var arr2 = [5, 10, 15, 20]

console.log(arr)
console.log(arr.join(' '))
console.log(arr.join(','))
console.log(arr.join(', '))
console.log(arr.join(' | '))
console.log(arr.join(' * '))

console.log(arr.fill('Tanvir'))
console.log(arr.fill(true))

console.log(Array.isArray(arr))



var con = arr.concat(arr2)

console.log(con)

// ---------------------------------------------------- Array.from

var arr2 = Array.from(arr)

console.log(arr2)






// ---------------------------------------------------------- end


var a = [1, 2]
var b = a

b[0] = 5

console.log(a)



var a = [1, 2]
var b = Array.from(a)

b[0] = 5

console.log(a)
console.log(b)