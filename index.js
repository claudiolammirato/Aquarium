const express = require('express');
const exphbs  = require('express-handlebars');
const db = require("./models");
const app = express();

app.use(express.json());

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));

const listsRoutesController  = require('./routes/controller.routes');
const listsRoutesAquarium  = require('./routes/aquarium.routes');



db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  });

//app.get('/', function (req, res) {
//    res.render('index');
//});

app.use('/api/users', listsRoutesController);
app.use('/', listsRoutesAquarium);

 
app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000`)
  })