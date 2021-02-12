// --   Here like ( truthy value and falsy value )          important ***    -- tutorial (27) S-lerner

//var name = '';

//var fullName = '';

// if (name.length == 0){
//     fullName = 'Tanvir Hassan'
// } else{
//     fullName = name
// }

// --                           SortHand
var name = '';
//var name = 'MR. XYZ';

var fullName = name || 'Tanvir Hassan'
console.log(fullName)



// -- another example

//var isOk = true;

// if (isOk){
//     console.log('Everything is Ok')
// }

var isOk = true;

isOk && console.log('Everything is Ok')   // shorthand