// variable name = (condition) ? value1:value2 


var n = 10;
var str =''       // This empty string in i need to store n ODD or EVEN number..

if (n % 2 == 0){
    str = 'Even'
} else{
    str = 'ODD'
}

console.log(str)

// Ternary Operator Structure:       condition ? true side : false side
var n = 11;
var str ='';  // This empty string in i need to store Something ..

var result = n % 2 == 0 ? 'Love' : 'Backup';   // Ternary operator Shortcut
console.log(result);


// value get from client 
var age = '';
var result = (age < 18) ? "Too young" : "Old enough";

console.log(result)