// Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).

// Input: arr = [10,2,5,3]
// Output: true
// Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.

// Input: arr = [3,1,7,11]
// Output: false
// Explanation: In this case does not exist N and M, such that N = 2 * M.

const myFunction = (input) =>{
    let myMap = new Map();

    for (let i = 0; i < input.length; i++) {
        let num = input[i];

        let double = num * 2;

        if(myMap.has(double))
            return true;
        
        if(num % 2 == 0){
            let half = num/2;
            if(myMap.has(half))
                return true;
        }

        myMap.set(num);
    }
    return false;
}

// console.log(myFunction([10,2,5,3]));

module.exports = myFunction;