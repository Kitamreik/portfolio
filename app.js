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
    response.redirect('/portfolio/home')
});

app.get('/index-v1', (request, response, next) => {
  response.render('pages/index')
});

app.get('/prev-projects', (request, response, next) => {
  response.render('pages/projects')
});

const portfolioSample = {
  id: 10,
  title: "Complete Node Podcast",
  author: "Kit Fenrir Amreik (they/she)",
  audience: "students/self-learning and development",
  reason: "Refactor the Node.js Podcast Index API to use in JSON based back end environment successfully using advanced back end techniques such as crypto detection, the node fetch commands and created six files only for ease and comprehension.", 
  technologies: "Javascript",
  github: "https://github.com/Kitamreik/complete-node-pod"
}

app.get('/portfolio/10', (request, response, next) => {
   response.status(200).json({success: {message: "You have successfully navigated to the entry for the tenth project."},  data: {portfolioSample},  statusCode: 200});
});

//Server
app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
    console.log(`http://localhost:${PORT}/`)
    console.log(`Google Analytics: https://analytics.google.com/analytics/web/?utm_source=OGB&utm_medium=app&authuser=0#/p422492576/reports/intelligenthome?params=_u..nav%3Dmaui`);
});