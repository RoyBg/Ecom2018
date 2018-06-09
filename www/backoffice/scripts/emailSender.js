



var i=0 ;
const exspress = require('exspress');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
var nodemailer = require('nodemailer');

const app = exspress();




var email1 = File("C:\Users\Roy Ninga\Documents\GitHub\Ecom2018\www\backoffice\html\emails\EmailTempate1.htm") ;



var email1 = new File(["foo"], "foo.txt", {
    type: "html",
  });

  console.log.email1.toString;

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'hackafk@gmail.com',
    pass: '123123abcABC'
  }
});

var mailOptions = {
  from: 'hackafk@gmail.com',
  to: 'Roybargil@gmail.com',
  subject: 'Sending Email using Node.js',

  html: this.email1.toString,
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
