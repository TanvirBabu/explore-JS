// Example 1

var nums = [3, 6, 12, 5, 15, 26, 30, 35, 105]

for (var i = 0; i < nums.length; i++) {
    var num = nums[i];
    if (nums % 2 == 0) {
        console.log(nums, ': is EVEN Number')
    } else {
        console.log(nums, ': is ODD Number')  // result * 2  all odd number going to be double..
    }
    
}


// // Example 2

var fndAge = [22, 25, 23, 25, 26]

for (var i = 0; i < fndAge.length; i++) {
    var age = fndAge[i];
    if (age % 2 == 0) {
        console.log(age, ': is EVEN Number')
    } else {
        console.log(age, ': is ODD Number')  // result * 2  all odd number going to be double..
    }
}


// -- Now we will put two similar ones inside a function


// function evenIfy_all(nums) {
//     for (var i = 0; i < nums.length; i++) {
//         var num = nums[i];
//         if (num % 2 == 0) {
//             console.log(num,  ': is EVEN Number')
//         } else{
//             console.log(num, ': is ODD Number')
//         }
//     }
// }

// var nums = [3, 6, 12, 5, 15, 26, 30]
// evenIfy_all(nums)

// var fndAge = [22, 25, 23, 26]
// evenIfy_all(fndAge)