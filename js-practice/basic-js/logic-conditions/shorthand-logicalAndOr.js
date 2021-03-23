// --   Here like ( truthy value and falsy value )          important ***    -- tutorial (27) S-lerner

var myName = '';

var fullName = '';

if (myName.length == 0){
    fullName = 'Tanvir Hassan'
} else{
    fullName = myName
}

// SortHand
var myName = '';
//var myName = 'MR. XYZ';

var fullName = myName || 'Tanvir Hassan'
console.log(fullName)



// -- another example
var isOk = true;

if (isOk){
    console.log('Everything is Ok')
}

var isOk = true;

isOk && console.log('Everything is Ok')   // shorthand