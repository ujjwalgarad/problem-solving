// https://leetcode.com/problems/find-pivot-index/

const myFunction = (input) =>{

    let total = leftSum = 0;

    for(let i =0; i< input.length; i++){
        total = total + input[i];
    }

    for(let i =0; i< input.length; i++){
        if(leftSum == (total - input[i] - leftSum)){
            return i;
        }
        leftSum += input[i];
    }
    return -1;
}

// console.log(myFunction([3,1,2,4]));
// console.log(myFunction([3,1,2,4,5,6,3,9]));

module.exports = myFunction;