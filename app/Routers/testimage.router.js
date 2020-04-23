const express = require('express');
const router = express.Router();


const testimage = require('../Controllers/testiamge..controller');

// router.get('/all', phocontroller.findAll);
router.post('/addarticles', testimage.upload);
router.post('/ga', testimage.getpost);



module.exports = router