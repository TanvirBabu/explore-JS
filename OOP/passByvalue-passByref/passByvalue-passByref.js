// Pass By Value - Pass By Reference
// Call By Value - Call By Reference


var n = 10;

function change(n) {
    n = n + 100;
    console.log(n);
}

change(n) // When we are calling from inside result -> 110
console.log(n) // When we are calling from outside result -> 10


// -----------------------------------------------------------------------------

var obj = {
    a: 10,
    b: 20
}

function changeMy(obj) {
    obj.a = obj.a + 100;
    obj.b = obj.b + 100;

    console.log(obj)
}

changeMy(obj)
console.log(obj)