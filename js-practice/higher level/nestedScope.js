// Nested Function
// When another Scope is work inside a Scope - Then it is called a nested nested scope.

// We know that one way to creat the scope of JavaScript is functions declaration.


var x = 55;

function test() {
    console.log(x);
    function nested() {
        var y = 15;
        console.log(y);
    }
    nested();
}

test();