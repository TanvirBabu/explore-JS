// Hoisting 

// হোস্টিং এর মানে হচ্ছে কোন ভেরিয়েবল কোথায় ডিক্লেয়ার হবে- কোথায় থেকে এক্সেসিভ হবে. কখন তার ভেলু এসাইন হবে..................


var a = 100;
// newPrint(a);

print(10);

var newPrint = print;
newPrint(45);

function print(a) {
    console.log(a);
}

print(a)

// Creation Phase 
// a = undefined
// newPrint = undefined
// print = ref


// Executional Phase
// a = 100
// newPrint = ref