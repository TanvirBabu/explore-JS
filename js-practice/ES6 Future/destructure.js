// Destructuring             ***

// array destructuring
// swap variables
// object destructuring
// nested object destructuring
// destructuring function parameters



// array destructuring
let numbers = [10, 20, 30, 40, 50];
let [num1, num2, num3, num4, num5] = numbers;
// let [num1, num2, ...z] = numbers;  // sprat operator (...z)

console.log(num1, num2, num3, num4, num5);
// console.log(z);


// swap variables
let a = 10, b = 50;
[a, b] = [b, a]

console.log(a, b);


// object destructuring
const studentInfo = {
    id: 101,
    fullName: 'Tanvir Hassan',
    age: 24,
    gpa: 4.28,
    language: 'English & Bengali'
}
 const {id, fullName, language} = studentInfo  // this method name object destructuring
console.log(id);
console.log(fullName);
console.log(language);



// destructuring function parameters
const stuInfo = ({fullName, language}) => {
    console.log(`${fullName}, ${language}`)
}

const student = {
    id: 105,
    fullName: 'Reyad Hossain',
    language: 'Arabic'
}

stuInfo(student);