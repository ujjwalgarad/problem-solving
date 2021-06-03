// Given an array nums and a value val, remove all instances of that value in-place and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// The order of elements can be changed. It doesn't matter what you leave beyond the new length.

// Clarification:

// Confused why the returned value is an integer but your answer is an array?

// Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller as well.

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2]
// Explanation: Your function should return length = 2, with the first two elements of nums being 2.
// It doesn't matter what you leave beyond the returned length. For example if you return 2 with nums = [2,2,3,3] or nums = [2,2,0,0], your answer will be accepted.


// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3]
// Explanation: Your function should return length = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4. Note that the order of those five elements can be arbitrary. It doesn't matter what values are set beyond the returned length.

const myFunction = (input, val) =>{

    //j is a slow pointer
    //i is a fast pointer
    //if i is not equal to j value then we swap
    //even if j is is equal to 'val' it will be checked in when i reaches to that place after swapping

    let i = 0;

    for(let j =0; j< input.length; j++){
        if(input[j] != val){
            input[i] = input[j];
            i++;
        }
    }

    // return j;
    return input.splice(0, i);
}

// console.log(myFunction([0,1,2,2,3,0,4,2], 2));

module.exports = myFunction;