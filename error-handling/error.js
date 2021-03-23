// Error handling -> try, catch, finally, throw
// try ... catch handle run time errors (program witch is )
// But syntax will not handle the error
// Error object
// The finally statement -> execute code, after try and catch



// try - catch
try{
    // code test
    alert(`Hello world!`);
    alert(`I'm a programmer`);

} catch(err){
    // handle error
    alert(`Inside catch block`);
}


// try - catch
try{
    // code test
    alert(`Hello world!`);
    alert(x)  // this one is error
    alert(`I'm a programmer`);

} catch(err){
    // handle error
    //alert(`Inside catch block`);

    console.log(`Inside catch block`);
    console.log(err)
    console.log(err.name)
    console.log(err.message)
}


// try - catch and finally
try{
    // code test
    alert(`Hello world!`);
    alert(x)  // this one is error
    alert(`I'm a programmer`);

} catch(err){
    // handle error
    //alert(`Inside catch block`);

    console.log(`Inside catch block`);
    console.log(err)
} finally{
    alert(`I'm a programmer`)
}