require('dotenv').config();
//require('./config/connection');
//require('./config/authStrategy');

const express = require('express');
const path = require('node:path');
const helmet = require('helmet');
const passport = require('passport');
const cors = require('cors');

const session = require('express-session');

const morgan = require('morgan');
const app = express();
const PORT = 4200;
// const PORT = process.env.PORT || 4200;

// Define the Routing Variable 
const indexRoutes = require('./routes/indexRoutes');
//const authRoutes = require('./routes/authRoutes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'));
app.use(helmet({ contentSecurityPolicy: false }));

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname + '/public')));

app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

// Routing Paths
//app.use('/admin/', authRoutes);
app.use('/portfolio/', indexRoutes);

app.get('/', (request, response, next) => {
    response.render('pages/index')
});

//Server
app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
    console.log(`http://localhost:${PORT}/`)
});