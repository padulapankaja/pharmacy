const express = require('express');
const router = express.Router();


const pharmacycontoller = require('../Controllers/pharmacy.controller');



router.get('/view', pharmacycontoller.findAll);
router.get('/:id', pharmacycontoller.pharmacy_specific);
router.get('/test', pharmacycontoller.test);


module.exports = router