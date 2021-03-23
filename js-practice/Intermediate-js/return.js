function greet(msg){
    function greeting(name) {
        return msg + ' ' + name + '!'
    }
    return greeting
}

var gm = greet('Good morning');
var gn = greet('Good night');
var bye = greet('Good bye babu!')
// console.log(typeof gm)
var message = gm('Tanvir');
console.log(message);
console.log(gn('Hassan'));
console.log(bye('see u tomorrow'));




// base * function
function base(b) {
    function power(n) {
        var result = 1;
        for (var i = 0; i < b; i++){
            result *= n;
        }
        return result
    }
    return power
}

var base10 = base(10);
console.log(base10(2))


// up base function shortcut
function base(b) {
    return function(n) {
        var result = 1;
        for (var i = 0; i < b; i++){
            result *= n;
        }
        return result;
    }
}

var base10 = base(10);
console.log(base10(2))

var base5 = base(5);
console.log(base5(2))
console.log(base5(3))
console.log(base5(4))
console.log(base5(5))