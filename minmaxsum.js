//find the min and max sum of an array; 
//arr = [1, 3, 5, 7, 9] to print 14, 16

/* 
min sum -> all sum - max num
max sum -> all sum - min num

//assume a sorted array;
for min, start sum at index 1
for max, end sum at index arr.length-2


**BRUTE FORCE SOLUTION**
**optimized solution** - Recursion
*/

/* 
cases:
- empty array []
- arr with one element [2]
- arr with more than one element [2,3,6,8,9,11]
- arr with all equal elements [5,5,5,5,5]
*/
function minmaxsum(arr){

    let maxsum=0;
    let minsum = 0
    //base case1
    if (arr.length===0){
        return ['NONE', 'NONE']
    }
    //base case2
    if (arr.length===1){
        return [arr[0], arr[0]]
    }

    for(let i=1; i<=arr.length-1; i++){
        maxsum = maxsum+arr[i]
    }
    for(let i=0; i<=arr.length-2; i++){
        minsum = minsum+arr[i]
    }
    return [maxsum, minsum]

}

// console.log(minmaxsum([]))


//RECURSIVE
function maxsumrecursive(arr){
    //base case - empty array, one element array
    if(arr.length < 2){
        return 0
    }
    //min work to be done - go through array, recursively add elements
    //returns array of min and max
    return arr[arr.length-1]+maxsumrecursive(arr.slice(0,-1))
 
}

//[1,2,3,4,5,6,7]
function minsumrecursive(arr){
    //base case - empty array, one element array
    if(arr.length < 2){
        return 0
    }
    return arr[0]+minsumrecursive(arr.slice(1))
}

function combined(arr){
    return [minsumrecursive(arr), maxsumrecursive(arr)]
}
// console.log(combined([5,5,5,5,5]))

//using a class to combine methods
class MinMax {
    constructor(arr){
        this.arr = arr
    }

    minsumrecursive(){
        if(this.arr.length < 2){
            return 0
        }
        return this.arr[0]+minsumrecursive(this.arr.slice(1))
    }

    maxsumrecursive(){
        if(this.arr.length < 2){
            return 0
        }
        return this.arr[this.arr.length-1] + maxsumrecursive(this.arr.slice(0,-1))
    }
}

const sets = new MinMax([1,2,3,4,5])

console.log([sets.minsumrecursive(), sets.maxsumrecursive()])
