var students = [
    {
        id: 103,
        name:'Tanvir Hassan',
        gpa: 4.26
    },
    {
        id: 105,
        name:'Shoma Hassan',
        gpa: 3.56
    },
    {
        id: 106,
        name:'Riyad Hossain',
        gpa: 3.28
    },
    {
        id: 109,
        name:'Ruma Akter',
        gpa: 2.86
    },
]

// console.log(students);


// i want to see only gpa...

// function studentGpa() {
//     return students.filter(function(value, index, arr){
//         return value.gpa > 3
//     })
// }

// console.log(studentGpa());


// i want to see name...
function studentName() {
    return students.filter(function(value, index, arr){
        return value.gpa > 3
    }).map(function(value, index, arr){
        return value.name
    })
}

console.log(studentName());