//find sum of all numbers between 1 and 10

function sumOfNumbers(num){
    //base case - smallest input
    if(num<=1){
        return num
    }
    
    //recursion
    return num + sumOfNumbers(num-1)
}

console.log(sumOfNumbers(100) )