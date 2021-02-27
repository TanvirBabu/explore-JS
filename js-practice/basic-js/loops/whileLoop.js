// -- While Loop

// --  Example 1
var i = 10;
while (i < 20){
    console.log(i);
    i++
}


// --  Example 2  ***
var isRunning = true

while (isRunning){
    var randomNumber = Math.floor(Math.random() * 10 + 1)
    if (randomNumber == 9){
        console.log('Winner Winner Chicken Dinner')
        isRunning = false
    } else{
        console.log('You have got ' + randomNumber)
    }
}