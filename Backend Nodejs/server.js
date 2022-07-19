const path = require('path');
const express = require('express');
 
const nodemailer = require('nodemailer');
const app = express();
const cors = require('cors')
app.use(cors())
const buildPath = path.join(__dirname, '..', 'build');
app.use(express.json());
app.use(express.static(buildPath)); 
 
app.post('/users',(req,res)=>{
 
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        type: "SMTP",
        host: "smtp.gmail.com",
        secure: true,
        auth: {
          user: 'kirtigauravmishra07@gmail.com',
          pass: 'ugmbjpbtxndjleki'
        }
    });
 
    var mailOptions = {
        from: 'kiirtigaurav1@gmail.com',// sender address
        to: req.body.to, // list of receivers
        youremail: req.body.youremail,
        subject: req.body.subject, // Subject line
        text:req.body.description,
        html: `
        <div style="padding:10px;border-style: ridge">
        <p>You have a new contact request.</p>
        <h3>Contact Details</h3>
        <ul>
            <li>Email: ${req.body.youremail}</li>
            <li>Subject: ${req.body.subject}</li>
            <li>Message: ${req.body.description}</li>
        </ul>
        `
    };
     
    transporter.sendMail(mailOptions, function(error, info){
        if (error)
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        } 
        else
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        }
     
      });
});
 
// listen to the port
app.listen(5000, () => {
    console.log('server start on port 3030');
  });