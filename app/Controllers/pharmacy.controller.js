const Pharmacy = require('../Modal/pharmacy.modal');

exports.test = function (req, res) {
    res.json({ val: 'Greetings from the Test controller!', des: '1424', kk: '45455' });
};


// Retrieve and return all notes from the database.
exports.findAll = function (req, res) {
    Pharmacy.find()
        .then(pharmacy => {
            res.send(pharmacy);
            // console.log(res);
            
        }).catch(err => {
            res.send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });
};



//get specif 
exports.pharmacy_specific = function (req, res) {
    Pharmacy.findById(req.params.id, function (err, pharmacy) {
        if (err) {
            return next(err);
            console.log(err);
        }
        res.send(pharmacy);
    })
};



