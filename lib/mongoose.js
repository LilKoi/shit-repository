const mongoose = require('mongoose');
const nconf = require('../config');

// mongoose.connect(uri, options)
// mongoose.set('debug', true); - отслеживать запросы к бд
mongoose.connect(nconf.get('mongoose:uri'), nconf.get('mongoose:options'));
mongoose.set('debug', true);

mongoose.connection.on('error', console.error.bind(console, 'MongoDB Connection error'));

module.exports = mongoose;