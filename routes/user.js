const { User } = require('../models/user');

exports.get = async (req, res) => {
  try {
    const user = await User.findOne({id:req.params.id});
    res.send({user});
  } catch(err){
    const users = await User.find({}).exec();
    res.send();
  }
}

exports.add = async (req, res) => {
  try {
    const data = req.body;
    const user = await User.add(data);

    res.send({ user });
  } catch (err) {
    res.send({ status: 403, message: 'Отказано в доступе.' })
  }
}