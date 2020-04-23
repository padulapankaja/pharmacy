

const mongoose = require('mongoose');
const Schema = mongoose.Schema;





let Articles = new Schema({
  
    
    title:{
        type:String
    },
    desc:{
        type:String
    },
    cont:{
        type:Object
    }
});




module.exports = mongoose.model('articles', Articles);
