// Constructor Pattern

var Rectangle = function(width, height){
    this.width = width
    this.height = height
    
    this.draw = function() {
        console.log('I am a Factory Pattern');
        this.printProperties()
    }
    
    this.printProperties = function(){
        console.log('My width is ' + this.width);
        console.log('My height is ' + this.height);
    }
}


var rect1 = new Rectangle(15, 35)
rect1.draw()