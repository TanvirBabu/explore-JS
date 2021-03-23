// Callback & Higher Order Function...


const taskOne = (cb) => {
    console.log('Task1');
    cb();
}

const taskTwo = (cb) => {
    setTimeout(() => {
        console.log('Task2. Data Loading from outside...');
        cb();
    }, 1000)
}


// const taskTwo = function(cb){           // ES5 Function system...
//     setTimeout(function(){
//         console.log(`Task2. Data Loading...`);
//         cb();
//     }, 2000)
// }

const taskThree = (cb) => {
    console.log('Task3');
    cb();
}
const taskFour = (cb) => {
    console.log('Task4');
    cb();
}
const taskFive = () => {
    console.log('Task5');
}


// taskOne(function f1(){
//     taskTwo(function f2(){
//         taskThree(function f3(){
//             taskFour(function f4(){
//                 taskFive();
//             });
//         });
//     });
// });


taskOne(() => {
    taskTwo(() => {
        taskThree(() => {
            taskFour(() => {
                taskFive();
            });
        });
    });
});