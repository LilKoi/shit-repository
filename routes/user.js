const { User } = require('../models/user'); // импортируем модель пользователя

module.exports = async (req, res) => {
  const users = await User.find({}).exec(); // Венёт промис, поэтому необходим await. {} - найти все документы
  res.send({ users });
}