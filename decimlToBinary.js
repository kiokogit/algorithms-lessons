//convert number to binary

function findBinary(num, result){
    //base case

    if(num===0){
        return result
    }

    //change result
    result = String(num%2) + result
    return findBinary(Math.trunc(num/2), result)

}

console.log(findBinary(2, ""))