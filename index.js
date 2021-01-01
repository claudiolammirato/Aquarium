var express = require('express');
var exphbs  = require('express-handlebars');
 
var app = express();
 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
 
app.get('/', function (req, res) {
    res.render('index');
});
 
app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000`)
  })