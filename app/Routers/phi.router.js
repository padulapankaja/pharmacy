const express = require('express');
const router = express.Router();


const phocontroller = require('../Controllers/phi.controller');

// router.get('/all', phocontroller.findAll);
router.post('/searchphi', phocontroller.search);



module.exports = router