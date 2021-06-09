// A school is trying to take an annual photo of all the students.
// The students are asked to stand in a single file line in non-decreasing order by height.
// Let this ordering be represented by the integer array expected where expected[i] is the expected height of the ith student in line.

// You are given an integer array heights representing the current order that the students are standing in.
// Each heights[i] is the height of the ith student in line (0-indexed).

// Return the number of indices where heights[i] != expected[i].

// Input: heights = [1,1,4,2,1,3]
// Output: 3
// Explanation: 
// heights:  [1,1,4,2,1,3]
// expected: [1,1,1,2,3,4]
// Indices 2, 4, and 5 do not match.

// Input: heights = [5,1,2,3,4]
// Output: 5
// Explanation:
// heights:  [5,1,2,3,4]
// expected: [1,2,3,4,5]
// All indices do not match.

const myFunction = (input) =>{

    let freqArr = [];
    let max = input[0];

    //find out the max element from the given array
    for (let index = 1; index < input.length; index++) {
        if(input[index] > max){
            max = input[index];
        }
    }

    //create a freqArray of max length and initialize it to 0
    //this array will keep the freq of each element
    for (let index = 0; index <= max; index++) {
        freqArr.push(0);
    }

    //populate the freqArray for the given array
    for (let index = 0; index < input.length; index++) {
        freqArr[input[index]]++;
    }

    let sorted = [];

    //traverse the freqArray. We will create a sorted array by placing array elements in sorted array as per their frequency
    //the index of freqArray acts as an original element number of the input array
    for (let index = 0; index < freqArr.length; index++) {
        let curFreq = freqArr[index];

        while(curFreq > 0){
            //in JS, Array.push() simplyfies this operation
            //in JAVA, you will have to deal with the index manipulation of the elements in the sorted array
            sorted.push(index);
            curFreq--;
        }
    }

    let outCount = 0;
    for (let index = 0; index < input.length; index++) {
        if(input[index] != sorted[index]){
            outCount++
        }
    }

    return outCount;
}


module.exports = myFunction;