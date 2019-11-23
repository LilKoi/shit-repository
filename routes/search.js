const { User } = require('../models/user');


exports.get = async (req, res) => {
    try{
        const search = req.query.name;
    res.send({search});
    }
    catch(err){
        res.send('1234');
    }
    
}