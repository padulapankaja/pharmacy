
const axios = require('axios');




exports.validate = async function (req, res) {
    var access_key = '7e0df33cbc995a990282ab38b8393c97'
    var host = 'http://apilayer.net/api/validate'
    var number ='0717269086'
    var counrty = 'LK'
    var format = '0'
    var details
    await axios.get(host+'?access_key='+access_key+'&number='+number+'&country_code='+counrty+'&format'+format).then(res => {
    
    details = res.data
    // console.log(this.state.allNews);

}).catch(function (error) {
    console.log(error);
})
   await res.send(details);
};