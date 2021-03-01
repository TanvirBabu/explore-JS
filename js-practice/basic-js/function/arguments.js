// Arguments
// Three processes of function - inputSection, processingSection, outputSection.
// Input Section


// Addition
function add(a, b) {
    var result = a + b;
    console.log(result)
}
add(10, 20)

// Subtraction
function sub(a, b) {
    var result = a - b;
    console.log(result)
}
sub(35, 15)

// Multiplication
function mul(a, b) {
    var result = a * b;
    console.log(result)
}
mul(6, 7)

// Division
function div(a, b) {
    var result = a / b;
    console.log(result)
}
div(20, 5)                 // ----------------------------------- ||







//                                one by one (sum +)
var arr1 = [1, 2, 3]
var arr2 = [4, 5, 6]
var arr3 = [7, 8, 9]

// var sum1 = 0;
// for (var i = 0; i < arr1.length; i++) {
//     sum1 += arr1[i];
// }

// console.log(sum1)

// var sum2 = 0;
// for (var i = 0; i < arr2.length; i++) {
//     sum2 += arr2[i];
// }

// console.log(sum2)

// var sum3 = 0;
// for (var i = 0; i < arr3.length; i++) {
//     sum3 += arr3[i];
// }

// console.log(sum3)


// Short way, we can use function method for making short code.
function sumOfArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    console.log(sum);
}

sumOfArray(arr1);
sumOfArray(arr2);
sumOfArray(arr3);
