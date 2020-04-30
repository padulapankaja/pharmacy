

const mongoose = require('mongoose');
const Schema = mongoose.Schema;





let Articles = new Schema({
  
    
    title:{
        type:String
    },
    author:{
        type:String
    },
    tag1:{
        type:String
    },
    tag2:{
        type:String
    },
    tag3:{
        type:String
    },
    content:{
        type:String
    },
    image:{
        type:String
    },
    date:{
        type:String
    }
    ,
    smalldes:{
        type:String
    }

});




module.exports = mongoose.model('articles', Articles);
