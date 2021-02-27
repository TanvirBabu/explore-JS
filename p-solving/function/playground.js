//  Create a Function


//  Normal Function
function square() {
    var num = 5;
    var result = num * num

    console.log(result)
}

square()

// -- add function
function addition(x, y) {
    var result = x + y;

    console.log('sum = ' + result + '<br>')
}

// -- sub function
function subtraction(x, y) {
    var result = x - y;

    console.log('sub = ' + result + '<br>')
}


addition(15, 25);
subtraction(50, 25)



// return Function 

function square(num1, num2) {
    var result = num1 * num2;

    return result;
}

console.log(square(5, 6))