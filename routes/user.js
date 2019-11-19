const { User } = require('../models/user'); // импортируем модель пользователя

exports.get = async (req, res) => {
  const users = await User.find({}).exec(); // Венёт промис, поэтому необходим await. {} - найти все документы
  res.send({ users });
}

exports.getById = async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id).exec(); // Венёт промис, поэтому необходим await. {} - найти все документы
  res.send({ user });
}