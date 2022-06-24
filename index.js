const express = require("express")
const bodyParser  = require("body-parser")
require('dotenv').config();

const otpRouter = require('./routes/otp_to_email')

// create our express app
const app = express()

app.use(bodyParser.json())

app.listen(process.env.PORT, ()=>{
    console.log("listeniing at port:", process.env.PORT)
}) 


// routes
app.get("/", (req,res)=>{

    res.send("Home page")
})

app.use('/sendOTP', otpRouter)