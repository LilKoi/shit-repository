const { User } = require('../models/user');



exports.get = async (req, res) => {
  const users = User.find({},function(err,doc){
    if(err){
      console.log(err);
      return res.status(500);
    }
    else res.send(doc);
  })
}

exports.getById = async (req, res) =>{
  const id = req.params.id;
  const people = await User.findById(id).exec();
  res.send({people});
}
