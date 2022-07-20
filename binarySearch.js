//divide and conquer methods
function binarySearch(arr, lo, hi, num){

    //base case - 
    if (lo > hi){
        return -1
    }

    mid = Math.trunc((hi+lo)/2);

    if( num === arr[mid]){
        return mid
    }

    if (num < arr[mid]){
        return binarySearch(arr, lo, mid-1, num)
    } 
    else{
        return binarySearch(arr, mid+1, hi, num)
    }

}

console.log(binarySearch([-2, 3, 6, 9, 12, 13,20,50], 0, 7, 0))