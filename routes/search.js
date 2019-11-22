const { User } = require('../models/user');


exports.get = async (req, res) => {
<<<<<<< HEAD
    
    const search = req.query.name;
    res.send({search});
=======
const search = req.query.name;
console.log(req.query);
res.send({search});
>>>>>>> b29e1d9378d69a9760786a371c13922dfbb974a5
}