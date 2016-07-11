var express = require('express');
var app = express();

var router = express.Router();

var port = 8081;

app.set('port', process.env.PORT || port);
app.use(express.static(__dirname + "/public"));
app.use('/*', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});


app.listen(port, function() {
    console.log('listening on port '+ port);
});