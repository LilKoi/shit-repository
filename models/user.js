const mongoose = require('../lib/mongoose');
const { Schema } = mongoose;

const schema = new Schema({
	name: {
		type: String,
		unique: true,
		required: true
	}
});

schema.statics.add = async ({ name }) => {
	const id = await User.countDocuments({}) + 1;
	const user = new User({
		categoryid: id,
		name: name
	});

	return user.save();
} 

const User = exports.User = mongoose.model('People', schema);