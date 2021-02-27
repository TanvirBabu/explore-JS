// -- For Loop

// -- Example 1
for (var i = 5; i < 15; i++){
    console.log((i + 1) +' Tanvir Hassan')       // Let the value of (i) come serial wise. that's way i + 1
}


// -- Example 2
for (var i = 1; i < 10; i++){
    console.log(i)
}


// -- Example 3, If tell me 1 - 30 in i can print only ODD number. so ODD condition logic
for (var i = 1; i < 30; i++){
    if(i % 2 == 1){
        console.log(i + ' is ODD number')
    }
}


// -- Example 4, If tell me 1 - 30 in i can print only EVEN number. so ODD condition logic
for (var i = 0; i < 30; i++){
    if(i % 2 == 0){
        console.log(i + ' is EVEN number')
    }
}


// -- Example 5, If tell me 1 - 10 sum    ***
var sum = 0;

for(var i = 1; i <= 10; i++){
    console.log(sum + ' + ' + i + ' = ' + (sum+i))
    sum += i                                                // sum
}

console.log('result = ' + sum)