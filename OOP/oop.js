// OOP: Object Oriented Programming 

// OOP: Object Oriented is Just a Theory

// OOP: Object Oriented Programming is a programming paradigm based on the concept of 'Objects', which can contain data, in the from of fields (often known as attributes), and code, in the from of procedures (often known as methods). [Source - Wikipedia]



// Object Oriented

var rect = {
    width: 10,
    height: 20,

    calculateArea: function(){
        return this.width * this.height
    },
    calculateRange: function(){
        return 2 * (this.width + this.height)
    }
}


var area = rect.calculateArea();
calculateArea()

var area = rect.calculateRange();
calculateRange()