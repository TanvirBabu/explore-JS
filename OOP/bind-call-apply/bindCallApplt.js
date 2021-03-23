// Bind() - Call() - Apply()


// Call, Apply method -> Call, Apply method almost same.
function myFunc() {
    console.log(this);  // This this give me a window object
    console.log(this.a + this.b)
}

myFunc.call({a: 35, b: 45})
myFunc.apply({})
// myFunc();


function myFunc2(c, d) {
    console.log(this);  // This this give me a window object
    console.log(this.a + this.b + c + d)
}

myFunc2.call({a: 35, b: 45}, 10, 5)
myFunc2.apply({a: 400, b: 250}, [10, 5])


// Bind method
function myFunc3(c, d) {
    console.log(this);  // This this give me a window object
    console.log(this.a + this.b + c + d)
}

var testBind = myFunc3.bind({a: 7, b: 3})
testBind(5, 7);
