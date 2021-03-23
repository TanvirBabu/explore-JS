// -- Nested Loop

// -- If there is another loop inside a loop! then we call it nested loop.
// -- একটা লুপের ভেতর আরেকটা লুপ থাকলে তখন আমরা সেটাকে বলবো নেস্তেদ লুপ

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5


var n = 5
for (var i = 1; i <= n; i++){
    var result = ''
    for (var j = 1; j <= i; j++){
        result += j + ' '                //sum
    }
    console.log(result)
}


// *
// * *
// * * *
// * * * * 
// * * * * *

var n = 5
for (var i = 1; i <= n; i++){
    var result = ''
    for (var j = 1; j <= i; j++){
        result += '* ' 
    }
    console.log(result)
}


// * * * * *
// * * * * * 
// * * * * * 
// * * * * *
// * * * * *

var n = 6
for (var i = 1; i <= n; i++){
    var result = ''
    for (var j = 1; j <= n; j++){
        result += '* ' 
    }
    console.log(result)
}
