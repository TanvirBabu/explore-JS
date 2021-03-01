// Arguments


// function test(a, b, c) {
//     console.log(arguments);
// }

// test(10, 20, 30);



function test(a, b, c) {
    // console.log(arguments)
    for (var i = 0; i < arguments.length; i++){
        console.log(arguments[i]);
    }
}

test(10, 20, 30);



//---------------------------------------  (sum+)

function addAll (){
    var sum = 0;
    for (var i = 0; i < arguments.length; i ++){
        sum += arguments[i]
    }
    console.log(sum);
    
}

addAll(1, 2, 3, 4);
addAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);