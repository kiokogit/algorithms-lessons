//reverse string

function reverse_string(string){
    // what is the base case? (when can I no longer continue)
        //empty string
    if(string===""){
        return "";
    }
    //what is the smallest unit amount of work
    return reverse_string(string.substring(1)) + string.charAt(0)
}

console.log(reverse_string('hello'))