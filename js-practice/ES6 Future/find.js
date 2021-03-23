// Array.prototype.find()

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = num.find(function(value, index, arr){
    return value > 4
})

console.log(result);



// first even number
let numbers = [5, 55, 14, 7, 78];

const evenNumber = (value, index, arr) => {
    if (value % 2 === 0)
    return value;
}
let firstEvenNumber = numbers.find(evenNumber)

console.log(firstEvenNumber)