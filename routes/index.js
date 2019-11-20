module.exports = (app) => {
	// Все GET запросы тут
	app.get('/', require('./main'));
	app.get('/api/user/:id?/', require('./user').get);

	// Все POST запросы тут
	app.post('/api/user/add', require('./user').add);
}