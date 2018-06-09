var i=1;
const nodemailer = require('nodemailer');
const exspress = require('exspress');
var router = express.Router();
var Hogen = require('hogen.js');
var fs= require('fs');


var myMail ='hackafk@gmail.com';
var myMailPass = '123123abcABC';


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: myMail,
      pass: myMailPass
    }
  });
  

var mailOptions = {
    from: myMail,
    to: 'Roybargil@gmail.com',
    subject: 'Sending Email using Node.js',
  
    html: 'this is the next test',
  };
  
  if (i=1){
      transporter.sendMail(mailOptions, function(error, info){
      if (error) {
          console.log(error);
      } else {
          console.log('Email sent: ' + info.response);
      }
      });
  };
  