const mongoose = require('mongoose');
const Schema = mongoose.Schema;





let Phi = new Schema({
  
    regno:{
        type:String
    },
    name:{
        type:String
    },
    area:{
        type:String
    },
    office:{
        type:String
    },
    cnone:{
        type:String
    },
    cntwo:{
        type:String
    },
});




module.exports = mongoose.model('phis', Phi);
