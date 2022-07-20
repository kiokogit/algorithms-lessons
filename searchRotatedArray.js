//check for rotation
//search for the number
//add index to rotation value;
//return current index

//binary rotation

/* 
check for the least element, and rotate the list to start with the element
*/

function binaryRotate(arr=[]){

    //base case
    if (arr.length === 1){
        return 0
    }
    if (arr.length === 0){
        return -1
    }

    let lo = 0
    let hi = arr.length-1

    while(lo <= hi){

        let mid =Math.trunc((lo+hi)/2)

    //[5,8,0,1,2,3]
        if(arr[mid] < arr[mid-1]){
            return mid
        }
        if(arr[mid] < arr[hi]){
            hi = mid-1
        }else{
            lo = mid+1

        }
    }
}

console.log(binaryRotate([2,3,4,5,0,1]))

//binary search on a rotated list
function binary_search_rotated(arr, target){

    if(arr.length === 0 ){
        //not found
        return -1
    }

    let lo = 0
    let hi = arr.length-1

    while(lo<=hi){
        let mid = Math.trunc((lo+hi)/2)

        //terminating case
        if(arr[mid]===target){
            return mid
        }
        //compare the mid with the extreme - lo or hi
        if(arr[lo] <= arr[mid]){
            //compare the target to the mid and the extreme
            if (target >= arr[lo] && target < arr[mid]){
                //it is to the left
                hi = mid
            }else{
                lo = mid+1
            }
            
        } else{
            if(target >= arr[lo] && target < arr[mid]){
                //move to the right
                lo = mid+1
            }else{
                hi = mid
            }
        }
    }
    //else not found
    return -1

}

console.log(binary_search_rotated([2,3,4,5,0],0))