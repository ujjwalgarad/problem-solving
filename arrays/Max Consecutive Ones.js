// Given a binary array nums, return the maximum number of consecutive 1's in the array.
// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

// Input: nums = [1,0,1,1,0,1]
// Output: 2

function countConsOnes(input){
    let prevCount = 0, curCount = 0;

    input.map(num =>{
        if(num == 0){
            if(curCount > prevCount){
                prevCount = curCount;
            }
            curCount = 0;
        }else{
            curCount++;
        }
    });

    return prevCount > curCount ? prevCount : curCount; 
}

let input = [0,0,1,1,1,0,0];
console.log(countConsOnes(input));