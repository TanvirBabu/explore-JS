// Closure

// Closure is when a function is able to remember and access it's lexical scope even when that function executing outside it's lexical scope...


// able to remember and access it's lexical scope.
function test() {
    var mgs = 'I am Learning Lexical Scope and Closure';

    function sayMsg() {
        console.log(mgs);
    }

    sayMsg();
}

test();



// when that function executing outside it's lexical scope.
function test() {
    var mgs = 'I am Learning Lexical Scope and Closure';

    return function() {
        console.log(mgs);
    }
}

var sayMgs = test();
sayMgs();