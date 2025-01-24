const express = require('express');
const {projectPage, resumePage, eduPage, newIndex, headstarterPage, expPage, bonusProject} = require('../controllers/indexCtrl');
const router = express.Router();

//ROUTES start with '/portfolio/'
router.get('/project', projectPage);
router.get('/education', eduPage);
//router.get('/resume', resumePage); //updated July 2024

// router.get('/contact', contactPage);
router.get('/home', newIndex);
router.get('/exp', expPage);

//-----COMBINE INTO NEW INDEX-----
// router.get('/skillz', skillPage);

router.get('/headstarter', headstarterPage)
router.get('/headstarter/006', bonusProject) //hardcoded route in headstarter.ejs

module.exports = router;