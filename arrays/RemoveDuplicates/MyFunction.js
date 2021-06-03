const myFunction = (input) =>{
    let slow =0;

    for(let fast = 1; fast < input.length; fast++){
        if(input[slow] != input[fast]){
            slow++;
            input[slow] = input[fast];
        }
    }

    // return slow
    //slow needs to be incremented for the last element in the array
    return input.splice(0, slow+1);
}

// console.log(myFunction([0,1,2,2,3,0,4,2], 2));

module.exports = myFunction;