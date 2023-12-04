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

app.get('/', (request, response, next) => {
    response.status(200).json({success: {message: "Index successful"}, statusCode: 200});
});

app.get('/about', (request, response, next)  => {
    response.status(200).json({success: {message: "About page successful"}, statusCode: 200});
});

app.get('/contact', (request, response, next)  => {
    response.status(200).json({success: {message: "Contact page successful"}, statusCode: 200});
});


app.get('/projects', (request, response, next)  => {
    response.status(200).json({success: {message: "Project page successful"}, statusCode: 200});
});

app.get('/resume', (request, response, next)  => {
    response.status(200).json({success: {message: "Resume page successful"}, statusCode: 200});
});

//Server
app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
    console.log(`http://localhost:${PORT}/`)
});