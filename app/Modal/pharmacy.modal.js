const mongoose = require('mongoose');
const Schema = mongoose.Schema;





let pharmacy = new Schema({
  
    No:{
        type:String
    },
    District:{
        type:String
    },
    MOHArea:{
        type:String
    },
    NameofthePharmacy:{
        type:String
    },
    Address:{
        type:String
    },
    ContactNo:{
        type:String
    },
    PharmacistName:{
        type:String
    },
    Owner:{
        type:String
    },
    WhatsappNo:{
        type:String
    },
    ViberNo:{
        type:String
    },
    Email:{
        type:String
    },
});





module.exports = mongoose.model('pharmacy', pharmacy);
