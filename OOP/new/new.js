// new keyword
// When we are using new keyword it's make -> Empty-object

var Rectangle = function(width, height){
    this.width = width
    this.height = height
    
    this.draw = function() {
        console.log('I am a new keyword');
        this.printProperties()
    }
    
    this.printProperties = function(){
        console.log('My width is ' + this.width);
        console.log('My height is ' + this.height);
    }
}

// var rect1 = new Rectangle(15, 35)
// rect1.draw()


function myNew(constructor) {
    var obj = {}
    Object.setPrototypeOf(obj, constructor.prototype)
    // apply a policy
    var argsArray = Array.prototype.slice.apply(arguments)
    constructor.apply(obj, argsArray.slice(1))

    return obj
}

var rect2 = myNew(Rectangle, 45, 30)
rect2.draw()