const express   = require('express');
const mongoose  = require('mongoose');
const Id  = require('mongoose').ObjectID;
const app   = express();

mongoose.connect('mongodb://localhost/people');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    app.listen(3000, function(){
    console.log('ready');
    });
});






let Schema = new mongoose.Schema({ 
    name:{
    type: String,
    unique: true
    }
});

let server = mongoose.model('people',Schema);

app.get('/', (req, res) =>{ 
    res.send('123');
});

app.get('/api/user/',(req, res) =>{ 
    server.find({},function(err,docs){
        if(err){
            console.log(err)
            return res.status(500);
        }
        res.send(docs);
    })
});



