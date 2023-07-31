const express = require("express")
require("dotenv").config()
const app= express()
port= process.env.PORT;

app.get('/',(req,res)=>{
    res.send('Hello, World')
})
app.listen(port,()=>{
    console.log(`Server is Running at port ${port}`)

})