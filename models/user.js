const mongoose = require('../lib/mongoose'); // подключаем соединение(должно быть одно для всех)
const { Schema } = mongoose;

const schema = new Schema({
	name: {
		type: String, // тип поля - строка
		unique: true, // уникальное поле
		required: true // требуется для вставки
	}
});

exports.User = mongoose.model('User', schema);