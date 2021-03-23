// The  Number() Method
// Number() can be used to convert JavaScript variables to // Numbers:

// Example
// Number(true);          // returns 1
// Number(false);         // returns 0
// Number("10");          // returns 10
// Number("  10");        // returns 10
// Number("10  ");        // returns 10
// Number(" 10  ");       // returns 10
// Number("10.33");       // returns 10.33
// Number("10,33");       // returns NaN
// Number("10 33");       // returns NaN
// Number("John");        // returns NaN



// The toString() Method
var x = 123;

x.toString();            // returns 123 from variable x

(123).toString();        // returns 123 from literal 123

(100 + 23).toString();   // returns 123 from expression 100 + 23

console.log(x)