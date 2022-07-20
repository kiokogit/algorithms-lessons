//write a function that returns the maximum power of two that is less than the given integer; eg, given 5, return 4. given 29, return 16

//solution
//to find power of 2 - number whose binary is all zeros after 1

//sqrt to base 2 is perfect - no reminder

//brute force sln nearest_power_of_two(36)
function nearest_power_of_two(n){

    const power = Math.trunc(Math.log2(n))
    return 2**power

}

console.log(nearest_power_of_two(36))

//memoization to optimize solution
