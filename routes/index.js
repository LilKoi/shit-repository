module.exports = (app) => {
	// Все GET запросы тут
	app.get('/', require('./main'));
<<<<<<< HEAD
	app.get('/api/user/:id?/', require('./user').get);
=======
>>>>>>> b29e1d9378d69a9760786a371c13922dfbb974a5
	app.get('/api/user/search', require('./search').get);
	// Все POST запросы тут
	app.post('/api/user/', require('./user').add);
}