const mongoose = require('mongoose');
const Schema = mongoose.Schema;





let HelpForOthers = new Schema({
  
    yname:{
        type:String
    },
    ycontactno:{
        type:String
    },
    ynic:{
        type:String
    },
    yprovince:{
        type:String
    },
    ydistrict:{
        type:String
    },
    yhowknow:{
        type:String
    },

    oname:{
        type:String
    },
    ocontactno:{
        type:String
    },
    oprovince:{
        type:String
    },
    odistrict:{
        type:String
    },
    oaddressL:{
        type:String
    }
    ,
    owhatneed:{
        type:String
    },

    
    ostatus:{
        type:String
    },
    oimportant:{
        type:String
    },














});




module.exports = mongoose.model('helpforothers', HelpForOthers);
