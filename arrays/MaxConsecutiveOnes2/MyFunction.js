// Given a binary array nums, return the maximum number of consecutive 1's in the array if you can flip at most one 0.

// Input: nums = [1,0,1,1,0]
// Output: 4
// Explanation: Flip the first zero will get the maximum number of consecutive 1s. After flipping, the maximum number of consecutive 1s is 4.

// Input: nums = [1,0,1,1,0,1]
// Output: 4

const myFunction = (input) =>{
    //sliding window approach

    //boundaries of the sliding window
    let left = right = 0;

    //tracking the location where 0 is considred as flipped
    //this will be useful in shifting the left side of the window
    let isFlipped = false;

    //checking if we have flipped already or not
    //this will used only in the first encounter of 0
    let flippedAt = 0;

    //what is the max size of the window so far and window size currently
    let maxSoFar = currMax = 0;

    while (right < input.length) {
        const element = input[right];

        if(element == 0){
            //can we eliminated this variable altogether? it is used only for the first encounter of 0
            if(!isFlipped){
                isFlipped = true;
                flippedAt = right;
            }else{
                //get current window size
                currMax = right - left;

                //determine which one is max
                maxSoFar = Math.max(maxSoFar, currMax);

                //shift left to new location
                left = flippedAt +1;

                //the currrent location of 0 will be tracked
                flippedAt = right;
            }
        }
        right++;
    }   

    //perfomr the check at the end of loop
    currMax = right - left;   
    return Math.max(maxSoFar, currMax);;
}

// console.log(myFunction([1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1]));
// console.log(myFunction([1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1]));

module.exports = myFunction;