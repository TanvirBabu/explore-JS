// Function Expression, Function Deceleration...
// Function Expression -> একটা ফাংশনকে একটা ভেরিয়েবলের ভিতর রাখা হয় সেটাকেই মুলোত বলা ফাংশন এক্সপ্রেশন. এবং এটা অ্যানোনিমাস হয় এটার কোন নাম থাকেনা।

abc();

function abc(){
    console.log('I am Function'); 
}

// abc();


// newAbc();  // Undefined

// Function Deceleration...
var newAbc = function(){
    console.log('I am new Abc Function')
}

newAbc();

// Creation Phase
// abc = ref
// newAbc = undefined 

// Executional Phase



