const mongoose = require('../lib/mongoose');
const { Schema } = mongoose;

const schema = new Schema({
	name: {
		type: String,
		required: true
	},
	lastname: {
		type: String,
		required: true
	},
	city: {
		type: String,
		required: true
	}
});


const User = exports.User = mongoose.model('People', schema);