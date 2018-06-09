



var i=0 ;
const exspress = require('exspress');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');
const path= require('path');

var EmailTemplate = require('email-templates').EmailTemplate;
var transporter = nodeMailer.createTransport(sender + ':' + password + '@smtp.gmail.com');

var myMail ='hackafk@gmail.com';
var myMailPass = '123123abcABC';

const app = exspress();


// create template based sender function
// assumes text.{ext} and html.{ext} in template/directory
var sendDisputeApprovedMail = transporter.templateSender(
  new EmailTemplate('./templates/sendDisputeApprovedMail'), {
    	from:myMail,
  });

  exports.sendDisputeApprovedMail = function (email, username, name, tokenUrl) {
    // transporter.template
    sendDisputeApprovedMail({
        to: email,
        subject: 'Your Dispute Reqvest has been aproved'
    }, {
        name: name,
        username: username,
    }, function (err, info) {
        if (err) {
            console.log(err)
        } else {
            console.log('Link sent\n'+ JSON.stringify(info));
        }
    });
};

const app = exspress();

//view engine
app.engine('handlebars',exphbs());
app.set('view engine', 'handlebars');


// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Static folder
app.use('/www/backoffice', express.static(path.join(__dirname, 'backoffice')));


app.get('/', (req, res) => {
    res.render('contact');
  });
  

app.listen(3000, (req ,res)=>{
    res.send('Ahalan world');
});



var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: myMail,
    pass: myMailPass
  }
});


transporter.se

var mailOptions = {
  from: myMail,
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
