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
    // (title, date, name_user, name_product, descript, status)
    var ord = new Order(
     'dispute from ' + data.name,
     data.Date,
     data.name,
     data.Product,
     data.freeText, 
     data.Status);

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

function Order(title, date, name_user, name_product, descript, status) {
    this.title = title;
    date = (date.toString()).substring(0, 25);
    this.date = date;
    this.name_user = name_user;
    this.name_product = name_product;
    this.descript = descript;
    this.status = status;
  
  }