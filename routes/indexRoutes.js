const express = require('express');
const {aboutPage, contactPage, projectPage, resumePage} = require('../controllers/indexCtrl');
const router = express.Router();

//ROUTES start with '/portfolio/'

router.get('/about', aboutPage);

router.get('/contact', contactPage);

router.get('/project', projectPage);

router.get('/resume', resumePage);

module.exports = router;