const HelpForOthers = require('../Modal/helpforothers.modal');

exports.add = function (req, res) {

    let newHellp = new HelpForOthers(
        {
            yname: req.body.yname,
            ycontactno: req.body.ycontactno,
            ynic: req.body.ynic,
            yprovince: req.body.yprovince,
            ydistrict: req.body.ydistrict,
            yhowknow: req.body.yhowknow,

            // other state
            oname: req.body.oname,
            ocontactno: req.body.ocontactno,
            oprovince: req.body.oprovince,
            odistrict: req.body.odistrict,
            oaddressL: req.body.oaddressL,
            owhatneed: req.body.owhatneed,
            ostatus: req.body.ostatus,
            oimportant: req.body.oimportant
        }
    );
    //save 
    newHellp.save(function (err) {
        if (err) {
            return next(err);
        }

        res.json({ newHellp });
    })
};

//get specif 
exports.search = function (req, res) {
    // var searchKeyword = req.body.search
    var tets = req.body.keyWor.id
    // var tets = 'Gampaha'
    console.log(tets);
    HelpForOthers.find({ odistrict: tets }).then(HelpForOthers => res.json(HelpForOthers)).catch(err => {
        res.send(err)
    });
};



