var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 3000;
var bodyParser = require( 'body-parser' );
var treats = require('./routes/treats');


/*** Build out a module to manage our treats requests. ***/
app.use(bodyParser.urlencoded({extended: true}));

app.use('/treats', treats);

// Get static files
app.use(express.static('./server/public'));

// Get index.html
app.get('/', function(req, res) {
  res.sendFile(path.resolve('./server/public/views/index.html'));
});

app.listen(port, function() {
  console.log('Server running on port: ', port);
});
