// ForEach()

var arr = [1, 2, 3, 4, 5]

// var sum = 0;

// arr.forEach(function(value, index, arr){
//     // console.log(value, index, arr);
//     sum += value;
// })

// console.log(sum)


// now time to implement...

function implement(arr, cb){
    for (var i = 0; i < arr.length; i++){
        cb(arr[i]);
    }
}

var sum = 0;
implement(arr, function(value){
    sum += value;
});

console.log(sum)