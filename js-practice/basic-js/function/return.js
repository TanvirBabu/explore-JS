// Return keyword
// So keep in mind that once the return statement is called, it will never be called again, no matter what is below it.
//The function will break from where it will return. The executed will break
//So one thing to keep in mind when returning, only I can return at the end of my function declaration. I will never return until then. The rest of the logic below will not exit ..

function addAll(){
    var sum = 0;
    for (var i = 0; i < arguments.length; i ++){
        sum += arguments[i]
    }
    return sum
}

console.log(addAll(1, 2, 3))

var result = addAll(1, 2, 3);  // variable a store kor
console.log(result);


// This function will take the person's name ad email address, 
// Will return as input the object of that person.
function person(name, email) {
    return {
        name: name,
        email: email
    }
}

var p1 = person('Tanvir', 'tanvirhb.info@gmail.com');
console.log(p1);