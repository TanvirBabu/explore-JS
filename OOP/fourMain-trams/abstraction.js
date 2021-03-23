// What is Abstraction

// Abstraction is one of the key concepts of Object Oriented Programming (OOP) languages. It's main goal is to handle complexity by hiding unnecessary details from the user. That enables the user to implement more complex logic on top the provided abstraction without understanding or even thinking about all the hidden complexity.

// Privet Properties in JavaScript
// var Rectangle = function(width, height){
    
//     var position = {
//         x: 56,
//         y: -100
//     }
    
//     this.width = width
//     this.height = height

//     var printProperties = function(){
//         console.log('My width is ' + this.width);
//         console.log('My height is ' + this.height);
//     }.bind(this)

//     this.draw = function() {
//         console.log('I am a Abstraction');
//         printProperties()
//         console.log('Position: X= ' + position.x + ' Y= ' + position.y)
//     }
// }

// var rect = new Rectangle(45, 30)
// rect.draw()

// Getter, Setter in JavaScript
var Rectangle = function(width, height){
   
    var position = {
        x: 56,
        y: -100
    }

    this.width = width
    this.height = height

    var printProperties = function(){
        console.log('My width is ' + this.width);
        console.log('My height is ' + this.height);
    }.bind(this)

    // this.getPosition = function(){  // this system for saw position value
    //     return position 
    // }

    this.draw = function() {
        console.log('I am a Abstraction');
        printProperties()
        console.log('Position: X= ' + position.x + ' Y= ' + position.y)
    }

    Object.defineProperty(this, 'position', { // inside of object privet property access from outside use get method
        get: function(){
            return position
        },
        set: function(value){ // for set privet property use set method
            position = value
        }
    })
}

var rect = new Rectangle(45, 30)
rect.draw()
// console.log(rect.getPosition())  // 47-49 line

rect.position = {
    x: 456,
    y: -123
}
console.log(rect.position)

