const express = require('express');
const {contactPage, projectPage, resumePage, eduPage, expPage, skillPage} = require('../controllers/indexCtrl');
const router = express.Router();

//ROUTES start with '/portfolio/'

router.get('/contact', contactPage);

router.get('/project', projectPage);

router.get('/resume', resumePage);
//----------
router.get('/exp', expPage);
router.get('/education', eduPage);
router.get('/skillz', skillPage);

module.exports = router;