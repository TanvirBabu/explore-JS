// For vs Foreach function
// In the case of foreach we get 3 things -> value, index, arr
// Array.forEach()
// The forEach() method calls a function (a callback function) once for each array element.


var numbers = [10, 20, 30, 40]

for (var i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}


// foreach function
var numbers = [10, 20, 30, 40];

numbers.forEach(function(value){
    console.log(value);
})

// foreach (sum+)
var numbers = [10, 20, 30, 40];
var sum = 0;

numbers.forEach(function(value, index, arr){
    sum += value;
})

console.log(`Total = ${sum}`);


// // Square *
var numbers = [10, 20, 30, 40];

var squareNumber = [];
numbers.forEach(function(value, index, arr){
    squareNumber.push(value * value)
})

console.log(squareNumber);



// foreach employment my self
var numbers = [10, 20, 30, 40]

function myFunc(numbers) {
    for (var i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }
}

myFunc(numbers)