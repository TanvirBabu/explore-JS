// -- Array [ ]

// What is array? -  Array is a Data Structure where we can organize multiple data under a single variable

// Array Declare ....

var arr = [1, 2, 3, 4, 5]

console.log(arr)
console.log(arr[1])
console.log(arr[4])



// -------------------------------------- end


var arr = [1, 2, 3, 4, 5]     // insert data
arr[5] = 6
arr[10] = 11

console.log(arr)
console.log(arr[7])    // ans: undefined
console.log(arr.length)


// -------------------------------------- end


var arr2 = Array( 10, 20, 30, 40, 50)   // Constructor way

console.log(arr2)