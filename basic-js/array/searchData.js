// -- Search Data


var arr = [3, 6, 2, 5, 8, 14, 19, 25, 28, 35]

var find = 14
var isFound = false

for (var i = 0; i < arr.length; i++){
    if (arr[i] == find){
        console.log('Data Found at Index ' + i)
        isFound = true
        break;
    }
}

if (!isFound){
    console.log('Data not Found')
}