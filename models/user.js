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

schema.statics.add = async ({ name }) => {
	const id = await User.countDocuments({}) + 1;
	const user = new User({
		name: name,
		lastname: lastname,
		city: city
	});

	return user.save();
} 

const User = exports.User = mongoose.model('People', schema);