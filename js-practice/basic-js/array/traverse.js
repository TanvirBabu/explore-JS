// -- Array Traverse


var arr = [4, 6, 5, 3, 7, 9]

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

// ------------------------------------------- end



var arr2 = [4, 6, 5, 3, 7, 9]             // with every 2 +

for (var i = 0; i < arr2.length; i++) {
    arr2[i] = arr2[i] + 2
}
console.log(arr2)

// ------------------------------------------- end




var arr3 = [3, 5, 8, 7, 15, 18, 25]           // sum

var sum = 0
for (var i = 0; i < arr3.length; i++){
    sum += arr3[i]
}

console.log(sum)

// ------------------------------------------- end


var arr4 = [4, 5, 6, 9, 8, 13, 16]    // EVEN Number

var sum = 0

for (var i = 0; i < arr4.length; i++){
    if(arr4[i] % 2 == 0){
        console.log(arr4[i])
    }
}


// ------------------------------------------- end