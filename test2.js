const express = require("express")
require("dotenv").config()
const app= express()
port= process.env.PORT;

function sumArrayElements(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input is not an array');
    }

    let sum = 0;
    for (const num of arr) {
        if (Number.isInteger(num)) {
            sum += num;
        }
    }
    return sum;
}
    const inputArray = [1, 2, 3, 4, 5];
const result = sumArrayElements(inputArray);
console.log(result); 



app.listen(port,()=>{
    console.log(`Server is Running at port ${port}`)

})