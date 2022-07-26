
const express = require("express");
const app = express();

const dotenv = require("dotenv")
dotenv.config({path:"./config.env"})
const PORT = process.env.PORT || 6000

app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`)
})