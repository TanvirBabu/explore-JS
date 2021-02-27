var num = [12, 21, 32, 21, 32, 43, 32, 21, 32, 42];
var temp = [];

for (var i = 0; i < num.length; i++) {
    var element = num[i];
    if(element % 2 == 0){
        temp.push(element)
        console.log(temp)
    }
}


function myFunc(number) {
    var temp = [];
    for (var i = 0; i < number.length; i++) {
        var element = number[i];
        if(element % 2 == 0){
            temp.push(element)
            console.log(temp)
        }
    }
    return temp
}

var a = [82, 31, 42, 32, 43];
var result = myFunc(a)
console.log(result)