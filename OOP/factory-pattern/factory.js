// Factory Pattern

var createRect = function(width, height){
    return {
        width: width,
        height: height,
    
        draw: function() {
            console.log('I am a Factory Pattern');
            this.printProperties()
        },
    
        printProperties: function(){
            console.log('My width is ' + this.width);
            console.log('My height is ' + this.height);
        }
    }
}

var rect1 = createRect(10, 15)
rect1.draw();

var rect2 = createRect(20, 35)
rect2.draw();