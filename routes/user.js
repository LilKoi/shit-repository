const { User } = require('../models/user');

exports.get = async (req, res) => {
  try {
    const categoryid = +req.params.id;
    const { name } = await User.findOne({ categoryid }).exec();

    res.send(name);
  } catch(err){
    const users = await User.find({}).exec();
    res.send({ users });
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