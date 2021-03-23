// Callback & Higher Order Function...


function square (x){
    console.log(`Square of ${x}: ${x * x}`);
}

square(5);

// const y = square; // The (square) value is now moving inside (y)...
// y(6);


function higherOrderFunc(num, cb){
    cb(num);
}

higherOrderFunc(6, square);














