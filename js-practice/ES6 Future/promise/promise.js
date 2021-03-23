// How to create a promise...        // by: Anisul Islam
// How to use a promise...
// How to run multiple promise - all()
// race()
// Promise chaining


// How to create a promise - pending, resolve, reject
const promise1 = new Promise(function(resolve, reject){
    let completedPromise = true;
    if (completedPromise) {
        resolve('Completed promise 1');
    } else{
        reject('Not completed promise 1');
    }
});


const promise2 = new Promise (function(resolve, reject){
    resolve('Completed promise 2');
});

Promise.all([promise1, promise2]).then(function([res1, res2]){
    console.log(res1, res2);
});
// console.log(promise1)
// promise1
//     .then(function(res){
//         console.log(res);
//     })

//     .catch(function(err){
//         console.log(err);
//     })