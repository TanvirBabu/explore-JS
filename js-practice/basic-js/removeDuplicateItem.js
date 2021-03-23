var num = [2, 5, 3, 7, 6, 3, 2, 66, 98, 65, 12, 5, 13];
var singleNumber = [];

for (var i = 0; i < num.length; i++) {
    var element = num[i];
    var index = singleNumber.indexOf(element);

    if(index == -1){
        singleNumber.push(element);
    }
}

console.log(singleNumber);