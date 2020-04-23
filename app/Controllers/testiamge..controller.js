const Articles = require('../Modal/articles.modal');




exports.upload = function (req, res) {


  // req.files is array of `photos` files
  console.log(req.body);
  // req.body will contain the text fields, if there were any
  console.log(req.body.image_1);


  // let uploadFile = req.body.file;
  // let name = req.body.name;
  // let age = req.body.age;
  // console.log(uploadFile);
  // console.log(name);
  // console.log(age);
  // var fileName = "This_is_one"
  // uploadFile.mv('./public/' + fileName);


  // var fileName = req.files.file.name;
  // var today = new Date();
  // today = today.getTime();
  // fileName = today + fileName;
  // console.log(fileName);




}

exports.getpost = function (req, res, next) {
  console.log( req.body.content.blocks);
  
  let article = new Articles(
    {
      title: req.body.title,
      desc: req.body.des,
      cont: req.body.content.blocks,
    }
  );

  console.log(article);
  
  //save 
  article.save(function (err) {
    if (err) {
      return next(err);
    }

    res.json({ article });
  })

}