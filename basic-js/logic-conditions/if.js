// Here need to conditional operator, > <

// if (condition / logic)

// If the condition is true, No matter what the codes are inside of {}, everything will be executed.
// And if for some reason the condition false, No code will be executed inside the {} Charlie backed.

var a = 25;
var b = 10;

if (a > b) {
    console.log('A is greater than B')

}


var a = 15;
var b = 30;

if (a < b) {
    console.log('B is greater than A')

}


// --                  Odd or Event Number

var i = 5;

if (i % 2 === 0){
    console.log(i + ' is Event Number');
}

if (i % 2 === 1){
    console.log(i + ' is Odd Number');
}