// -- Continue Statement       - it's mean Skip

// 1 2 3 4 5 6 7 8 9     i want to skip 3, 7

for (var i = 0; i < 10; i++){
    if (i == 3 || i == 7){
        continue
    } else{
        console.log(i)
    }
}