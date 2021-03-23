// Function Are Object

var Rect = new Function('width', 'height', `this.width = width
    this.height = height

    this.draw = function() {
        console.log('I am a Factory Pattern');
        this.printProperties()
    }

    this.printProperties = function(){
        console.log('My width is ' + this.width);
        console.log('My height is ' + this.height);
    }`
)

var rect = new Rect(4, 5);
console.log(rect);