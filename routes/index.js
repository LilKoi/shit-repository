module.exports = (app) => {
	// Все GET запросы тут
	app.get('/', require('./main'));
	app.get('/api/user/:id?/', require('./user').get);
	app.get('/api/user/search', require('./search').get);
	// Все POST запросы тут
	app.post('/api/user/', require('./user').add);
}