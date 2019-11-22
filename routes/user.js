const { User } = require('../models/user');

exports.get = async (req, res) => {
    const user = await User.findOne({id:req.params.id},function (err,doc){
      res.send({user: name});
    });
}

//exports.get = async (req, res) => {
  //const user = User.find();
  //res.send({user});
//}