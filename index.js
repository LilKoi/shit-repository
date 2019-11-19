const app = require('express')();
const PORT = process.env.PORT || process.argv[2] || 8080; // Порт берётся из окружения, либо из аргументов командной строки (npm start порт || npm run dev порт), иначе - дефолт 8080

// Обработка запросов находится в отдельном модуле(маршрутизаторе)
require('./routes')(app);

// Запуск сервера
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));