const Articles = require('../Modal/articles.modal');




exports.upload = function (req, res) {


  let updateProfilePic = {
    "title": req.body.title,
    "author": req.body.auth,
    "tag1": req.body.tag1,
    "tag2": req.body.tag2,
    "tag3": req.body.tag3,
    "content": req.body.content,
    "smalldes": req.body.smalldes,
    "image": req.file.path
  }


  let newArtivle = new Articles(
    {
      title: updateProfilePic.title,
      author: updateProfilePic.author,
      tag1: updateProfilePic.tag1,
      tag2: updateProfilePic.tag2,
      tag3: updateProfilePic.tag3,
      content: updateProfilePic.content,
      image: updateProfilePic.image,
      date: new Date(),
      smalldes: updateProfilePic.smalldes,

    }

  );


  newArtivle.save(function (err) {
    if (err) {
      return next(err);
    }
    console.log(newArtivle);

    res.json({ newArtivle });
  })



}








exports.getpost = function (req, res, next) {
  console.log(req.body.content.blocks);

  let article = new Articles(
    {
      title: req.body.title,
      desc: req.body.des,
      cont: req.body.content,
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

// exports.findoneof = function (req, res) {
//   Articles.find()
//     .then(pharmacy => {
//       res.send(pharmacy);


//     }).catch(err => {
//       res.send({
//         message: err.message || "Some error occurred while retrieving notes."
//       });
//     });
// };



exports.allArticels = function (req, res) {
  Articles.find()
    .then(articels => {
      res.send(articels);
      // console.log(res);

    }).catch(err => {
      res.send({
        message: err.message || "Some error occurred while retrieving notes."
      });
    });
}


exports.specisificArticle = function (req, res) {

  var id = req.params.id
    console.log("dsd")
  Articles.find({ _id: id }).then(articel => res.json(articel)).catch(err => {
    res.send(err)
  });
};



exports.psot_specific_details = function (req, res, next) {
    console.log(req.params.id)
    console.log("dsddsd")
    Articles.findById( {"_id" :  req.params.id}, function (err, post) {
        if (err) {
            return next(err);
            console.log(err);
        }
       return  res.status(200).json({
           data : post
       });
    })
};