var express = require('express');
var app = express();

var router = express.Router();

var port = 8081;

app.set('port', process.env.PORT || port);
app.use("/public", express.static(__dirname + "/public"));

router.get('/', function(req, res, next) {
  res.sendFile(__dirname + '/public/index.html')
});

// 404 handling
router.get('*', function(req, res){
  res.status(404).send('page not found');
});

app.use(router);


app.listen(port, function() {
    console.log('listening on port '+ port);
});