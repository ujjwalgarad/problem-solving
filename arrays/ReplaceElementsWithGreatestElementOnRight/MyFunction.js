const myFunction = (input) =>{

    let max = input[input.length - 1];
    input[input.length - 1] = -1;
    for (let i = input.length-2; i >=0; i--) {
        let temp = input[i];
        input[i] = max;

        if(temp > max){
            max = temp;
        }
    }

    return input;
}

// console.log(myFunction([0,1,2,2,3,0,4,2], 2));

module.exports = myFunction;