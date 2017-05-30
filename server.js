var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

//Assigning express
var app = express();
var PORT = 3088;


//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

//Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(methodOverride('_method'))
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

//Listening on port
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});