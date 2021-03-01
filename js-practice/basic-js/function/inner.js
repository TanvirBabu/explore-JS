// Inner function / Nested function

// When we use a function inside a function, we call it an inner function.
// What we can do in one inner function - we can do so in another inner function ...
// As we know from the declaration of a function, declaring a function does not mean that a code line inside that function will not be executed until this function is called.

// What will happen?
// No!

// Example 1
function something(greet, name) {
    function sayHi() {
        console.log(greet, name)
    }
    sayHi()
}

something('Good morning 😍', 'Tanvir Bro');




// Example 2
function something(greet, name) {
    function firstName() {
        if (name){
            return name.split(' ')[0]

        } else {
            return ''
        }
    }
   var message = greet + ' ' + firstName()
   console.log(message)
}

something('Good morning 😍', 'Hassan Babu');