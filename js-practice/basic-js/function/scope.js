// Scope Function

// একটা ভেরিয়েবল ডিক্লেয়ার করার পরে সে ভেরিয়েবলটা কোথায় ডিক্লেয়ার করলে কোথায় থেকে সেটাকে এক্সেস নেওয়া যাবে, এটাই কন্ট্রোল করে থাকে স্কোপ..
// After declaring a variable, if he declares the variable, from where it can be accessed, this is controlled by the scope.


function test(n) {
    function a(n) {
        return n % 3 === 0;
    }
    function b(n) {
        return n % 5 === 0;
    }
    if (a(n) && b(n)) {
        console.log(n + ' is divisible by both 3 and 5')        
    } else {
        console.log('Not a valid number')
    }
}

test(10)
test(15)