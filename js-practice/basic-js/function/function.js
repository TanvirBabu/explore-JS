// Function
// Three processes of function - inputSection, processingSection, outputSection.
// Parameter () means simple var declaring.
// As we know from the declaration of a function, declaring a function does not mean that a code line inside that function will not be executed until this function is called.
// What will happen?
// No


// Addition 
function add() {
    console.log('Addition (+)');
}
add()

// Subtraction
function sub() {
    console.log('Subtraction (-)');
}
sub()

// Multiplication
function mul() {
    console.log('Multiplication (*)');
}
mul()

// Division
function div() {
    console.log('Multiplication (/)');
}
div()



// ------------------------------------------------------------------------------------ ||


function myFunc() {
    console.log('Hello! World');  // I want this article to be printed ten times.
}

for (var i = 0; i < 10; i++) {
    myFunc();
}