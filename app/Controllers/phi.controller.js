const Phi = require('../Modal/phi.modal');

// Retrieve and return all notes from the database.
// exports.findAll = function (req, res) {
//     Phi.find()
//         .then(phis => {
//             res.send(phis);
//             // console.log(res);
            
//         }).catch(err => {
//             res.send({
//                 message: err.message || "Some error occurred while retrieving notes."
//             });
//         });
// };


exports.search = function (req, res) {
    var phiKeyword = req.body.keyWor.id
    console.log(phiKeyword);
    
    function titleCase(str) {
        str = str.toLowerCase().split(' ');
        for (var i = 0; i < str.length; i++) {
          str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
        }
        return str.join(' ');
      }
    // console.log(searchKeyword);
    console.log(phiKeyword);
    tets = titleCase(phiKeyword);
    console.log(phiKeyword);
    // Pharmacy.find({
    //     district:tets
    // }).then(pharmacy => res.json(pharmacy)).catch(err => {
       
    //     res.send(err)
    // });
    Phi.find({  area: tets }).then(pharmacy => res.json(pharmacy)).catch(err => {
       
        res.send(err)
    });
};
