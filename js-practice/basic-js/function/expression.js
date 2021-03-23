// Expression 
// Don't think that JavaScript function is just a statement. Because in JavaScript the function adds like a value.
// The function adds value again, How could it possible ?

// Yea bro 😎 it's possible....
// Because we can also write a function through expression.

// How to declare a function as an expression....
var addition = function add(a, b) {
    return a + b
}

addition(25, 35)
// console.log(addition(25, 35));
 

// This way, the function declaration that can be kept inside a variable is basically called function express ...


// Anonymous Function
setTimeout(function (){
    console.log("I'm a Full stack Web Developer and passionate about programming.");

}, 2000)   // 2000 means - After 2 seconds the text will print

// Such systems would never be possible, Unless we could use function expressions.



var another = addition;
console.log(another(7, 8));