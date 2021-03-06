# node-testing

## AGENDA
## Table of Contents
- [Introduction](#introduction)
- [Code samples](#code-samples)
- [Instalation](#installation)
- [Testing](#test)
- [Build with](#build-with)


## Introduction

> This is place where I can store all simple ways to test code.

## Code Samples
### Client scripts.
> Simple add function
``` JavaScript
module.exports.add = (a, b) => a + b;
```
> Is testing by this test
``` JavaScript
describe('#add', () => {
	it('should add two numbers', () => {
		var res = utils.add(33, 11);
		expect(res).toBe(44).toBeA('number');
	});
});
```
> Async add function
``` JavaScript
module.exports.asyncAdd = (a, b, callback) => {
	setTimeout(() => {
		callback(a + b);
	}, 1000);
};
```
> Is tsting by this function
``` JavaScript
it('should async add two numbers', (done) => {
	utils.asyncAdd(4, 3, (sum) => {
		expect(sum).toBe(7).toBeA('number');
		done();
	});
});
```
### Server scripts.
> Route get /users
``` JavaScript
app.get('/users', (req, res) => {
	res.send([{
		name: 'Mike',
		age: 27
	}, {
		name: 'Andrew',
		age: 25
	}, {
		name: 'Jen',
		age: 26
	}]);
});
```
> Is testing by this function
``` JavaScript
describe('GET /users', () => {
  it('should return my user object', (done) => {
	request(app)
		.get('/users')
		.expect(200)
		.expect((res) => {
			expect(res.body).toInclude({
				name: 'Andrew',
				age: 25
			});
		})
		.end(done);
	});
});
```

## Installation

> Clone repository using url
```
git clone https://github.com/Lurppis/node-testing
```
> Intall all dependencies
```
npm install
```

## Test

> To run all test type:
```
npm test
```

## Built With
* [Express](https://expressjs.com/) -Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
* [Expect](https://github.com/mjackson/expect) - Is used to build tests.
* [Supertest](https://github.com/visionmedia/supertest) - Provide a high-level abstraction for testing HTTP.
* [Mocha](https://mochajs.org/) - Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun.
* [Rewire](https://github.com/jhnns/rewire) - Rewire adds a special setter and getter to modules so you can modify their behaviour for better unit testing.
