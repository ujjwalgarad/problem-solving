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

    let result = [];

    //traverse the freqArray. We will create a sorted array by placing array elements in result array as per their frequency
    //the index of freqArray acts as an original element number of the input array
    for (let index = 0; index < freqArr.length; index++) {
        let curFreq = freqArr[index];

        while(curFreq > 0){
            //in JS, Array.push() simplyfies this operation
            //in JAVA, you will have to deal with the index manipulation of the elements in the result array
            result.push(index);
            curFreq--;
        }
    }

    return result;
}

// console.log(myFunction([3,1,2,4]));
// console.log(myFunction([3,1,2,4,5,6,3,9]));

module.exports = myFunction;