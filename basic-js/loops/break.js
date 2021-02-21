// -- Break Statement

while (true){
    var randomNumber = Math.floor(Math.random() * 10 + 1)
    if (randomNumber == 9){
        console.log('Winner Winner Chicken Dinner')
       break
    } else{
        console.log('You have got ' + randomNumber)
    }
}



for (var i = 1; 1 < 10; i++){
    if(i % 5 == 0){
        break
    } else {
        console.log(i)
    }
}