// Given a binary array nums, return the maximum number of consecutive 1's in the array.
// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

// Input: nums = [1,0,1,1,0,1]
// Output: 2

function countConsOnes(input){
    let prevMax = 0, curCount = 0;

    input.map(num =>{
        if(num == 0){
            if(curCount > prevMax){
                prevMax = curCount;
            }
            curCount = 0;
        }else{
            curCount++;
        }
    });

    return prevMax > curCount ? prevMax : curCount; 
}

module.exports = countConsOnes;