// race()

const promise1 = new Promise (function(resolve, reject){
    setTimeout(function(){
        resolve('Completed promise 1');
    }, 2000)
})


const promise2 = new Promise (function(resolve, reject){
    setTimeout(function(){
        resolve('Completed promise 2');
    }, 1000)
});

Promise.race([promise1, promise2]).then(function(res){
    console.log(res);
});
