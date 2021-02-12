// -- Arithmetic Operators: + - * / %  ++ --                    *(tutorial 15 stack lerner)

// Modulus % (Remainder) Example
var a = 10;
var b = 3;

console.log(a % b)  // Ans 1

var a = 11;
var b = 3;

console.log(a % b)  // Ans 2

var a = 11;
var b = 6;

console.log(a % b)  // Ans 5

// ------------------------------------------------------------

//-- Increment operators (++) 2 types
// 1) - Pre Increment operators 2) Post Increment operators

var a = 10
var b = 20
// 1) - Pre Increment operators (++a)
// 2) Post Increment operators (a++)

console.log(++a)

console.log(b++)
console.log(b)

// ------------------------------------------------------------

// -- Assignment Operator (=)

var c = 10;  // I need d value in c
var d = 20;

//c = c+d;
c += d    // shortcut

console.log(c);  // Ans: 35

//c = c-d;
c -= d    // shortcut

console.log(c);  // Ans: 35

// all try
c += d;
console.log(c);  // Ans: 30

c -= d;
console.log(c);  // Ans: 10

c *= d;
console.log(c);  // Ans: 200

c /= d;
console.log(c);  // Ans: 10

c %= d
console.log(c);  // Ans: 10
   
// ------------------------------------------------------------

// -- Comparison operator, ( =, ==) When we are using Comparison Operator then Comparison Operator will return boolean true or false...

var e = 10;
var f = 20;

console.log(e == f)  //ans: false

var e = 20;
var f = 20;

console.log(e == f)  //ans: true

//                    -----------------------

// (!) is it equal?

var g = 10;
var h = 20;

console.log(g != h); // ans: true
console.log(g == h); // ans: false
console.log(g > h); // ans: false
console.log(g < h); // ans: true
console.log(g >= h); // ans: false
console.log(g <= h); // ans: true

var i = 10;
var j = 20;
console.log(i === j); // ans: false
console.log(i !== j); // ans: true

// ------------------------------------------------------------

// -- Logical Operator *** (&&) (||) (!)

// (&&) this operator use to mark 2 condition.... aether - a condition goes to be true and b condition also goes to be true..
// (||) If there are two containers a and b - If a or b one of the true he will return true.
// (!) this operator use to mark 2 condition....

// ------------------------------------------------------------

// Bitwise operator (&) (|) (~) (^) (<<) (>>) - 
// Bitwise operator for who? -Those who know how to work with binary systems Bitwise operators will be useful for them.