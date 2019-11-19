const nconf = require('nconf');
const path = require('path');

// Указываем путь нашего конфига
nconf.argv()
  	.env()
     .file({ file: path.join(__dirname, 'config.json') });

module.exports = nconf;