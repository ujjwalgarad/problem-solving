// Given an array nums of non-negative integers, return an array consisting of all the even elements of nums, 
// followed by all the odd elements of nums.

// You may return any answer array that satisfies this condition.

// Input: nums = [3,1,2,4]
// Output: [2,4,3,1]
// The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

// Solution 1: Generic
//This solution does not maintain the relative sorting of the numbers
const myFunction = (input) =>{

    let even = 0;
    let odd = input.length -1;

    while(even <= odd){
        if((input[even]%2 != 0) && (input[odd]%2 != 1)){
            let temp = input[even];
            input[even] = input[odd];
            input[odd] = temp;
            even++;
            odd--;
        }else{ 
            if(input[even]%2 == 0){
                even++;
            }
            if(input[odd]%2 == 1){
                odd--;
            }
        }
    }
        
    return input;
}

//Solution 2: Pure Javascript Solution using sort method and custom comparator
// const myFunction = (input) =>{

//     input.sort((a,b) => a%2 - b%2);

//     return input;
// }

// console.log(myFunction([3,1,2,4]));
// console.log(myFunction([3,1,2,4,5,6,3,9]));

module.exports = myFunction;