const env = process.env.NODE_ENV || 'development';
if (env !== 'production') {
    require('dotenv').config();
}
const PORT = process.env.PORT || 3000;

const express = require('express');
const app = express();

const html = require('./app/routes/html-routes.js');
const events = require('./app/routes/events-api-routes.js');
const locations = require('./app/routes/locations-api-routes.js');

var passport = require('passport');
var flash    = require('connect-flash');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var session      = require('express-session');
const bodyParser = require('body-parser');
const db = require("./app/models/index.js");
var models = require("./app/models");



app.use(morgan('dev')); 
app.use(cookieParser()); 
app.use(bodyParser()); 

app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true}));
// app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); 
app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash()); 

var authRoute = require('./app/routes/passport-routes.js')(app,passport);

app.set('view engine', 'ejs');


require('./config/passport.js')(passport,models.user);

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.use('/', html);
app.use('/events', events);
app.use('/locations', locations);

models.sequelize
    .sync()
    .then(function(){
    console.log('Nice! Database looks fine')
    })
    .catch(function(err){
    console.log(err,"Something went wrong with the Database Update!")
});

app.listen(PORT, function(err){
        if(!err)
        console.log("Site is live"); else console.log(err)

});