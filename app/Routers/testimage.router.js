const express = require('express');
const router = express.Router();
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, './uploads/profilepic/')
    },
    filename: function (req, file, cb) {
        cb(null, new Date().getTime().toString() + file.originalname);
    }
})

const fileFiler = (req, file, cb) => {

    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        // accept
        cb(null, true)
    } else {
        // reject
        cb(new Error('message : file not acceptable'), false)

    }

}
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFiler
});
const testimage = require('../Controllers/testiamge..controller');

// router.get('/all', phocontroller.findAll);




router.post('/add', upload.single('photos') , testimage.upload);



router.get('/get/:id', testimage.specisificArticle);

router.get('/get',testimage.allArticels);



module.exports = router