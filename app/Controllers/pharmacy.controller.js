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

//get specif 
exports.search = function (req, res) {
    var searchKeyword = req.body.search
    var tets = req.body.keyWor.id
    console.log(tets);
    
    function titleCase(str) {
        str = str.toLowerCase().split(' ');
        for (var i = 0; i < str.length; i++) {
          str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
        }
        return str.join(' ');
      }
    // console.log(searchKeyword);
    console.log(tets);
    tets = titleCase(tets);
    console.log(tets);
    // Pharmacy.find({
    //     district:tets
    // }).then(pharmacy => res.json(pharmacy)).catch(err => {
       
    //     res.send(err)
    // });
    Pharmacy.find({  moharea: tets }).then(pharmacy => res.json(pharmacy)).catch(err => {
       
        res.send(err)
    });
};



