function countConsOnes(input){
    let prevCount = 0, curCount = 0;

    input.map(num =>{
        if(num == 0){
            if(curCount > prevCount){
                prevCount = curCount;
            }
            curCount = 0;
        }else{
            curCount++;
        }
    });

    return prevCount > curCount ? prevCount : curCount; 
}

let input = [0,0,1,1,1,0,0];
console.log(countConsOnes(input));