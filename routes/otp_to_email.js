const express = require("express")
const route = express.Router()
const nodemailer = require("nodemailer")
const otp = require('./lib/otp')
route.post('/', async(req, res)=>{

    //getting user email
    const toEmail = req.body.email || 'default email'

    const {PASS, USER} = process.env;
    
    const transporter = nodemailer.createTransport({
       
        service:'any smtp',
       
        auth:{
            user: USER,
            pass: PASS
        }
    })

    const mailOptions = {
        from : USER,
        to   : toEmail,
        subject: 'OTP code verification',
        text: "your otp code is , "+otp 
    }

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error)res.send('Getting error transporter mail API'+error);
        else res.send("Email sent:"+info.response);
    })

});

module.exports = route;