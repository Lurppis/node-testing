const expect = require('expect');
const utils = require('./utils');

describe('Test async util functions', () => {
	test('Add', done => {
		utils.add(5,5,(sum) => {
			expect(sum).toBe(10);
			done();
		});
	});
    
	test('Square', done => {
		utils.squer(5, (squer) => {
			expect(squer).toBe(25);
			done();
		});
	});
});