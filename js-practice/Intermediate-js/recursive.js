// Recursive Function ...

// What a recursive function?
// So recursive function is a function that can call itself by itself and solve a problem by calling itself.
// সো রিকার্সিভ ফাংশন হচ্ছে এমন একটি ফাংশন - যে ফাংশন টা নিজেই নিজেকে কল করতে পারে এবং নিজেই নিজেক কল করার মাধ্যমে একটা প্রবলেম সলভ করে থাকে।

// return 10 time output
function sayHi(n) {
    if (n === 0){
        return
    }
    console.log('Hi, I am calling');
    sayHi(n - 1); // if i'm not using -1 it's goes to be infinity. 
}

sayHi(10);

// sum +
function sum(n){
    if (n === 1){
        return 1
    }
    return n + sum(n-1);
}

console.log(sum(5));


// 5 Factorial
function fact(n) {
    if (n === 1){
        return 1
    }
    return n * fact(n-1);
}

console.log(fact(5));
console.log(fact(4));



// The sum of array elements
var arr = [1, 2, 3, 4, 5];

function sumOfArray(arr, lastIndex) {
    if (lastIndex < 0){
        return 0
    }
    return arr[lastIndex] + sumOfArray(arr, lastIndex - 1)
}

console.log(sumOfArray(arr, arr.length - 1));