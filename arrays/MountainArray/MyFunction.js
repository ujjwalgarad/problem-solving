// Given an array of integers arr, return true if and only if it is a valid mountain array.

// Recall that arr is a mountain array if and only if:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

const myFunction = (input) =>{
    debugger;
    if(input.length <= 3)
        return false;

    let peak = 0;

    for (let i = 1; i < input.length; i++) {
        if(input[i] > input[peak]){
            peak = i;
        }else{
            break;
        }
    }

    // peak can't be first or last
    if (peak == 0 || peak == input.length -1)
        return false;

    for (let i = peak+1; i < input.length; i++) {
        if(input[i] >= input[peak]){
            return false;
        }
    }
    return true;
}

// console.log(myFunction([0,2,3,4,5,2,1,0]));

module.exports = myFunction;