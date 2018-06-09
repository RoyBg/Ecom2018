var i=1;
const nodemailer = require('nodemailer');
const express = require('express');
var router = express.Router();
const Hogan = require('hogan.js');
var fs= require('fs');

var template= fs.readFileSync('./www/backoffice/html/emails/EmailTempate1.htm','utf-8');
var compiledTemplate = Hogan.compile(template);

var resMail ='Roybargil@gmail.com';
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
    to: resMail,
    subject: 'Sending Email using Node.js',
  
    html: compiledTemplate.render(),
  };
  
      transporter.sendMail(mailOptions, function(error, info){
      if (error) {
          console.log(error);
      } else {
          console.log('Email sent: ' + info.response);
      }
      });

  