
const express = require("express");
const app = express();

const dotenv = require("dotenv")
dotenv.config({path:"./config.env"})
const PORT = process.env.PORT || 6000

const mongoose = require("mongoose")
mongoose.connect(process.env.CONNECTION_URL,{
    useNewUrlParser:true
}).then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running at port ${PORT}`)
    })  
}).catch((err)=>{
    console.log(err)
})

const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))

const postRouter = require("./routers/router");
app.use("",postRouter);