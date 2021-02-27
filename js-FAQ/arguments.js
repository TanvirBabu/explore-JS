// -- Arguments and deal with unknown number of arguments

function addNumbers(num1, num2) {
    var sum = 0
    for (var i = 0; i < arguments.length; i++) {
        var element = arguments[i];
        sum += element
    }
    return sum
}

var result = addNumbers(3, 5, 8, 15)
console.log(result)