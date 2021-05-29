// 1089. Duplicate Zeros
// Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

const { it } = require("@jest/globals")
const { array, count } = require("yargs")

// Note that elements beyond the length of the original array are not written.

// Do the above modifications to the input array in place

// Input: [1,0,2,3,0,4,5,0]
// Output: null
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

//Algo:
// we will first make a run of the array 
// and try to find how many items we will ultimately have to dispalce.
// once we know the count of how many items will be displaced, we can be sure that 
// those many number of elements of the array from the end will be lost for sure

// So how to find this dispalcement count?
// while looping through an array
//     for each occurance of 0, increment the displacement count
//         special case: if the current element is 0 and it will be the last element of the final output array
//                         then do not increment the count
//                         this zero will be the last element in final array so copy it
//                         exit the loop

// now traverse the array from the end but at the location of (length-displacemment count)
// for each occurance of 0, copy another 0



const myFunction = input =>{
    let dupCount = 0;
    let length = input.length -1;

    //find the displacement count
    for(let left = 0; left <= length - dupCount; left++){

        if(input[left] == 0){

            //special case: is this 0 the last 0 of the final array
            if(left == length - dupCount){
                //copy it
                input[length] = 0;

                //reduce the length value coz we already know one element of the final array : the last 0
                length = length -1;

                //no need to traverse rest of the array coz those elements will be lost anyway
                break;
            }

            //increment the displacement count for regular occurance of 0
            dupCount++;
        }
    }

    let right = length - dupCount;

    for(let i = right; i>=0; i--){
        if(input[i] == 0){

            //copy twice for each 0
            input[i + dupCount] = 0;
            dupCount--;
            input[i + dupCount] = 0;
        }else{
            input[i + dupCount] = input[i];
        }
    }

    return input;
}

// console.log(myFunction([1,0,2,3,0,4,5,0]));

module.exports = myFunction;