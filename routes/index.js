module.exports = (app) => {
	// Все GET запросы тут
	app.get('/', require('./main'));
	app.get('/api/user/:id/', require('./user').getById);
	app.get('/api/user/', require('./user').get);
	app.get('/api/user/search', require('./search').get);
	// Все POST запросы тут
}