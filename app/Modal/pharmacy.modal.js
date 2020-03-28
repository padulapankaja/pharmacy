const mongoose = require('mongoose');
const Schema = mongoose.Schema;





let Pharmacy = new Schema({
  
    no:{
        type:String
    },
    district:{
        type:String
    },
    moharea:{
        type:String
    },
    nop:{
        type:String
    },
    address:{
        type:String
    },
    contactno:{
        type:String
    },
    pharmacistname:{
        type:String
    },
    owner:{
        type:String
    },
    whatsappno:{
        type:String
    },
    viberno:{
        type:String
    },
    email:{
        type:String
    },
});


// Pharmacy.createIndexes({ district:"text", moharea:"text", nop:"text", address:"text"})
// Pharmacy.index({district:"text"},{moharea:"text"}, {nop:"text"},{address:"text"} ,{ background: false });

// Pharmacy.createIndex({district:"text"},{moharea:"text"}, {nop:"text"},{address:"text"} ,{ background: false });

// Pharmacy.index({district:"text",moharea:"text", nop:"text",address:"text", background: false });

module.exports = mongoose.model('phamacys', Pharmacy);
