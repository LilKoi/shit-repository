const { User } = require('../models/user');


exports.get = async (req, res) => {
const search = req.query.name;
res.send({search});
}