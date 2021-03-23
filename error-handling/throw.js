// Error handling -> try, catch, finally, throw
// The throw statement -> create custom errors.

document.querySelector("#checkBtn").addEventListener("click",function(){
    var num = document.querySelector("#numTextField").value;
   
    try{
        if(num < 4){
            throw 'Input is too low'
            
        } else if (num > 8){
            throw 'Input is too high'
        }

    } catch(err){
        console.log(err);
    }

})