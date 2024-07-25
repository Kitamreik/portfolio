const express = require('express');
const {projectPage, resumePage, eduPage, newIndex} = require('../controllers/indexCtrl');
const router = express.Router();

//ROUTES start with '/portfolio/'
router.get('/project', projectPage);
router.get('/education', eduPage);
router.get('/resume', resumePage); //updated July 2024

// router.get('/contact', contactPage);
router.get('/home', newIndex);

//-----COMBINE INTO NEW INDEX-----
// router.get('/exp', expPage);
// router.get('/skillz', skillPage);

module.exports = router;