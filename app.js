// -------------------- Imports! -------------------
// -------------------- Imports! -------------------
// -------------------- Imports! -------------------

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require('request');

// -------------------- Imports! -------------------
// -------------------- Imports! -------------------
// -------------------- Imports! -------------------




// -------------------- Local Variables! -------------------
// -------------------- Local Variables! -------------------
// -------------------- Local Variables! -------------------

var orders= [];

// -------------------- Local Variables! -------------------
// -------------------- Local Variables! -------------------
// -------------------- Local Variables! -------------------







// -------------------- Server Settings! -------------------
// -------------------- Server Settings! -------------------
// -------------------- Server Settings! -------------------


app.use(express.static('Ecom2018/www')); // directory to pull pages from
app.use(bodyParser.json()); // request parser to use
app.use(bodyParser.urlencoded({ extended: true })); // this came from stackoverflow

// -------------------- Server Settings! -------------------
// -------------------- Server Settings! -------------------
// -------------------- Server Settings! -------------------



// -------------------- Server Routing! -------------------
// -------------------- Server Routing! -------------------
// -------------------- Server Routing! -------------------

// Tend an incomming dispute

app.post('/fileDispute', function(req,res) {
    var data = req.body;
    // (title, date, name_user, name_product, descript, status , purches_date, email ,cc4 )
    var ord = new Order(
     'dispute from ' + data.name, //title
     data.date,                   //date
     data.name,                   //name_user
     data.product,                //name_product
     data.freeText,               //descript
     data.status,                 //status
     data.purches_date,           //purches_date
     data.email,                  //email
     data.cc4                     //cc4
    );

    orders.push(ord);
    res.send('we\'re good');
    console.log(orders);
    console.log('**************************************************');
    console.log('**************************************************');
    console.log('**************************************************');
    //TODO: mail the mofo
});

// minor change
// Retrive all disputes
app.get('/getDisputes', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(orders)); 
});



var server = app.listen(8081, function () {
   var host = server.address().address;
   var port = server.address().port;
   
   console.log("Example app listening at http://%s:%s", host, port);
});

function Order(title, date, name_user, name_product, descript, status,purches_date, email,cc4) {
    this.title = title;
    date = (new Date().toString()).substring(0, 25);
    this.date = date;
    this.name_user = name_user;
    this.name_product = name_product;
    this.descript = descript;
    this.status = "request";
  
    //Roy added fields
    this.email = email;
    this.cc4=cc4;
  
  }