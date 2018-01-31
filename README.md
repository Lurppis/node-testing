# node-testing

## AGENDA
## Table of Contents
- [Introduction](#introduction)
- [Code samples](#code-samples)
- [Instalation](#installation)
- [Testing](#test)


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
