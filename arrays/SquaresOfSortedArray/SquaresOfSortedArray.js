// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

const myFunction = input =>{

    let left = 0, 
        right = loc = input.length -1,
        output = [];

    while(left <= right){
        if(Math.abs(input[left]) > input[right]){       //check if the abs left most number is greater than right most
            output[loc] = Math.pow(input[left], 2);
            left++;
        }else{
            output[loc] = Math.pow(input[right], 2);
            right--;
        }
        loc--;
    }

    return output;
}

module.exports = myFunction;

//time: o(N)
//space: o(N)
//Naive solution would be using sort function after squaring each element, which is nLog(N)