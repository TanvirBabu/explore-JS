// -- Call Back Function

function explain_callback (name, age, task){
    console.log('Hello ', name)
    console.log('Your Age is:', age)
    // task()
}

function washHand() {
    console.log('Wash hand with soap')
}

function takeShower() {
    console.log('Take Shower')
}

function scrollFb() {
    console.log("Scroll facebook but don't like any post")
}

explain_callback('Tanvir', 17, washHand)
explain_callback('Hassan', 13, takeShower)
explain_callback('Babu', 21, scrollFb)