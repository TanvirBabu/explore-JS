// Map - Filter


// map ...
var num = [2, 3, 4, 5]
var squareNumber = num.map(function(value, index, arr){
    return value * value;
})

console.log(squareNumber)
console.log(num)


// filter ...
var num = [ 3, 6, 9, 2, 7, 15, 18, 26, 57, 105, 165]
var newNumber = num.filter(function(value, index, arr){
    return value > 10;
})

console.log(newNumber)
console.log(num)