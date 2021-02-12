// logical Operators only used when we have 2 or more condition and result come from both of their Participation.

// -- 3 logical Operator  (&&- and operator)  (||- or operator)  (!- not operator)     -- tutorial (25) S-lerner


// A && B                  // &&- and operator Example 
// true && true = true
// true && false = false
// false && true = false
// false && false = false


// A || B                  // ||- or operator Example 
// true || true = true
// true || false = true
// false || true = true
// false || false = false


var a = 10;
var b = 20;
var c = 30;
var d = 40;

// var a = 30;
// var b = 20;
// var c = 30;
// var d = 40;

// --                                                          &&- and operator Example   
if (a > b && c > d){
    console.log('A is greater than B and C is greater than D')
} else{
    console.log('At least one condition is false')
}

// --                                                          ||- or operator Example
if (a > b || c > d){
    console.log('A is greater than B or C is greater than D')
} else{
    console.log('At least one condition is false')
}

// --                                                           !- not operator Example
var check = !(a > b)
console.log(check);




