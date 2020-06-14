const express = require('express');
const router = express.Router();



const newscontroller = require('../Controllers/news.controller');

router.post('/search', newscontroller.search);


module.exports = router