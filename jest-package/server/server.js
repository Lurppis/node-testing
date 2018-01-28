const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.status(200).send('Hello World!');
});

app.get('/json', (req, res) => {
	res.status(200).json({
		name: 'Marcin',
		lastName: 'Pilarczyk',
		age: 25,
		location: 'Poland'
	});
});

app.get('/json2', (req, res) => {
	res.status(200).json({
		name: 'Michal',
		lastName: 'Kowalski',
		age: 27,
		location: 'Russia'
	});
});

var server = app.listen(3000, () => {
	console.log('Example app listening on port 3000!');
});

module.exports = { app: app, server: server };

//Run app, then load http://localhost:3000 in a browser to see the output.