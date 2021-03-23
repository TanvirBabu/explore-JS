// Function Composition...

// একটা / প্রথম ফাংশনের ইনপুট আকারে যদি সেকেন্ড ফাংশনের আউট পুট দেওয়া যায় তখন-ই সেটাকে আমরা কম্পোজিশন বলতে পারি...


function print(inp) {
    console.log(inp);
}

function multiplyByFive(n) {
    return n * 5;
}

function add(a, b) {
    return a + b;
}

print(multiplyByFive(add(3, 5)));