const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const handlebars = require('express-handlebars').engine;
const app = express();
const port = 3005;
const route = require('./routes');
const db = require('./config/db');
//Connect to db
db.connect();


// Add pic logo
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(
    express.urlencoded({
        extended: true, // using libery body-parser
    }),
); // from-group search.hbs
app.use(express.json()); // using libery
app.use(methodOverride('_method'));

app.use(methodOverride('_method1'));

app.use(methodOverride('_method2'));








//HTTP logger
//app.use(morgan('combined'));
//Templet engine
app.engine('handlebars', handlebars({
    extname : '.handlebars',
    helpers: {
        sum : (a, b) => a+b,
    }
}),
);

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources','views'));
app.set('partials', path.join(__dirname, 'resources/views/partials'));

// Route init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
