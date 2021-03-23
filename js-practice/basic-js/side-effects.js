//Example 
var n = 10;

function change() {
    n = 100;
}

change()
console.log(n);



//Example
var point = {
    x: 45,
    y: 30
}

function printPoint(point) {
    point.x = 100;
    point.y = 200;

    console.log(point);
}

printPoint(point)