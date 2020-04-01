const express = require('express');
const router = express.Router();


const helpforother = require('../Controllers/hellpforothers.controller');



// router.get('/view', pharmacycontoller.findAll);
// router.get('/:id', pharmacycontoller.pharmacy_specific);
// router.get('/test', pharmacycontoller.test);


router.post('/add', helpforother.add);
router.post('/search', helpforother.search);





module.exports = router