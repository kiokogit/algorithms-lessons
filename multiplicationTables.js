
//print out the table for 2, from 1 to 10

//can use recursion from 10 to 0

//brute force sln
function multiplication_table(factor, start, end){

    while(start <=end){
        console.log(start, "x", factor, "=", start*factor)
        start++;
    }

}

// multiplication_table(7, 1, 14);

//multiple tables
function multiplication_table_multiple(factors=[], start, end){
    
    for (const i in factors) {
        const factor = factors[i]
        console.log('\nMultiplication Table of', factor)
        for(let j=start; j<=end; j++){
            console.log( `${j} x ${factor} = ${j*factor}`)
        }
    }
}

multiplication_table_multiple([1,2,3,4,5], 5, 10)
