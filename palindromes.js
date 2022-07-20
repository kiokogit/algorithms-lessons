//returns boolean
function isPalindrome(string){
    //base case
    if(string.length === 0 || string.length===1){
        return true
    }

    //shrink the string continously
    if(string.charAt(0)===string.charAt(string.length-1)){
        return isPalindrome(string.substring(1, string.length-1))
    }
    return false;
}

console.log(isPalindrome('kayak'))