const expectResult = require('expect');
const server = require('./server').server;
const request = require('supertest');
const app = require('./server').app;
const agent = request.agent(app);

describe('Server tests:', () => {

	afterAll(done => {
		server.close();
		done();
	});

	test('GET /', done => {
		agent.get('/')
			.expect(200)
			.expect('Hello World!')
			.end((err, res) => {
				if (err || !res.ok) {
					console.log('Oh no error: ' + err);
					done(err);
				} else {
					//console.log('You got: ' + res.text);
					done();
				}
			});
	});

	test('GET /json', done => {
		agent.get('/json')
			.expect(200)
			.expect('Content-Type', /json/)
			.expect((res) => {
				if (!('name' in res.body) && !('age' in res.body)) {
					console.log(res.body);
				}
			})
			.expect((res) => {
				expectResult(res.body).toMatchObject({ // But we have to bring require('expect');
					name: 'Marcin',
					age: 25
				});
			})
			.expect({
				name: 'Marcin',
				lastName: 'Pilarczyk',
				age: 25,
				location: 'Poland'
			})
			.end((err, res) => {
				if (err || !res.ok) {
					console.log('Oh no, error: ' + err);
					done(err);
				} else {
					//console.log('You got: ' + JSON.stringify(res.body));
					done();
				}
			});
	});
});