const express = require('express');
const router = express.Router();


const utilfunctions = require('../Controllers/utilfunctions.controller');

// router.get('/all', phocontroller.findAll);
router.get('/valphone', utilfunctions.validate);



module.exports = router