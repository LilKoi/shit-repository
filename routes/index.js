module.exports = (app) => {
	// Все GET запросы тут
	app.get('/', require('./main'));
	app.get('/api/user/', require('./user'));

	// Все POST запросы тут
}